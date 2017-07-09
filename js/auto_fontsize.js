/*说明文档
 * load事件实在所有的元素加载完成时触发，而DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。
 * documentElement 属性可返回文档的根节点(HTML)
 * 网页可见区域宽： document.body.clientWidth（在下方是指html部分的可见区域宽高）
 * html.style.fontSize = windowWidth / 设计稿宽度*0.01 + 'px';即设置根节点html的文字大小为根节点可视域宽度除以设计稿宽度的1%
 * 代码中6.4即设计稿宽度/100，在使用中CSS的一切设置皆以假定html、body的font-size为100px为基础设置
 * 等价于html.style.fontSize = windowWidth / 640(设计稿宽度值) * 0.01 + 'px';
 * 需前置html代码
 *<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
 */
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 6.4 + 'px';
    }, false);
})();