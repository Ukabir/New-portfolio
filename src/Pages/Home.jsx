import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/Snapchat-1106375230.jpg";
import "../Styles/home.css";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaFire } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="section py-5" data-aos="zoom-in">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center mb-4 mb-md-0">
                            <img
                                src={profileImg}
                                alt="My Profile"
                                className="img-fluid rounded-circle profile-img"
                            />
                        </div>
                        <div className="col-md-8 text-center text-md-start">
                            <h1>Hi, I'm Abdulkabir Umar Faruq</h1>
                            <p className="lead">I am a Fullstack Developer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section py-5" data-aos="zoom-in">
                <div className="container">
                    <h2>About Me</h2>
                    <p>
                        I’m a passionate fullstack developer building clean, interactive web experiences.
                    </p>

                    <h2 className="mt-4">Professional Summary</h2>
                    <p>
                        Passionate Fullstack Developer with comprehensive expertise in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, Nextjs, React, Node, Express, MongoDB, Firebase and other Non-relational database.
                        I have successfully completed my Fullstack Development course at SQI, mastering both front-end and back-end development, including building full-stack applications.
                        Currently, I am contributing to AXUME by designing, developing, and maintaining their company website, applying modern development practices to deliver seamless user experiences.
                        I thrive on creating interactive, responsive, and efficient web applications, and I am constantly exploring new technologies and frameworks to enhance my skills.
                        Driven by curiosity and innovation, I aim to deliver high-quality solutions that make a real impact while continuing to grow as a professional developer.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section section2 py-5" id="skills" data-aos="zoom-in">
                <div className="container">
                    <h2 className="mb-4 text-center">Skills</h2>
                    <div className="row row-cols-2 row-cols-md-3 d-flex justify-content-center row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaHtml5 className="fa-2x mb-2 text-danger" />
                                <span>HTML</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaCss3Alt className="fa-2x mb-2 text-primary" />
                                <span>CSS</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaJs className="fa-2x mb-2 text-warning" />
                                <span>JavaScript</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaBootstrap className="fa-2x mb-2 text-purple" />
                                <span>Bootstrap</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <SiFirebase className="fa-2x mb-2 text-warning" />
                                <span>Firebase</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaReact className="fa-2x mb-2 text-info" />
                                <span>React</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <FaNodeJs className="fa-2x mb-2 text-success" />
                                <span>Node</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <SiNextdotjs className="fa-2x mb-2" />
                                <span>Next JS</span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center gap-1 justify-content-center rounded">
                                <SiTailwindcss className="fa-2x mb-2 text-sky-400" />
                                <span>Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
