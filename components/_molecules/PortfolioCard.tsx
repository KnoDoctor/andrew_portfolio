import * as React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface PortfolioCardProps {
    project: {
        image: string;
        name: string;
        description: string;
    };
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <ButtonBase focusRipple onClick={() => console.log("boop")}>
            <Card variant={"outlined"}>
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
            </Card>
        </ButtonBase>
    );
}
