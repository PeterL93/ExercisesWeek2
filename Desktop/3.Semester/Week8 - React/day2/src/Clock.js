import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("In Render")
        return (
            <div>
                <h1>{this.props.txt}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.sleepTime
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

}

