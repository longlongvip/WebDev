# 优化

## 减少 HTML 中元素的数量

让 HTML 做内容的事情，让 CSS 做展现的事情，

## 性能准则

页面加载时间至关重要，影响页面加载时间的因素从强到弱一次有

- 减少 HTTP 请求
- 使用 CDN 加速
- 避免使用空的 src 或 href 属性
- 增加过期头
- 启用 GZIP 加速
- 把 CSS 放在头部
- 把 JavaScript 放在尾部
- 避免使用 CSS 表达式
- 删除不使用的 CSS 语句
- 对 JavaScript、CSS 进行代码压缩
- 减少重绘制

## 减少 HTTP 请求

- 理解并行链接
- 合并资源文件，多个 CSS 文件合并为 1 个 CSS 文件，多个 JavaScript 文件合并为 1 个 JavaScript 文件
- 使用图片精灵

## 使用 CDN 加速

## 避免空的 src 和 href 属性值

## 增加过期头

## 启用 GZIP 压缩

## 把 CSS 放在头部

## 把 JavaScript 放在尾部

## 避免使用 CSS 表达式

## 移除不使用的 CSS 语句

## 对 JavaScript 和 CSS 进行代码压缩

## 减少重绘

- 规定图片的宽和高
- 不要用表格布局
- 定义字符集
- 不要重组 DOM
