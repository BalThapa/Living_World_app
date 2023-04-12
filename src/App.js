import React, { Component } from "react";
import "./App.css";
import { animals, birds } from "./animalsList";
import Animals from "./pages/Animals";
import Birds from "./pages/Birds";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    searchInput: "",
  };
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
    const updatedArrayBirds = this.state.birds.filter(
      (birds) => birds.name !== name
    );
    this.setState({
      birds: updatedArrayBirds,
    });
  };

  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === "add") {
            return { ...animal, likes: animal.likes + 1 };
          } else {
            return { ...animal, likes: animal.likes - 1 };
          }
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });

    this.setState((prevState) => {
      const updatedArrayBirds = prevState.birds.map((bird) => {
        if (bird.name === name) {
          if (action === "add") {
            return { ...bird, likes: bird.likes + 1 };
          } else {
            return { ...bird, likes: bird.likes - 1 };
          }
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArrayBirds,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="navBar">
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="Animals">
                    Animals({this.state.animals.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Birds">
                    Birds({this.state.birds.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Animals"
              element={
                <Animals
                  data={this.state.animals}
                  removeHandler={this.removeHandler}
                  likesHandler={this.likesHandler}
                  searchHandler={this.searchHandler}
                  searchInput={this.state.searchInput}
                />
              }
            />
            <Route
              path="Birds"
              element={
                <Birds
                  data={this.state.birds}
                  removeHandler={this.removeHandler}
                  likesHandler={this.likesHandler}
                  searchHandler={this.searchHandler}
                  searchInput={this.state.searchInput}
                />
              }
            />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
