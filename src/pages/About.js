import AboutImg from "../assets/hero1.png";
import CoreValues from "../components/CoreValues";

const About = () => {
    return ( 
        <>
            <div className="h-full">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                    <h1 >About Us</h1>
                    <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                </div>
                <div className="md:flex justify-center items-center">
                    <div className="w-full">
                        <img className="w-full" src={AboutImg} alt="about" />
                    </div>
                    <div className="space-y-4 md:text-left text-center">
                        <p>
                            Vabrise Technologies LTD is a software engineering firm incorporated in Kenya in 2020. 
                            Our key purpose is to equip the next generation of software engineers that will write a new story of Africa. 
                            We exist to change the software engineering landscape in Africa.
                        </p>
                        <p>
                            In the last 4 years, we have been working hard to build the required processes, and 
                            empower young engineers to build enterprise software products. We have been able to 
                            serve large enterprises including Banks, Telcos, and many VAS aggregators in Africa.
                        </p>
                        <div className="flex md:justify-start justify-center items-center">
                            <button className="px-4 py-3 bg-green-500 text-white font-medium rounded-lg mt-4">
                                The Back Story
                            </button>
                        </div>
                    </div>
                </div>
                
                <CoreValues title="Core Values" />

                <div className="md:mx-64 mx-8 md:mb-32 mb-16">
                    <div className="flex flex-col items-center justify-center mb-8 md:text-3xl text-xl text-gray-800 font-semibold">
                        <h1>Our Mission</h1>
                        <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                    </div>
                    <p className="md:text-3xl text-2xl font-extralight text-center md:leading-relaxed tracking-wide">
                        <span className="md:text-4xl text-3xl font-medium">" </span> 
                            Our mission is to equip the next generation of software engineers in Kenya with the right mindset, 
                            skillset, toolset and provide them with a platform that enables them to create amazing solutions to 
                            our problems in Africa and beyond. We see this as a sure way to a better tomorrow for our children 
                        <span className="md:text-4xl text-3xl font-medium"> "</span>
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default About;