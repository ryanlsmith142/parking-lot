import React from 'react';
import CreateQuestionForm from './CreateQuestionForm.js';
import QuestionList from './QuestionList.js';
import '../parkingLotDashboard.css';

class ParkingLotDashboard extends React.Component {
    render() {
        return (
            <div className="main-div">
                <header className="dashboard-header">
                    <h1 className="dashboard-h1">The Parking Lot</h1>
                    <ul className="dashboard-nav">
                        <li><a>Create Question</a></li>
                        <li><a>Show Questions</a></li>
                    </ul>
                </header>
                <div className="question-list">
                    <QuestionList />
                </div>
                <div className="create-question-form">
                    <CreateQuestionForm/>
                </div>
            </div>
        )
    }
}

export default ParkingLotDashboard;
