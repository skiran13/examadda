import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import '../css/NewTest.css'
import config from 'config'

class NewTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      examcode: '4',
      body: '',
      value: [],
      submit: false,
      mark: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    console.log(this.state)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }

    fetch(`${config.apiUrl}/admin/api/getquestion`, requestOptions)
      .then(response => response.json())
      .then(body => this.setState({ body: body }))
  }
  onChange (e) {
    const temp = { name: e.target.name, value: e.target.value }
    this.setState({ value: [...this.state.value, temp] })
  }
  handleSubmit (e) {
    e.preventDefault()
    const options = []
    let mark = 0
    console.log(this.state.value)
    Object.keys(this.state.body).map(key =>
      Object.keys(this.state.body[key].options).map(op =>
        this.state.body[key].options[op].correct == true
          ? options.push(op)
          : null
      )
    )
    Object.keys(options).map(key =>
      Object.keys(this.state.value).map(k =>
        this.state.value[k].name == key &&
        this.state.value[k].value == options[key]
          ? mark++
          : null
      )
    )
    this.setState({ submit: true, mark: mark })

    console.log('Mark', mark)
  }

  render () {
    const { user, users } = this.props
    const { examcode, body } = this.state
    console.log(this.state.body)

    return (
      <div className='jumbotron' style={{ 'background-color': '#dcdee0' }}>
        {!this.state.submit ? (
          <form onSubmit={this.handleSubmit}>
            {Object.keys(this.state.body).map(key => (
              <div class='card my-3'>
                <div class='card-header'>Question No.{Number(key) + 1} </div>
                <div class='card-body'>
                  <p>{this.state.body[key].title}</p>
                  <div className='container'>
                    {Object.keys(this.state.body[key].options).map(op => (
                      <div class='row'>
                        <div class='col'>
                          <div class='form-check'>
                            <input
                              class='form-check-input'
                              type='radio'
                              name={key}
                              id={'exampleRadios' + key}
                              value={op}
                              onChange={this.onChange}
                            />
                            <label
                              class='form-check-label'
                              for={'exampleRadios' + key}
                            >
                              {this.state.body[key].options[op].name}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button type='submit' class='btn btn-success mt-4 block'>
              Submit
            </button>
            <br />
          </form>
        ) : (
          <div class='container' style={{ padding: '0% 0% 0% 40%' }}>
            <div class='row'>
              <div class='row-lg' id='TestCard'>
                <div className='card card-1 col-md-12 text-md-center'>
                  <br />
                  <i class='fas fa-check fa-7x' />

                  <div className='card-body'>
                    <h3 className='card-title'>RESULT</h3>
                    <p className='card-text'>
                      <h4>Your Score is : {this.state.mark}</h4>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

const connectedNewTest = connect(mapStateToProps)(NewTest)
export { connectedNewTest as NewTest }
