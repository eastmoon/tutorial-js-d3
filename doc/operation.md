## 操作指令

#### 文件操作

+ [Selection](https://d3js.org/#selections)
    - [D3 Selection reference](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection)
+ [Dynamic Properties](https://d3js.org/#properties)
    - [D3 Selection reference - Modifying Elements](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#modifying-elements)
    - [D3 Selection reference - Joining Data](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#joining-data)
    - [D3 Selection reference - Handling Events](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#handling-events)

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

###### 指令 append、data、join 注意事項

#### 檔案操作

+ [Fetches (d3-fetch)](https://github.com/d3/d3-fetch/tree/v1.1.2)
    - [Introduction to Data](https://observablehq.com/@observablehq/introduction-to-data)
        + [NPM @observablehq/stdlib](https://www.npmjs.com/package/@observablehq/stdlib)
        + [File Attachments](https://observablehq.com/@observablehq/file-attachments)
    - [Learn D3: Data](https://observablehq.com/@d3/learn-d3-data?collection=@d3/learn-d3)
+ [Delimiter-Separated Values (d3-dsv)](https://github.com/d3/d3-dsv/tree/v1.2.0)

在 D3.js 官方說明網站是使用 [Observable](https://observablehq.com/) 的線上工具取得的檔案，因此需要另外透過 ```Delimiter-Separated Values (d3-dsv)``` 進行資料格式處理；若直接存取特定檔案，則可以經過 ```Fetches (d3-fetch)``` 來取得資料；若本地欲使用 Observable 工具，可額外掛入第三方函式庫，並運用其檔案、圖像、下載等存取動作。

#### 數值操作
