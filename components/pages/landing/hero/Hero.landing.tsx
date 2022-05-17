// OWN
import { useEffect } from "react";
// import { useMediaQuery } from 'usehooks-ts';




const Hero = () => {
    // const matches = useMediaQuery('(max-width: 768px)');




    const handleVideoChange =  () => {
        const intro = document.querySelector(".intro") as HTMLVideoElement
        const idle = document.querySelector(".idle") as HTMLVideoElement

        intro.addEventListener("ended",()=> {
            idle.style.zIndex = "1"
            intro.style.zIndex = "0"
            idle.autoplay = true
            idle.load()
        })
    };

    useEffect(() => {
        handleVideoChange();
    }, []);




    return (
        <div className="hero_landing_main">
            <div className="video-container">
                <video
                    className="intro"
                    controls={false}
                    muted
                    autoPlay
                    playsInline={true}
                    loop={false}
                >
                    <source src="/video/intro--desktop.webm" type="video/webm" />
                    <source src="/video/intro--desktop.mp4" type="video/mp4" />
                </video>


                <video
                    className="idle"
                    controls={false}
                    muted
                    playsInline={true}
                    loop
                >
                    <source src="/video/chart_dist.mp4" type="video/webm" />
                    <source src="/video/idle--desktop.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};




export default Hero;
