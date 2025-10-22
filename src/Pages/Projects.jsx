import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import itemhive from "../assets/itemhive.png";
import demarket from "../assets/demarket.png";
import axume from "../assets/axume.png";
import game from "../assets/game.png";
import test from "../assets/test.png";
import freelancer from "../assets/freelancer.png";
import "../Styles/products.css";

const Projects = () => {
	useEffect(() => {
		AOS.init({ duration: 800 });
	}, []);

	const projects = [
		{
			title: "ITEMHIVE",
			link: "https://itemhive.ng/",
			img: itemhive,
			tech: "HTML, CSS, JS, Firebase, Bootstrap",
			desc: "A fully working marketplace and blog centered at university students, features market listing, post adding, sending messages, realtime notifications.",
		},
		{
			title: "DE-MARKETPLACE",
			link: "https://de-marketplace.web.app/",
			img: demarket,
			tech: "HTML, CSS, JS, Firebase, Bootstrap",
			desc: "A static shopping website created using a rest API, including a test product purchase. ",
		},
		{
			title: "AXUME Student Portal",
			link: "https://aitstudentporta.web.app/",
			img: axume,
			tech: "HTML, CSS, JS, Firebase, Bootstrap",
			desc: "A fully working student portal, includes both student and Admin dashboard and test course application payment, You can signup as a student but not Admin for that you can contact me.",
		},
		{
			title: "A simple React Hide and Seek game",
			link: "https://hideandseekgame-brown.vercel.app/",
			img: game,
			tech: "React, CSS, Bootstrap",
			desc: "Created a simple game where you hide from the seeker, still in development, contact me for any suggestions or fixes",
		},
		{
			title: "A job application test",
			link: "https://test-ten-plum-82.vercel.app/",
			img: test,
			tech: "React, CSS, Bootstrap",
			desc: "A frontend job application test where i was fetching the patients and other info from an API given",
		},
		{
			title: "FREELANCER website clone - Frontend only",
			link: "https://ukabir.github.io/PROJECT/",
			img: freelancer,
			tech: "HTML, CSS, Bootstrap",
			desc: "A clone of the freelancer website, navigate through Landing, Signup/Login, Dashboard, Profile, Settings pages. Just the frontend",
		},
		
		
		// Add more projects here
	];

	return (
		<section className="section section2 py-5" data-aos="zoom-in">
			<div className="container">
				<h2 className="mb-4 text-center">Projects</h2>
				<div className="row g-4">
					{projects.map((project, index) => (
						<div key={index} className="col-12 col-md-6">
							<div className="project-card rounded p-3 h-100">
								<img
									src={project.img}
									alt={project.title}
									className="img-fluid mb-3"
									style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
								/>
								<h3>
									<a href={project.link} target="_blank" rel="noopener noreferrer">
										{project.title}
									</a>
								</h3>
								<p>
									<strong>Technologies:</strong> {project.tech}
								</p>
								<p>{project.desc}</p>
							</div>
						</div>
					))}
				</div>
				<h3 className=" p-4">More at my <a href="https://github.com/Ukabir">Github</a></h3>
			</div>
		</section>
	);
};

export default Projects;
