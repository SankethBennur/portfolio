import React, { useState } from "react";

import "./Certifications.css";

import icon_goto from "../assets/icon_goto.png";

import logo_aws from "../assets/logo_aws.jpg";
import logo_tryhackme from "../assets/logo_tryhackme.png";
import logo_microsoft from "../assets/logo_microsoft.png";

const certification_list = [
	{
		name: "AWS Certified Cloud Practitioner",
		url: "https://www.credly.com/badges/a589778e-89a4-4a5e-8b71-c48d6bcfb5c0/public_url",
		image: logo_aws,
		providers: ["Amazon Web Services"],
	},
	{
		name: "Jr Penetration Tester",
		url: "https://drive.google.com/file/d/10kA1tu4fhLi6bZz_L1baI2dNql522OGu/view?usp=drive_link",
		image: logo_tryhackme,
		providers: ["TryHackMe"],
	},
	{
		name: "Microsoft - Machine Learning",
		url: "https://courses.edx.org/certificates/9efd776a4d6d4355af7630514aac77ff",
		image: logo_microsoft,
		providers: ["Microsoft", "edx"],
	},
];

function Certifications() {
	const [selected_cert_index, set_selected_cert_index] = useState(0);

	return (
		<div className="certifications">
			<h2>Certifications</h2>

			{/* Certifications container */}
			<div className="certifications-container">
				<div className="certification-container-grid">
					<div className="certification-container-column">
						{/* Row even*/}
						<div className="certification-container-row">
							{certification_list.map(
								(cert, index) =>
									index % 2 === 0 && (
										<img
											key={`cert-img-${index}`}
											className="cert-img"
											src={cert.image}
											onClick={() => {
												set_selected_cert_index(index);
											}}
										/>
									)
							)}
						</div>

						{/* Row odd */}
						<div className="certification-container-row">
							{certification_list.map(
								(cert, index) =>
									index % 2 !== 0 && (
										<img
											key={`cert-img-${index}`}
											className="cert-img"
											src={cert.image}
											onClick={() => {
												set_selected_cert_index(index);
											}}
										/>
									)
							)}
						</div>
					</div>
				</div>

				{/* <div className="certification-container-row">
					{certification_list.map((cert, index) => (
						<img
							key={`cert-img-${index}`}
							className="cert-img"
							src={cert.image}
							onClick={() => {
								set_selected_cert_index(index);
							}}
						/>
					))}
				</div> */}

				{/* Certifications info box */}
				<div className="certifications-info-box">
					<div className="certifications-info-box-name-provider">
						<h4>{certification_list[selected_cert_index].name}</h4>
						<p className="certifications-provider">
							{certification_list[
								selected_cert_index
							].providers.join(", ")}
						</p>
					</div>
					<a
						href={certification_list[selected_cert_index].url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={icon_goto}
							className="certification-goto-icon"
						/>
					</a>
				</div>

				{/* Certifications info table */}
				{/* <table className="cert-info-table">
					<tr className="cert-info-table-row">
						<td className="cert-info-table-column-details">
							<h4>
								{certification_list[selected_cert_index].name}
							</h4>
							<p className="certifications-provider">
								{certification_list[
									selected_cert_index
								].providers.join(", ")}
							</p>
						</td>
						<td className="cert-info-table-column-goto">
							<a
								href={
									certification_list[selected_cert_index].url
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={icon_goto}
									className="certification-goto-icon"
								/>
							</a>
						</td>
					</tr>
				</table> */}
			</div>
		</div>
	);
}

export default Certifications;
