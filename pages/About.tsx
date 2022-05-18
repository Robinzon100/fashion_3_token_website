import BluredVideo from 'components/lib/BluredVideo';

const About = () => {
    return (
        <>
            <BluredVideo />

            <article className='article'>
                <div className='container'>
                    <h1>Fashion Token is a cultural currency</h1>
                    <p>
                        The modern creative economies are characterized
                        by traditional disciplines goverging into a single
                        point of digitalization. The cultural currencies
                        capture connections between physical items and their
                        virtual counterparts. The $FSHN token is a cultural
                        currency that is created to support the new phygital
                        frontier, controlled and built by the community. It
                        will serve as a decentralized protocol to help break
                        barriers between physical and virtual realities.
                    </p>
                </div>

                <div className='container'>
                    <h1>Fashion DAO</h1>
                    <p>
                        Fashion DAO membership is open to all Fashion token
                        holders. A Decentralized Autonomous Organization (DAO)
                        is critical in building and managing a global
                        community and key to the success of the Fashion
                        token ecosystem. The Fashion Improvement Proposal
                        Process will allow the Fashion DAO members to make
                        decisions regarding the Ecosystem Fund allocations,
                        projects, partnerships, governance rules and beyond.
                    </p>
                </div>

                <div className='container'>
                    <h1>The Circle</h1>
                    <p>
                        The circle is a special group of people responsible
                        for the oversight of the Fashion DAO. The purpose of
                        the Circle is to enact DAO proposals and go through
                        with the vision of the community. It meets to discuss
                        proposals requiring review The Circle will serve an
                        initial 6 month term, after which the DAO members
                        will vote annually on Circle members.
                    </p>
                </div>




                <div className='container'>
                    <h1>Fashion Token, FSHN</h1>
                    <p>
                        FSHN  is a SNIP-20 cultural currency used in the
                        Fashion3 ecosystem to give interest, status, and
                        participation in key community activities.
                    </p>

                    <br />
                    <p className='f-weight-600'>FSHN has several key purposes:</p>

                    <ul>
                        <li>
                            <span className='f-weight-600'>Access:</span>
                            <br />
                            <div className='sub-text'>FSHN is the driving force in the fashion3 ecosystem, granting users
                                access to exclusive merchandise, events, services, and other potential utilities.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'>Governance:</span>

                            <br />
                            <div className='sub-text'>
                                FSHN is the ecosystems governance token which allows FSHN holders to participate in the Fashion3 DAO and shape the future of digital fashion.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'>Incentivization:</span>
                            <br />
                            <div className='sub-text'>
                                FSHN can be used by community developers to incorporate Fashion3 into other projects, services, and games.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'>Gamification:</span>
                            <br />
                            <div className='sub-text'>
                                Fashion3 allows for a new NFT experience. Wear to earn with Proof of Fashion(PoF) mechanism. FSHN is needed to upgrade user’s phygital drip to receive more rare and exclusive items.
                            </div>
                        </li>
                    </ul>
                </div>



                <div className="container">

                    <h1>Proof of fashion</h1>
                    <p>
                        The proof of fashion (PoF) algorithm is the key driving force behind the Fashion token. PoF algorithm has a 5% yearly inflation with weekly epochs. Every week new tokens are minted and divided evenly between eligible Fashion3 NFT holders. Only certain Fashion3 phygitals are eligible for PoF, please refer to the Metaspecs page to see the eligibility criteria.
                    </p>
                </div>



                <div className="container">
                    <h1>Fashion token allocation</h1>
                    <p className='f-weight-500'>
                        FSHN’s genesis supply is 1,000,000. Core contributor’s tokens are vested, and unlocked over a period of 48 months. FSHN will be distributed among four main groups as detailed in the chart below.
                    </p>

                    <ul>
                        <li>
                            <span className='f-weight-600'>Ecosystem Fund 50% (all unlocked at launch for claim by community):</span>

                            <br />
                            <div className='sub-text'>Earmarked airdrop and treasury/resources.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'>Fashion3 Founders 20% (50% initial unlock then linear unlock for 48 months):</span>

                            <br />
                            <div className='sub-text'>
                                The group of devs and designers that made Fashion3 happen.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'> Launch contributors 20% (10% unlock at launch then linear unlock for 48 months):</span>

                            <br />
                            <div className='sub-text'>
                                The people and companies that believed in digital fashion.
                            </div>
                        </li>

                        <li>
                            <span className='f-weight-600'> Advisors 10%  (linear unlock for 48 months):</span>
                            <br />
                            <div className='sub-text'>
                                Mission critical people with immense knowledge.
                            </div>
                        </li>
                    </ul>
                </div>



            </article>
        </>
    );
};

export default About;










