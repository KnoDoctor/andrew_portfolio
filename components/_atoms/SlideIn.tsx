import React from "react";

import Box from "@mui/material/Box";

import { motion } from "framer-motion";

interface SlideInProps {
    children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    >;
}

const SlideIn = ({ children }: SlideInProps) => {
    return (
        <Box
            component={motion.div}
            initial={{
                y: 50,
                opacity: 0,
            }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
            {children}
        </Box>
    );
};

export default SlideIn;
