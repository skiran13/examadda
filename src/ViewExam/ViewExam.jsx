import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import config from 'config';

 
class ViewExam extends React.Component {
  constructor(props){
    super(props);
    this.state={
      body:'',
      show: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  commentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

    handleSubmit(e){
        e.preventDefault();
        console.log('hello')
        fetch(`${config.apiUrl}/admin/api/viewexam`)
        .then(response => response.json())
        .then(body => this.setState({body: body , show:true}));

    }


  render () {
    
    return (
      <div className='jumbotron mt-5'>
      <h2 style={{'textAlign':'center'}}>Show Available Exams</h2>
      <form role='form' onSubmit={this.handleSubmit}>
      <button type="submit" class="btn btn-success block mt-3" >Show exams</button>
      </form>
      <div className="container mt-5">
      <table
          className='table table-bordered table-striped'
          style={{ 'border-radius': '5px' }}
        >
          {(this.state.show)?(<thead>
            <tr>
              <th scope='col'>Name of exam</th>
              <th scope='col'>Code</th>
            </tr>
          </thead>): null}
          <tbody>
          {  Object.keys(this.state.body).map(key => ( 
           
       

            <tr>
    
              <td><p>{this.state.body[key].name}</p></td>
              <td>{this.state.body[key].code}</td>
              
            </tr>
            ))}  
            </tbody>
         </table>
      
      
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

const connectedViewExam = connect(mapStateToProps)(ViewExam)
export { connectedViewExam as ViewExam }
