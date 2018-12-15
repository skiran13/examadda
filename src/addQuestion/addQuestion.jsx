import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import config from 'config';

class addQuestion extends React.Component {
constructor(props){
  super(props);
  this.state={
      examcode:'',
      title:'',
      image:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      correct:''    
      
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
} 
 
  commentDidMount () {
    this.props.dispatch(userActions.getAll())
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

  handleSubmit(e){
    e.preventDefault();
const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    fetch(`${config.apiUrl}/admin/addquestion`, requestOptions).then(handleResponse);
  }

  render () {
    const { user, users } = this.props
    const { examcode,title,image,option1,option2,option3,option4,correct} = this.state
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
          <form onSubmit={this.handleSubmit} role='form'>
            <div className='form-group'>
              <label for='title'>For exam:</label>
              <input
                className='form-control'
                name='examcode'
                type='text'
                placeholder='examcode'
                value={examcode}
                required='true'
                onChange={this.handleChange}
              />
              <label for='title'>Title:</label>

              <input
                className='form-control'
                name='title'
                type='text'
                placeholder='question tile'
                value={title}
                required='true'
                onChange={this.handleChange}
              />
              <label for='image'>Image(optional):</label>

              <input
                className='form-control'
                name='image'
                type='text'
                value={image}
                placeholder='url'
                onChange={this.handleChange}
              />
              <label for='option1'>Option 1:</label>

              <input
                className='form-control'
                name='option1'
                type='text'
                placeholder=''
                required='true'
                value={option1}
                onChange={this.handleChange}
              />
              <label for='option2'>Option 2:</label>

              <input
                className='form-control'
                name='option2'
                type='text'
                placeholder=''
                value={option2}
                required='true'
                onChange={this.handleChange}
              />
              <label for='option3'>Option 3:</label>

              <input
                className='form-control'
                name='option3'
                type='text'
                placeholder=''
                required='true'
                value={option3}
                onChange={this.handleChange}
              />
              <label for='option4'>Option 4:</label>

              <input
                className='form-control'
                name='option4'
                type='text'
                placeholder=''
                required='true'
                value={option4}
                onChange={this.handleChange}
              />
              <label for='correct'>Correct Option:</label>

              <input
                className='form-control'
                name='correct'
                type='number'
                placeholder='1/2/3/4'
                value={correct}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button className='btn btn-primary float-right' type='submit' >
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
