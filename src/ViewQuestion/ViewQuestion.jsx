import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'


class ViewQuestion extends React.Component {
  commentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

  render () {
    const { user, users } = this.props
    return (
      <div className='jumbotron'>
        <div class="card">
  <div class="card-header">
  View Question </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter code</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter code"/>
  </div>
  </form>
      <div className="container">
      <p>1. What is your favourite drink?</p>
      <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Halp lassi</li>
  <li>Pull lassi</li>
</ul>
<p>2. What is your favourite song?</p>
      <ul>
  <li>KIKI</li>
  <li>Good guy</li>
  <li>hihihi</li>
  <li>gopi trans bgm</li>
</ul>
    </div>
    </blockquote>
    
    <button type="button" class="btn btn-success mt-4 block">Next</button>
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
