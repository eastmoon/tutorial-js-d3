# JavaScript library D3.js

D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.
> from [D3.org](https://d3js.org/)

從官方網站說明可確知，D3.js 的設計目標是以資料驅動為核心概念，將資料靈活的用 HTML、SVG、CSS 加以呈現，此外函式庫可支援絕大多數主流瀏覽器。

D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.
> from [D3.org](https://d3js.org/#introduction) Introduction

D3.js 可使用任意資料來綁定到 DOM 物件上，並以此應用到資料驅動並轉換至文件，例如你可以使用 D3.js 自數值矩陣產生 HTML 表格，或使用同樣資料還產生互動 SVG 條狀圖並配上順暢的轉場互動；需注意的是 D3.js 並非整合型框架，其目的在解決一個主要問題『資料操作文件的效率』。

#### 框架

閱讀完 D3.js 官方文件，可以明確知道其框架是一套『資訊化視覺元件』函式庫，其框架並未依存其他架構性框架 (例如：jQuery、React、Vue)，但透過其說明文件與應用程式介面 (API) 文件，可以知道其框架住要運作方式類似 jQuery，基於 DOM 元件達到動態增減元件、動畫設定、資訊圖像呈現，框架採用程序程式設計概念。

```
d3.selectAll("p")
    .attr("class", "graf")
    .style("color", "red");
```
> D3.js 採用程序程式設計，可以很明確看到程式中不斷呼叫回傳物件子函數來運作。

##### 操作

+ 文件操作

  - [Selection](https://d3js.org/#selections)
      + [D3 Selection reference](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection)
  - [Dynamic Properties](https://d3js.org/#properties)
      + [D3 Selection reference - Modifying Elements](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#modifying-elements)
      + [D3 Selection reference - Joining Data](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#joining-data)
      + [D3 Selection reference - Handling Events](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#handling-events)

D3.js 的一切開始都是起於 Selection，亦即選擇應操作目標；基於 HTML 的文件架構，在 JS 要對特定文件進行互動 ( 增減子元件、動畫設定、動態修改屬性 ) 皆會需要取得正確的 HTML element。

```
var paragraphs = document.getElementsByTagName("p");
```
> 採用 document 直接取得文件中的特定 HTML element

透過 Selection 文件中的說明，其搜尋目標 ```d3.select``` 共有兩個搜尋，一是指定 Tag 字串、一是提供元件 node，前者類似 document 或 jQuery 操作方式，後者則是先透過第三方工具取得 node 後再直接提供；而需注意，以 React 為基礎的框架，會透過其框架動態生成整份 document，亦即在這框架體制下，並不適合使用 Tag 字串來搜尋，對此需確認該框架如何取得。

```
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        D3.select(this.myRef.current)
            .style("width", "10em")
            .style("height", "10em")
            .style("background-color", "red");
    }
    render() {
        return <div ref={this.myRef}>D3 Demo</div>;
    }
}
```
> React 取得 node 的方式，以此直接提供 D3.js 可直接操作的元件

需注意的是，React 元件有其自有的生命週期，而 D3.js 亦有自己的操作行為，在原則上應盡量避免互相驅動對象操作行為，或者操作應明確區分，以及正確的重繪與資料導入，避免交互操作導致系統進入無窮回圈。
> 詳細說明請參考教學網站內網址。

+ 數值操作

##### 互動

##### 元件



#### 指令

+ 進入虛擬環境
```
dockerw start
```

+ 開啟開發環境
```
yarn dev
```
> 其他還有 build、start，但本專案並不需使用

#### 參考

##### 官方文件

+ [learn D3.js](https://observablehq.com/collection/@d3/learn-d3)
+ [D3.js github](https://github.com/d3/d3)
+ [D3.js API Reference](https://github.com/d3/d3/blob/master/API.md)

##### 教學網站

+ [SVG D3 - D3.js 初體驗](https://www.oxxostudio.tw/articles/201410/svg-d3-js.html)
+ [使用 React 製作資料圖表 — D3 與其他三種方案](https://medium.com/visuallylab/891534fce073)
+ [How (and why) to use D3 with React](https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274)
+ [Github : react-d3-components](https://github.com/codesuki/react-d3-components)
