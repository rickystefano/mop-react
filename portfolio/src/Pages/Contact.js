import React, { Component } from "react";
import "../Style/contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    social: [
      { name: "Git", src: "social-git.png" },
      { name: "Facebook", src: "social-fb.png" },
      { name: "Twitter", src: "social-tw.png" },
      { name: "Mail", src: "social-mail.png" },
      { name: "Instagram", src: "social-ig.png" }
    ],
    mail: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSUbmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();

    const form = await axios({
      method: "POST",
      url: "/api/form",
      data: {
        type: "mail",
        name: this.state.mail.name,
        email: this.state.mail.email,
        subject: this.state.mail.subject,
        message: this.state.mail.message
      }
    })
      .then(response => {
        console.log("response");
        console.log(response);
      })
      .catch(error => {
        console.log("error.response");
        console.log(error.response);
      });

    this.setState({
      mail: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("msg").value = "";
  };

  handleUpdate = (e = {}) => {
    let mail = Object.assign({}, this.state.mail);
    const stateName = e.target.name;
    mail[stateName] = e.target.value;
    this.setState({ mail });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="form-title">Get in touch!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="What is your name?"
                type="text"
                className="small"
                value={this.state.mail.name}
                onChange={this.handleUpdate}
              />
            </div>
          </div>
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="What is your e-mail adress?"
                type="email"
                className="small"
                value={this.state.mail.email}
                onChange={this.handleUpdate}
              />
            </div>
          </div>
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                placeholder="What do you want to talk about?"
                type="text"
                className="small"
                value={this.state.mail.subject}
                onChange={this.handleUpdate}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-wrapper big">
              <label htmlFor="msg">Message</label>
              <textarea
                name="message"
                id="msg"
                cols="30"
                rows="8"
                placeholder="Your message here."
                value={this.state.mail.message}
                onChange={this.handleUpdate}
              />
            </div>
          </div>
          <input type="submit" value="Send message!" />
        </form>
        <div className="social">
          {this.state.social.map(social => (
            <div className="social-items" title={social.name}>
              <img src={require("../Images/" + social.src)} alt={social.name} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
