import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const navlinks = [
    { to: '/', title: 'Home' },
    { to: '/services', title: 'Services' },
    { to: '/about-us', title: 'About us' },
  ];1
  return (
    <header>
      <nav className="flex gap-6">
@@ -13,6 +18,12 @@ function Navbar() 
        <Link className="text-3xl font-bold" to="/about-us">
          About
        </Link>

        {navlinks.map((nav) => (
          <Link className="text-3xl font-bold" to={nav.to}>
            {nav.title}
          </Link>
        ))}
      </nav>
      </header>
    );
  }