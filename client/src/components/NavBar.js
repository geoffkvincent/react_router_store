import React from 'react'
import { NavLink } from 'react-router-dom'
import { isAuthenticated, logout } from '../fakeAuth'

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const additionalLinks = (history) => {
  if (isAuthenticated()) {
    return (
      <span>
        <NavLink activeStyle={ styles.active } to="/dashboard">
          Dashboard
        </NavLink>
        <a href="#" onClick={() => {
          logout()
          history.push('/login')
        }}>
          logout
        </a>
      </span>
    )
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {" "}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {" "}
    { isAuthenticated() ?
      <NavLink activeStyle={styles.active} to="/dashboard">
        Dashboard
      </NavLink>
      :
      <NavLink activeStyle={styles.active} to="/login">
        Login
      </NavLink>
    }
  </nav>
)

export default NavBar 