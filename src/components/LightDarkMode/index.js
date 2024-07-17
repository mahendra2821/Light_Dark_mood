// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLoggedIn: true}
  changeBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }
  render() {
    const {isLoggedIn} = this.state
    const modeColor = isLoggedIn ? 'dark-mode' : 'Light-Mode'
    const buttonText = isLoggedIn ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div>
          <div className={`card ${modeColor}`}>
            <h1 className="heading">Click To Change Mode</h1>
            <button type="button" onClick={this.changeBtn} className="button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
