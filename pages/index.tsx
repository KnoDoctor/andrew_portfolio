import * as React from "react";

import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

import Typography from "@mui/material/Typography";

import HeroBanner from "../components/cells/HeroBanner";
import Portfolio from "../components/cells/Portfolio";
import About from "../components/cells/About";
import Contact from "../components/cells/Contact";

export default function Home() {
    return (
        <>
            {/* <HeroBanner
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
            /> */}
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">AB | Designs</Typography>
            </div>
            <Portfolio />
            <About />
            <Contact />
            <ProTip />
            <Copyright />
        </>
    );
}
