# Flex 布局

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能

Flex 布局将成为未来布局的首选方案。本文介绍它的语法，下一篇文章给出常见布局的 Flex 写法。网友 JailBreak 为本文的所有示例制作了 Demo，也可以参考。

以下内容主要参考了下面两篇文章：A Complete Guide to Flexbox 和 A Visual Guide to CSS3 Flexbox Properties

## Flex 布局是什么?

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性

任何一个容器都可以指定为 Flex 布局

```css
.box {
    display: flex;
}
```

行内元素也可以使用 Flex 布局

```css
.box {
    display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上-webkit前缀

```css
.box{
    display: -webkit-flex; /* Safari */
    display: flex;
}
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex divtainer），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size

## 容器的属性

<style moudle>
    .con {
        display: flex;
        border: solid;
        border-width: 1px;
        border-color: #0000FF;
    }

    .box {
        width: 90px;
        height: 30px;
        border: solid;
        border-width: 1px;
        border-color: #00FF00;
        box-sizing: content-box;
    }
</style>

flex-direction: row，主轴为水平方向，起点在左端

<div class="con" style="flex-direction: row">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

flex-direction: row-reverse，主轴为水平方向，起点在右端

<div class="con" style="flex-direction: row-reverse">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

flex-direction: column，主轴为垂直方向，起点在上沿;

<div class="con" style="flex-direction: column">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

flex-direction: row-reverse，主轴为垂直方向，起点在下沿

<div class="con" style="flex-direction: column-reverse">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

flex-wrap: nowrap 不换行

<div class="con" style="flex-direction: row; flex-wrap: nowrap ">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
    <div class="box"> 5 </div>
    <div class="box"> 6 </div>
    <div class="box"> 7 </div>
    <div class="box"> 8 </div>
    <div class="box"> 9 </div>
    <div class="box"> 10 </div>
    <div class="box"> 11 </div>
    <div class="box"> 12 </div>
</div>

flex-wrap: wrap 项目主轴总尺寸超出容器时换行，第一行在上方

<div class="con" style="flex-direction: row; flex-wrap: wrap ">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
    <div class="box"> 5 </div>
    <div class="box"> 6 </div>
    <div class="box"> 7 </div>
    <div class="box"> 8 </div>
    <div class="box"> 9 </div>
    <div class="box"> 10 </div>
    <div class="box"> 11 </div>
    <div class="box"> 12 </div>
</div>

flex-wrap: wrap-reverse 换行，第一行在下方

<div class="con" style="flex-direction: row; flex-wrap: wrap-reverse">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
    <div class="box"> 5 </div>
    <div class="box"> 6 </div>
    <div class="box"> 7 </div>
    <div class="box"> 8 </div>
    <div class="box"> 9 </div>
    <div class="box"> 10 </div>
    <div class="box"> 11 </div>
    <div class="box"> 12 </div>
</div>

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

```css
.box {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```

justify-content: flex-start，左对齐

<div class="con" style="flex-direction: row; justify-content: flex-start">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

justify-content: flex-end，右对齐

<div class="con" style="flex-direction: row; justify-content: flex-end">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

justify-content: center，居中

<div class="con" style="flex-direction: row; justify-content: center">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

justify-content: space-between，两端对齐，项目之间的间隔都相等

<div class="con" style="flex-direction: row; justify-content: space-between">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

justify-content: space-around，每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

<div class="con" style="flex-direction: row; justify-content: space-around">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
</div>

align-items: flex-start，交叉轴的起点对齐

<div class="con" style="flex-direction: row; align-items: flex-start">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
</div>


align-items: flex-end，交叉轴的终点对齐

<div class="con" style="flex-direction: row; align-items: flex-end">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
</div>

align-items: center，交叉轴的中点对齐

<div class="con" style="flex-direction: row; align-items: center">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
</div>

align-items: baseline，项目的第一行文字的基线对齐

<div class="con" style="flex-direction: row; align-items: baseline">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
</div>

align-items: stretch（默认值），如果项目未设置高度或设为auto，将占满整个容器的高度

<div class="con" style="flex-direction: row; align-items: stretch">
    <div class="box"> 1 </div>
    <div class="box"> 2 </div>
    <div class="box"> 3 </div>
    <div class="box"> 4 </div>
</div>

## Flex 项目属性

有六种属性可运用在 item 项目上：

```css
.item {
    order: <integer>; 定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0
    flex-basis: <length> | auto; 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间
    flex-grow: <number>; 定义项目的放大比例
    flex-shrink: <number>; 定义了项目的缩小比例
    flex: flex-grow, flex-shrink 和 flex-basis的简写
    align-self: 允许单个项目有与其他项目不一样的对齐方式
}
```

## 参考

- [阮一峰 Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [阮一峰 Flex 布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
