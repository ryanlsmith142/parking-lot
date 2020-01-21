import React from 'react'
import axios from "axios";

class CreateQuestionForm extends React.Component {
    state = {
        question: "",
        description: "",
        categoryId: "",
        helpfulVoteCount: 0,
        userId: 1
    };

    setStateToNewQuestion = type => event => {
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

export default CreateQuestionForm;
