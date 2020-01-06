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
                    helpfulVoteCount={this.props.helpfulVoteCount}
                />
            </div>
        )
    }
}

class HelpfulVoteCounter extends React.Component {
    state = {
        helpfulVoteCount: this.props.helpfulVoteCount
    };

    incrementVoteCount = () => {
        this.setState(prevState => ({
            helpfulVoteCount: prevState.helpfulVoteCount + 1
        }))
    };

    decrementVoteCount = () => {
        this.setState( prevState => ({
            helpfulVoteCount: prevState.helpfulVoteCount -1
        }))
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

export default CreateShowQuestion;
