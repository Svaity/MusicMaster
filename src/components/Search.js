import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };
  updateArtistQuery = (event) => {
    console.log(event.target.value);
    this.setState({ artistQuery: event.target.value });
  };
  handleKeyPress = () => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
