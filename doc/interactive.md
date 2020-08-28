## 操作指令

#### 轉場操作

+ [D3 Transition reference](https://github.com/d3/d3-transition/blob/master/README.md#transition_selection)
    - [Working with Transitions](https://bost.ocks.org/mike/transition/)
    - [Object Constancy](https://bost.ocks.org/mike/constancy/)
+ [D3 Easing reference](https://github.com/d3/d3-ease/blob/v2.0.0/README.md)

Transitions have a four-phase life cycle:

+ The transition is scheduled.
+ The transition starts.
+ The transition runs.
+ The transition ends.

###### Scheduled

```
const t = d3.selectAll("body").transition()
        .delay()
        .duration()
        .easing()
```
> 設定一個轉場預定表 ( scheduled )，若有複數個物件使用可以用此方式建立基本設定，另所有物件的轉場動畫統一。

```
d3.selectAll(".apple")
  .transition() // First fade to green.
    .style("fill", "green")
  .transition() // Then red.
    .style("fill", "red")
  .transition() // Wait one second. Then brown, and remove.
    .delay(1000)
    .style("fill", "brown")
    .remove();
```
> 此為針對目標物件的連續轉場動畫，每呼叫一次 ```transition()``` 就視同產生一個新的預定，而此預定會接續於前個動畫


#### 繪圖操作

+ [D3 Path reference, The object use for draws to 2D canvas](https://github.com/d3/d3-path/blob/v2.0.0/README.md)
    - [Getting Started with D3](http://thinkingonthinking.com/Getting-Started-With-D3/)
    - [D3 for Mere Mortals](http://recursion.org/d3-for-mere-mortals)


#### 介面操作

+ [Drag](https://github.com/d3/d3-drag/blob/v2.0.0/README.md)，托放元素
+ [Zoom](https://github.com/d3/d3-zoom/blob/v2.0.0/README.md)，對 SVG 影像的縮放、位移控制
