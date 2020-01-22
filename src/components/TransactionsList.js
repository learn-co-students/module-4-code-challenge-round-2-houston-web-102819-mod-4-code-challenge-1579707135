import React from 'react'

const TransactionsList = (props) => {

  return (

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              {props.transaction.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {props.transaction.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {props.transaction.category}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              {props.transaction.amount}
            </h3>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionsList
