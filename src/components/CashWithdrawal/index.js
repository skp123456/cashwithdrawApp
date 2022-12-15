import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <h1 className="profile-acronym">S</h1>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="balance-count">{balance}</p>
              <p className="balance-unit">In Rupees</p>
            </div>
          </div>
          <div className="content-container">
            <div>
              <div className="withdraw-container">
                <p className="withdraw-heading">WithDraw</p>
                <p className="sum-descreption">CHOOSE SUM (IN RUPEES)</p>
              </div>
              <ul className="denomination-container">
                {denominationsList.map(eachItem => (
                  <DenominationItem
                    denominationDetails={eachItem}
                    key={eachItem.id}
                    updateBalance={this.updateBalance}
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

export default CashWithdrawal
