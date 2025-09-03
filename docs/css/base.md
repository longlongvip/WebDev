# CSS 基础

## 什么是 CSS

- CSS 指的是层叠样式表* (Cascading Style Sheets)
- CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素
- CSS 节省了大量工作。它可以同时控制多张网页的布局
- 外部样式表存储在 CSS 文件中

## 如何使用 CSS

- 内联样式：`<link rel="stylesheet" type="text/css" href="style.css">`
- 内部样式表：`<style> 标签`
- 外部样式表：`<link rel="stylesheet" type="text/css" href="style.css">`

当为某个 HTML 元素指定了多个样式时，会使用哪种样式呢？

页面中的所有样式将按照以下规则“层叠”为新的“虚拟”样式表，其中第一优先级最高：

行内样式（在 HTML 元素中）
外部和内部样式表（在 head 部分）
浏览器默认样式
因此，行内样式具有最高优先级，并且将覆盖外部和内部样式以及浏览器默认样式

## CSS 语法

CSS 规则集（rule-set）由选择器和声明块组成：

```mermaid
selector {
  property: value;
}
```

- 选择器指向您需要设置样式的 HTML 元素
- 声明块包含一条或多条用分号分隔的声明
- 每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔
- 多条 CSS 声明用分号分隔，声明块用花括号括起来
- 声明块中的属性和值对大小写敏感
- 注释：`/* 这是注释 */`

## CSS 选择器

- 简单选择器

元素选择器根据元素名称来选择 HTML 元素。在这里，页面上的所有 `<p>` 元素都将居中对齐，并带有红色文本颜色

```css
p {
    text-align: center;
    color: red;
}
```

- 类选择器

类选择器选择有特定 class 属性的 HTML 元素。如需选择拥有特定 class 的元素，请写一个句点（.）字符，后面跟类名

```css
.center {
    text-align: center;
    color: blue;
}
```

- ID 选择器

id 选择器使用 HTML 元素的 id 属性来选择特定元素。元素的 id 在页面中是唯一的，因此 id 选择器用于选择一个唯一的元素！要选择具有特定 id 的元素，请写一个井号（＃），后跟该元素的 id

这条 CSS 规则将应用于 id="para1" 的 HTML 元素：

```css
#para1 {
    text-align: center;
    color: red;
}
```

- 通配符选择器

通配符选择器（*）选择页面上的所有元素。

```css
* {
    text-align: center;
    color: blue;
}
```

- 分组选择器

分组选择器选取所有具有相同样式定义的 HTML 元素。

请看下面的 CSS 代码（h1、h2 和 p 元素具有相同的样式定义）：

```css
h1 {
    text-align: center;
    color: red;
}

h2 {
    text-align: center;
    color: red;
}

p {
    text-align: center;
    color: red;
}
```

最好对选择器进行分组，以最大程度地缩减代码。如需对选择器进行分组，请用逗号来分隔每个选择器。在这个例子中，我们对上述代码中的选择器进行分组：

```css
h1, h2, p {
    text-align: center;
    color: red;
}
```

- 元素选择器
- 后代选择器
- 子选择器
- 相邻兄弟选择器
- 通用兄弟选择器

## CSS 颜色

- 颜色名称

<script setup>

import { ref } from 'vue'

const color_name = ref("black")
const color_hex = ref("000000")

</script>

<div :style="{ width: '100%', height: '80px', backgroundColor: color_name, display: 'flex', justifyContent: 'center', alignItems: 'center' }">
    <input v-model="color_name" type="text" style="color: black; border: 1px solid black; background-color: white;" >
</div>

- 十六进制

<div :style="{ width: '100%', height: '80px', backgroundColor: '#' + color_hex, display: 'flex', justifyContent: 'center', alignItems: 'center' }">
    <input v-model="color_hex" type="text" style="color: black; border: 1px solid black;  background-color: white;" >

</div>

- 十进制
- 百分比
- RGB
- RGBA
- HSL
- HSLA

## CSS 背景

```css
body {
    background-color: #f0f0f0;
    opacity: 0.8;

    background-image: url('bg.jpg');

    background-repeat: no-repeat;

    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    background-clip: padding-box;
    background-origin: padding-box;
}
```

## CSS 边框

https://cindyjs.org/dist/v0.7/Cindy.js