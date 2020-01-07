import React from 'react'
import axios from "axios";
import HelpfulVoteCounter from '../components/HelpfulVoteCounter'

class CreateShowQuestion extends React.Component {
    render() {
        return (
            <div>
                <QuestionList />
                {/*<CreateQuestionForm/>*/}
            </div>
        )
    }
}

class QuestionList extends React.Component {

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

    handleHelpfulUpVote = (questionId) => {
        const nextQuestions = this.state.questions.map((question) => {
            if(question.id === questionId) {
                return Object.assign({}, question, {
                    helpfulVoteCount: question.helpfulVoteCount + 1,
                });
            } else {
                return question;
            }
        });
        this.setState({
            questions: nextQuestions,
        })
    };

    render() {
        const questions = this.state.questions.map((question) => (
            <Question
                key={question.id}
                id={question.id}
                question={question.question}
                description={question.description}
                helpfulVoteCount={question.helpfulVoteCount}
                handleHelpfulUpVote={this.handleHelpfulUpVote}
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
    handleHelpfulUpVote = () => {
        this.props.handleHelpfulUpVote(this.props.id)
    };

    render() {
        return(
            <div>
                <p>{this.props.question}</p>
                <p>{this.props.helpfulVoteCount}</p>
                <div>
                    <button className='increment' onClick={this.handleHelpfulUpVote}> + </button>
                    {/*<button className='decrement' onClick={this.decrementVoteCount}> - </button>*/}
                </div>
            </div>
        )
    }
}

export default CreateShowQuestion;
