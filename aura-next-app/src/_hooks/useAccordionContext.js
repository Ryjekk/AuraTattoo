"use client";

import { createContext, useContext } from "react";

const AccordionContext = createContext();

export const useAccordion = () => useContext(AccordionContext);

export default AccordionContext;
