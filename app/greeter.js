// var config = require('./Constants/config.json');

// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.Text;
//     // greet.textContent = "wwwwwwwwwww";
//     return greet;
// };


import React, {Component} from 'react'
import config from './Constants/config.json'
import styles from './greeter.css'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.Text}
      </div>
    );
  }
}

export default Greeter