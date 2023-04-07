import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const initialMoneyBalance = {
  balance: 0,
  income: 0,
  expenses: 0,
}

class MoneyManager extends Component {
  state = {
    moneyDetails: initialMoneyBalance,
    title: '',
    amount: '',
    select: 'Income',
    moneyList: [],
  }

  deletedTransaction = id => {
    const {moneyList} = this.state
    const filterList = moneyList.filter(eachItem => eachItem.id !== id)
    this.setState({moneyList: filterList})
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getTypeOfMoney = event => {
    this.setState({select: event.target.value})
  }

  getMoneyDetails = event => {
    event.preventDefault()
    const {title, amount, select, moneyDetails, moneyList} = this.state
    const newMoneyDetails = {
      id: uuidV4(),
      title,
      amount: parseInt(amount),
      select,
    }
    this.setState(prevState => ({
      moneyList: [...prevState.moneyList, newMoneyDetails],
      title: '',
      amount: '',
    }))
  }

  render() {
    const {moneyDetails, title, amount, select, moneyList} = this.state
    console.log(moneyList)

    return (
      <div className="bg-container">
        <div className="title-container">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="description-paragraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="money-detailes-container">
          <MoneyDetails />
        </div>
        <div className="transaction-and-history-container">
          <form className="form-container" onSubmit={this.getMoneyDetails}>
            <h1>Add Transaction</h1>
            <div>
              <label htmlFor="title" className="label">
                Title
              </label>
              <br />
              <input
                value={title}
                id="title"
                placeholder="Title"
                className="input"
                onChange={this.getTitle}
              />
            </div>
            <div>
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <br />
              <input
                value={amount}
                id="amount"
                placeholder="Amount"
                className="input"
                onChange={this.getAmount}
              />
            </div>
            <div>
              <label htmlFor="type" className="label">
                Type
              </label>
              <br />
              <select
                id="type"
                className="select"
                value={select}
                onChange={this.getTypeOfMoney}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <div className="history-heading-container">
              <div className="particular-container">
                <p className="particulars">Title</p>
                <p className="particulars">Amount</p>
                <p className="particulars">Type</p>
              </div>
              <ul className="history-unorderlist">
                {moneyList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    eachItem={eachItem}
                    deletedTransaction={this.deletedTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
