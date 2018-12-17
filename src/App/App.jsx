import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from '../_helpers'
import { alertActions, userActions } from '../_actions'
import { PrivateRoute } from '../_components'
import '../css/landing-page.css'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { LandingPage } from '../LandingPage'
import { RegisterPage } from '../RegisterPage'
import { ExamPage } from '../ExamPage'
import { FEDbank } from '../FEDbank'
import { INDbank } from '../INDbank'
import { genINST } from '../genINST'
import { Tests } from '../Tests'
import { NewTest } from '../NewTest'
import { ProfilePage } from '../ProfilePage'
import { fedInst } from '../fedInst'
import { indianInst } from '../indianInst'
import { genInst1 } from '../genInst1'
import { fedInst1 } from '../fedInst1'
import { indianInst1 } from '../indianInst1'
import { ViewQuestion } from '../ViewQuestion'
import { addQuestion } from '../addQuestion'
import { addExam } from '../addExam'
import { deleteExam } from '../deleteExam'
import { ViewExam } from '../ViewExam'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { list: ['SBI PO', 'Federal Bank PO', 'Indian Bank PO'] }
    const { dispatch } = this.props
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    console.log(e.target.value)
    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        var value = $(this)
          .val()
          .toLowerCase()
        $(this.state.list).filter(function () {
          $(this).toggle(
            $(this)
              .text()
              .toLowerCase()
              .indexOf(value) > -1
          )
        })
      })
    })
  }

  render () {
    let isLoggedIn = this.props.stores.authentication.loggedIn
    let user = this.props.stores.authentication.user
    const { alert } = this.props
    console.log(this.props.stores.authentication, 'jiojaioj')
    return (
      <div>
        <div>
          <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='/'>
              <i className='fas fa-book-reader mr-2' />
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
                  onChange={this.handleChange}
                  style={{ width: '35vw' }}
                />
                <button
                  className='btn btn-outline-light my-2 my-sm-0 '
                  type='submit'
                  id='input'
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
                  <a className='nav-link' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Exams
                  </a>
                  <div
                    className='dropdown-menu hide'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='/exam'>
                      SBI PO
                    </a>
                    <a className='dropdown-item' href='/FEDbank'>
                      Federal Bank PO
                    </a>
                    <a className='dropdown-item' href='/INDbank'>
                      Indian Bank
                    </a>
                  </div>
                </li>
                {user && user.isAdmin ? (
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Add
                    </a>
                    <div
                      className='dropdown-menu hide'
                      aria-labelledby='navbarDropdown'
                    >
                      <a className='dropdown-item' href='/addexam'>
                        Add Exam
                      </a>
                      <a className='dropdown-item' href='/addquestion'>
                        Add Question
                      </a>
                      <a className='dropdown-item' href='/viewexam'>
                        View Exam
                      </a>
                      <a className='dropdown-item' href='/viewquestion'>
                        View Question
                      </a>
                    </div>
                  </li>
                ) : null}

                <li className='nav-item'>
                  <a className='nav-link' href='/test'>
                    Tests
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link ' href='/forum'>
                    Forum
                  </a>
                </li>

                {!isLoggedIn ? (
                  <div className='nav-item' style={{ display: '-webkit-box' }}>
                    <li className='nav-item'>
                      <a className='nav-link active' href='/login'>
                        Login
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='/register'>
                        <button type='button' className='btn btn-outline-light'>
                          Signup
                        </button>
                      </a>
                    </li>
                  </div>
                ) : (
                  <li className='nav-item'>
                    <div className='btn-group nav-link py-0 mt-1'>
                      <a
                        href='/'
                        role='button'
                        className='btn btn-sm btn-outline-light'
                      >
                        {user.firstName}
                      </a>

                      <button
                        type='button'
                        className='btn btn-sm btn-outline-light dropdown-toggle dropdown-toggle-split'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <span className='sr-only'>Toggle Dropdown</span>
                      </button>

                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='/profile'>
                          Profile
                        </a>
                        <a className='dropdown-item' href='/'>
                          Dashboard
                        </a>
                        <a
                          className='dropdown-item'
                          onClick={e => {
                            this.props.dispatch(userActions.logout())
                          }}
                          href='/'
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className='jumbotron' style={{ 'background-color': '#dcdee0' }}>
          <div className='container'>
            <div>
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <BrowserRouter history={history}>
                <div>
                  <PrivateRoute exact path='/' component={HomePage} />
                  <Route path='/login' component={LoginPage} />
                  <Route path='/register' component={RegisterPage} />
                  <Route path='/land' component={LandingPage} />
                  <Route path='/exam' component={ExamPage} />
                  <Route path='/FEDbank' component={FEDbank} />
                  <Route path='/INDbank' component={INDbank} />
                  <Route path='/genINST' component={genINST} />
                  <Route path='/profile' component={ProfilePage} />
                  <Route path='/test' component={Tests} />
                  <Route path='/newtest' component={NewTest} />
                  <Route path='/fedInst' component={fedInst} />
                  <Route path='/indianInst' component={indianInst} />
                  <Route path='/genInst1' component={genInst1} />
                  <Route path='/fedInst1' component={fedInst1} />
                  <Route path='/indianInst1' component={indianInst1} />
                  <Route path='/viewquestion' component={ViewQuestion} />
                  <Route path='/addQuestion' component={addQuestion} />
                  <Route path='/addExam' component={addExam} />
                  <Route path='/deleteExam' component={deleteExam} />{' '}
                  <Route path='/viewexam' component={ViewExam} />
                </div>
              </BrowserRouter>
            </div>
            <footer
              className='footer bg-light'
              style={{ 'border-radius': '10px' }}
            >
              <div className='container'>
                <div className='row'>
                  <div
                    className='col-lg-6 h-100 text-center text-lg-left my-auto'
                    style={{ color: 'darkslategrey' }}
                  >
                    <ul className='list-inline mb-2'>
                      <li className='list-inline-item'>
                        <a href='#' style={{ color: '#495057' }}>
                          About
                        </a>
                      </li>
                      <li className='list-inline-item'>&sdot;</li>
                      <li className='list-inline-item'>
                        <a href='#' style={{ color: '#495057' }}>
                          Contact
                        </a>
                      </li>
                      <li className='list-inline-item'>&sdot;</li>
                      <li className='list-inline-item'>
                        <a href='#' style={{ color: '#495057' }}>
                          Terms of Use
                        </a>
                      </li>
                      <li className='list-inline-item'>&sdot;</li>
                      <li className='list-inline-item'>
                        <a href='#' style={{ color: '#495057' }}>
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                    <p className='text-muted small mb-4 mb-lg-0'>
                      &copy; Your Website 2018. All Rights Reserved.
                    </p>
                  </div>
                  <div className='col-lg-6 h-100 text-center text-lg-right my-auto'>
                    <ul className='list-inline mb-0'>
                      <li className='list-inline-item mr-3'>
                        <a href='#'>
                          <i
                            className='fab fa-facebook fa-2x fa-fw'
                            style={{ color: '#495057' }}
                          />
                        </a>
                      </li>
                      <li className='list-inline-item mr-3'>
                        <a href='#'>
                          <i
                            className='fab fa-twitter-square fa-2x fa-fw'
                            style={{ color: '#495057' }}
                          />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <i
                            className='fab fa-instagram fa-2x fa-fw'
                            style={{ color: '#495057' }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
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
