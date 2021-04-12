import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
     
      const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
          surname:'test',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
        {
          name: 'Dilip Thakre',
          job: 'Sr. Software Engg',
        },
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Charlie',
          job: 'Janitor',
          surname:'test',
        }
      ]
  let green='green';
      return (
        <div className="container">
          <div>
            <h1 style={{backgroundColor:green}}>This is test site for ReactJs</h1>
          </div>
          <Table characterData={characters} />
        </div>
      )
    }
  }

export default App