import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="link" to="/about" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/about">
            1. About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/work">
            2. Out Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            1. Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  .link {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
