import React from "react";
import { motion } from "framer-motion";

export function HighlightText({value, fStyle}) {
    return (
        <motion.span 
            className={`${fStyle} bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text relative`}
            initial={{ backgroundPosition: "0 0" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
        >
            {value}
        </motion.span>
    )
}