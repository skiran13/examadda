import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class genInst1 extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { user, users } = this.props
    return (
      <div>
        <h2 className='come_in_center'>
          <b> Please read instructions carefully </b>
        </h2>
        <h4>
          <b>General Instructions:</b>
        </h4>
        <ul>
          <li>The total duration of the examination is 60 minutes.</li>

          <li>
            The clock will be set at the server. The countdown timer in the top
            right corner of screen will display the remaining time available to
            you for completing the examination. When the timer reaches zero, the
            examination will end by itself. You will not be required to end or
            submit your examination.
          </li>

          <li>
            The Question Palette displayed on the right side of screen will show
            the status of each question using one of the following symbols:
            <ul>
              <ol>
                <li>Answered questions in green colour. </li>
                <li>Unanswered questions in red colour. </li>
                <li>Marked for review questions in blue colour</li>
              </ol>
            </ul>
          </li>

          <li>
            Marked for review status for a question simply indicates that you
            would like to review the question again.
          </li>
          <li>
            Please note that if a question is answered and ‘marked for review’,
            your answer for that question will be considered in the evaluation.{' '}
          </li>
          <li>
            You can click on the question palette to navigate faster across
            questions.{' '}
          </li>
        </ul>
        <table
          className='table table-bordered'
          style={{ 'background-color': '#0000002e' }}
        >
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Name of Section</th>
              <th scope='col'>No.of Questions</th>
              <th scope='col'>Marks</th>
              <th scope='col'>Time Allotted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>English Language</th>
              <td>30</td>
              <td>30</td>
              <td>20 mins</td>
            </tr>
            <tr>
              <th scope='row'>Quantitative Analysis</th>
              <td>35</td>
              <td>35</td>
              <td>20 mins</td>
            </tr>
            <tr>
              <th scope='row'>Reasoning Ability</th>
              <td>35</td>
              <td>35</td>
              <td>20 mins</td>
            </tr>

            <tr>
              <th scope='row'>
                <strong>TOTAL</strong>
              </th>
              <td>100</td>
              <td>100</td>
              <td>60 mins</td>
            </tr>
          </tbody>
        </table>
        <h4>
          <b>Answering a Question:</b>
        </h4>
        <ul>
          <li>
            Procedure for answering multiple-choice type questions:
            <ol>
              <li>
                To select your answer, click on the button of one of the
                options.
              </li>
              <li>
                To deselect your chosen answer, click again on the button of the
                chosen option again or click on the <b>Clear&nbsp;Response</b>{' '}
                button.
              </li>
              <li>
                To change your chosen answer, click on the button of another
                option.
              </li>
              <li>
                To save your answer, you MUST click on the <b>Save Next</b>
                &nbsp;button.
              </li>
            </ol>
          </li>
          <li>
            To mark a question for review, click on the&nbsp;
            <b>Mark for Review &amp; Next</b>&nbsp;button.
          </li>
          <li>
            To change answer to a question that has already been answered,
            select that question from the Question Palette and then follow the
            procedure for answering that type of question.
          </li>
          <li>
            Note that ONLY questions for which answers are either saved or
            marked for review after answering, will be considered for
            evaluation.
          </li>
        </ul>
        <ul>
          <li>
            {' '}
            To change your answer to a question that has already been answered,
            first select that question for answering and then follow the
            procedure for answering that type of question.
          </li>
          <li>
            Note that ONLY Questions for which answers are saved or marked for
            review after answering will be considered for evaluation.
          </li>
        </ul>
        <h4>
          <b>Navigating through sections:</b>
        </h4>
        <ul>
          <li>
            Click on the question number in the Question Palette at the right of
            your screen to go to a question.
          </li>
          <li>
            <b>Note that using this option does NOT save your answer.</b>
          </li>
          <li>
            Click on&nbsp;<b>Save &amp; Next&nbsp;</b> to save your answer for a
            question and then move to the next question.
          </li>
          <li>
            If you want to keep a question marked for review, click on&nbsp;the
            button <b>Mark for Review &amp; Next</b>&nbsp;to save your answer
            for the current question and then proceed to the next question.
            <br />
            <br />
          </li>
        </ul>

        <div className='col-md-9 show_before_exam_start'>
          <a
            href='http://localhost:8080/test'
            type='button'
            className='btn btn-primary btn-lg float-left'
          >
            <span className='temp-text '>Previous</span>
          </a>
        </div>
        <div className='row-md-9 show_before_exam_start'>
          <button type='button' className='btn btn-success btn-lg float-right'>
            <span className='temp-text '>Start Test</span>
            <span className='icon'>→</span>
          </button>
        </div>
        <div>
          {' '}
          <p>
            <br />
            <br />
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

const connectedgenInst1 = connect(mapStateToProps)(genInst1)
export { connectedgenInst1 as genInst1 }
