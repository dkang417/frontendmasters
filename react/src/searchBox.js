import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./searchContext";

class Search extends React.Component {
  render() {
    return (
      <Consumer>
        {function(context) {
          return (
            <div className="search-route">
              <SearchBox {...this.props} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
