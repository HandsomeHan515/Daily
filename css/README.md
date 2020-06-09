# CSS Study

## link 和 @import 的区别

- `@import` 是 CSS 提供的语法规则，只有导入样式表的作用；`link` 是 XHTML 提供的标签，不仅可以加载 CSS ，还可以定义 RSS(Really Simple Syndication)、rel 链接属性等
- 加载页面时，`link` 标签引入的 CSS 被同时加载；`@import` 引入的 CSS 将在页面加载完毕后被加载
- `@import` 是 CSS2.1 才有的语法，所以只可在 IE5+ 才可使用；`link` 标签为 HTML 元素，不存在兼容问题
- `link` 支持使用 js 操作 DOM 去改变样式，`@import` 不支持
- `link` 引入样式权重大于 `@import` 引入的样式

## 如何理解 CSS 的盒模型

- 标准盒模型：width 指的是内容区域content的宽度；height 指的是内容区域 content 的高度
    - 标准盒模型下盒子的大小  = content + border + padding + margin
- 怪异盒模型：width 指的是内容、边框、内边距总的宽度（content + border + padding）；height 指的是内容、边框、内边距总的高度
    - 怪异盒模型下盒子的大小 = width（content + border + padding） + margin
- 如果是定义了完整的 doctype 的标准文档类型，无论是哪种模型情况，最终都会触发标准模式，
- 如果 doctype 协议缺失，会由浏览器自己界定，在IE浏览器中 IE9 以下（IE6.IE7.IE8）的版本触发怪异模式，其他浏览器中会默认为 W3c 标准模式。

- box-sizing 三个值：
    - content-box： 默认值，border 和 padding 不算到 width 范围内，可以理解为是 W3c 的标准模型(default)
    - border-box：border 和padding 划归到 width 范围内，可以理解为是IE的怪异盒模型
    - padding-box：将 padding 算入 width 范围