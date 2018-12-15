import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import config from 'config';

 
class ViewQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state={
        examcode:'' ,body:''
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
    fetch(`${config.apiUrl}/admin/api/viewquestions`, requestOptions).then(response => response.json())
    .then(body => this.setState({body: body}));
  }

  render () {

   
    const { user, users} = this.props
    const { examcode,body} = this.state
    return (
      <div className='jumbotron'>
        <div class="card">
  <div class="card-header">
  View Question </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
    <form onSubmit={this.handleSubmit} role='form'>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter code</label>
    <input className='form-control'
                name='examcode'
                type='text'
                placeholder='examcode'
                required='true'
                value={examcode}
                onChange={this.handleChange}/>
  </div>
  <button type="submit" class="btn btn-success mt-4 block">Submit</button><br/>
  </form>
      <div className="container mt-5">
      <ol>
      {  Object.keys(this.state.body).map(key => ( 
         <li><p>{this.state.body[key].title}</p>
        <ul>
        {Object.keys(this.state.body[key].options).map(op => ( <li>{this.state.body[key].options[op].name}</li>))}
  </ul></li>
))}</ol>
    </div>
    </blockquote>
    
   
  </div>
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

const connectedViewQuestion = connect(mapStateToProps)(ViewQuestion)
export { connectedViewQuestion as ViewQuestion }
