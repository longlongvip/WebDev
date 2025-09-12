# 基础布局

<style>
.p-blue {
    display: grid;
    place-items: center;

    border:solid;
    border-width: 1px;
}

.p-blue2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    border:solid;
    border-width: 1px;
}

.d-box2 {
    flex: 0 1 150px; /* 不伸长 */
    flex: 1 1 150px; /* 伸长 */
    margin: 5px;
}


.p-blue3 {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;

    border:solid;
    border-width: 1px;

    height: 200px;
}

.p-blue4 {
    display: grid;
    grid-template-rows: auto 1fr auto;

    border:solid;
    border-width: 1px;

    height: 200px;
}

.p-blue5 {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;

    border:solid;
    border-width: 1px;

    height: 200px;
}

.d-header {
    padding: 2rem;
    grid-column: 1 / 4;
  }

  .d-left-side {
    grid-column: 1 / 2;
  }

  .d-main {
    grid-column: 2 / 3;
  }

  .d-right-side {
    grid-column: 3 / 4;
  }

  .d-footer {
    grid-column: 1 / 4;
  }

.parent {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  
.span-12 {
    grid-column: 1 / span 12;
  }

.span-6 {
    grid-column: 1 / span 6;
  }

.span-4 {
    grid-column: 4 / span 4;
  }

.span-2 {
    grid-column: 3 / span 2;
  }

  /* centering text */
.section {
    display: grid;
    place-items: center;
    text-align: center
  }

  .ex7-parent {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
</style>


## 超级居中

<div class="p-blue">
    <div class="d-box">
        CSS Layout
    </div>
</div>


## The Deconstructed Pancake

<div class="p-blue2">
    <div class="d-box2">
        CSS Layout
    </div>
    <div class="d-box2">
        CSS Layout 2
    </div>
    <div class="d-box2">
        CSS Layout 3
    </div>
</div>

## Sidebar

<div class="p-blue3">
    <div class="d-box2">
        CSS Layout
    </div>
    <div class="d-box2">
        CSS Layout 2
    </div>
</div>

## 上中下

<div class="p-blue4">
    <div class="d-box2">
        CSS Layout
    </div>
    <div class="d-box2">
        CSS Layout 2
    </div>
    <div class="d-box2">
        CSS Layout 3
    </div>
</div>

## 经典圣杯布局

<div class="p-blue5">
    <div class="d-header">
        CSS Layout
    </div>
    <div class="d-left-sidebar">
        CSS Layout 2
    </div>
    <div class="d-main">
        CSS Layout 3
    </div>
    <div class="d-right-sidebar">
        CSS Layout 3
    </div>
    <div class="d-footer">
        CSS Layout 3
    </div>
</div>

## 跨度网格

 <div class="parent white">
    <div class="span-12 green section">Span 12</div>
    <div class="span-6 coral section">Span 6</div>
    <div class="span-4 blue section">Span 4</div>
    <div class="span-2 yellow section">Span 2</div>
  </div>

## RAM (Repeat, Auto, Minmax)

  <div class="ex7-parent white">
    <div class="box pink">1</div>
    <div class="box purple">2</div>
    <div class="box blue">3</div>
    <div class="box green">4</div>
  </div>

https://1linelayouts.com/
