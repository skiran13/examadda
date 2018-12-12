import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'

class Tests extends React.Component {
  commentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

  render () {
    const { user, users } = this.props
    return (
      <div className='jumbotron' style={{ 'background-color': '#dcdee0' }}>
        <div class='row'>
          <div class='col-sm-3'>
            <div class='card'>
              <div className='card mb-4' style={{ 'border-radius': '10px' }}>
                <img
                  className='card-img-top'
                  src={require('../img/sbi.jpg')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    SBI PO - Memory Based Paper
                    <br />
                    <br />
                  </h5>
                  <p className='card-text'>
                    <b>100</b> QUESTIONS
                    <hr />
                    <b>100</b> MARKS
                    <hr />
                    <b>60</b> MINUTES
                    <hr />
                  </p>

                  <a
                    href='http://localhost:8080/genINST'
                    className='btn btn-primary btn btn-block'
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm' />
            <div className='col-sm' />
          </div>
          <div class='col-sm-3'>
            <div class='card'>
              <div className='card mb-4'>
                <br />
                <br />
                <br />
                <img
                  className='card-img-top'
                  src={require('../img/fb.png')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <br />
                    <br />
                    <br />
                    Federal Bank PO - Memory Based Paper
                  </h5>
                  <p className='card-text'>
                    <b>150</b> QUESTIONS
                    <hr />
                    <b>150</b> MARKS
                    <hr />
                    <b>90</b> MINUTES
                    <hr />
                  </p>

                  <a
                    href='http://localhost:8080/genINST'
                    className='btn btn-primary btn btn-block'
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div class='col-sm' />
            <div class='col-sm' />
          </div>
          <div class='col-sm-3'>
            <div class='card'>
              <div className='card mb-4'>
                <br />

                <br />
                <img
                  className='card-img-top'
                  src={require('../img/ib.jpg')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <br />
                    <br />
                    <br />
                    Indian Bank PO - Memory Based Paper
                  </h5>
                  <p className='card-text'>
                    <b>100</b> QUESTIONS
                    <hr />
                    <b>100</b> MARKS
                    <hr />
                    <b>60</b> MINUTES
                    <hr />
                  </p>

                  <a
                    href='http://localhost:8080/genINST'
                    className='btn btn-primary btn btn-block'
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm' />
            <div className='col-sm' />
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

const connectedTests = connect(mapStateToProps)(Tests)
export { connectedTests as Tests }
