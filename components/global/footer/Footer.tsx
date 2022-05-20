import Link from "next/link"

const Footer = () => {


    return (
        <>
            <div className="footer">
                <div className="footer_container">
                    <ul className="footer_list">
                        <li className="item">
                            <Link
                                passHref
                                href="/Terms">
                                <h1 className="f-size-p4 f-weight-400">
                                    Terms
                                </h1>
                            </Link>
                        </li>


                        <li className="item">
                            <Link
                                passHref
                                href="/Privacy">
                                <h1 className="f-size-p4 f-weight-400">
                                    Privacy
                                </h1>
                            </Link>
                        </li>


                        <li className="item">
                            <Link
                                passHref
                                href="/Help">
                                <h1 className="f-size-p4 f-weight-400">
                                    Help
                                </h1>
                            </Link>
                        </li>

                        <li className="item">
                            <Link
                                passHref
                                href="/">
                                <h1 className="f-size-p4 f-weight-400">
                                    Discord
                                </h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
