import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// const projectVariant = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
// };


const Projects = () => {
    return (
        <section id="projects" className=" md:mt-[650px] pt-48 pb-48">
            <LineGradient />
            {/* Head */}
            <motion.div
                className="md:w-2/5 mx-auto mt-24 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        My  <span className="text-yellow">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Welcome to my playground, where pixels move and code sings.
                    As an experienced web developer,
                    I've spent years creating digital experiences that
                    are both visually appealing and functional.
                    This collection gives you a glimpse into my wide arsenal
                    and the passion that drives every line of code I create.
                </p>
            </motion.div>

            {/* Projects */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* Row 1 */}
                    <a href="https://dejeriques-react-calc-app.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 1</p>
                                <p className="mt-7">A mini calculator, made using create-react-app,
                                    with lots of functions.
                                </p>
                            </div>
                            <img src="../assets/calc-app.png" alt="" />
                        </motion.div>
                    </a>

                    <a href="https://dejeriques-react-counter.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 2</p>
                                <p className="mt-7">A functional React counter, that takes multiple
                                    digits to calculate accurately.
                                </p>
                            </div>
                            <img src="../assets/react-counter.png" alt="" />
                        </motion.div>
                    </a>

                    <a href="https://dejerique-simple-js-quiz-app.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 3</p>
                                <p className="mt-7">Quiz app inspired by Web Dev Simplified, a mini
                                    version, packed with questions to keep you engaged!
                                </p>
                            </div>
                            <img src="../assets/quiz-app.png" alt="" />
                        </motion.div>
                    </a>

                    {/* Row 2 */}

                    <a href="https://form-registeration-pro.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 4</p>
                                <p className="mt-7">Pixels with Purpose, A well css oriented designed form
                                    inspired by me during my training sessions.
                                </p>
                            </div>
                            <img src="../assets/signup-form.png" alt="" />
                        </motion.div>
                    </a>

                    <a href="https://dejeriques-password-generator.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 5</p>
                                <p className="mt-7">Inspiration meets creativity, also a funtional password generator,
                                    also inspired by my trainer during training.
                                </p>
                            </div>
                            <img src="../assets/password-gen.png" alt="" />
                        </motion.div>
                    </a>

                    <a href="https://dejerique1-github-io.vercel.app/" target="_blank" rel="noreferrer">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            className="relative"
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                       bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-opaque-black">
                                <p className="text-2xl font-opensans">Project 6</p>
                                <p className="mt-7">The beginning, Project from introduction(the first website
                                    i designed)
                                </p>
                            </div>
                            <img src="../assets/church-page.png" className="h-[206px]" alt="" />
                        </motion.div>
                    </a>

                    <div
                        className="flex justify-center text-center items-center p-10 bg-grey
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SEAMLESS FUNCTIONALITY
                    </div>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-grey
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        AESTHETICALLY PLEASING
                    </div>

                    <div
                        className="flex justify-center text-center items-center p-10 bg-grey
                         max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        And lots more...
                    </div>
                </motion.div>
            </div>

            {/* <div className="text-center text-9xl text-red font-opensans mt-5">LOVE YOUUU</div> */}
        </section>
    );
};

export default Projects;