// OWN
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from 'usehooks-ts';


import { getVideoBlobObjectUrl } from "components/utils/blobLoaders";


const Hero = () => {
    const matches = useMediaQuery('(min-width: 768px)');

    const [startVideo, setStartVideo] = useState("");
    const [endVideo, setEndVideo] = useState("");



    const handleVideoChange = async () => {
        getVideoBlobObjectUrl("/video/start.mp4").then(src => setStartVideo(src));
        getVideoBlobObjectUrl("/video/end.mp4").then(src => setEndVideo(src));

        const tl = gsap.timeline();

        tl
            .fromTo("#startVideo", {
                opacity: 1,
            }, {
                opacity: 0,
                delay: 4.5,
                duration: .2,
            })
            .fromTo("#endVideo", {
                opacity: 0
            }, {
                opacity: 1,
                duration: .2,
            });
    };

    useEffect(() => {
        handleVideoChange();
    }, []);




    return (
        <>
            <div className="hero_landing_main">
                <div className="video-container">
                    <video
                        className="start"
                        controls={false}
                        muted
                        autoPlay
                        playsInline={true}
                        loop={false}
                        src={matches ? startVideo : "/video/compressed-start.mp4"}
                        id="startVideo"
                    />


                    <video
                        className="end"
                        controls={false}
                        muted
                        autoPlay
                        playsInline={true}
                        loop={true}
                        src={matches ? endVideo : "/video/compressed-end.mp4"}
                        id="endVideo"
                    />
                </div>
            </div>
        </>
    );
};




export default Hero;
