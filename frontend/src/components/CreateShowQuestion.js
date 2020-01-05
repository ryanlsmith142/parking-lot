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
        questions: null
    };

    componentDidMount() {
        axios.get(`/api/1/users-questions`)
            .then( res => {
                const question = res.data;
                console.log(question);
                return question;
            });
    }

    render() {
        return(
            <div>
                <Question

                />
            </div>
        )
    }
}

class Question extends React.Component {
    render() {
        return(
            <div>
                <p>Hello</p>
            </div>
        )
    }
}

export default CreateShowQuestion;
