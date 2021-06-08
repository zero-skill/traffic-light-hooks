import React from 'react';
class TrafficLight extends React.Component {
    constructor(){
        super();
        this.state={
            clicked: null
        }
    }
    render() {
        let redSelected = '';
        let yellowSelected = '';
        let greenSelected = '';
        if (this.state.clicked === 'red') {
            redSelected = 'selected';
        } else if (this.state.clicked==='yellow') {
            yellowSelected='selected';
        } else if (this.state.clicked === 'green'){
            greenSelected='selected';
        }
        return(
        <div>
            <div className="stick"></div>
            <div className="container">
                <div className={"red light " + redSelected} onClick={() => this.setState({ clicked: 'red' })}></div>
                <div className={"yellow light " + yellowSelected} onClick={() => this.setState({ clicked: 'yellow' })}></div>
                <div className={"green light " + greenSelected} onClick={() => this.setState({ clicked: 'green' })}></div>
            </div>
        </div>
        );
    }
}
export default TrafficLight;