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
  } else {
    return (
      <NavLink activeStyle={ styles.active } to="/login">
        login
      </NavLink>
    )
  }
}

const NavBar = ({history}) => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {" "}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {" "}
    { additionalLinks(history) }
  </nav>
)

export default NavBar 