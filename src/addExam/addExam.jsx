import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from '../_actions'
import config from 'config';

class addExam extends React.Component {
  constructor(props){
    super(props);
    this.state={
        examcode:'',
        title:'' ,
        link:'' 
        
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
    fetch(`${config.apiUrl}/admin/addexam`, requestOptions);
    const { dispatch } = this.props;
    dispatch(alertActions.success('Exam Added Successfully'));
  }

  render () {
    const { user, users } = this.props
    const { examcode,title,link} = this.state
    return (
      (user.isAdmin)?(
      <div className='jumbotron'>
      <div className='container' id='wrap'>
        <div className='page-header'>
          <h3> 
            Enter Exam Details
          </h3>
          <a className='btn btn-primary my-4' href='/admindashboard' role='button'>
            Back to Dashboard
          </a>
        </div>
        <div class="card">
  <div class="card-header">
  Enter Exam Details </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
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
                value={title}
                onChange={this.handleChange}
              />
               <label for='link'>
                <br />
                Link:
              </label>

              <input
                className='form-control'
                name='link'
                type='text'
                placeholder='Link'
                required='true'
                value={link}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button className='btn btn-success block' type='submit'>
              Submit
            </button>
          </form>
          </blockquote>
        </div>
      </div>
      </div>
      </div>):(<h1>{window.location.assign('/')}</h1>)
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
