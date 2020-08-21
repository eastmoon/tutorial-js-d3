import React from "react";
import * as D3 from "d3";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.myRef);
        console.log(this.myRef.current);
        D3.select(this.myRef.current)
            .style("width", "10em")
            .style("height", "10em")
            .style("background-color", "red");
    }
    render() {
        return <div ref={this.myRef}>
            D3 Demo
        </div>;
    }
}

export default MyComponent
