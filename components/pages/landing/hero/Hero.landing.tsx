// OWN
import Button from "components/lib/button/Button";




const Hero = () => {
    return (
        <>
            <div className="hero_landing_main">
                <Button
                    href={''}
                    inNewTab={true}
                    size={{ x: 5, y: 3 }}
                    theme='cta'
                    style={{ margin: '5vh 0' }}
                    className='animated_ui'>
                    <h2 className="f-size-p2 f-weight-500">
                        shop now
                    </h2>
                </Button>
            </div>
        </>
    );
};




export default Hero;
