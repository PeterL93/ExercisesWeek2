import React, { Component } from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./dataStore1";
import PERZ from "./dataStore2";
import jokes from "./jokesStore";
const person = PERZ;



class App extends Component {
  render() {
    return (
      <div className="App">
      
        <p className="App-intro">
          <p>{upper(text1)}</p>
          <p>{upper(text2)}</p>
          <p>{upper(text3)}</p>
          <p>{upper("please uppercase me")}</p>

          <p>{jokes.getRandomJoke()}</p>
          <p>{jokes.getRandomJoke()}</p>
          <p>{jokes.getRandomJoke()}</p>
          
          <p>{person.firstName}, {person.email}</p>
        </p>

      </div>
    );
  }
}

class JOKES extends React.Component {
  constructor(jokez) {
    super(jokez);
    jokes.addJoke("Hvad kalder man halløj halløj");
    jokes.addJoke("Hvad kalder man sa asgasgasg");
    jokes.addJoke("Hvad kalder man as gasgas");
    jokes.addJoke("Hvad kalder man asassa agasga");

    this.state = {};
  }
}



export default App;
