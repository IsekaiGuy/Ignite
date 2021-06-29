import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";
//REDUX AND ROUTES
import { fetchSearch } from "../actions/gamesAction";
import { useAppDispatch } from "../app/hooks";
import { clearSearched } from "../slices/gamesSlice";

const Nav = () => {
    const [textInput, setTextInput] = useState<string>("");
    const dispatch = useAppDispatch();

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };

    const clearInput = () => {
        dispatch(clearSearched([]));
    };

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show" exit="exit">
            <Logo onClick={clearInput}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input onChange={inputHandler} value={textInput} type="text" />
                <button type="submit" onClick={submitSearch}>
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: salmon;
    color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled(motion.div)`
  cursor: pointer;
`;

export default Nav;
