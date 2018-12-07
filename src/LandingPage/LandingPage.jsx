import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class LandingPage extends React.Component {
  componentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

  render () {
    const { user, users } = this.props
    return (
      <div>
        <nav className='navbar navbar-light bg-light static-top'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              {' '}
              <Link style={{ color: 'black' }} to='/land'>
                <h3>Exam-Adda</h3>
              </Link>
            </a>
            <Link className='x' to='/login'>
              <a className='btn btn-primary'> Sign In</a>
            </Link>
          </div>
        </nav>

        <header className='masthead text-white text-center'>
          <div className='overlay' />
          <div className='container'>
            <div className='row'>
              <div className='col-xl-9 mx-auto'>
                <h1 className='mb-5'>
                  Online Test Series & Free Mock Tests For Competitive Exams in
                  India
                </h1>
                <h5>
                  Boost your exam preparation with Testbook to crack the most
                  popular competitive exams in India. Select your course and get
                  started.
                </h5>
                <br />
              </div>
              <div className='col-md-10 col-lg-8 col-xl-7 mx-auto'>
                <form>
                  <div className='form-row'>
                    <div className='col-12'>
                      <Link className='x' to='/login'>
                        <button
                          type='submit'
                          className='btn btn-block btn-lg btn-primary'
                        >
                          Sign up!
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section className='features-icons bg-light text-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={require('../img/sbi.jpg')}
                    alt='Card image cap'
                  />
                  <div classNames='card-body'>
                    <Link to='/exam' style={{ color: 'black' }}>
                      <h5 className='card-title'> SBI PO</h5>
                      <p className='card-text'>
                        Study Materials, Mock Tests, Live tests and much more..
                      </p>
                      <br />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={require('../img/fb.png')}
                    alt='Card image cap'
                  />
                  <div classNames='card-body'>
                    <Link to='/FEDbank' style={{ color: 'black' }}>
                      <h5 className='card-title'>
                        <br /> <br /> <br />
                        Federal Bank PO
                      </h5>
                      <p className='card-text'>
                        {' '}
                        Study Materials, Mock Tests, Live tests and much more..
                      </p>
                      <br />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={require('../img/icici.jpg')}
                    alt='Card image cap'
                  />
                  <div classNames='card-body'>
                    <Link to='/exam' style={{ color: 'black' }}>
                      <h5 className='card-title'> PO</h5>
                      <p className='card-text'>
                        Study Materials, Mock Tests, Live tests and much more..
                      </p>
                      <br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='showcase'>
          <div className='container-fluid p-0'>
            <div className='row no-gutters'>
              <div className='col-lg-6 order-lg-2 text-white showcase-img' />
              <div className='col-lg-6 order-lg-1 my-auto showcase-text'>
                <h2>Questions Expected In Actual Exams And More!</h2>
                <p className='lead mb-0'>
                  Every question, every solution, meticulously created by our
                  team of toppers and experts, based on the latest exam
                  patterns. The mock tests are the closest exam experience you
                  will find to the actual paper.
                </p>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col-lg-6 text-white showcase-img' />
              <div className='col-lg-6 my-auto showcase-text'>
                <h2>Detailed & Personalised Performance Analysis</h2>
                <p className='lead mb-0'>
                  Studying and taking tests go hand-in-hand with performance
                  analysis. We give you the most in-depth analysis for every
                  test you take so that you can track your growth in each topic
                  test-by-test.
                </p>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col-lg-6 order-lg-2 text-white showcase-img' />
              <div className='col-lg-6 order-lg-1 my-auto showcase-text'>
                <h2>The Fastest Online Learning Experience</h2>
                <p className='lead mb-0'>
                  We know about how precious your time is. Get the advantage of
                  the latest technology to kickstart your exam preparation and
                  get the finest learning experience - on Website and App. Check
                  them all out!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='testimonials text-center bg-light'>
          <div className='container'>
            <h2 className='mb-5'>What users are saying...</h2>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='testimonial-item mx-auto mb-5 mb-lg-0'>
                  <img
                    className='img-fluid rounded-circle mb-3'
                    src={require('../img/noimage.jpg')}
                    alt=''
                  />
                  <h5>User1</h5>
                  <p className='font-weight-light mb-0'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='testimonial-item mx-auto mb-5 mb-lg-0'>
                  <img
                    className='img-fluid rounded-circle mb-3'
                    src={require('../img/noimage.jpg')}
                    alt=''
                  />
                  <h5>User2</h5>
                  <p className='font-weight-light mb-0'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='testimonial-item mx-auto mb-5 mb-lg-0'>
                  <img
                    className='img-fluid rounded-circle mb-3'
                    src={require('../img/noimage.jpg')}
                    alt=''
                  />
                  <h5>User3</h5>
                  <p className='font-weight-light mb-0'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='call-to-action text-white text-center'>
          <div className='overlay' />
          <div className='container'>
            <div className='row'>
              <div className='col-xl-9 mx-auto'>
                <h2 className='mb-4'>Start Your Exam Preparation Now!</h2>
              </div>
              <div className='col-md-10 col-lg-8 col-xl-7 mx-auto'>
                <form>
                  <div className='form-row'>
                    <div className='col'>
                      <Link className='x' to='/login'>
                        <button
                          type='submit'
                          className='btn btn-block btn-lg btn-primary'
                        >
                          GET STARTED
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className='footer bg-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 h-100 text-center text-lg-left my-auto'>
                <ul className='list-inline mb-2'>
                  <li className='list-inline-item'>
                    <a href='#'>About</a>
                  </li>
                  <li className='list-inline-item'>&sdot;</li>
                  <li className='list-inline-item'>
                    <a href='#'>Contact</a>
                  </li>
                  <li className='list-inline-item'>&sdot;</li>
                  <li className='list-inline-item'>
                    <a href='#'>Terms of Use</a>
                  </li>
                  <li className='list-inline-item'>&sdot;</li>
                  <li className='list-inline-item'>
                    <a href='#'>Privacy Policy</a>
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
                      <i className='fab fa-facebook fa-2x fa-fw' />
                    </a>
                  </li>
                  <li className='list-inline-item mr-3'>
                    <a href='#'>
                      <i className='fab fa-twitter-square fa-2x fa-fw' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-instagram fa-2x fa-fw' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
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

const connectedLandingPage = connect(mapStateToProps)(LandingPage)
export { connectedLandingPage as LandingPage }
