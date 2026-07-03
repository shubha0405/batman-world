import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emotions from "../data/emotions";

import bg from "../assets/backgrounds/Batcomputer.jpg";
import { playClick } from "../components/SoundManager";
import EmotionCard from "../components/EmotionCard";

function EmotionPage() {
  const navigate = useNavigate();

  return (
    <div
      className="emotion-page"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="emotion-overlay">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WELCOME BACK,
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >
          MASTER BRUCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          How are you feeling today?
        </motion.p>

        <div className="emotion-grid">

          {emotions.map((emotion) => (

            <motion.div

              key={emotion.id}

              whileHover={{
                scale: 1.08,
                rotate: -2
              }}

              whileTap={{
                scale: .95
              }}

              className="emotion-card"

              onClick={() => {

playClick();

navigate(`/emotion/${emotion.id}`);

}}

            >

              <div
              className="card-image"
              style={{
              backgroundImage:`url(${emotion.image})`
                      }}
              >

              <div className="card-overlay">

              <h3>{emotion.title}</h3>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default EmotionPage;