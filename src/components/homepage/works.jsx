import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./progshee.jpg"
								alt="progshee"
								className="work-image"
							/>
							<div className="work-title">Progshee Technologies</div>
							<div className="work-subtitle">
								Backend Developer Intern
							</div>
							<div className="work-duration">Mar 2023 - July 2023</div>
						</div>

						<div className="work">
							<img
								src="./oasis.jpg"
								alt="oasis infobyte"
								className="work-image"
							/>
							<div className="work-title">Oasis Infobyte</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">Jan 2023 - Feb 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
