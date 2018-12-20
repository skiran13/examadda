import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import '../css/NewTest.css'

class NewTest extends React.Component {
  commentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { user, users } = this.props
    return (
      <div className='jumbotron' style={{ 'background-color': '#dcdee0' }}>
        <div class="card">
          <div class="card-header">
            Question No. 100  </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>What is diffusion?</p>
              <div className="container">
                <div class="row">
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                        Default radio
            </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                        Default radio
            </label>
                    </div>
                  </div>
                </div>

                <div class="row mt-4" id="item">
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                        Default radio
            </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                        Default radio
            </label>
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>

            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-warning mt-4 block">Prev</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-success mt-4 block">Next</button>
              </div>
            </div>
          </div>
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

const connectedNewTest = connect(mapStateToProps)(NewTest)
export { connectedNewTest as NewTest }
