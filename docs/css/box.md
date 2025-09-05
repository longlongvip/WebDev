# 盒子模型

html页面中任何元素都是一个盒子（box）。学好css的基础是理解盒模型的工作原理

## 盒子大小

盒子的大小可以有两种控制方式：

- 显式设置盒子的width和height为固定尺寸，例如设置width和height为400px、600px，那么盒子的大小就固定了
- 不设置盒子的大小，或者设置盒子的大小为非固定尺寸，例如设置width和height属性值为min-content或者max-content, 此时盒子的大小由浏览器决定，浏览器会根据内容自动调整盒子的大小

## 盒子的区域

盒模型组成：Margin box(外边距)、Border box(边框)、Padding box(内边距)、Content box(内容)

- Content box(内容)：子元素放置的地方，前面讲过内容可以控制父元素盒子的大小
- Padding box(内边距)：内边距是环绕在内容外围的一个区域，当你设置盒子的背景background时，内边距区域也会受到影响。当设置overflow: scroll时，并且出现了overflow的情况，滚轮也会占据这一块区域
- Border box(边框)：表示盒子的边框，通过border属性可以设置盒子的边框样式
- Margin box(外边距)：盒子外围的一块区域，通过margin属性可以设置盒子的外边距。outline和box-shadow会占据这块区域，设置外边距的样式并不会影响盒子内部内容

通常，浏览器会给我们的html页面设置一个默认样式（user agent style）。例如，一个段落p的display为block，而span的display为inline，这些都是默认的样式。我们可以通过设置css来覆盖这些默认样式。

box-sizing定义了如何去计算一个元素的高度和宽度。当你设置了元素的width和height尺寸时，默认情况下设置的是content区域的尺寸，这意味着盒子最终的大小为会加上borderSize和paddingSize，而不是你设置的尺寸。我们可以设置box-sizing为border-box, 覆盖这一默认行为，此时我们设置的width和height尺寸就是盒子最终的尺寸（包括边框和内边距）。请看下面的例子

<iframe height="300" style="width: 100%;" scrolling="no" title="001 Box Model_2" src="https://codepen.io/AhCola/embed/yLbPKNe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen 001 Box Model_2 by Pengfei Wang (@AhCola) on CodePen. </iframe>

p1和p2的box-sizing属性不同，即使我们设置的width、height和padding大小一样，最终盒子的大小也不一样

box-sizing可以设置如下两种值：

- content-box: 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中
- border-box: 你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高

## CSS 边框

```css
p {
    border-style: solid; // 实线
    border-style: dashed; // 虚线
    border-style: dotted; // 点线
    border-style: double; //- 定义双边框
    border-style: groove; //- 定义 3D 坡口边框。效果取决于 border-color 值
    border-style: ridge ;// 定义 3D 脊线边框。效果取决于 border-color 值
    border-style: inset; // 定义 3D inset 边框。效果取决于 border-color 值
    border-style: outset; // 定义 3D outset 边框。效果取决于 border-color 值
    border-style: none; // 定义无边框
    border-style: hidden; // 定义隐藏边框

    border-width: 5px; // 宽度

    border-color: green; // 颜色

    border-top-style: dotted; // 框的顶部
    border-right-style: solid; // 框的右侧
    border-bottom-style: dotted; // 框的底部
    border-left-style: solid; // 框的左侧

    border-radius：5px; //属性用于向元素添加圆角边框



}
```

border-style 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）
border-width 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）
border-color 属性用于设置四个边框的颜色。

## CSS 外边距

CSS margin 属性用于在任何定义的边框之外，为元素周围创建空间
通过 CSS，您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距

```css
p {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;

    margin: top right bottom left;
    
    margin: 10px; // 10px 10px 10px 10px;
    margin: 10px 20px; // 10px 20px 20px 10px
    margin: 10px 20px 30px; // 10px 20px 30px 20px
     
    margin: auto; // 元素在其容器中水平居中。然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配
    margin: inherit; // 继承自父元素

}
```
