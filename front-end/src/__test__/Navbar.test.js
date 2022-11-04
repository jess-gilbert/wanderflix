import { render, screen } from '@testing-library/react';
import Navbar from '../navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";


  it('should link to Discover', () => {
    render(
        <Router>
            <Navbar/>
        </Router>);
    const buttonAsLink = screen.getByRole('link', { name: /Discover/i })
    expect(buttonAsLink).toHaveAttribute('href', '/Discover')
  });

  it('should link to Sign In', () => {
    render(
        <Router>
            <Navbar/>
        </Router>);
    const buttonAsLink = screen.getByRole('link', { name: /Sign In/i })
    expect(buttonAsLink).toHaveAttribute('href', '/SignIn')
  });

  it('should link to Sign Up', () => {
    render(
        <Router>
            <Navbar/>
        </Router>);
    const buttonAsLink = screen.getByRole('link', { name: /Sign Up/i })
    expect(buttonAsLink).toHaveAttribute('href', '/SignUp')
  })

  it('Navbar must have src = "WLogo.png" and alt = "Wanderflix Logo"', () => {
    render(
        <Router>
            <Navbar/>
        </Router>);
      const WanderflixLogo = screen.getByRole('img');
      expect(WanderflixLogo).toHaveAttribute('src', 'WLogo.png');
      expect(WanderflixLogo).toHaveAttribute('alt', 'Wanderflix Logo');
    });
