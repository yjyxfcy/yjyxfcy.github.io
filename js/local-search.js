(function () {
  'use strict';
  var modal = jQuery('#modalSearch');
  var input = jQuery('#local-search-input');
  var result = jQuery('#local-search-result');
  var entriesPromise;
  function foreign() { return !/^zh(?:-|$)/i.test(document.documentElement.lang || 'zh-CN'); }
  function label(zh, en) { return foreign() ? en : zh; }
  function getEntries() {
    if (!entriesPromise) {
      entriesPromise = Promise.all([
        fetch(CONFIG.search_path || '/local-search.xml').then(function(r) { if (!r.ok) throw Error('search index'); return r.text(); }),
        fetch('/course-search.json').then(function(r) { return r.ok ? r.json() : []; }).catch(function() { return []; })
      ]).then(function(data) {
        var xml = new DOMParser().parseFromString(data[0], 'application/xml');
        if (xml.querySelector('parsererror')) throw Error('invalid search index');
        var metadata = data[1];
        return Array.from(xml.querySelectorAll('entry')).map(function(node) {
          var get = function(tag) { var el = node.querySelector(tag); return el ? el.textContent : ''; };
          var url = get('url');
          var path; try { path = decodeURI(new URL(url, location.href).pathname); } catch (e) { path = url; }
          var course = metadata.find(function(item) { return item.path === path; });
          var holder = document.createElement('textarea'); holder.innerHTML = get('content').replace(/<[^>]+>/g, ' ');
          return { title: get('title'), url: url, content: holder.value || '', category: get('category'), course: course };
        }).filter(function(entry) { return entry.title && entry.url; });
      }).catch(function(error) { entriesPromise = null; throw error; });
    }
    return entriesPromise;
  }
  function show(items) {
    var query = String(input.val() || '').trim().toLowerCase();
    result.empty(); input.removeClass('invalid valid');
    if (!query) return;
    var words = query.split(/\s+/).filter(Boolean);
    var matches = items.map(function(item) {
      var title = item.title.toLowerCase();
      var category = (item.course ? item.course.course : item.category).toLowerCase();
      var content = item.content.toLowerCase();
      var found = words.every(function(word) { return title.includes(word) || category.includes(word) || content.includes(word); });
      return found ? { item: item, score: words.reduce(function(score, word) { return score + (title.includes(word) ? 4 : category.includes(word) ? 2 : 0); }, 0) } : null;
    }).filter(Boolean).sort(function(a,b) { return b.score - a.score; }).slice(0,40);
    if (!matches.length) { input.addClass('invalid'); result.append(jQuery('<p class="search-empty" role="status">').text(label('没有找到结果，试试其他关键词。', 'No results. Try another keyword.'))); return; }
    input.addClass('valid');
    matches.forEach(function(match) {
      var item = match.item; var link = jQuery('<a class="list-group-item list-group-item-action search-list-title">').attr('href', item.url);
      link.append(jQuery('<strong>').text(item.title));
      var meta = item.course ? item.course.course + ' · ' + String(item.course.number).padStart(2,'0') : item.category;
      if (meta) link.append(jQuery('<span class="search-result-meta">').text(meta));
      result.append(link);
      var plain = item.content.replace(/\s+/g,' ').trim();
      var index = plain.toLowerCase().indexOf(words[0]);
      if (index >= 0) result.append(jQuery('<p class="search-snippet">').text((index > 25 ? '…' : '') + plain.slice(Math.max(0,index-25),index+90) + '…'));
    });
  }
  modal.on('show.bs.modal', function() {
    result.empty().append(jQuery('<p class="search-empty" role="status">').text(label('正在加载搜索索引…', 'Loading search index…')));
    getEntries().then(function(items) { result.empty(); input.off('input.courseSearch').on('input.courseSearch', function() { show(items); }); show(items); }).catch(function() {
      result.empty().append(jQuery('<p class="search-error" role="status">').text(label('搜索暂时不可用，请稍后重试。', 'Search is unavailable. Please try again.')));
    });
  }).on('shown.bs.modal', function() { input.trigger('focus'); }).on('hidden.bs.modal', function() { input.val('').removeClass('invalid valid'); result.empty(); });
})();
