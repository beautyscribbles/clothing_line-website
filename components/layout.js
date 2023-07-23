// components/Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Clothing Line</p>
      </footer>
    </div>
  );
};

export default Layout;
