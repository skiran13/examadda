import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'

class addExam extends React.Component {
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
            Enter Exam Details
            <br />
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
              <label for='title'>Exam Code</label>
              <br />
              <input
                className='form-control'
                name='examcode'
                type='text'
                placeholder='examcode'
                required='true'
              />
              <label for='title'>
                <br />
                Title:
              </label>

              <input
                className='form-control'
                name='title'
                type='text'
                placeholder='exam tile'
                required='true'
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

const connectedaddExam = connect(mapStateToProps)(addExam)
export { connectedaddExam as addExam }
