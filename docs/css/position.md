# Position 位置

position属性用来指定一个元素在网页上的位置，一共有5种定位方式，即position属性主要有五个值

- static
- relative
- fixed
- absolute
- sticky

## static 属性值

static是position属性的默认值。如果省略position属性，浏览器就认为该元素是static定位

这时，浏览器会按照源码的顺序，决定每个元素的位置，这称为"正常的页面流"（normal flow）。每个块级元素占据自己的区块（block），元素与元素之间不产生重叠，这个位置就是元素的默认位置

注意，static定位所导致的元素位置，是浏览器自主决定的，所以这时top、bottom、left、right这四个属性无效

## relative，absolute，fixed 属性值

relative、absolute、fixed这三个属性值有一个共同点，都是相对于某个基点的定位，不同之处仅仅在于基点不同。所以，只要理解了它们的基点是什么，就很容易掌握这三个属性值。

这三种定位都不会对其他元素的位置产生影响，因此元素之间可能产生重叠

- relative 属性值

relative表示，相对于默认位置（即static时的位置）进行偏移，即定位基点是元素的默认位置

它必须搭配top、bottom、left、right这四个属性一起使用，用来指定偏移的方向和距离

```css
div {
    position: relative;
    top: 20px;
}
```

上面代码中，div元素从默认位置向下偏移20px

- absoulte 属性值

absolute表示，相对于上级元素（一般是父元素）进行偏移，即定位基点是父元素

它有一个重要的限制条件：定位基点（一般是父元素）不能是static定位，否则定位基点就会变成整个网页的根元素html。另外，absolute定位也必须搭配top、bottom、left、right这四个属性一起使用

其实就是向上找，直到找到一个不是static定位的元素为止
当设置position = absolute时，如果其祖先元素都没有设置定位，并且也没有为当前元素设置任何left/top/right/bottom的值， 其效果跟position = relative是一样的，元素并不会相对于根元素定位而出现在浏览器的左上角
这句话描述不是很准确，因为当元素的 position 属性设置为 absolute 时，该元素会脱离"正常页面流"，并相对于最近的非 static 定位的祖先元素进行定位。也就是说如果它的父元素的是static，但是它的父元素的父元素不是static定位，则absolute定位的元素，则是以父元素的父元素进行定位，并不是根元素html



```html
/*
  HTML 代码如下
  <div id="father">
    <div id="son"></div>
  </div>
*/

#father {
    positon: relative;
}
#son {
    position: absolute;
    top: 20px;
}
```

上面代码中，父元素是relative定位，子元素是absolute定位，所以子元素的定位基点是父元素，相对于父元素的顶部向下偏移20px。如果父元素是static定位，上例的子元素就是距离网页的顶部向下偏移20px。

注意，absolute定位的元素会被"正常页面流"忽略，即在"正常页面流"中，该元素所占空间为零，周边元素不受影响

-  fixed 属性值

fixed表示，相对于视口（viewport，浏览器窗口）进行偏移，即定位基点是浏览器窗口。这会导致元素的位置不随页面滚动而变化，好像固定在网页上一样

它如果搭配top、bottom、left、right这四个属性一起使用，表示元素的初始位置是基于视口计算的，否则初始位置就是元素的默认位置

```css
div {
    position: fixed;
    top: 0;
}
```

上面代码中，div元素始终在视口顶部，不随网页滚动而变化

- sticky 属性值

sticky跟前面四个属性值都不一样，它会产生动态效果，很像relative和fixed的结合：一些时候是relative定位（定位基点是自身默认位置），另一些时候自动变成fixed定位（定位基点是视口）

因此，它能够形成"动态固定"的效果。比如，网页的搜索工具栏，初始加载时在自己的默认位置（relative定位）,页面向下滚动时，工具栏变成固定位置，始终停留在页面头部（fixed定位）,等到页面重新向上滚动回到原位，工具栏也会回到默认位置


sticky生效的前提是，必须搭配top、bottom、left、right这四个属性其中的一个或多个一起使用，不能省略，否则等同于relative定位，不产生"动态固定"的效果。原因是这四个属性用来定义"偏移距离"，浏览器把它当作sticky的生效门槛

它的具体规则是，当页面滚动，父元素开始脱离视口时（即部分不可见），只要与sticky元素的距离达到生效门槛，relative定位自动切换为fixed定位；等到父元素完全脱离视口时（即完全不可见），fixed定位自动切换回relative定位

```css
#toolbar {
    position: -webkit-sticky; /* safari 浏览器 */
    position: sticky;
    top: 20px;
}
```

上面代码中，页面向下滚动时，#toolbar的父元素开始脱离视口，一旦视口的顶部与#toolbar的距离小于20px（门槛值），#toolbar就自动变为fixed定位，保持与视口顶部20px的距离。页面继续向下滚动，父元素彻底离开视口（即整个父元素完全不可见），#toolbar恢复成relative定位

## sticky 的应用

- 堆叠效果

堆叠效果（stacking）指的是页面滚动时，下方的元素覆盖上方的元素。下面是一个图片堆叠的例子，下方的图片会随着页面滚动，覆盖上方的图片

HTML 代码就是几张图片

```html
<div><img src="pic1.jpg"></div>
<div><img src="pic2.jpg"></div>
<div><img src="pic3.jpg"></div>
```

CSS 代码极其简单，只要两行

```css
div {
    position: sticky;
    top: 0;
}
```

它的原理是页面向下滚动时，每张图片都会变成fixed定位，导致后一张图片重叠在前一张图片上面。详细解释可以看这里

- 表格的表头锁定

大型表格滚动的时候，表头始终固定，也可以用sticky实现（查看 demo

CSS 代码也很简单。

```css
th {
    position: sticky;
    top: 0; 
}
```

需要注意的是，sticky必须设在<th>元素上面，不能设在<thead>和<tr>元素，因为这两个元素没有relative定位，也就无法产生sticky效果。详细解释可以看这里

## 参考

[CSS 定位详解](https://www.ruanyifeng.com/blog/2019/11/css-position.html)
