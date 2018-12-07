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
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="#">Exam-Adda</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:8080/land">Home</a>
  </li>
  <li className="nav-item dropdown show">
    <a className="nav-link dropdown-toggle" href="http://localhost:8080/exam" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Exams</a>
    <div class="dropdown-menu hide" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>      
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:8080/test" >
      Tests
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="http://localhost:8080/forum">Forum</a>
  </li>
  
  <li className="nav-item">
    <a className="nav-link active" href="http://localhost:8080/login"><blink>Login</blink></a>
  </li>
  <li className="nav-item">
  <a  href="http://localhost:8080/register"><button type="button" class="btn btn-outline-light">Signup</button></a>
  </li>
</ul>
</div>
</nav>
        </div>
            <div className="jumbotron" >
                <div className="container">
                    <div >
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/land" component={LandingPage} />
                                <Route path="/exam" component={ExamPage} />

                  <Route path='/FEDbank' component={FEDbank} />
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
