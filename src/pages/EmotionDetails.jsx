import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import emotions from "../data/emotions";
import { playClick } from "../components/SoundManager";
import RainEffect from "../components/RainEffect";

import rainSound from "../assets/sounds/rain.mp3";
import thunderSound from "../assets/sounds/thunder.mp3";

function EmotionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const rainAudio = useRef(null);
  const thunderAudio = useRef(null);
  const thunderTimer = useRef(null);

  const emotion = emotions.find((item) => item.id === Number(id));
  useEffect(() => {

  rainAudio.current = new Audio(rainSound);
  rainAudio.current.loop = true;
  rainAudio.current.volume = 0.25;
  rainAudio.current.play().catch(() => {});

  const playThunder = () => {

    thunderAudio.current = new Audio(thunderSound);

    thunderAudio.current.volume = 0.5;

    thunderAudio.current.play().catch(() => {});

    const next = Math.random() * 10000 + 8000;

    thunderTimer.current = setTimeout(playThunder, next);

  };

  thunderTimer.current = setTimeout(playThunder, 5000);

  return () => {

    if (rainAudio.current) {
      rainAudio.current.pause();
      rainAudio.current.currentTime = 0;
    }

    if (thunderAudio.current) {
      thunderAudio.current.pause();
      thunderAudio.current.currentTime = 0;
    }

    clearTimeout(thunderTimer.current);

  };

}, []);

  if (!emotion) {
    return <h1>Emotion not found</h1>;
  }

  return (
    <div
      className="details-page"
      style={{
        backgroundImage: `url(${emotion.image})`,
      }}
    >
      <RainEffect/>
      <div className="details-overlay">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {emotion.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {emotion.message}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {

          playClick();

        if (rainAudio.current) {
          rainAudio.current.pause();
          rainAudio.current.currentTime = 0;
        }

        if (thunderAudio.current) {
          thunderAudio.current.pause();
          thunderAudio.current.currentTime = 0;
        }

        if (thunderTimer.current) {
          clearTimeout(thunderTimer.current);
        }

        setTimeout(() => {
          navigate("/emotions");
        }, 100);

      }}
        >
          🦇 Back
        </motion.button>

      </div>
    </div>
  );
}

export default EmotionDetails;