import React, { Component } from "react";
import "../Style/works.css";

class Works extends Component {
  state = {
    works: []
  };

  componentDidMount = () => {
    fetch("/api/fetch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {
        name: "ricky"
      }
    })
      .then(response =>
        response.json().then(data => {
          this.setState({ works: data });
          console.log(this.state.works);
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.works.map(work => (
          <div class="works-item-container">
            <figure>
              <img
                src={require("../Images/thumbnails/" +
                  work.pr_thumbnail.replace("png", "PNG"))}
                alt={work.pr_name}
              />
            </figure>
            <div class="works-text-wrapper">
              <div class="animation" />
              <h3>{work.pr_name}</h3>
              <p>{work.pr_desc}</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Works;
