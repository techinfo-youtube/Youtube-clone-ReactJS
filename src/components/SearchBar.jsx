import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //callback from parent
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search Anything Here!!"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
