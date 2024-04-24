import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-11 mb-9 pb-24">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-opensans text-4xl mb-5">
                        TECHNICAL <span className="text-yellow">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-8">
                        I am a highly motivated and results-oriented web and software developer with years of experience in building and maintaining high-quality web applications.
                        I have a comprehensive understanding of web development principles, best practices, and technologies, and  am well-versed in the entire Web Development Life Cycle (WDLC) from requirements gathering to implementation and maintenance of sites.
                        I am a valuable asset to any team because I can handle complex tasks independently, while also working effectively with colleagues.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 mt-28 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:rounded-b-[400px] before:border-red before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10 rounded-b-[400px] h-96 w-96"
                                src="assets/skills2.jpg"
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10 rounded-b-[400px]"
                            src="assets/skills2.jpg"
                        />
                    )}
                </div>
            </div>

            {/* Mastery */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Proficiency */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-opensans text-[48px]">01</p>
                            <p className="font-opensans font-semibold text-[30px] text-purple-900 mt-3 ">
                                Proficiency
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-to-r from-red to-blue absolute right-0 top-0 z-[-1] rounded-3xl" />
                    </div>
                    <p className="mt-5">
                        As a seasoned web developer, I serve the web with a strong competency in a variety of
                        programming languages and frameworks. My experience spans the whole field of web development,
                        from creating aesthetically beautiful and responsive front-end interfaces with React.js, CSS, JavaScript, TypeScript to designing secure back-end
                        systems using Python and Node.js. And Git version control.
                    </p>
                </motion.div>

                {/* Resourceful */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-opensans text-[48px]">02</p>
                            <p className="font-opensans text-[30px] text-[#b8c9a9] mt-3">
                                Resourceful
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-to-r from-grey to-yellow absolute right-0 top-0 z-[-1] rounded-3xl" />
                    </div>
                    <p className="mt-5">
                        Accountable for my Resourceful web development skill set,
                        I effectively journey challenges by creatively leveraging a
                        wide range of technologies and staying up of industry developments.
                        This allows me to provide effective and inventive solutions,
                        assuring project success even in dynamic and fast-paced circumstances.
                        This resourceful mindset not only enhances the quality of my work
                        but also enables me to contribute valuable insights to
                        collaborative projects.
                    </p>
                </motion.div>

                {/* Creativity */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-opensans text-[48px]">03</p>
                            <p className="font-opensans text-[30px] text-[#d8cfe5] mt-3">
                                Creative
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-to-r from-purple-500 to-pink-500 absolute right-0 top-0 z-[-1] rounded-3xl"></div>
                    </div>
                    <p className="mt-5">
                        My web development skill lives on creativity, perfectly
                        integrating design aesthetics and technical functionality.
                        My acute eye for visually appealing interfaces,
                        combined with a dedication to remaining on top of design trends,
                        ensures that each project exceeds user expectations.
                        From inventive ideas to intuitive UI/UX,
                        my creative skill set brings a fascinating touch to web
                        development, improving both form and function.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;