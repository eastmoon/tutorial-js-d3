import React from "react";
import * as D3 from "d3";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.data = [4, 8, 15, 16, 23, 42]
    }
    componentDidMount() {
        // Next.js using SSR, it make d3.js draw need wait after componentDidMount.
        console.log(this.data);
        const docRef = D3.select(this.myRef.current);
        docRef.append(() => this.renderD3Node01() );
        docRef.append(() => this.renderD3Node02() );
        docRef.append("hr");
        docRef.append(() => this.renderD3Node03() );
        docRef.append("hr");
        docRef.append(() => this.renderD3BarChart() );
    }
    renderD3Node01() {
        const div = D3.create("div");
        div.html("D3 Demo! Hello, world!");
        return div.node();
    }
    renderD3Node02() {
        const span = D3.create("span");
        span.style("color", "white");
        span.style("background-color", "black");
        span.html("Hello, world!");
        return span.node();
    }
    renderD3Node03() {
        const table = D3.create("table");
        const tbody = table.append("tbody");
        tbody.append("tr").append("td").text("First!");
        tbody.append("tr").append("td").text("Second.");
        tbody.append("tr").append("td").text("Third.");
        return table.node();
    }
    renderD3BarChart() {
        // Create an empty (detached) chart container.
        const div = D3.create("div");

        // Apply some styles to the chart container.
        div.style("font", "10px sans-serif");
        div.style("text-align", "right");
        div.style("color", "white");

        // Define the initial (empty) selection for the bars.
        const bar = div.selectAll("div");

        // Bind this selection to the data (computing enter, update and exit).
        const barUpdate = bar.data(this.data);

        // Join the selection and the data, appending the entering bars.
        const barNew = barUpdate.join("div");

        // Apply some styles to the bars.
        barNew.style("background", "steelblue");
        barNew.style("padding", "3px");
        barNew.style("margin", "1px");

        // Set the width as a function of data.
        barNew.style("width", d => `${d * 10}px`);

        // Set the text of each bar as the data.
        barNew.text(d => d);

        // Return the chart container.
        return div.node();
    }
    render() {
        return <div ref={this.myRef}>
            D3 Demo
        </div>;
    }
}

export default MyComponent
