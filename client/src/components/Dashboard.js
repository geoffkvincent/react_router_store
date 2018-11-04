import React from 'react'
import {Redirect} from 'react-router-dom'
import {isAuthenticated} from '../fakeAuth'

class Dashboard extends React.Component {
  render() {
    const {products} = this.state
    if (isAuthenticated()){
    return (
      <ul>
        {products.map(p =>
          <li key={p.id}>
            <Link to={`/products/${p.id}>{p.name}`}>
              {p.name}
            </Link>
          </li>
        )}
      </ul>
    )
  }

export default Dashboard

