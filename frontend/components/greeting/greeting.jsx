import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="signin-signup">
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={signout}>Sign Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? personalGreeting(currentUser, signout) : sessionLinks()
);

export default Greeting;
