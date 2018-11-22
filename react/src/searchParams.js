import React from "react";

class SearchParams extends React.Component {
  state = {
    location: "NYC, NY",
    animal: "",
    breed: ""
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          location
          <input
            id="location"
            value={this.state.location}
            placeholder="location"
          />
        </label>
      </div>
    );
  }
}

export default SearchParams;
