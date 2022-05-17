// OWN
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from 'usehooks-ts';


import { getVideoBlobObjectUrl } from "components/utils/blobLoaders";


const Hero = () => {
    const matches = useMediaQuery('(max-width: 768px)');

    const [startVideo, setStartVideo] = useState("");
    const [endVideo, setEndVideo] = useState("");



    const handleVideoChange = async () => {
        getVideoBlobObjectUrl("/video/start.mp4").then(src => setStartVideo(src));
        getVideoBlobObjectUrl("/video/end.mp4").then(src => setEndVideo(src));

        const tl = gsap.timeline();

        tl.fromTo("#startVideo", {
                zIndex: 1,
                // opacity:1
            }, {
                zIndex: 0,
                // opacity:0,
                delay: 4.8,
                duration: .2,
            })
            .fromTo("#endVideo", {
                zIndex: 0,
                // opacity: 0,
            }, {
                zIndex: 1,
                // opacity: 0,
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
                        controls={true}
                        muted
                        autoPlay
                        playsInline={true}
                        loop={false}
                        // type="video/mp4"
                        src={!matches ? startVideo : "/video/compressed-end-super.mp4"}
                        id="startVideo"
                    />


                    <video
                        className="end"
                        controls={true}
                        muted
                        autoPlay
                        playsInline={true}
                        loop
                        src={!matches ? endVideo : "/video/compressed-end-super.mp4"}
                        id="endVideo"
                    />
                </div>
            </div>
        </>
    );
};




export default Hero;
