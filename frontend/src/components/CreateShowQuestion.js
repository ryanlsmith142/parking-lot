import React from 'react'
import axios from "axios";

class CreateShowQuestion extends React.Component {

    render() {
        return (
            <div>
                <QuestionList/>
                {/*<CreateQuestionForm/>*/}
            </div>
        )
    }
}

class QuestionList extends React.Component {
    state = {
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
        return(
            <div>
                <Question
                    questions={this.state.questions}
                />
            </div>
        )
    }
}

class Question extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.questions.categoryId}</p>
            </div>
        )
    }
}

export default CreateShowQuestion;
