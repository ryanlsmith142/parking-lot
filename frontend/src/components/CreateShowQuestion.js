import React from 'react'
import axios from "axios";

class CreateShowQuestion extends React.Component {
    render() {
        return (
            <div>
                <QuestionList />
                <CreateQuestionForm/>
            </div>
        )
    }
}

class QuestionList extends React.Component {

    state={
        questions: [],
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
        });
    };

    // updateHelpfulVoteCountInDatabase = (questionId) => {
    //     this.state.questions.map((question) => {
    //         if(question.id === questionId) {
    //             axios.post(`/api/${question.id}/updateHelpfulVoteCount`, `helpfulVoteCount=${question.helpfulVoteCount}`);
    //         }
    //     });
    // };

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

class CreateQuestionForm extends React.Component {
    state = {
        question: "",
        description: "",
        categoryId: "",
        helpfulVoteCount: 0,
        userId: 1
    };

    setStateToNewQuestion = type => {
        event.preventDefault();
        this.setState({[type]: event.target.value})
    };

    createNewQuestion = () => {
        axios.post(`/api/${this.state.userId}/create-question`, `question=${this.state.question}
                                                                            &description=${this.state.description}
                                                                            &categoryId=1
                                                                            &helpfulVoteCount=${this.state.helpfulVoteCount}
                                                                            &userId=${this.state.userId}`)
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Question:
                        <input
                            type={"question"}
                            name={"question"}
                            onChange={this.setStateToNewQuestion("question")}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type={"description"}
                            name={"description"}
                            onChange={this.setStateToNewQuestion("description")}
                        />
                    </label>
                    <input
                        type="submit"
                        onClick={this.createNewQuestion}
                    />
                </form>
            </div>
        )
    }
}
class Question extends React.Component {
    state = {
        didHelpfulVoteCountChange: false,
    };


    handleHelpfulUpVote = () => {
        this.props.handleHelpfulUpVote(this.props.id);
        this.setState({
            didHelpfulVoteCountChange: true,
        });

        if(this.state.didHelpfulVoteCountChange === true) {
            axios.post(`/api/${this.props.id}/updateHelpfulVoteCount`, `helpfulVoteCount=${this.props.helpfulVoteCount}`);
            this.setState({
                didHelpfulVoteCountChange: false,
            })
        }
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
