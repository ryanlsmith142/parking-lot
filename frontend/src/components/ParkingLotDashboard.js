import React from 'react';
import axios from 'axios';
import CreateQuestionForm from './CreateQuestionForm.js';
import QuestionList from './QuestionList.js';

class ParkingLotDashboard extends React.Component {
    render() {
        return (
            <div>
                <QuestionList />
                <CreateQuestionForm/>
            </div>
        )
    }
}

export default ParkingLotDashboard;
