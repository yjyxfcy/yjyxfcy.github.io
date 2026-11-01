(function () {
  'use strict';
  // These labels supplement Fluid's own translations. Article bodies remain untouched.
  var english = {
    '课程笔记':'Course Notes', '分类':'Categories', '首页':'Home', '最新文章':'Recent Posts', '其他分类':'Other Categories',
    '循着课程脉络，找到每一篇笔记。':'Explore notes in course order.', '查看全部分类 →':'All categories →',
    '学习笔记与生活记录，按时间排列。':'Study notes and personal writing, in chronological order.', '文章归档 →':'Archives →',
    '按课程学习，也可以浏览其他文章。':'Explore courses and other writing by topic.', '按课程顺序阅读':'Read in course order',
    '按主题浏览':'Browse by topic', '课程目录':'Course Contents', '按笔记顺序排列':'In note order',
    '北京大学':'Peking University', '本文目录':'On this page', '上一篇':'Previous', '下一篇':'Next',
    '大作业':'Projects', '小作文':'Personal Essays', '测试':'Test', '文章':'Post',
    '课程项目与实践成果':'Course projects and practical work', '生活随想与个人记录':'Thoughts on life and personal stories',
    '一些零散的记录':'A few miscellaneous notes', '浏览这个分类下的文章':'Explore posts in this category',
    '这门课的笔记已整理成完整目录。':'These notes are organized in a course index.', '查看课程目录 →':'View course contents →',
    '课程笔记已合并至分类':'Course notes have moved to Categories', '在分类页浏览所有课程和其他文章。':'Find all courses and other writing under Categories.', '前往分类 →':'Go to Categories →',
    '算法设计与分析':'Algorithm Design and Analysis', '自然语言处理基础':'Fundamentals of Natural Language Processing', '生成模型基础':'Fundamentals of Generative Models',
    '从问题复杂度到近似算法、网络流与随机算法。':'From computational complexity to approximation, network flows, and randomized algorithms.',
    '从词义、语言模型到序列建模与句法分析。':'From word meaning and language models to sequence modeling and syntax.',
    '探索 VAE、自回归模型、GAN 与扩散模型等生成方法。':'Explore VAEs, autoregressive models, GANs, diffusion models, and more.',
    '问题复杂度':'Computational Complexity', 'NP完全':'NP-Completeness', '近似算法':'Approximation Algorithms', '网络流':'Network Flow', '随机算法':'Randomized Algorithms',
    '课程介绍':'Course Introduction', '词义消歧':'Word Sense Disambiguation', '分类 - 对数线性模型':'Classification: Log-linear Models', '语言模型':'Language Models',
    '自然语言模型':'Natural Language Models', '分布语义学':'Distributional Semantics', '序列标注 - 隐马尔可夫模型':'Sequence Labeling: Hidden Markov Models',
    '神经序列建模及其扩展':'Neural Sequence Modeling and Extensions', '句法分析Ⅰ':'Syntactic Parsing I', '句法分析 II':'Syntactic Parsing II',
    '变分自编码器(VAE)':'Variational Autoencoders (VAE)', '自回归模型(Transformer&AR)':'Autoregressive Models (Transformer & AR)',
    '生成对抗模型(GAN)':'Generative Adversarial Networks (GAN)', '调试':'Debugging', 'Normalizing Flow':'Normalizing Flows',
    '扩散模型(Diffusion)':'Diffusion Models', '模型加速':'Model Acceleration', '能量模型':'Energy-based Models', '评估':'Evaluation',
    '数竞生涯回忆录（上）':'Memories of Mathematical Competitions (Part 1)', '数竞生涯回忆录（下）':'Memories of Mathematical Competitions (Part 2)',
    '🎵 每日推歌':'🎵 Daily Music', '📜 每日诗词':'📜 Daily Poetry', '阅读进度':'Reading progress',
    '🔊 朗读':'🔊 Read aloud', '📋 复制':'📋 Copy', '换一首':'Another poem'
  };
  var selectors = [
    '.section-heading h2', '.section-heading p', '.section-link', '.course-card h3', '.course-card h2', '.course-card p', '.course-card-foot span:first-child',
    '.journal-meta', '.journal-title', '.category-overview .course-page-heading h1', '.category-overview .course-page-heading p', '.chapter-heading h2', '.chapter-heading span',
    '.other-category-name', '.other-category-description', '.other-category-count', '.course-breadcrumb a', '.course-breadcrumb span:last-child',
    '.courses-page:not(.category-overview) .course-page-heading h1', '.courses-page:not(.category-overview) .course-page-heading p:not(.legacy-course-link)', '.legacy-course-link a', '.course-summary span',
    '.chapter-title', '.post-course-breadcrumb a', '.mobile-toc summary', '.course-back', '.course-neighbors small', '.course-neighbors strong',
    '.legacy-category-notice strong', '.legacy-category-notice p', '.legacy-category-notice a', '.archive-card-title', '.archive-card-tag',
    '.daily-card h3', '#poem-read-btn', '#poem-copy-btn', '.poem-actions button:last-child', '.toc-header span', '.toc-reading-progress-row span:first-child'
  ];
  var originals = new WeakMap();
  function translate(value) {
    var result = value.replace(/(\d{4}) 春/g, 'Spring $1').replace(/(\d{4}) 秋/g, 'Fall $1')
      .replace(/(\d+) 篇笔记/g, function(_, count) { return count + (count === '1' ? ' note' : ' notes'); })
      .replace(/(\d+) 篇文章/g, function(_, count) { return count + (count === '1' ? ' post' : ' posts'); });
    // Longer strings first avoids replacing a course name inside a longer label prematurely.
    Object.keys(english).sort(function(a, b) { return b.length - a.length; }).forEach(function(key) {
      result = result.split(key).join(english[key]);
    });
    result = result.replace(/← 返回 (.+?) 目录/g, '← Back to $1');
    return result;
  }
  function apply() {
    var lang = document.documentElement.lang || 'zh-CN';
    var foreign = !/^zh(?:-|$)/i.test(lang);
    document.querySelectorAll(selectors.join(',')).forEach(function(el) {
      if (!originals.has(el)) originals.set(el, el.textContent);
      var source = originals.get(el);
      el.textContent = foreign ? translate(source) : source;
    });
    var controls = { 'song-volume': ['音量', 'Volume'], 'song-prev-btn': ['上一首', 'Previous track'], 'song-play-btn': ['播放 / 暂停', 'Play / pause'], 'song-next-btn': ['下一首', 'Next track'] };
    Object.keys(controls).forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.title = controls[id][foreign ? 1 : 0];
      el.setAttribute('aria-label', controls[id][foreign ? 1 : 0]);
    });
    var notice = document.querySelector('.translation-notice');
    if (notice) {
      var title = notice.querySelector('.translated-post-title');
      var sourceTitle = title.getAttribute('data-original-title');
      var translated = translate(sourceTitle);
      title.textContent = translated === sourceTitle ? '' : translated;
      notice.hidden = !foreign;
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    apply();
    document.querySelectorAll('.language-option').forEach(function (option) {
      option.addEventListener('click', apply);
    });
    if (window.Fluid && Fluid.events && typeof Fluid.events.registerRefreshCallback === 'function') Fluid.events.registerRefreshCallback(apply);
  });
})();
