import Image from "next/image";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactForm from "../_molecules/ContactForm";
import SlideIn from "../_atoms/SlideIn";

const Contact = () => {
    return (
        <Container
            maxWidth={"xl"}
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                // py: "20vh",
                height: "100vh",
            }}
        >
            <SlideIn>
                <>
                    <Typography
                        variant="h2"
                        component="h3"
                        sx={{ textAlign: "center", my: 5 }}
                    >
                        Contact
                    </Typography>
                    <Card sx={{ width: "100%", py: 5, height: "50vh" }} raised>
                        <Grid container sx={{ height: "100%" }}>
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
                                        src="/images/contact.jpg"
                                        alt="profile"
                                        fill={true}
                                        objectFit={"cover"}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={7} sx={{ pr: 5 }}>
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Card>
                </>
            </SlideIn>
        </Container>
    );
};

export default Contact;
