import React from 'react'
import axios from 'axios'

class CreateShowQuestion extends React.Component {
    render() {
        return (
            <div>
                <QuestionList
                />
                {/*<CreateQuestionForm/>*/}
            </div>
        )
    }
}

class QuestionList extends React.Component {

    state = {
        id: 1,
        question: ""
    };

    componentDidMount() {
        axios.get(`/api/${this.state.id}/users-questions`)
            .then( res => {
                const question = res.data.question;
                this.setState({ question })
            })
    }

    render() {
        return(
            <div>
                {/*{ this.state.questions.id.map(question => <p>{question.id}</p>)}*/}
                {this.state.question}
            </div>
        )
    }
}

export default CreateShowQuestion;
