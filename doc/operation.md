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

##### 指令 append、data、join 注意事項

+ [selection.join document](https://observablehq.com/@d3/selection-join)
+ [D3.js - Data Join](https://www.tutorialspoint.com/d3js/d3js_data_join.htm)

在 D3.js 中的文件操作，透過 Select 取得目標後，下一步會使用 [append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)、[insert](https://github.com/d3/d3-selection/blob/master/README.md#selection_insert) 建立相關 D3.js 可控制的頁面元素。

```
D3.select(this.ref.current).append("div")
```

而在 append 函數有兩個主要建立的方式

+ 元件名稱
```
selection.append("element name")
```

+ 建立函數
```
selection.append(() => { element.node })
```

在撰寫範例程式 ([barchart](./src/pages/barchart.jsx)、[selection : join](./src/pages/selection-join.jsx)) 時，有一個微妙而難以解釋的架構。

1. append 會將欲建立的元件放置在列表最後
2. 若要建立唯一、覆寫元件，則需配合 data、join 來取得 enter、update、exit 來進行元件操作
3. 在同一個根元件下的內容已覆寫 append，則舊的元件會被刪除後，從最後端加入

依據目前知道的結構，透過建立函數內的回傳值，可以直接覆寫元件內容，但使用此方式必須注意以下技巧：

1. 覆寫的根元件不可變更
2. 配合 async generate function 來建立異步覆寫迴圈

關於根元件不可變更是指如下的元件結構中的 ```<svg></svg>```，若對架構的假設正確，根元件在 append 時會有一個辨識編號，若此編號改變，則 append 會視為一個新的元件，但若相同，則會採用深度複製直接更換。

```
<svg>
  <text>1</text>
  ...
  <text>100</text>
</svg>
```

##### 指令 enter、exit 注意事項

+ [SVG D3.js - Enter、Update 和 Exit](https://www.oxxostudio.tw/articles/201509/svg-d3-18-enter-update-exit.html)

依據文件可以知道在資料 join 後，可以得到一下操作元

+ enter：新增的資料
+ update：若存在舊資料，且新資料也存在
+ exit：若存在舊資料，但當前資料不存在

這些操作元會針對相對的元素進行操作

```
svg.selectAll("text")
    .data(randomLetters(), d => d)
    .join(
        enter => enter.append("text").attr("fill", "red").text(d => d),
        update => update.attr("fill", "gray")
        exit => exit.remove()
    )
```
> 目前的實驗中極少用到 exit，但有看到其他文件中提到可以對此操作元下達此項命令

#### 檔案操作

+ [Fetches (d3-fetch)](https://github.com/d3/d3-fetch/tree/v1.1.2)
    - [Introduction to Data](https://observablehq.com/@observablehq/introduction-to-data)
        + [NPM @observablehq/stdlib](https://www.npmjs.com/package/@observablehq/stdlib)
        + [File Attachments](https://observablehq.com/@observablehq/file-attachments)
    - [Learn D3: Data](https://observablehq.com/@d3/learn-d3-data?collection=@d3/learn-d3)
+ [Delimiter-Separated Values (d3-dsv)](https://github.com/d3/d3-dsv/tree/v1.2.0)

在 D3.js 官方說明網站是使用 [Observable](https://observablehq.com/) 的線上工具取得的檔案，因此需要另外透過 ```Delimiter-Separated Values (d3-dsv)``` 進行資料格式處理；若直接存取特定檔案，則可以經過 ```Fetches (d3-fetch)``` 來取得資料；若本地欲使用 Observable 工具，可額外掛入第三方函式庫，並運用其檔案、圖像、下載等存取動作。

#### 數值操作
