import React from 'react'
import axios from 'axios'

class CreateShowQuestion extends React.Component {
    componentDidMount() {
        axios.get('/api/1/users-questions')
            .then( res => {
                console.log(res.data.user)
            })
    }
    render() {
        return (
            <div>
                <QuestionList
                    // questions={this.componentDidMount}
                />
                {/*<CreateQuestion/>*/}
            </div>
        )
    }
}

class QuestionList extends React.Component {
    render() {
        return(
            <div>
                {this.props.questions}
            </div>
        )
    }
}

export default CreateShowQuestion;
