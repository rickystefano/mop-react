import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Me from "./Pages/Me";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import "./Style/nav.css";
import "./Style/main.css";

class Main extends Component {
  state = {
    menu: [
      {
        id: 1,
        title: "ME",
        page: Me,
        path: "/",
        exact: true,
        src: "nav_me.png"
      },
      {
        id: 2,
        title: "WORKS",
        page: Works,
        path: "/works",
        exact: false,
        src: "nav_works.png"
      },
      {
        id: 3,
        title: "CONTACT",
        page: Contact,
        path: "/contact",
        exact: false,
        src: "nav_contact.png"
      }
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <figure>
              <img src={require("./Images/logo.png")} alt="logo" />
            </figure>
            {this.state.menu.map(menuItems => (
              <NavLink
                exact={(() => {
                  if (menuItems.exact) return "true";
                  else return "false";
                })()}
                to={menuItems.path}
              >
                <div className="nav-items">
                  <figure>
                    <img
                      src={require("./Images/" + menuItems.src)}
                      alt="nav logo"
                    />
                  </figure>
                  <span className="nav-items-text hidden">
                    {menuItems.title}
                  </span>
                </div>
              </NavLink>
            ))}
          </nav>
          <main>
            {this.state.menu.map(destination => (
              <Route
                exact={(() => {
                  if (destination.exact) return "true";
                  else return "false";
                })()}
                path={destination.path}
                component={destination.page}
              />
            ))}
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Main;
