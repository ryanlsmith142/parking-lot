import React from "react";
import axios from "axios";

class Question extends React.Component {
    state = {
    };

    render() {
        return(
            <div>
                <p>{this.props.question}</p>
                <div>

                </div>
            </div>
        )
    }
}

export default Question;
