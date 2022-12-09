import React from 'react'
import { Link } from 'react-router-dom'
import SpinWheel from './SpinWheel'
import './styles.css';
class HomePage extends React.Component {
  constructor() {
    super();
    this.points = ['10', '20', '30', '40', ' 50'];
  }

  render() {
    return (
      <div className="App logout">
        <SpinWheel items={this.points} />
        <Link to="/">
                <button className="primary-button">Log out</button>
           </Link>
      </div>
    );
  }
}

export default HomePage;
