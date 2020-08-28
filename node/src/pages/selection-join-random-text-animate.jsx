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
        this.animateLoop(docRef, this.renderD3TextSVG());
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
    async *renderD3TextSVG() {
        // Defined viewbox width
        const width = 200;
        // Create SVG element
        const svg = D3.create("svg")
            .attr("width", width)
            .attr("display", "block")
            .attr("height", 33)
            .attr("viewBox", `0 -20 ${width} 33`);

        while (true) {

            // Create transition information
            const t1 = svg.transition()
                .delay(500)
                .duration(1000);

            const t2 = svg.transition()
                .duration(500);

            const t3 = svg.transition()
                .duration(1000);

            svg.selectAll("text")
                .data(randomLetters(), d => d)
                .join(
                    enter => enter
                        .append("text")
                        .attr("fill", "blue")
                        .attr("x", (d, i) => i * 16)
                        .attr("y", -30)
                        .text(d => d)
                        .call(enter => enter.transition(t1)
                            .attr("y", 0)),
                    update => update
                        .call(update => update
                            .attr("fill", "black")
                            .transition(t2)
                                .attr("x", (d, i) => i * 16)
                        ),
                    exit => exit
                        .attr("fill", "brown")
                        .call(exit => exit.transition(t3)
                            .attr("y", 30)
                            .remove())
                )

            yield svg.node();
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    render() {
        return <div ref={this.myRef}>
        </div>;
    }
}

export default MyComponent
