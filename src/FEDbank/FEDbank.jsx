import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'
import '../css/ExamPage.css'

class FEDbank extends React.Component {
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
                to='/land'
                style={{ 'text-decoration': 'none', color: 'black' }}
              >
                Home
              </Link>
            </li>
            <li className='breadcrumb-item'>
              <Link
                to='/land'
                style={{ 'text-decoration': 'none', color: 'black' }}
              >
                Exams
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Federal Bank PO
            </li>
          </ol>
        </nav>
        <nav
          classNameName='navbar navbar-light bg-light static-top'
          style={{
            'border-top-right-radius': '10px',
            'border-top-left-radius': '10px'
          }}
        >
          <div classNameName='container'>
            <a classNameName='navbar-brand' href='#'>
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

        <header classNameName='masthead text-white text-center'>
          <div classNameName='overlay' />
          <div classNameName='container'>
            <div classNameName='row'>
              <div classNameName='col-xl-9 mx-auto'>
                <h1 classNameName='mb-5'>Federal Bank PO</h1>
                <h5>
                  Federal Bank PO 2018 Exam is a wonderful opportunity for you
                  to turn your dreams into reality! Get all information about
                  Federal Bank PO Exam Date 2018, Salary, Syllabus, Preparation
                  Guide, Admit Card, Latest Exam Pattern and Results here.
                  Kickstart your preparation with Online Test Series now!
                </h5>
              </div>
              <div classNameName='col-md-10 col-lg-8 col-xl-7 mx-auto'>
                <form>
                  <div classNameName='form-row'>
                    <div classNameName='col-12'>
                      <Link
                        classNameName='x'
                        to='/login'
                        style={{ 'text-decoration': 'none' }}
                      >
                        <button
                          type='submit'
                          classNameName='btn btn-block btn-lg btn-success mt-3'
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
              <div classNameName='card mb-4'>
                <br />
                <img
                  classNameName='card-img-top'
                  src={require('../img/fb.png')}
                  alt='Card image cap'
                />
                <div classNameName='card-body'>
                  <h5 classNameName='card-title'>
                    Federal Bank PO - Memory Based Paper
                  </h5>
                  <p classNameName='card-text'>
                    <b>150</b> QUESTIONS
                    <hr />
                    <b>150</b> MARKS
                    <hr />
                    <b>90</b> MINUTES
                    <hr />
                  </p>

                  <a
                    href='http://localhost:8080/genINST'
                    classNameName='btn btn-primary btn btn-block'
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
                <div classNameName='card'>
                  <div classNameName='card-body'>
                    <h3 classNameName='card-title text-center'>YEARLY PRICE</h3>
                    <p classNameName='card-text'>
                      <center>
                        <b>₹599</b> for 12 months
                      </center>
                    </p>
                    <a href='#' classNameName='btn btn-success btn btn-block'>
                      BUY PASS
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm'>
                <div classNameName='card'>
                  <div classNameName='card-body'>
                    <h3 classNameName='card-title text-center'>4 MONTHS PRICE</h3>
                    <p classNameName='card-text'>
                      <center>
                        <b>₹400</b> for 4 months
                      </center>
                    </p>
                    <a href='#' classNameName='btn btn-danger btn btn-block'>
                      BUY PASS
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm'>
                <div classNameName='card'>
                  <div classNameName='card-body'>
                    <h3 classNameName='card-title text-center'>2 MONTHS PRICE</h3>
                    <p classNameName='card-text'>
                      <center>
                        <b>₹200</b> for 2 months
                      </center>
                    </p>
                    <a href='#' classNameName='btn btn-warning btn btn-block'>
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
            <h1>Federal Bank PO Prelims Exam Analysis</h1>
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
            <h2>Federal Bank PO 2018 Exam Pattern</h2>
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
                <td>Composite Time of 90 mins</td>
              </tr>
              <tr>
                <th scope='row'>Quantitative Aptitude</th>
                <td>30</td>
                <td>30</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>Reasoning Ability</th>
                <td>30</td>
                <td>30</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>General,Socio-Economic & Banking</th>
                <td>25</td>
                <td>25</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>Computer Awareness</th>
                <td>20</td>
                <td>20</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>Digital Banking</th>
                <td>15</td>
                <td>15</td>
                <td />
              </tr>
              <tr>
                <th scope='row'>TOTAL</th>
                <td>150</td>
                <td>150</td>
                <td />
              </tr>
            </tbody>
          </table>
          <center>
            <h1>Federal Bank PO 2018 Exam Dates & Schedule</h1>
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
            <h1>Federal Bank PO 2018 Vacancy list</h1>
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
            <h1>Federal Bank PO 2018 Eligibility Criteria</h1>
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

const connectedFEDbank = connect(mapStateToProps)(FEDbank)
export { connectedFEDbank as FEDbank }
