import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import '../css/NewTest.css'
import config from 'config';

class NewTest extends React.Component {

  constructor(props){
    super(props);
    this.state={
        examcode:'4' ,body:'',value:[{'':''}]
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }


  componentDidMount () {
    console.log(this.state)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    
    fetch(`${config.apiUrl}/admin/api/getquestion`, requestOptions).then(response => response.json())
    .then(body => this.setState({body: body}));
    
  } 
  onChange(e){
    
    this.setState(prevState => ({
      value: [...prevState.value, e.target.name:e.target.value]
    }))
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.value)
  }
  

  render () {
    
    const { user, users } = this.props
    const { examcode,body} = this.state
    console.log(this.state.value)
   
    return (
      <div className='jumbotron' style={{ 'background-color': '#dcdee0' }}>
      <form onSubmit={this.handleSubmit}>
        {Object.keys(this.state.body).map(key => (

        <div class="card my-3">
  <div class="card-header">
    Question No.{Number(key)+1}  </div>
  <div class="card-body">
    
      <p>{this.state.body[key].title}</p>
      <div className="container">
      
       { Object.keys(this.state.body[key].options).map(op => (
         <div class="row">
       <div class="col">
        <div class="form-check">
            <input class="form-check-input" type="radio" name={key} id={"exampleRadios"+key} value={"option"+op} onChange={this.onChange} />
            <label class="form-check-label" for={"exampleRadios"+key}>
            {this.state.body[key].options[op].name}
            </label>
        </div>
       </div>
       </div>))}
      
    </div>
   
  </div>
        </div>))}
        <button type="submit" class="btn btn-success mt-4 block">Submit</button><br/>
        </form>
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

const connectedNewTest = connect(mapStateToProps)(NewTest)
export { connectedNewTest as NewTest }
