//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay() + 1;

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id:string) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API_KEY}`;
//Game Screenshots
export const gameScreenshotURL = (game_id:string) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;
//SEARCHING GAME
export const searchGameURL = (game_name:string) =>
  `${base_url}games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${game_name}&page_size=9`;
