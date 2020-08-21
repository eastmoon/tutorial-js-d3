import React from "react";
import * as D3 from "d3";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        D3.csv("example.csv").then((data) => {
            console.log(data);
        });
    }
    render() {
        return <div ref={this.myRef}>
            D3 Demo
        </div>;
    }
}

export default MyComponent
