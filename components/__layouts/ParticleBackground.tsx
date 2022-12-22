import dynamic from "next/dynamic";

const ParticlesBg = dynamic(() => import("particles-bg"), {
    ssr: false,
});

const ParticleBackground = () => {
    return <ParticlesBg type="cobweb" num={50} bg={true} />;
};

export default ParticleBackground;
