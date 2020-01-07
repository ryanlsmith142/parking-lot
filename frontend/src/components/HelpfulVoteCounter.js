import React from "react";
import axios from "axios";

class HelpfulVoteCounter extends React.Component {
    state = {
        helpfulVoteCount: this.props.helpfulVoteCount
    };

    incrementVoteCount = () => {
        this.setState(prevState => ({
            helpfulVoteCount: prevState.helpfulVoteCount + 1
        }));

        this.updateVoteCount();
    };

    decrementVoteCount = () => {
        this.setState( prevState => ({
            helpfulVoteCount: prevState.helpfulVoteCount -1
        }));

        this.updateVoteCount();
    };

    updateVoteCount = () => {
      axios.post(`/api/${this.props.id}/updateHelpfulVoteCount`, `helpfulVoteCount=${this.state.helpfulVoteCount}`)
    };

    render() {
        return (
            <div>
                <button className='increment' onClick={this.incrementVoteCount}> + </button>
                <button className='decrement' onClick={this.decrementVoteCount}> - </button>
            </div>
        )
    }
}

export default HelpfulVoteCounter;
