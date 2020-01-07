import React from 'react'
import axios from "axios";
import HelpfulVoteCounter from '../components/HelpfulVoteCounter'

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

class Question extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.question}</p>
                <p>{this.props.helpfulVoteCount}</p>
                <HelpfulVoteCounter
                    id={this.props.id}
                    helpfulVoteCount={this.props.helpfulVoteCount}
                />
            </div>
        )
    }
}

export default CreateShowQuestion;
