import React from 'react'
import axios from "axios";

class CreateShowQuestion extends React.Component {
    state={
        questions: []
    };

    componentDidMount() {
        axios.get(`/api/1/users-questions`)
            .then( res => {
                const questions = res.data;
                this.setState({
                    questions: questions
                })
            });
    }

    render() {
        return (
            <div>
                <QuestionList
                    questions={this.state.questions}
                />
                {/*<CreateQuestionForm/>*/}
            </div>
        )
    }
}

class QuestionList extends React.Component {

    render() {
        const questions = this.props.questions.map((question) => (
            <Question
                key={question.id}
                id={question.id}
            />
        ));
        return(
            <div id='questions'>
                {questions}
            </div>
        )
    }
}

class Question extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.id}</p>
            </div>
        )
    }
}

export default CreateShowQuestion;
