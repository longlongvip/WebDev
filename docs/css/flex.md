# Flex 布局

```css
.container {
    display: flex | inline-flex;

    flex-direction: row-主轴为水平方向，起点在左端;
                  : row-reserve-主轴为水平方向，起点在右端;
                  : column-主轴为垂直方向，起点在上沿;
                  : column-reserve-主轴为垂直方向，起点在下沿;

    flex-wrap: nowrap 不换行
             : wrap：项目主轴总尺寸超出容器时换行，第一行在上方
             : wrap-reverse：换行，第一行在下方

    justify-content：定义了项目在主轴的对齐方式
                   : flex-start 左对齐
                   : flex-end 右对齐
                   ：center 居中
                   ：space-between 两端对齐，项目之间的间隔相等，即剩余空间等分成间隙
                   ：space-around 每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍
    align-items: 定义了项目在交叉轴上的对齐方式
               : 
    
}
```

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
