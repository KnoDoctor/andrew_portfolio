import { useRouter } from "next/router";

import Toolbar from "@mui/material/Toolbar/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import HeroBanner from "../../components/cells/HeroBanner";
import About from "../../components/cells/About";
import Image from "next/image";
import Divider from "@mui/material/Divider";

const Project = () => {
    const router = useRouter();

    const slides = [
        {
            heroBannerType: "image",
            imageUrl:
                "https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            contentAlignment: "center",
            textColor: "#fff",
            title: `Project ${router.query.identifer}`,
            subtitle: "Where the project case study will live",
            // buttonText: "Learn More",
            // buttonLink: "/",
            // buttonColor: "#194666",
            // buttonTextColor: "#fff",
        },
    ];

    console.log(router.query.identifer);

    return (
        <>
            <Container sx={{ py: 15 }}>
                <Box
                    sx={{
                        position: "relative",
                        width: "400px",
                        height: "300px",
                        margin: "auto",
                        mb: 5,
                    }}
                >
                    <Image
                        src="https://picsum.photos/600/800?random=1"
                        fill={true}
                        alt="test"
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Typography
                    variant="h2"
                    component="h1"
                    textAlign={"center"}
                    gutterBottom
                >
                    Project {router.query.identifer}
                </Typography>
                <Typography variant="h5" component="h2" textAlign={"center"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h4" component="h3">
                    Contents
                </Typography>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#the-goal">The Goal</a>
                    </li>
                    <li>
                        <a href="#challenges">Challenges</a>
                    </li>
                    <li>
                        <a href="#strategy-solution">Strategy + Solution</a>
                    </li>
                    <li>
                        <a href="#final-product">Final Product</a>
                    </li>
                    <li>
                        <a href="#conclusion">Conclusion</a>
                    </li>
                </ul>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h5" component="h3" id={"about"} mb={3}>
                    About
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h5" component="h3" id={"the-goal"} mb={3}>
                    The Goal
                </Typography>
                <Typography variant="body1">I wanted to:</Typography>
                <ul>
                    <li>This is a place to list objectives</li>
                    <li>Another project object could be listed here</li>
                    <li>
                        You could even write a slightly longer objective to go
                        here
                    </li>
                </ul>
                <Typography variant="body1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="h5"
                    component="h3"
                    id={"challenges"}
                    mb={3}
                >
                    Challenges
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Grid container spacing={3} mb={2}>
                    <Grid item xs={4} sx={{ height: 300 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=2"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ height: 300 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=3"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ height: 300 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=4"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="h5"
                    component="h3"
                    id={"strategy-solution"}
                    mb={3}
                >
                    Strategy + Solution
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Grid container spacing={3} mb={2}>
                    <Grid item xs={6} sx={{ height: 400 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=5"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ height: 400 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=6"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="h5"
                    component="h3"
                    id={"final-product"}
                    mb={3}
                >
                    Final Product
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                </Typography>
                <Grid container spacing={3} mb={2}>
                    <Grid item xs={6} sx={{ height: 400 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=7"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ height: 400 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=8"
                                fill={true}
                                alt="test"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sit necessitatibus quibusdam, fuga eligendi placeat vero
                    fugiat praesentium cum magni repellat dolorem voluptate
                    facere distinctio animi, repellendus rem tenetur mollitia.
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                    variant="h5"
                    component="h3"
                    id={"conclusion"}
                    mb={3}
                >
                    Conclusion
                </Typography>
                <Typography variant="body1" mb={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor repellat eum porro, dolores dolorem praesentium modi
                    quaerat voluptatem neque doloremque omnis asperiores,
                    molestias, maiores suscipit tenetur ipsam alias esse maxime!
                </Typography>
            </Container>
        </>
    );
};

export default Project;
