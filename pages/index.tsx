import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import HeroBanner from "../components/_molecules/HeroBanner";

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

            <ProTip />
            <Copyright />
        </>
    );
}
