// 文章页面：左侧栏无内容时自动隐藏，内容区加宽
(function() {
  if (typeof jQuery === 'undefined') {
    document.addEventListener('DOMContentLoaded', arguments.callee);
    return;
  }

  jQuery(function() {
    // 只在文章页面处理
    var leftCol = jQuery('.side-col').first();
    if (!leftCol.length) return;

    // 检查左侧栏是否有实质内容
    var content = leftCol.html();
    if (!content || !content.trim()) {
      // 左侧栏为空 -> 隐藏它
      leftCol.hide();
      // 内容区从 col-lg-8 扩展为 col-lg-10
      leftCol.next('.col-lg-8').removeClass('col-lg-8').addClass('col-lg-10');
    }
  });
})();
