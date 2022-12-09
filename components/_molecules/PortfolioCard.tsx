import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface PortfolioCardProps {
    i: number;
    project: {
        image: string;
        name: string;
        description: string;
    };
}

export default function PortfolioCard({ project, i }: PortfolioCardProps) {
    const amount = (i % 3) / 10;
    const router = useRouter();

    return (
        <Card
            raised
            component={motion.div}
            whileHover={
                {
                    // scale: 1.01,
                    // transition: { duration: 0.2 },
                }
            }
            initial={{
                y: "10vw",
                opacity: 0,
            }}
            // animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.2,
                },
            }}
            viewport={{ once: true, amount: amount }}
        >
            <ButtonBase
                focusRipple
                sx={{ display: "flex", flexDirection: "column" }}
                onClick={() => router.push(`/projects/${i}`)}
            >
                <CardMedia
                    component="img"
                    height="225"
                    image={project.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </ButtonBase>
        </Card>
    );
}
