import React from 'react';
import { NavLink } from 'react-router-dom'; //nie trzeba dodawać od react 17

export function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
