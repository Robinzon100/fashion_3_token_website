import type { AppProps } from "next/app";
import "../styles/main.scss";


//! ---- OWN
import Navigation from "components/global/navigation/Navigation";
import HeadAndMeta from "components/global/headAndMeta/HeadAndMeta";
import React from "react";
import Footer from 'components/global/footer/Footer';
// import Loading from '../components/global/Loading/Loading';



function MyApp({ Component, pageProps }: AppProps) {


    return (
        <>
            <React.StrictMode>
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


                <main className="main">
                    {/* <Loading /> */}
                    <Navigation />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </React.StrictMode>
        </>

    );
}

export default MyApp;
