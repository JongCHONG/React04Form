import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange (e) {
    const emailfilter = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    let emailIsValid = emailfilter.test(e.target.value)
    console.log(emailIsValid)
    this.setState({ email: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    // console.log(this.state)
  }

  render() {
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="mb-3">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              onChange={this.handleEmailChange} 
              className="form-control border-danger" 
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label">Remember me?</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

}
export default App