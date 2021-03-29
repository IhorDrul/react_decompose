import React from 'react';
import { Nav } from '../Nav/Nav';

import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}