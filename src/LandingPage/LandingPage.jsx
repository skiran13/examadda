import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LandingPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#"> <Link style={{'color':'black'}} to="/land">Exam-Adda</Link></a>
        <Link className='x' to="/login"><a className="btn btn-primary" > Sign In</a></Link>
      </div>
    </nav>

 
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Online Test Series & Free Mock Tests For Competitive Exams in India</h1>
            <h5>Boost your exam preparation with Testbook to crack the most popular competitive exams in India. Select your course and get started.</h5>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12">
                <Link className='x' to="/login"><button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>

    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="card">
  <img className="card-img-top" src={require("../img/sbi.jpg")} alt="Card image cap"/>
  <div classNames="card-body">
    <h5 className="card-title">SBI PO</h5>
    <p className="card-text">Study Materials, Mock Tests, Live tests and much more..</p>
  </div>
  </div>
</div>
          <div className="col-lg-4">
          <div className="card">
  <img className="card-img-top" src={require("../img/hdfc.jpg")} alt="Card image cap"/>
  <div classNames="card-body">
    <h5 className="card-title">HDFC PO</h5>
    <p className="card-text">Study Materials, Mock Tests, Live tests and much more..</p>
  </div>
  </div>
    </div>
          <div className="col-lg-4">
          <div className="card">
  <img className="card-img-top" src={require("../img/icici.jpg")} alt="Card image cap"/>
  <div classNames="card-body">
    <h5 className="card-title">ICICI PO</h5>
    <p className="card-text">Study Materials, Mock Tests, Live tests and much more..</p>
  </div>
  </div>
          </div>
        </div>
      </div>
    </section>

    <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row no-gutters">

          <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 text-white showcase-img" ></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 4</h2>
            <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use &amp; Customize</h2>
            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
          </div>
        </div>
      </div>
    </section>

  
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src={require("../img/testimonials-1.jpg")} alt=""/>
              <h5>Margaret E.</h5>
              <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src={require("../img/testimonials-2.jpg")} alt=""/>
              <h5>Fred S.</h5>
              <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src={require("../img/testimonials-3.jpg")} alt=""/>
              <h5>Sarah	W.</h5>
              <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="call-to-action text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                </div>
                <div className="col-12 col-md-3">
                  <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export { connectedLandingPage as LandingPage };