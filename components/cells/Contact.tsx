import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Contact = () => {
    return (
        <Container maxWidth={"xl"}>
            <Typography
                variant="h2"
                component="h3"
                sx={{ textAlign: "center", my: 5 }}
            >
                Contact
            </Typography>
        </Container>
    );
};

export default Contact;
