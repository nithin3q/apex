import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion/dist/framer-motion";
import './carStyles.css';
import { useWindowSize } from '../hooks/useWindowSize';

const Car = ({ id, posX, posY, direction, speed, simulate, scenarioTime, color }) => {
  const [x, setX] = useState(posX);
  const [y, setY] = useState(posY);
  const [visible, setVisible] = useState(true);
  const width = useWindowSize().width;
  const height = 690; // Approximate height based on your grid settings
  const speedVals = Array.from({ length: 20 }, (_, i) => 21 - i);

  const increment = () => {
    setX(prevX => {
      const newX = direction === 'towards' ? prevX + 1 : direction === 'backwards' ? prevX - 1 : prevX;
      if (newX > width - 25 || newX < 0) {
        setVisible(false);
      }
      return newX;
    });

    setY(prevY => {
      const newY = direction === 'downwards' ? prevY + 1 : direction === 'upwards' ? prevY - 1 : prevY;
      if (newY > height || newY < 0) {
        setVisible(false);
      }
      return newY;
    });
  };

  useEffect(() => {
    let interval;
    if (simulate) {
      interval = setInterval(increment, speedVals[speed - 1]);
      setTimeout(() => clearInterval(interval), scenarioTime * 1000);
    }
    return () => clearInterval(interval);
  }, [simulate]);

  return visible ? (
    <motion.div
      className="box"
      animate={{ x, y }}
      transition={{ type: "spring" }}
      initial={false}
    >
      <div className="sign" style={{ backgroundColor: color }}>
        <span>{id}</span>
      </div>
    </motion.div>
  ) : null;
}

export default Car;
