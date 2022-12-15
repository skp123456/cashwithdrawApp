import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const decreaseBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item-container">
      <button className="button" type="button" onClick={decreaseBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
