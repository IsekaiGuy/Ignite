import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
//Redux
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import { OneGame } from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const Home = () => {
  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);


  //GET DATA BACK
  const { popular, newGames, upcoming, searched } = useAppSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length > 0 && (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game: OneGame) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  background_image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </>
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game: OneGame) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background_image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map((game: OneGame) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background_image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game: OneGame) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background_image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 3rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export default Home;
