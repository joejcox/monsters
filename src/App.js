import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/search/search-bar.component";

export default class App extends React.Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters App!</h1>
        <SearchBar change={(e) => this.handleChange(e)} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
