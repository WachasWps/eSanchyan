import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Assuming you have a firebase.js file
import "./navbar.css"

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>
      <header data-role="Header" class="header-header header-root-class-name">
        <a href="index.html" class="header-navlink">
          <img
            alt="prop"
            src="https://i.ibb.co/jJtdBZK/e-Sanchayan.png"
            class="header-image"
          />
        </a>
        <div class="header-nav">
          <nav class="navigation-links1-nav navigation-links1-root-class-name10">
            <Link to="/" class="navigation-links1-navlink">
              <span>Home</span>
            </Link>
            <Link to="/uploaddoc" class="navigation-links1-navlink1">
              <span>Documents</span>
            </Link>
            <Link to="/pricing" class="navigation-links1-navlink1">
              <span>Pricing</span>
            </Link>
            <Link to="/caseup" class="navigation-links1-navlink4">
              <span>Case Management</span>
            </Link>
            <Link to="/history" class="navigation-links1-navlink3">
              <span>History</span>
            </Link>
            <Link to="/about" class="navigation-links1-navlink4">
              <span>About</span>
            </Link>
          </nav>
        </div>
        {user ? (
          <div class="header-user-info">
            <span>{user.displayName}</span>
            <span>{user.email}</span>
            <button onClick={handleLogout} class="header-logout button">
              Logout
            </button>
          </div>
        ) : (
          <div class="header-btn-group">
            <Link to="/login" class="header-login button">
              <span>Login</span>
            </Link>
            <Link to="/register" class="header-register button">
              <span>Register</span>
            </Link>
          </div>
        )}
        <div data-role="BurgerMenu" class="header-burger-menu">
          <svg viewBox="0 0 1024 1024" class="header-icon02">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" class="header-mobile-menu">
          <div class="header-nav1">
            <div class="header-container">
              <img
                alt="prop"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="header-image1"
              />
              <div data-role="CloseMobileMenu" class="header-menu-close">
                <svg viewBox="0 0 1024 1024" class="header-icon04">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="navigation-links1-nav navigation-links1-root-class-name11">
              <a href="index.html" class="navigation-links1-navlink">
                <span>Home</span>
              </a>
              <a href="/FileUpload" class="navigation-links1-navlink1">
                <span>upload Documents</span>
              </a>
              <a href="pricing.html" class="navigation-links1-navlink2">
                <span>Pricing</span>
              </a>
              <a href="history.html" class="navigation-links1-navlink3">
                <span>History</span>
              </a>
              <a href="about.html" class="navigation-links1-navlink4">
                <span>About</span>
              </a>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" class="header-icon06">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
