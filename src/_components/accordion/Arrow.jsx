import React from "react";
import { motion } from "framer-motion";

const Arrow = ({ isActive }) => {
  return (
    <motion.svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      animate={{ rotate: isActive ? -180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d='M18 15L12 9L6 15'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </motion.svg>
  );
};

export default Arrow;
