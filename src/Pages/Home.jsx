import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/Snapchat-1106375230.jpg";
import "../Styles/home.css";

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
                        Passionate Fullstack Developer with comprehensive expertise in HTML5, CSS3, Bootstrap, JavaScript, and React.
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
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-html5 fa-2x mb-2"></i>
                                <span>HTML</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-css3-alt fa-2x mb-2"></i>
                                <span>CSS</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-js fa-2x mb-2"></i>
                                <span>JavaScript</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-bootstrap fa-2x mb-2"></i>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fas fa-fire fa-2x mb-2"></i>
                                <span>Firebase</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-react fa-2x mb-2"></i>
                                <span>React</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card text-center p-3 d-flex align-items-center justify-content-center rounded">
                                <i className="fab fa-node-js fa-2x mb-2"></i>
                                <span>Node</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
