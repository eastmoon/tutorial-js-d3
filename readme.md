# JavaScript library D3.js

D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.
> from [D3.org](https://d3js.org/)

從官方網站說明可確知，D3.js 的設計目標是以資料驅動為核心概念，將資料靈活的用 HTML、SVG、CSS 加以呈現，此外函式庫可支援絕大多數主流瀏覽器。

D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.
> from [D3.org](https://d3js.org/#introduction) Introduction

D3.js 可使用任意資料來綁定到 DOM 物件上，並以此應用到資料驅動並轉換至文件，例如你可以使用 D3.js 自數值矩陣產生 HTML 表格，或使用同樣資料還產生互動 SVG 條狀圖並配上順暢的轉場互動；需注意的是 D3.js 並非整合型框架，其目的在解決一個主要問題『資料操作文件的效率』。

## 框架

閱讀完 D3.js 官方文件，可以明確知道其框架是一套『資訊化視覺元件』函式庫，其框架並未依存其他架構性框架 (例如：jQuery、React、Vue)，但透過其說明文件與應用程式介面 (API) 文件，可以知道其框架住要運作方式類似 jQuery，基於 DOM 元件達到動態增減元件、動畫設定、資訊圖像呈現，框架採用程序程式設計概念。

```
d3.selectAll("p")
    .attr("class", "graf")
    .style("color", "red");
```
> D3.js 採用程序程式設計，可以很明確看到程式中不斷呼叫回傳物件子函數來運作。

+ [操作函數](./doc/operation.md)
+ 互動函數
+ 元件函數

## 指令

+ 進入虛擬環境
```
dockerw start
```

+ 開啟開發環境
```
yarn dev
```
> 其他還有 build、start，但本專案並不需使用

## 參考

#### 官方文件

+ [learn D3.js](https://observablehq.com/collection/@d3/learn-d3)
+ [D3.js github](https://github.com/d3/d3)
+ [D3.js API Reference](https://github.com/d3/d3/blob/master/API.md)

#### 教學網站

+ [SVG D3 - D3.js 初體驗](https://www.oxxostudio.tw/articles/201410/svg-d3-js.html)
+ [使用 React 製作資料圖表 — D3 與其他三種方案](https://medium.com/visuallylab/891534fce073)
+ [How (and why) to use D3 with React](https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274)
+ [Github : react-d3-components](https://github.com/codesuki/react-d3-components)
