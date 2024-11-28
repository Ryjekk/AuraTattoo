"use client";

import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import React from "react";
import AccordionContext, { useAccordion } from "@hooks/useAccordionContext";
import Arrow from "@components/accordion/Arrow";
export function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children }) {
  return <div className='accordion__item '>{children}</div>;
}

export function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`accordion__header ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
      <Arrow isActive={isActive} />
    </motion.div>
  );
}

export function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0, duration: 0.7 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className='accordion__panel'>
            <Markdown>{children}</Markdown>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
