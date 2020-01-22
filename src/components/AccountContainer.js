import React, { Component } from 'react'
import TransactionsList from './TransactionsList'



class AccountContainer extends Component {
  
  render() {
    return (
      <div className="ui grid container">
       
        {this.props.transactions.map(transaction => (
          <TransactionsList transaction={transaction} />
        ))}
      </div>
    );
  }
}

export default AccountContainer
