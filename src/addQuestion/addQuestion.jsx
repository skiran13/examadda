import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'

class addQuestion extends React.Component {
  commentDidMount () {
    this.props.dispatch(userActions.getAll())
  }
  render () {
    const { user, users } = this.props
    return (
      <div className='container' id='wrap'>
        <div className='header clearfix'>
          <nav>
            <ul className='nav nav-pills pull-right'>
              <li className='active' role='presentation'>
                <a href='http://localhost:8080/land'>
                  <br />
                  Home
                  <br />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <h2 className='projecttitle'>
          <br />
          Online-Objective-Examination-System
        </h2>
        <div className='page-header'>
          <h3>
            Enter Question Details
            <br />
            <br />
            <a
              className='btn btn-primary'
              href='/admin/viewquestions'
              role='button'
            >
              View Questions
            </a>
          </h3>
          <br />
          <a className='btn btn-primary' href='/admindashboard' role='button'>
            Back to Dashboard
          </a>
        </div>
        <div className='messages'>
          <span className='label label-danger text-center block-center center-block msg' />
          <br />
        </div>
        <div className='content'>
          <form action='/admin/addquestion' method='POST' role='form'>
            <div className='form-group'>
              <label for='title'>For exam:</label>
              <input
                className='form-control'
                name='examcode'
                type='text'
                placeholder='examcode'
                required='true'
              />
              <label for='title'>Title:</label>

              <input
                className='form-control'
                name='title'
                type='text'
                placeholder='question tile'
                required='true'
              />
              <label for='image'>Image(optional):</label>

              <input
                className='form-control'
                name='image'
                type='text'
                placeholder='url'
              />
              <label for='option1'>Option 1:</label>

              <input
                className='form-control'
                name='option1'
                type='text'
                placeholder=''
                required='true'
              />
              <label for='option2'>Option 2:</label>

              <input
                className='form-control'
                name='option2'
                type='text'
                placeholder=''
                required='true'
              />
              <label for='option3'>Option 3:</label>

              <input
                className='form-control'
                name='option3'
                type='text'
                placeholder=''
                required='true'
              />
              <label for='option4'>Option 4:</label>

              <input
                className='form-control'
                name='option4'
                type='text'
                placeholder=''
                required='true'
              />
              <label for='correct'>Correct Option:</label>

              <input
                className='form-control'
                name='correct'
                type='number'
                placeholder='1/2/3/4'
              />
            </div>
            <br />
            <button className='btn btn-primary float-right' type='submit'>
              Submit{' '}
            </button>
            <br />
          </form>
          <p>
            <br />
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

const connectedaddQuestion = connect(mapStateToProps)(addQuestion)
export { connectedaddQuestion as addQuestion }
