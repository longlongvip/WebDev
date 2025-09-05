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

```css
.class-rule {
    property: value;
}
```

上面是一个简单的css规则，它将类名为class-rule的所有元素的背景色设置为红色，颜色设置为绿色。在css代码中，.class-rule称之为选择器（Selector）, 用于说明这个样式规则将应用于哪个元素。大括号之间包裹的内容是**属性声明（Declaration）**部分，一个规则可以有多个样式声明，例如上面中有两个声明,background和color。每个声明由属性名称（Property）和属性值（Value）组成

- 选择器指向您需要设置样式的 HTML 元素
- 声明块包含一条或多条用分号分隔的声明
- 每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔
- 多条 CSS 声明用分号分隔，声明块用花括号括起来
- 声明块中的属性和值对大小写敏感
- 注释：`/* 这是注释 */`

## CSS 选择器

CSS提供了几种方式，可以让开发者将css样式应用到指定的html元素。下面将会讲述这些方式：

- 类型选择器

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
    margin: 0;
    padding: 0;
}
```

这个规则表示将所有元素的外边距和内边距都设置为0。一般在项目中，我习惯用这段代码，覆盖浏览器的默认样式，使元素初始边距为 0

- 属性选择器

html元素可以设置属性，例如上面的class和id都是html元素的属性，我们也可以添加更多的属性

```html
<p att1="1" att2="2" att3="3">This is a paragraph.</p>
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
- 后代选择器，用空格（ ）表示，匹配父元素后代子孙节点中的元素，例如div p匹配div中所有的段落，不一定是儿子结点，也可以是孙子结点
- 子选择器，用>表示，匹配某个元素的孩子结点。例如div>p表示div中所有p孩子元素
- 相邻兄弟选择器，用+表示，匹配同级节点的紧邻下一个元素。例如div+p匹配div后面与该div紧邻着的段落，p与div之间不能有其他元素
- 通用兄弟选择器，用~表示，匹配同级节点的后面的元素，不要求是紧邻的元素。例如div~p匹配div后面所有同级的<P>元素

- 复合选择器， 你可以组合多个选择器，增强代码的可读性和规则的功能。例如，你想将规则应用于类名为cls的<a>元素，将其颜色设置为红色，可以这样写：

```css
a.cls {
    color: red;
}
```
注意，与组合器不同的是，复合选择器在选择器之间不包含任何符号和空格

## 级联

有时候，有多个相同的css规则可以被应用于同一个元素。此时浏览器需要使用级联算法确定最后使用哪一个css规则进行页面渲染


css是级联样式表（Cascading Stylesheets）。级联是解决当多个css规则被同时应用于一个html元素时产生的冲突的一种算法。正因为级联，下面的按钮才会被渲染成蓝色：

```css
<style>
    button {
        color: red
    }
    button {
        color: blue;
    }
<style>

...

<button>This is blue</button>
```

理解级联的目的，就是为了理解浏览器是如何解决此类冲突的。级联算法分为以下四个模块：

- 位置和出现的顺序：css规则出现的顺序，位置越靠后的样式一般具有更高的重要性
- 特征性（具体性 Specificity）：确定css选择器具有最高匹配权的算法，类选择器的特征性高于类型选择器（标签选择器），ID选择器特征性高于类选择器
- 来源： css在何时何处生成。它是否是一个浏览器样式或者是浏览器插件添加的样式，又或者是你写的css代码，

css来自不同的地方，也会影响是否会在规则冲突中胜出。关于样式的来源的特征性从低到高如下：

用户代理样式：也就是浏览器默认样式。
本地用户样式：一般来源于系统设定，也可以是浏览器插件设定的样式。某些浏览器插件允许用户定义自己的浏览器页面样式。
开发者定义的css规则：指网页开发者写下的css样式。
标记为!important的css: 网页开发者写的含!important标记的css样式。
含!important的本地用户样式：与2来源相同，不过这个css含有!important标记。
含!important的用户代理样式：与1来源相同，不过这个css含有!important标记。

- 重要性：一些css规则具有更高的重要性，特别是包含!important值的规则，

不同种类的css规则重要性从低到高依次如下：

普通规则：例如font-size、background或者color。
animation规则。
!important规则。
transition规则。

所以当某些动画规则或者变换规则激活时，它会取代普通规则，进行渲染页面


## CSS 继承

某些css属性，如果你不显式设置它的值，那么它的值会从父节点继承。本节内容将会讲述继承是如何工作的，怎么去利用这一特性

继承的方向是向下传递的，父级元素的某些属性值可能被子节点继承，但是子元素的属性值，不可能被父元素继承

看下面的demo：

<iframe height="300" style="width: 100%;" scrolling="no" title="005 Box Model_1" src="https://codepen.io/AhCola/embed/YzVaRWZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen 005 Box Model_1 by Pengfei Wang (@AhCola) on CodePen. </iframe>
父元素（div类名为parent）设置颜色为绿色，因为继承流的方向是向下的，所以第一个段落文字颜色继承父元素的color属性值显示为绿色，第二个段落设置了颜色为红色，覆盖了继承得到的绿色，所以显示为红色。第二个div中，设置了子元素段落的颜色为红色，但因为继承流方向不是向上的，所以div中的文字仍然显示为黑色。

html页面中每个css属性都有一个预定义的默认值。如果级联算法计算属性值失败时，会使用这个默认的值作为最终的css属性值。

其中有一些属性是可以继承的，例如上面列举的那些属性。如果有一个元素有父元素，并且父元素定义了某个可继承css属性的值，那么这个元素的对应的属性值将会从其父节点元素继承，如果该元素自己也定义了该css属性的值，那个这个值会覆盖从父节点继承的属性值。我们可以在谷歌浏览器中，按F12打开开发者工具在样式面板中，从computed页面看到各个属性的计算详情

某些时候继承并不是我们想要的结果，该怎么办呢？css提供了方式处理这个问题。

- 可以使用inherit关键字显式指定一个属性值从其父元素继承。这在某些情况很有用
- 继承可能造成意外的结果，但是initial关键字可以将属性重置为初始默认值
- unset关键字的表现有点特殊，当css属性是可以继承的，那么unset关键字和inherit关键字作用相同；当css属性是不可以继承的，那么unset关键字的作用和initial作用相同

你并不需要立刻记住哪些属性是可以继承的，哪些是不可以被继承的，太多了，不可能全部记住的。你只需要知道有继承属性的存在，剩下的就交给时间，慢慢熟悉即可



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

## CSS 尺寸单位

数字：数字可以用来定义opacity、line-height,还可以用于定义rgb颜色中的大小。这里指的数字是无单位的。例如(1, 2, 3, 100)和小数(.1, .2, .3)。

数字所处的上下文不同，它的意义也不一样。例如当定义line-height时，一个无单位的数字表示的是一个比例值：

<iframe height="300" style="width: 100%;" scrolling="no" title="007 Box Model_1" src="https://codepen.io/AhCola/embed/jOmxoYw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen 007 Box Model_1 by Pengfei Wang (@AhCola) on CodePen. </iframe>
这个例子中，line-height为1.5，但是最终行高结果为24px的1.5倍大小，即36px

```css
p {
    font-size: 24px;
    line-height: 1.5;
}
```

> 为line-height提供一个无单位的数字值（即字体大小的倍数）是一个不错的选择。正如之前在继承中说过，font-size是可继承属性。定义无单位的line-height，保证行高永远是相对于font-size的。如果你定义line-height: 15px, 在某些字体大小的情况下，最终页面可能会看起来比较奇怪

数字还可以使用在以下几种情形：

- filter: filter: speia(0.5), 给元素添加一个50%的褐色滤镜
- opacity: opacity: 0.5, 50%不透明度
- color: rgb(50, 50, 50), 分别设置r、g、b的颜色值，允许范围为0-255
- transform: transform: scale(1.2), 将元素放大1.2倍

百分比：当使用百分比设置css属性值时，你需要知道百分比是如何用于计算的。例如width的百分比是相对于父元素的宽度进行计算的

```css
div {
    width: 300px;
    height: 100px;
}
div p {
    width: 50%; // 最终结果为150px
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="007 Box Model_2" src="https://codepen.io/AhCola/embed/yLbjWEp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen 007 Box Model_2 by Pengfei Wang (@AhCola) on CodePen. </iframe>
上面的例子中div p的宽度为150px

如果设置margin和padding百分比值，不论margin和padding的方向如何，它们的百分比都是相对于父元素的width的

```css
div {
    width: 300px;
    height: 100px;
}

div p {
    margin-top: 50%; /* calculated: 150px */
    padding-left: 50%; /* calculated: 150px */
}
```

尺寸和长度单位：如果在数字后面添加一个单位，那么它就变成了尺寸，例如1 rem

所有绝对长度都基于相同的基础进行解析，使它们在CSS中使用的任何地方都是可预测的。例如使用cm单位设置一个元素的width，那么这个元素将呈现4cm的宽度，这个值是一个精确值，可以用尺子去测量的

```css
div {
    width: 10cm;
    height: 5cm;
    background: black;
}
```

绝对长度非常适合设计用于打印的页面

绝对长度尺寸表：

| 单位 | 名称 |         公式          |
|:----:|:----:|:---------------------:|
|  cm  | 厘米 |  1 cm = 96px / 2.54   |
|  mm  | 毫米 |     1 mm = 0.1 cm     |
|  q   | 厘米 |   1 q = 1/40 * 1 cm   |
|  in  | 英寸 | 1 in = 2.54 cm = 96px |
|  pc  | 厘米 |   1 pc = 1/6 * 1 in   |
|  pt  | 厘米 |  1 pt = 1/72 * 1 in   |
|  pz  | 像素 |  1 px = 1/96 * 1 in   |

相对长度是基于基础值进行计算的，与百分比有点类似。和百分比之间的区别在于，您可以根据上下文来确定元素的大小。如果尺寸单位为ch,表示使用文字大小作为计算的基础值，单位vw表示使用viewport的宽度作为计算的基础值。相对值在响应式布局中很有用

css提供了一些相对于元素字体大小的相对单位

| 单位 |                                           相对于                                            |
|:----:|:-------------------------------------------------------------------------------------------:|
|  em  | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
|  ex  |                                        字符“x”的高度                                        |
|  ch  |                                        数字“0”的宽度                                        |
| rem  |                                      根元素的字体大小                                       |
|  lh  |                                      元素的line-height                                      |
| cap  |                                  当前元素字体的首字母大小                                   |
|  ic  |                                          "水"字形                                           |
| rlh  |                                         根节点行高                                          |

视口相对单位
你可以使用视口的大小作为相对值计算的基

| 单位 |                     相对于                     |
|:----:|:----------------------------------------------:|
|  vw  |                  视口宽度的1%                  |
|  vh  |                  视口高度的1%                  |
|  vi  | 等于初始包含块大小的 1%，在根元素的行内轴方向上 |
|  vb  | 等于初始包含块大小的 1%，在根元素的区块轴方向上 |
| vmin |     视口高度 vw 和宽度 vh 两者之间的最小值     |
| vmax |     视口高度 vw 和宽度 vh 两者之间的最大值     |


角度单位：

```css
div {
    width: 150px;
    height: 150px;
    transform: rotate(60deg); // deg单位，旋转60度
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="007 Box Model_3" src="https://codepen.io/AhCola/embed/ZEKRqvX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen 007 Box Model_3 by Pengfei Wang (@AhCola) on CodePen. </iframe>

分辨率单位：dpi表示每英寸的点数

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

