import { gsap } from "gsap"
import { useEffect } from "react"
import { useRouter } from 'next/router';




const Loading = () => {
    const tl = gsap.timeline();
    const router = useRouter();


    const _introAnimation = () => {
        tl.fromTo(".logo",
            {
                opacity: 0,
                y: 15,
            },
            {
                opacity: 1,
                y: 0,
                ease: "power1.ease",
                duration: 1
            })
    }


    const _outroAnimation = () => {
        tl.fromTo(".loading",
            {
                opacity: 1,
                display: "flex"
            },
            {
                opacity: 0,
                display: 'none',
                ease: "power1.ease",
                delay: 1.3,
                duration: 1
            })
    }




    useEffect(() => {
        _introAnimation()
        _outroAnimation()

    }, [router])






    return (
        <>
            <div className="loading">
                <div className="logo" />
            </div>
        </>
    )
}

export default Loading