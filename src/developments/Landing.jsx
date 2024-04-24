import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialIcons from "../components/SocialIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Landing = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home" className="md:flex md:justify-between md:items-center md:ml-20 gap-16 md:h-full py-10">
            {/* Image Side */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 mt-0 before:absolute before:-top-20 before:-left-20 before:rounded-b-[400px]
            before:w-full before:max-w-[200px] md:before:max-w-[300px] before:h-full before:border-2 before:border-red before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 rounded-b-[400px] w-full max-w-[200px] md:max-w-[300px]"
                            src="assets/profile-image2.jpg"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] rounded-b-[400px] h-[30%] md:max-w-[600px]"
                        src="assets/profile-image2.jpg"
                    />
                )}
            </div>

            {/* Text Side */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Chigozie {""}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Daniel
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        An enthusiastic Full Stack Developer with skills in developing web and mobile applications utilizing
                        JavaScript, React.js, Node.js, TypeScript, and several other awesome frameworks and tools.
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-dark-grey rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Get In Touch.
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-dark-grey hover:text-amber-900 transition duration-500 w-full h-full flex items-center justify-center px-10 font-opensans">
                            Let's convene.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;