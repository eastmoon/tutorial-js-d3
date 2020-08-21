import React from "react";
import * as D3 from "d3";

function randomLetters() {
  return D3.shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
        .slice(0, Math.floor(6 + Math.random() * 20))
        .sort();
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        const docRef = D3.select(this.myRef.current);
        docRef.append(() => this.renderD3TextSVG01());
        docRef.append("hr");
        const loopTextRef = docRef.append("div");
        this.animateLoop(loopTextRef, this.renderD3TextSVG02());
        this.animateLoop(loopTextRef, this.renderD3TextSVG03());
        // append test.
        docRef.append("hr");
        const intervalTextRef1 = docRef.append("div");
        this.intervalLoop(intervalTextRef1, this.renderD3Node01);
        docRef.append("hr");
        const intervalTextRef2 = docRef.append("div");
        this.animateLoop(intervalTextRef2, this.renderD3Node02());
    }
    animateLoop(docRef, iter) {
        let done = false;
        let t = 0
        while (!done && t < 10) {
            t++;
            iter.next().then((res) => {
                docRef.append(() => res.value);
                done = res.done;
            })
        }
    }
    intervalLoop(docRef, loop) {
        let t = 0
        let timer = D3.interval(() => {
            docRef.append(() => loop());
            t < 10 ? t++ : timer.stop();
        }, 1000, 5);
    }
    renderD3Node01() {
        const div = D3.create("div");
        div.html(`> ${new Date}`);
        return div.node();
    }
    async *renderD3Node02() {
        const div = D3.create("div");
        while (true) {
            div.data([new Date]).join(
                enter => enter.html(d => `>> ${d}`),
                update => update.html(d => `>> ${d}`)
            )
            yield div.node();
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    renderD3TextSVG01() {
        // Defined viewbox width
        const width = 200;
        // Create SVG element
        const svg = D3.create("svg")
            .attr("width", width)
            .attr("height", 33)
            .attr("viewBox", `0 -20 ${width} 33`);
        // Drawing random text
        // 1. Select initial (empty) element
        // 2. Insert random letter data
        // 3. Join element by data, it will create, remove element when data is change
        svg.selectAll("text")
            .data(randomLetters())
            .join("text")
                .attr("x", (d, i) => i * 16)
                .text(d => d);

        return svg.node();
    }
    async *renderD3TextSVG02() {
        // Defined viewbox width
        const width = 200;
        // Create SVG element
        const svg = D3.create("svg")
            .attr("width", width)
            .attr("display", "block")
            .attr("height", 33)
            .attr("viewBox", `0 -20 ${width} 33`);

        while (true) {
            svg.selectAll("text")
                .data(randomLetters(), d => d)
                .join(
                    enter => enter.append("text")
                        .attr("fill", "red")
                        .text(d => d),
                    update => update
                        .attr("fill", "gray")
                )
                    .attr("x", (d, i) => i * 16);

            yield svg.node();
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    async *renderD3TextSVG03() {
        // Defined viewbox width
        const width = 200;
        // Create SVG element
        const svg = D3.create("svg")
            .attr("width", width)
            .attr("display", "block")
            .attr("height", 33)
            .attr("viewBox", `0 -20 ${width} 33`);

        while (true) {
            svg.selectAll("text")
                .data(randomLetters(), d => d)
                .join(
                    enter => enter.append("text")
                        .attr("fill", "blue")
                        .text(d => d),
                    update => update
                        .attr("fill", "black")
                )
                    .attr("x", (d, i) => i * 16);

            yield svg.node();
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    render() {
        return <div ref={this.myRef}>
        </div>;
    }
}

export default MyComponent
