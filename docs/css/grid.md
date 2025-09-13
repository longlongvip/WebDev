# Grid 布局

网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了

上图这样的布局，就是 Grid 布局的拿手好戏。

Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大

## 基本概念

学习 Grid 布局之前，需要了解一些基本概念

### 容器和项目

采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）

```css
<div>
    <div><p>1</p></div>
    <div><p>2</p></div>
    <div><p>3</p></div>
</div>
```

上面代码中，最外层的 `<div>` 元素就是容器，内层的三个 `<div>` 元素就是项目。

注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的 `<p>` 元素就不是项目。Grid 布局只对项目生效

### 行和列

容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）

上图中，水平的深色区域就是"行"，垂直的深色区域就是"列"

### 单元格

行和列的交叉区域，称为"单元格"（cell）。

正常情况下，n行和m列会产生n x m个单元格。比如，3行3列会产生9个单元格

### 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线

## 容器的属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性

- display 属性

display: grid 指定一个容器采用网格布局

```css
div {
    display: grid;
}
```

默认情况下，容器元素都是块级元素，但也可以设成行内元素

```css
div {
    display: inline-grid;
}
```

上面代码指定div是一个行内元素，该元素内部采用网格布局

注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效

- grid-template-columns 属性，grid-template-rows 属性

容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高

```css
.container {
    display: grid;
    grid-template-columns: 100px;
    grid-template-rows: 100px;
}
```

上面代码指定了一个三行三列的网格，列宽和行高都是100px

除了使用绝对单位，也可以使用百分比

```css
.container {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 33.33% 33.33% 33.33%;
}
```

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数，简化重复的值。上面的代码用repeat()改写如下

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
}
```

repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

repeat()重复某种模式也是可以的

```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

上面代码定义了6列，第一列和第四列的宽度为100px，第二列和第五列为20px，第三列和第六列为80px

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
}
```

上面代码表示每列宽度100px，然后自动填充，直到容器不能放置更多的列

除了auto-fill，还有一个关键字auto-fit，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有行为差异：auto-fill会用空格子填满剩余宽度，auto-fit则会尽量扩大单元格的宽度

为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

上面代码表示两个相同宽度的列

fr可以与绝对长度的单位结合使用，这时会非常方便

```css
.container {
    display: grid;
    grid-template-columns: 150px 1fr 2fr;
}
```

上面代码表示，第一列的宽度为150像素，第二列的宽度是第三列的一半

minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

上面代码中，minmax(100px, 1fr)表示列宽不小于100px，不大于1fr


auto关键字表示由浏览器自己决定长度

```css
grid-template-columns: 100px auto 100px;
```

grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用

```css
.container {
    display: grid;
    grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
    grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如[fifth-line row-5]

grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码

```css
.wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
}
```

上面代码将左边栏设为70%，右边栏设为30%。

传统的十二网格布局，写起来也很容易。

```css
grid-template-columns: repeat(12, 1fr);
```

## 参考

- [阮一峰 CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
