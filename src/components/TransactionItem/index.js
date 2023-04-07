// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, deletedTransaction} = props
  const {id, title, amount, select} = eachItem

  const deleteTransaction = () => {
    deletedTransaction(id)
  }

  return (
    <li className="transaction-list">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{select}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
