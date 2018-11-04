import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {isAuthenticated} from '../fakeAuth'

class Dashboard extends React.Component {

  render () {
    const {products} = this.state
    if (isAuthenticated()) {
      return (
        <ul>
          { products.map(p => 
              <li key={p.id}>
                <Link to={`/product/${p.id}`}>
                  {p.name}
                </Link>
              </li>
            )
          }
        </ul>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default Dashboard

