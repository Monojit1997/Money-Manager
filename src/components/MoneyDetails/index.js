// Write your code here
import './index.css'

const MoneyDetails = props => (
  <ul className="unorder-list-container">
    <li className="list-container balance">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
      </div>
      <div>
        <p>Your Balance</p>
        <p className="amount" data-testiD="balanceAmount">
          Rs: 0
        </p>
      </div>
    </li>
    <li className="list-container income">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
      </div>
      <div>
        <p>Your Income</p>
        <p className="amount" data-testid="incomeAmount">
          Rs: 0
        </p>
      </div>
    </li>
    <li className="list-container expenses">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
      </div>
      <div>
        <p>Your Expenses</p>
        <p className="amount" data-testid="expensesAmount">
          Rs: 0
        </p>
      </div>
    </li>
  </ul>
)
export default MoneyDetails
