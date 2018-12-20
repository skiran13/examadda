import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'
import $ from 'jquery'
import '../css/ProfilePage.css'

class ProfilePage extends React.Component {


    componentDidMount() {
        this.props.dispatch(userActions.getAll())

        $(document).ready(function () {


            var readURL = function (input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('.avatar').attr('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }


            $(".file-upload").on('change', function () {
                readURL(this);
            });
        });
    }


    render() {
        const { user, users } = this.props
        return (
            <div class="jumbotron mt-3">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>User Profile</h2>
                <div class="container bootstrap snippet">
                    <div class="row">

                    </div>
                    <div class="row">
                        <div class="col-sm-3">


                            <div class="text-center">
                                <img id="profilepic" src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6 class="topbot">Upload a different photo...</h6>
                                <input type="file" class="text-center center-block file-upload" />
                            </div><br />


                            <div class="panel panel-default">
                                <div class="panel-heading mb-1"><strong>Social Media</strong></div>
                                <div class="panel-body">
                                    <i class="fab fa-facebook fa-2x mx-2"></i> <i class="fab fa-github fa-2x mx-2"></i> <i class="fab fa-twitter fa-2x mx-2"></i>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-9">


                            <div class="tab-content">
                                <div class="tab-pane active" id="home">

                                    <form class="form" action="##" method="post" id="registrationForm">
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="first_name"><h4>First Name</h4></label>
                                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" title="enter your first name if any." />
                                            </div>
                                        </div>
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="last_name"><h4>Last Name</h4></label>
                                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" title="enter your last name if any." />
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="phone"><h4>Phone</h4></label>
                                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Phone" title="enter your phone number if any." />
                                            </div>
                                        </div>


                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="email"><h4>Email</h4></label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                            </div>
                                        </div>



                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="password"><h4>Password</h4></label>
                                                <input type="password" class="form-control" name="password" id="password" placeholder="Password" title="enter your password." />
                                            </div>
                                        </div>
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="password2"><h4>Verify Password</h4></label>
                                                <input type="password" class="form-control" name="password2" id="password2" placeholder="Password" title="Enter your password2." />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-12">
                                                <br />
                                                <button class="btn btn-lg btn-success mr-2" type="submit"><i class="fas fa-check"></i> Save</button>
                                                <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

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

const connectedProfilePage = connect(mapStateToProps)(ProfilePage)
export { connectedProfilePage as ProfilePage }
