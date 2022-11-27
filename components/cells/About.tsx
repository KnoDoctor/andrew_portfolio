import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { relative } from "path";

const About = () => {
    return (
        <Container maxWidth={"lg"}>
            <Typography
                variant="h2"
                component="h3"
                sx={{ textAlign: "center", my: 5 }}
            >
                About Me
            </Typography>
            <Grid container>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            width: "80%",
                            height: "100%",
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
                <Grid item xs={7}>
                    <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", mb: 2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam, culpa doloribus impedit labore magni,
                        nemo ratione quo aliquid provident, dignissimos
                        distinctio consequatur minus asperiores quam hic
                        molestiae voluptatum iure laudantium.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", mb: 2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam, culpa doloribus impedit labore magni,
                        nemo ratione quo aliquid provident, dignissimos
                        distinctio consequatur minus asperiores quam hic
                        molestiae voluptatum iure laudantium.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", mb: 2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam, culpa doloribus impedit labore magni,
                        nemo ratione quo aliquid provident, dignissimos
                        distinctio consequatur minus asperiores quam hic
                        molestiae voluptatum iure laudantium.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", mb: 2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam, culpa doloribus impedit labore magni,
                        nemo ratione quo aliquid provident, dignissimos
                        distinctio consequatur minus asperiores quam hic
                        molestiae voluptatum iure laudantium.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam, culpa doloribus impedit labore magni,
                        nemo ratione quo aliquid provident, dignissimos
                        distinctio consequatur minus asperiores quam hic
                        molestiae voluptatum iure laudantium.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
