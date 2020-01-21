import React from "react";
import axios from "axios";
import Question from "./Question";

class QuestionList extends React.Component {

    state={
        questions: [],
    };

    componentDidMount() {
        axios.get(`/api/1/parkingLotDashboard`)
            .then( res => {
                const questions = res.data;
                this.setState({
                    questions: questions
                })
            });
    }

    render() {
        const questions = this.state.questions.map((question) => (
            <Question
                key={question.id}
                id={question.id}
                question={question.question}
                description={question.description}
                helpfulVoteCount={question.helpfulVoteCount}
            />
        ));

        return(
            <div id='questions'>
                {questions}
            </div>
        )
    }
}

export default QuestionList;
