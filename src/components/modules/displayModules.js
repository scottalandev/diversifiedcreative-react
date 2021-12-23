import { NavLink } from 'react-router-dom';
import './displayModules.css';

export function PageHead({ image, title, text }) {
	return (
		<div className="page-head-cont">
			<div className="row page-head-img">
				<img src={image} alt={`{${title} banner image}`} />
			</div>
			<div className="row page-head-text">
				<div className="col">
					<h1>{title}</h1>
					<h2>{text}</h2>
				</div>
			</div>
		</div>
	);
}
export function InfoCard({ info }) {
	if (info) {
		return (
			<div className="col info-card-cont">
				<div className="info-card">
					<h3>{info.title}</h3>
					<p>{info.text}</p>
					<NavLink to={info.path}>
						<button className="btn btn-secondary">{info.title}</button>
					</NavLink>
				</div>
			</div>
		);
	}
}
