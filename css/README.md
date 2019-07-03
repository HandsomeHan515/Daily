# CSS Study

## link 和 @import 的区别

- `@import` 是 CSS 提供的语法规则，只有导入样式表的作用；`link` 是 XHTML 提供的标签，不仅可以加载 CSS ，还可以定义 RSS(Really Simple Syndication)、rel 链接属性等
- 加载页面时，`link` 标签引入的 CSS 被同时加载；`@import` 引入的 CSS 将在页面加载完毕后被加载
- `@import` 是 CSS2.1 才有的语法，所以只可在 IE5+ 才可使用；`link` 标签为 HTML 元素，不存在兼容问题
- `link` 支持使用 js 操作 DOM 去改变样式，`@import` 不支持
- `link` 引入样式权重大于 `@import` 引入的样式

## 如何理解 CSS 的盒模型

标准盒模型：宽度 = 内容的宽度(content) + border + padding 
低版本 IE 盒模型：宽度 = 内容宽度(content + border + padding)

