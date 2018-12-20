import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import config from 'config';

class deleteExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examcode: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  commentDidMount() {
    this.props.dispatch(userActions.getAll())
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    fetch(`${config.apiUrl}/admin/deleteexam`, requestOptions);
  }


  render() {
    const { user, users } = this.props
    const { examcode } = this.state
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
            Enter Exam Detail
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
          <form onSubmit={this.handleSubmit} role='form'>
            <div className='form-group'>
              <label for='title'>Exam Code</label>
              <br />
              <input
                className='form-control'
                name='examcode'
                type='text'
                placeholder='examcode'
                required='true'
                value={examcode}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button className='btn btn-primary float-right' type='submit'>
              Submit
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

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

const connecteddeleteExam = connect(mapStateToProps)(deleteExam)
export { connecteddeleteExam as deleteExam }
