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
        id: 1
    };

    componentDidMount() {
        axios.get(`/api/${this.state.id}/users-questions`)
            .then( res => {
                console.log(res.data)
            })
    }
    render() {
        return(
            <div>
                {/*<Question*/}
                {/*/>*/}
            </div>
        )
    }
}

export default CreateShowQuestion;
