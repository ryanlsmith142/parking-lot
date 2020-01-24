import React from "react";
import '../parkingLotDashboard.css';

class Question extends React.Component {
    state = {
    };

    render() {
        return(
            <div>
                <div className='question-wrapper'>
                    <p className='question'>{this.props.question}</p>
                </div>
            </div>
        )
    }
}

export default Question;
