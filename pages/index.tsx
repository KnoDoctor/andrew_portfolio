import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import HeroBanner from "../components/_molecules/HeroBanner";
import PortfolioCard from "../components/_molecules/PortfolioCard";

const projects = [
    {
        name: "Sign One",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: "https://images.unsplash.com/photo-1563520239648-a24e51d4b570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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

export default function Home() {
    return (
        <>
            <HeroBanner
                slides={[
                    {
                        heroBannerType: "video",
                        videoUrl: "https://www.youtube.com/watch?v=LCXjaTNx_vg",
                        contentAlignment: "left",
                        textColor: "#fff",
                        title: "AB Designs",
                        subtitle: "We Design Things",
                        buttonText: "Learn More",
                        buttonLink: "/",
                        buttonColor: "#194666",
                        buttonTextColor: "#fff",
                    },

                    {
                        heroBannerType: "video",
                        videoUrl: "https://www.youtube.com/watch?v=OaSwzjjVid4",
                        contentAlignment: "center",
                        textColor: "#fff",
                        title: "Testing the Title of the Slide",
                        subtitle: "Testing the subtitle of the slide",
                        buttonText: "Learn More",
                        buttonLink: "/",
                        buttonColor: "#194666",
                        buttonTextColor: "#fff",
                    },
                    {
                        heroBannerType: "image",
                        imageUrl:
                            "https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        contentAlignment: "right",
                        textColor: "#fff",
                        title: "Testing the Title of the Slide",
                        subtitle: "Testing the subtitle of the slide",
                        buttonText: "Learn More",
                        buttonLink: "/",
                        buttonColor: "#194666",
                        buttonTextColor: "#fff",
                    },
                ]}
            />
            <Container maxWidth={"xl"}>
                <Typography
                    variant="h2"
                    component="h3"
                    sx={{ textAlign: "center", my: 5 }}
                >
                    Our Work
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => {
                        return (
                            <Grid item xs={4}>
                                <PortfolioCard project={project} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
            <Container maxWidth={"xl"}>
                <Typography
                    variant="h2"
                    component="h3"
                    sx={{ textAlign: "center", my: 5 }}
                >
                    About Me
                </Typography>
                <Grid container>Something</Grid>
            </Container>
            <ProTip />
            <Copyright />
        </>
    );
}
