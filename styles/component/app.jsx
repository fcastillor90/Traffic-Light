import React from "react";

export default class Lucesita extends React.Component{

    constructor(){
        super();
        this.state={
            useLight:null
        }
    }


    render(){
        console.log(this.state);
        const redExtraClass = '';
        if(this.state.useLight == 'red') redExtraClass = 'selected';
        const yellowExtraClass = '';
        if(this.state.useLight == 'yellow') yellowExtraClass = 'selected';
        const greenExtraClass = '';
        if(this.state.useLight == 'green') greenExtraClass = 'selected';


        return <div>
            <div id="post"></div>
            <div className="row corp">
                <div className={"red-light"+redExtraClass }onClick={() => this.setState({ useLight: 'red'})}></div>
                <div className={"red-light"+yellowExtraClass} onClick={() => this.setState({ useLight: 'yellow'})}></div>
                <div className={"red-light"+greenExtraClass} onClick={() => this.setState({ useLight: 'green'})}></div>
            </div>
        </div>
    }
}