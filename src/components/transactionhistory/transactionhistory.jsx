import css from "./transactionhistory.module.css"
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {
 return (

    <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({id, type, amount, currency}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
    </tbody>
    </table>)}

export default TransactionHistory

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};