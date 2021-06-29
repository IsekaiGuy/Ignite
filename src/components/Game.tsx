import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { popup } from "../animations";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

export interface OneGame {
    name: string,
    released: string,
    id: string,
    background_image: any
}

const Game = ({ name, released, background_image, id }: OneGame) => {
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    };

    return (
        <StyledGames
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={stringPathId}
            onClick={loadDetailHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(background_image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGames>
    );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    padding-bottom: 1rem;
  }
`;

export default Game;
