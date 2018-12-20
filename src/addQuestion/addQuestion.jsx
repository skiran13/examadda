import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from '../_actions'
import config from 'config';

class addQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examcode: '',
      title: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: ''

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  commentDidMount() {
    this.props.dispatch(userActions.getAll())
  }
  handleChange(e) {                                                                         /*function to parse the input data*/
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {                                                                         /*function to post the data using a POST request */
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    fetch(`${config.apiUrl}/admin/addquestion`, requestOptions);
    const { dispatch } = this.props;
    dispatch(alertActions.success('Question Added Successfully'));
  }

  render() {

    const { user, users } = this.props
    const { examcode, title, image, option1, option2, option3, option4, correct } = this.state
    return (
      (user.isAdmin) ? (                                                                   /*conditional rendering to render pages with additional functionality such as add and view questions and exams*/
        <div className='jumbotron'>
          <div className='container' id='wrap'>
            <div style={{ display: 'grid', 'grid-auto-flow': 'column' }}>
              <a
                className='btn btn-primary float-right mb-4'
                href='/viewquestion'
                role='button'
              >
                View Questions
            </a>
              <br />
              <a className='btn btn-primary mb-4' href='/admindashboard' role='button'>
                Back to Dashboard
          </a>
            </div>
            <div class="card">
              <div class="card-header">
                Enter Question Details </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <form onSubmit={this.handleSubmit} role='form'>
                    <div className='form-group'>
                      <label for='title'>For exam:</label>
                      <input
                        className='form-control'
                        name='examcode'
                        type='text'
                        placeholder='Exam Code'
                        value={examcode}
                        required='true'
                        onChange={this.handleChange}
                      />
                      <label for='title'>Title:</label>

                      <input
                        className='form-control'
                        name='title'
                        type='text'
                        placeholder='Enter the Question'
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
                        placeholder='Image url'
                        onChange={this.handleChange}
                      />
                      <label for='option1'>Option 1:</label>

                      <input
                        className='form-control'
                        name='option1'
                        type='text'
                        placeholder='Option 1'
                        required='true'
                        value={option1}
                        onChange={this.handleChange}
                      />
                      <label for='option2'>Option 2:</label>

                      <input
                        className='form-control'
                        name='option2'
                        type='text'
                        placeholder='Option 2'
                        value={option2}
                        required='true'
                        onChange={this.handleChange}
                      />
                      <label for='option3'>Option 3:</label>

                      <input
                        className='form-control'
                        name='option3'
                        type='text'
                        placeholder='Option 3'
                        required='true'
                        value={option3}
                        onChange={this.handleChange}
                      />
                      <label for='option4'>Option 4:</label>

                      <input
                        className='form-control'
                        name='option4'
                        type='text'
                        placeholder='Option 4'
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
                    <button className='btn btn-success float-right block' type='submit' >
                      Submit</button>
                    <br />
                  </form>
                  <p>
                    <br />
                  </p>

                </blockquote>
              </div>
            </div>
          </div>
        </div>) : (<h1>{window.location.assign('/')}</h1>)
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

const connectedaddQuestion = connect(mapStateToProps)(addQuestion)
export { connectedaddQuestion as addQuestion }
