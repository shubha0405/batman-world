import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import background from "../assets/backgrounds/Gotham skyline.jpg";
import introMusic from "../assets/sounds/intro.mp3";
import { playClick } from "../components/SoundManager";

function Welcome() {

  const navigate = useNavigate();
 const handleEnter = () => {

  playClick();

  const audio = new Audio(introMusic);

  audio.volume = 0.4;

  audio.play();

  setTimeout(() => {

    navigate("/loading");

  },1200);

};

  return (

    <div
      className="welcome"

      style={{
        backgroundImage: `url(${background})`
      }}
    >

      <div className="overlay">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >

          YOU ARE THE REAL BATMAN

        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.2 }}

        >

          "The strongest people are not the ones who never fall.
          They are the ones who stand back up after every battle."

        </motion.p>

        <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleEnter}
>
  🦇 ENTER YOUR WORLD
</motion.button>

      </div>

    </div>

  );

}

export default Welcome;