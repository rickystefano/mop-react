import React, { Component } from "react";
import "../Style/me.css";

class Me extends Component {
  state = {
    logos: [
      { name: "HTML", src: "logo_html.png" },
      { name: "CSS", src: "logo_css.png" },
      { name: "SCSS", src: "logo_scss.png" },
      { name: "JavaScript", src: "logo_js.png" },
      { name: "jQuery", src: "logo_jquery.png" },
      { name: "React JS", src: "logo_react.png" },
      { name: "PHP", src: "logo_php.png" },
      { name: "MySQL/PDO", src: "logo_db.png" },
      { name: "Wordpress", src: "logo_wp.png" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="me-title-container">
          <h1>Ricky Simadinata</h1>
        </div>
        <div className="me-content-container">
          <div id="me-about" className="me-content-items">
            <h2>Hello.</h2>
            <br />
            <p>I am Ricky.</p>
            <p>Let me tell you about myself.</p>
            <br />
            <p>
              I was born in Yogyakarta, Indonesia on 13 September 1999. I lived
              and was raised by my only beloved single parent mother for 15
              years. In 2015 I moved to the Netherland.
            </p>
            <br />
            <p>
              Moving to the Netherland open up a new chapter in my life that I
              have never expected before. I dreamt to become a journalist back
              in Indonesia, so at the time I moved I didn't know what the heck I
              am gonna do with in life.
            </p>
            <br />
            <p>
              After 2 years of confusion, the door to development world was open
              for me. I am currently studying webdevelopment at Grafisch Lyceum
              Utrecht.
            </p>
            <br />
            <p>
              Other things about myself is I like to game and to play
              basketball.
            </p>
          </div>
          <div className="me-skill me-content-items">
            <h2>How am I doing so far?</h2>
            {this.state.logos.map(logo => (
              <div className="me-skill-items">
                <figure>
                  <img src={require("../Images/" + logo.src)} alt={logo.name} />
                </figure>
                <h4>{logo.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Me;
