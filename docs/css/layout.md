# 布局

当你构建一个组件或者页面时，有多种布局方式可供选择，本节内容是各种布局的一个概览。

假设你是一个开发者，此时一个设计专业的同事递给你一份新的网站设计稿让你开发。这份设计稿有很多有趣的布局和组件，有二维布局，也有非常灵活可流动的布局。你怎么去选择最好的css布局方式呢？

CSS为我们提供了多种布局方式，有水平轴布局，垂直轴布局或者水平和竖直混合布局。选择一个正确的布局方式往往很困难，通常你需要多个布局方式去解决问题。为了解决这些，在接下来的几个模块，你将会学习css的布局机制

## display 属性

display属性做了两件事。第一件事是他决定一个盒子是否表现为inline或者block

```css
.my-element {
    display: inline
}
```

inline元素被称为行内元素，行内元素就像一段语句中的一个单词。它们在行内方向上紧挨着彼此。像<span>和<strong>元素就是典型的行内元素，它们在<p>（段落，<p>是一个block元素，后面将会介绍block元素）中都是紧挨着彼此的。它们同样拥有周围的空间，即padding、border和margin属性都是有效的

你无法设置行内元素的width和height属性。block层级的margin和padding将会被周围的元素忽略（这句话的英文原文是Any block level margin and padding will be ignored by the surrounding elements，我不清楚这样翻译是否合适）

block元素，即块元素，它们并不是紧挨着其他元素的。它们在页面中会自动生成新的一行。块元素在行内方向上会扩展尺寸，因此它们会占据水平方向100%宽度。块元素任意方向的边距将不会被忽略

```css
.my-element {
	display: block;
}
```

display属性还可以决定元素的子元素的行为。例如设置display: flex，使元素盒子成为一个block层级的盒子（块元素），并且将子元素变成flex项目（item）。这会启用flex属性，flex属性可以用来控制子元素的布局方式（对其、排序、流动）

## position 属性

position属性会改变元素在正常文档流中的表现和它与其他元素之间的关系。可用的属性值由static、relative、absolute、fixed和sticky。默认值为static

static：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。

relative： 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative对table-row, table-column, table-cell, table-caption 元素无效。

absolute：元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。

fixed：元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed属性会创建新的层叠上下文。当元素祖先的transform，perspective或filter属性非 none 时，容器由视口改为该祖先。

sticky：元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和containing block(最近块级祖先nearest block-level ancestor)，包括table-related元素，基于top、right、bottom和left的值进行偏移。偏移值不会影响任何其他元素的位置