import React, { Component } from "react";
import CardList from "./components/card-list/card-list-component.jsx";
import "./App.css";
import {SearchBox} from "./components/serachbox/serach-box.component";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      monsters: [],
      serachFiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ serachFiled: e.target.value })
  }
  render() {
    const { monsters, serachFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toUpperCase().includes(serachFiled.toUpperCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
