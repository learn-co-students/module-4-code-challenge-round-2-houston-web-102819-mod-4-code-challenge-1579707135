import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import Search from "./Search";
import CategorySelector from "./CategorySelector";

class App extends Component {
  state = {
    bankInfo: [],
    searched: [],
    checked: []
  };
  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(res =>
        this.setState({ bankInfo: res, searched: res, checked: res })
      );
  }
  HandleClick = clicked => {
    console.log(clicked);
    this.setState({
      checked: clicked,
      searched: this.state.bankInfo.filter(
        transaction => transaction.category === clicked
      )
    });
  };
  HandleSearch = search => {
    this.setState({
      searched: this.state.bankInfo.filter(transaction =>
        transaction.description.toLowerCase().includes(search.toLowerCase())
      )
    });
  };

  render() {
    return (
      <div className="ui raised segment">
        <CategorySelector
          clicked={this.HandleClick}
          activeCategory={this.state.checked}
        />
        <Search search={this.HandleSearch} />
        <div className="ui center aligned segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer transactions={this.state.searched} />
      </div>
    );
  }
}

export default App;
