import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from '../_helpers'
import { alertActions } from '../_actions'
import { PrivateRoute } from '../_components'
import '../css/landing-page.css'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { LandingPage } from '../LandingPage'
import { RegisterPage } from '../RegisterPage'
import { ExamPage } from '../ExamPage'
import { FEDbank } from '../FEDbank'
import { INDbank } from '../INDbank'

class App extends React.Component {
  constructor (props) {
    super(props)

    const { dispatch } = this.props
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }

  render () {
    const { alert } = this.props
    return (
      <div>
        <div>
          <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='http://localhost:8080/land'>
            <i class="fas fa-book-reader mr-2"/>
              Exam-Adda
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <ul className='navbar-nav mr-ml-auto'>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                style={{'width':'35vw'}}
              />
              <button
                className='btn btn-outline-light my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>
            </ul>
            <div
              className='collapse navbar-collapse ml-10'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='http://localhost:8080/land'>
                    Home
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='http://localhost:8080/exam'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Exams
                  </a>
                  <div
                    class='dropdown-menu hide'
                    aria-labelledby='navbarDropdown'
                  >
                    <a class='dropdown-item' href='http://localhost:8080/exam'>
                      SBI PO
                    </a>
                    <a
                      class='dropdown-item'
                      href='http://localhost:8080/FEDbank'
                    >
                      Federal Bank PO
                    </a>
                    <a
                      class='dropdown-item'
                      href='http://localhost:8080/INDbank'
                    >
                      Indian Bank
                    </a>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='http://localhost:8080/test'>
                    Tests
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link ' href='http://localhost:8080/forum'>
                    Forum
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    href='http://localhost:8080/login'
                  >
                    Login
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='http://localhost:8080/register'>
                    <button type='button' class='btn btn-outline-light'>
                      Signup
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='jumbotron' style={{'background-color':'#dcdee0'}}>
          <div className='container'>
            <div>
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <Router history={history}>
                <div>
                  <PrivateRoute exact path='/' component={HomePage} />
                  <Route path='/login' component={LoginPage} />
                  <Route path='/register' component={RegisterPage} />
                  <Route path='/land' component={LandingPage} />
                  <Route path='/exam' component={ExamPage} />
                  <Route path='/FEDbank' component={FEDbank} />
                  <Route path='/INDbank' component={INDbank} />
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { alert } = state
  return {
    alert
  }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
