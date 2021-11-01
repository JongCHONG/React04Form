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
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange (e) {
    const emailfilter = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    let emailValidation = emailfilter.test(e.target.value)
    this.setState({ email: e.target.value })
    if (emailValidation === true) {
      this.setState({ emailIsValid: true })
    }
    // console.log(this.state.email)
  }
  handlePasswordChange (e) {
    let passwordValidation = e.target.value.length
    this.setState({ password: e.target.value })
    if (passwordValidation === 5) {
      this.setState({ passwordIsValid: true })
    }
  }
  handleRememberMeChange (e) {
    console.log("rm" + this.state.rememberMe);
    if (e.target.value === "on" && this.state.rememberMe === true) {
      this.setState({ rememberMe: false })
    } else {
      this.setState({ rememberMe: true })
    }
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
              className={
                this.state.email === "" ? "form-control" : 
                this.state.emailIsValid === false ? "form-control border-danger" :
                this.state.emailIsValid === true && "form-control border-success"
              }
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              onChange={this.handlePasswordChange} 
              className={
                this.state.password === "" ? "form-control" : 
                this.state.passwordIsValid === false ? "form-control border-danger" :
                this.state.passwordIsValid === true && "form-control border-success"
              }
            />
          </div>
          <div className="mb-3 form-check">
            <input 
              type="checkbox" 
              onChange={this.handleRememberMeChange} 
              className="form-check-input"
            />
            <label className="form-check-label">Remember me?</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

}
export default App