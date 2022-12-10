import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PortfolioCard from "../_molecules/PortfolioCard";

const projects = [
    {
        name: "Beamish Beer Taps",
        description:
            "Custom beer taps draw inspiration from the restaurants beloved history to showcase there house beers.",
        image: "/images/beamish-taps/tap_1.jpg",
    },
    {
        name: "Cookie Cutter",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1509460181860-1f17dd8cb0b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
        name: "Neon One",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        name: "Neon Sign Two",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1550424844-f7b914439c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        name: "Beer Tap",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1620219365994-f443a86ea626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
        name: "Flower Pot",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    },
];

const Portfolio = () => {
    return (
        <Container
            maxWidth={"xl"}
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                py: "20vh",
            }}
        >
            <Typography
                variant="h2"
                component="h3"
                sx={{ textAlign: "center", mb: 5 }}
            >
                Portfolio
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <PortfolioCard project={project} i={i} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Portfolio;
