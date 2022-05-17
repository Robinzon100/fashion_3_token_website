import React from 'react'

const BluredVideo = () => {
    return (
        <div className='blured'>
            <video
                className="global-video-style"
                controls={false}
                muted
                playsInline={true}
                loop={true}
                style={{zIndex:"1"}}
            >
                <source src="/video/idle--desktop.webm" type="video/webm" />
                <source src="/video/idle--desktop.mp4" type="video/mp4" />
            </video>





            <style jsx>
                {`
                .blured {
                    position: absolute;
                    overflow: hidden;
                    background-color:transparent;
                    width:100vw;
                    height:100vh;
                    filter: blur(100px);
                    z-index:-1;
                }
            `}
            </style>
        </div>
    )
}

export default BluredVideo