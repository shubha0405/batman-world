import { motion } from "framer-motion";

function EmotionCard({ emotion, onClick }) {
  return (
    <motion.div
      className="emotion-card"
      whileHover={{
        scale: 1.06,
        rotateY: 8,
        rotateX: 3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      onClick={onClick}
    >
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${emotion.image})`,
        }}
      >
        <div className="card-overlay">
          <h3>{emotion.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default EmotionCard;