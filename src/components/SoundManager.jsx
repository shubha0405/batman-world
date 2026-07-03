import clickSound from "../assets/sounds/clicks.mp3";

export const playClick = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.5;
  audio.play();
};
