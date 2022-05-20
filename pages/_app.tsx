import type { AppProps } from "next/app";

import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'


import "../styles/main.scss";
//! ---- OWN
import Navigation from "components/global/navigation/Navigation";
import HeadAndMeta from "components/global/headAndMeta/HeadAndMeta";
import Footer from "components/global/footer/Footer";



function MyApp({ Component, pageProps, router }: AppProps) {
;

    return (
        <>
            <HeadAndMeta
                title="UNITY capital"
                description="
                        UNITY Capital Is community Focused venture capital 
                        helping blockchain start-ups make a change with 
                        investment,community support, governance & 
                        ecosystem support."
                favIconImagePath="/meta_images/logo_mark.png"
                baseUrl="https://unity-capital.vercel.app"
                ogTitle="UNITY capital"
                ogDescription="
                        UNITY Capital Is community Focused venture capital 
                        helping blockchain start-ups make a change with 
                        investment,community support, governance & 
                        ecosystem support."
                ogImagePath="/image/og/og_image.png"
            />


            <Navigation />
            {/* <Loading /> */}
            <SwitchTransition>
                <Transition
                    key={router.pathname}
                    timeout={500}
                    in={true}
                    onEnter={enter}
                    onExit={exit}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <main className="main">
                        <Component {...pageProps} />
                    </main>
                </Transition>
            </SwitchTransition>
            <Footer />
        </>

    );
}

export default MyApp;

function enter() {
    gsap.to(".main", {
        opacity: 1,
        duration: 1,
        ease: "power4.out"
    })
}

function exit() {
    gsap.to(".main", {
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
}