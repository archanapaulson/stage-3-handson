import React, { Component } from "react";
import './countpeople.css';
class CountPeople extends Component {
    state = {
        entrycount: 0,
        exitcount: 0,
        c: 0
    }

    updateEntry = () => {
        this.setState({
            entrycount: this.state.entrycount + 1,
            c: this.state.c + 1
        })
    }
    updateExit = () => {
        this.setState({
            exitcount: this.state.exitcount + 1,
            c: this.state.c - 1
        })
    }
    render() {

        return (
            <div className="main-div">
                <div className='sub-div'>
                    <button onClick={this.updateEntry}>Login</button><span>{this.state.entrycount}  People Entered!!!</span>
                </div>
                <div className='sub-div'>
                    <button onClick={this.updateExit}>Exit</button><span>{this.state.exitcount} People Entered!!!</span>
                </div>
            </div>
        )
    }
}
export default CountPeople;