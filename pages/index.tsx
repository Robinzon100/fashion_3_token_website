import dynamic from "next/dynamic";
// OWN
// import Hero from "components/pages/landing/hero/Hero.landing"

const Hero = dynamic(() => import("components/pages/landing/hero/Hero.landing"), {
    ssr: false
});

const index = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default index;
