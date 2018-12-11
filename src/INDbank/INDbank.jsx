import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'
import '../css/ExamPage.css'

class INDbank extends React.Component {
  componentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

  render () {
    const { user, users } = this.props
    return (
      <div>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link
                style={{ 'text-decoration': 'none', color: 'black' }}
                to='/land'
              >
                Home
              </Link>
            </li>
            <li className='breadcrumb-item'>
              <Link
                style={{ 'text-decoration': 'none', color: 'black' }}
                to='/exam'
              >
                Exams
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Indian Bank PO
            </li>
          </ol>
        </nav>
        <nav
          className='navbar navbar-light bg-light static-top'
          style={{
            'border-top-right-radius': '10px',
            'border-top-left-radius': '10px'
          }}
        >
          <div className='container'>
            <a className='navbar-brand' href='#'>
              {' '}
              <Link
                style={{ 'text-decoration': 'none', color: 'black' }}
                to='/land'
              >
                <h4>
                  <i className='fas fa-book-reader mr-2' />
                  Exam-Adda
                </h4>
              </Link>
            </a>
          </div>
        </nav>

        <header className='masthead text-white text-center'>
          <div className='overlay' />
          <div className='container'>
            <div className='row'>
              <div className='col-xl-9 mx-auto'>
                <h1 className='mb-5'>Indian Bank PO Exam 2018</h1>
                <h5>
                  Indian Bank PO 2018 Exam is a wonderful opportunity for you to
                  turn your dreams into reality! Get all information about
                  Indian Bank PO Exam Date 2018, Salary, Syllabus, Preparation
                  Guide, Admit Card, Latest Exam Pattern and Results here.
                  Kickstart your preparation with Online Test Series now!
                </h5>
              </div>
              <div className='col-md-10 col-lg-8 col-xl-7 mx-auto'>
                <form>
                  <div className='form-row'>
                    <div className='col-12'>
                      <Link
                        className='x'
                        to='/login'
                        style={{ 'text-decoration': 'none' }}
                      >
                        <button
                          type='submit'
                          className='btn btn-block btn-lg btn-success mt-3'
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

        <div className='container'>
          <div className='row'>
            <div className='col-sm' id='TestCard'>
              <div className='card mb-4'>
                <img
                  className='card-img-top'
                  src={require('../img/ib.jpg')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
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

        <div
          className='jumbotron jumbotron-fluid'
          style={{ 'border-radius': '10px' }}
        >
          <div className='container'>
            <h1>
              <center id='Price'>One Pass. All Exams. Unlimited Tests</center>
            </h1>
            <div className='row'>
              <div className='col-sm'>
                <div className='card'>
                  <div className='card-body'>
                    <h3 className='card-title text-center'>YEARLY PRICE</h3>
                    <p className='card-text'>
                      <center>
                        <b>₹599</b> for 12 months
                      </center>
                    </p>
                    <a href='#' className='btn btn-success btn btn-block'>
                      BUY PASS
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm'>
                <div className='card'>
                  <div className='card-body'>
                    <h3 className='card-title text-center'>4 MONTHS PRICE</h3>
                    <p className='card-text'>
                      <center>
                        <b>₹400</b> for 4 months
                      </center>
                    </p>
                    <a href='#' className='btn btn-danger btn btn-block'>
                      BUY PASS
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm'>
                <div className='card'>
                  <div className='card-body'>
                    <h3 className='card-title text-center'>2 MONTHS PRICE</h3>
                    <p className='card-text'>
                      <center>
                        <b>₹200</b> for 2 months
                      </center>
                    </p>
                    <a href='#' className='btn btn-warning btn btn-block'>
                      BUY PASS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <container>
          <center>
            <h1>Indian Bank PO Prelims Exam Analysis</h1>
          </center>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <center>
            <h2>Indian Bank PO 2018 Exam Pattern</h2>
            <br />
          </center>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Section</th>
                <th scope='col'>No. of Qs</th>
                <th scope='col'>Marks</th>
                <th scope='col'>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>English Language</th>
                <td>30</td>
                <td>30</td>
                <td>Composite time of 1 hour</td>
              </tr>
              <tr>
                <th scope='row'>Quantitative Aptitude</th>
                <td>35</td>
                <td>35</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>Reasoning Ability</th>
                <td>35</td>
                <td>35</td>
              </tr>
              <tr>
                <th scope='row'>TOTAL</th>
                <td>100</td>
                <td>100</td>
                <td />
              </tr>
            </tbody>
          </table>
          <center>
            <h1>Indian Bank PO 2018 Exam Dates & Schedule</h1>
          </center>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <center>
            <h1>Indian Bank PO 2018 Vacancy list</h1>
          </center>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
          <center>
            <h1>Indian Bank PO 2018 Eligibility Criteria</h1>
          </center>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </container>
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

const connectedINDbank = connect(mapStateToProps)(INDbank)
export { connectedINDbank as INDbank }
