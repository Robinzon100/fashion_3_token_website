import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Button from "components/lib/button/Button";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeComplete', () => setIsOpen(false));
    });


    useEffect(() => {
        if (typeof window === 'object' && window.innerWidth < 750) {
            gsap.to('.navigation > .navigation_container > .navigation_items > .item', {
                pointerEvents: isOpen ? 'initial' : 'none',
                opacity: isOpen ? 1 : 0,
                duration: 1,
                ease: 'power4.out'
            });
        }
    }, [isOpen]);




    const _handleOpenMenu = () => {
        setIsOpen(prev => !prev);
    };




    return (
        <nav className="navigation" >
            <div className="navigation_container">
                <div className="navigation_items">
                    <Link
                        passHref
                        href="/">
                        <div className="logo" />
                    </Link>

                    <ul className="item">
                        <li className="links">
                            <Link
                                passHref
                                href="/collections">
                                <h1 className="f-size-p4 f-weight-400">
                                    Collections
                                </h1>
                            </Link>
                        </li>
                        <li className="links">
                            <Link
                                passHref
                                href="/meta_specs">
                                <h1 className="f-size-p4 f-weight-400">
                                    MetaSpecs
                                </h1>
                            </Link>
                        </li>
                        <li className="links">
                            <Link
                                passHref
                                href="contact_us">
                                <h1 className="f-size-p4 f-weight-400">
                                    Contact us
                                </h1>
                            </Link>
                        </li>
                        <li className="links navigation_button_mobile">
                            <Button
                                href={'https://shop.fashion3.io'}
                                inNewTab={true}
                                size={{ x: 3, y: 1 }}
                                theme='white'
                                style={{ borderRadius: '10px', color: 'var(--black)' }}>
                                <h2 className="f-size-p4 f-weight-500"
                                    style={{ color: 'var(--black)' }}>
                                    shop
                                </h2>
                            </Button>
                        </li>
                    </ul>

                    <Button
                        href={'https://shop.fashion3.io'}
                        className='navigation_button'
                        inNewTab={true}
                        size={{ x: 3, y: 1 }}
                        theme='white'
                        style={{ borderRadius: '10px', color: 'var(--black)' }}>
                        <h2 className="f-size-p4 f-weight-500"
                            style={{ color: 'var(--black)' }}>
                            shop
                        </h2>
                    </Button>


                    <div className="open_close_nav_button">
                        {isOpen ?
                            (
                                <svg
                                    onClick={_handleOpenMenu}
                                    width="40"
                                    height="40"
                                    fill="none"
                                    viewBox="0 0 307 366">
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="37.866"
                                        d="M19.093 346.782c0-110.251 96.108-140.069 133.882-156.853m0 0c38.388-20.316 134.65-58.242 134.65-170.258M152.975 189.93C114.869 169.937 19.094 133.267 19.094 19.671M152.975 189.93c42.737 19.207 134.649 48.076 134.649 156.853"
                                    ></path>
                                </svg>
                            )
                            :
                            (
                                <svg
                                    onClick={_handleOpenMenu}
                                    width="40"
                                    height="40"
                                    fill="none"
                                    viewBox="0 0 307 361">
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="37.866"
                                        d="M288.063 43.36C255.867 10.955 94.133 5.44 31.511 67.661c-62.623 62.222 139.176 29.492 169.87 60.385 30.695 30.892-138.525 16.786-138.525 72.408 0 55.623 178.069-9.255 177.216 27.812-.853 37.066-104.131 34.925-103.484 74.378.647 39.454 131.501 38.807 131.501 38.807"
                                    ></path>
                                </svg>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
