import React from 'react';
import { NavLink } from 'react-router-dom'; //nie trzeba dodawać od react 17

const activeStyles = {
  color: '#c0392b'
};

const listStyle = {
  padding: 0,
  margin: 0
};
const listElementStyle = {
  display: 'inline',
  listStyleType: 'none',
  paddingRight: 10
};

export function NavMenu() {
  return (
    <nav>
      <ul style={listStyle}>
        <li style={listElementStyle}>
          <NavLink activeStyle={activeStyles} to="/" exact>
            Home
          </NavLink>
        </li>
        <li style={listElementStyle}>
          <NavLink activeStyle={activeStyles} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
