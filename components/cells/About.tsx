import Image from "next/image";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SlideIn from "../_atoms/SlideIn";

const About = () => {
    return (
        <Container
            maxWidth={"xl"}
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                py: { xs: 12, md: 0 },
                height: { xs: null, md: "100vh" },
            }}
        >
            <SlideIn>
                <Typography
                    variant="h2"
                    component="h3"
                    sx={{ textAlign: "center", mb: 5 }}
                >
                    About Me
                </Typography>
            </SlideIn>
            <SlideIn delaySlideIn={0.1}>
                <Card sx={{ width: "100%", py: 5 }} raised>
                    <Grid container spacing={5} sx={{ px: 5 }}>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: "400px", md: "100%" },
                                    position: "relative",
                                    margin: "auto",
                                }}
                            >
                                <Image
                                    src="/images/profile_pic.jpg"
                                    alt="profile"
                                    fill={true}
                                    objectFit={"cover"}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "justify", mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, culpa doloribus
                                impedit labore magni, nemo ratione quo aliquid
                                provident, dignissimos distinctio consequatur
                                minus asperiores quam hic molestiae voluptatum
                                iure laudantium.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "justify", mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, culpa doloribus
                                impedit labore magni, nemo ratione quo aliquid
                                provident, dignissimos distinctio consequatur
                                minus asperiores quam hic molestiae voluptatum
                                iure laudantium.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "justify", mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, culpa doloribus
                                impedit labore magni, nemo ratione quo aliquid
                                provident, dignissimos distinctio consequatur
                                minus asperiores quam hic molestiae voluptatum
                                iure laudantium.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "justify", mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, culpa doloribus
                                impedit labore magni, nemo ratione quo aliquid
                                provident, dignissimos distinctio consequatur
                                minus asperiores quam hic molestiae voluptatum
                                iure laudantium.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "justify" }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, culpa doloribus
                                impedit labore magni, nemo ratione quo aliquid
                                provident, dignissimos distinctio consequatur
                                minus asperiores quam hic molestiae voluptatum
                                iure laudantium.
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </SlideIn>
        </Container>
    );
};

export default About;
