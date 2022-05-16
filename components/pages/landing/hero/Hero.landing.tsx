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
        let startBlob = await getVideoBlobObjectUrl("/video/start.mp4");
        setStartVideo(startBlob);

        const endBlob = await getVideoBlobObjectUrl("/video/end.mp4");
        setEndVideo(endBlob);

        gsap
            .timeline()
            .fromTo("#startVideo", {
                opacity: 1,
            }, {
                visibility: 'hidden',
                opacity: 0,
                duration: .1,
                ease: 'none'
            })
            .fromTo("#endVideo", {
                opacity: 0
            }, {
                opacity: 1,
                duration: .1,
                ease: 'none'
            });
    };

    useEffect(() => { handleVideoChange(); });



    
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
                        loop
                        src={matches ? endVideo : "/video/compressed-end.mp4"}
                        id="endVideo"
                    />
                </div>
            </div>
        </>
    );
};




export default Hero;
