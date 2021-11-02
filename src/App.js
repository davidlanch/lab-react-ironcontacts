import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";

const contactsArray = contacts
const artists = contacts.slice(0, 5);





class App extends Component {

  state = {
    contact: artists
  }

  randomCharacter = (evt) =>{
    console.log(evt)
    console.log(this.state.contact)
    let randomCharacter = contactsArray[Math.floor(Math.random() * contactsArray.length)];
    console.log(randomCharacter)
    this.setState({ contact: [...this.state.contact, randomCharacter ] })
  }

  sortCharacter = (evt) => {

    let characters = [...this.state.contact]
    let sort =  characters.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ contact: characters, sort  })
  }

  sortPopularity = (evt) => {

    let characters = [...this.state.contact]
    let sort =  characters.sort((a, b) =>  b.popularity - a.popularity);
    this.setState({ contact: characters, sort })
  }

  deleteCharacter = (index) => {

    let characters = [...this.state.contact]
    let deleteCharacter = characters.splice(index, 1);
    this.setState({ contact: characters, deleteCharacter })
  }




  render() {
   
    
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div>
        <button onClick={(evt) => this.randomCharacter()}> Add a Random Character</button>
        <button onClick={(evt) => this.sortCharacter()}> Sort the characters</button>
        <button onClick={(evt) => this.sortPopularity()}> Sort the popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.contact.map((artist, i) => (
                <tr key={i}>
                  <td>
                    <img src={artist.pictureUrl} alt={artist.name} />
                  </td>
                  <td>{artist.name}</td>
                  <td>{artist.popularity}</td>
                  <th><button onClick={(evt) => this.deleteCharacter()}>remove</button></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
