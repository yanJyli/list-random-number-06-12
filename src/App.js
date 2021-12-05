import  GetArreyNumber  from './RandomNumber.js'
import Button from './Button.js'

import getRandomNumber from './GetRandomNumber.js'
import { Component } from 'react';

class App extends Component {

  AddRandomNumber = () => {
    const number = getRandomNumber(1, 25);
    
    const list = document.querySelector('#ul');

    const newNumber = document.createElement("li");
    newNumber.innerHTML = `${number}`;
    list.append(newNumber);
    
    let newCount = document.querySelector('#count');
    newCount =+1;
    return newCount
  }

  render() {
    return (<>
      <GetArreyNumber />
      <Button text="Add random number" onClick={this.AddRandomNumber} />
      </>
    );
  }
}

export default App;