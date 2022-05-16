// OWN
import { useState, useEffect } from "react"
import gsap from "gsap"
import { useMediaQuery } from 'usehooks-ts'


import { getVideoBlobObjectUrl } from "components/utils/blobLoaders"


const Hero = () => {
    const matches = useMediaQuery('(min-width: 768px)')

    const [startVideo, setStartVideo] = useState("")
    const [endVideo, setEndVideo] = useState("")

    const handleVideoChange = async () => {
        // const startVideo = document.getElementById("startVideo") as HTMLVideoElement
        // const endVideo = document.getElementById("endVideo") as HTMLVideoElement


        let startBlob = await getVideoBlobObjectUrl("/video/start.mp4")
        setStartVideo(startBlob)

        const endBlob = await getVideoBlobObjectUrl("/video/end.mp4")
        setEndVideo(endBlob)


        gsap.to("#startVideo", {
            display: 'none',
            opacity: 0,
            delay: 3,
            duration: 0.5,
        })

        gsap.to("#endVideo", {
            display: 'block',
            opacity: 1,
            delay: 3,
            duration: 0.5,
        })
    }

    useEffect(() => {
        handleVideoChange()
    }, [])

    return (
        <>
            <div className="hero_landing_main">
                <div className="video-container">
                    <video
                        className="start"
                        // controls
                        muted
                        autoPlay
                        playsInline={true}
                        src={matches ? startVideo : "/video/compressed-start.mp4"}
                        id="startVideo"
                    />


                    <video
                        className="end"
                        // controls
                        muted
                        autoPlay
                        playsInline={true}
                        src={matches ? endVideo : "/video/compressed-end.mp4"}
                        id="endVideo"
                    />
                </div>
            </div>
        </>
    );
};




export default Hero;
