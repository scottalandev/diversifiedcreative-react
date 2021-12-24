import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { contactUs } from '../data/infoCardsData';
import { PageHead } from '../modules/displayModules';
import './pages.css';

const postContactData = (contactData) => {
	alert(`postContactData receives: ` + JSON.stringify(contactData));
};

function ContactForm(props) {
	const [contactData, setContactData] = useState({});
	const submit = (e) => {
		alert(`Form Submitted. Current state of 'contactData' is: ` + JSON.stringify(contactData));
		e.preventDefault();
		props.postContactData(contactData);
	};
	return (
		<div className="contact-form">
			<Form onSubmit={submit}>
				<FormGroup floating>
					<Input
						id="userName"
						name="userName"
						placeholder="Name"
						type="text"
						onChange={(e) => setContactData({ ...contactData, userName: e.target.value })}
					/>
					<Label for="userName">Name</Label>
				</FormGroup>{' '}
				<FormGroup floating>
					<Input
						id="email"
						name="email"
						placeholder="Email"
						type="email"
						onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
					/>
					<Label for="email">Email</Label>
				</FormGroup>{' '}
				<FormGroup floating>
					<Input
						id="phone"
						name="phone"
						placeholder="Phone Number"
						type="text"
						onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
					/>
					<Label for="phone">Phone Number</Label>
				</FormGroup>{' '}
				<FormGroup tag="fieldset">
					<legend>Preferred Contact Method</legend>
					<FormGroup check>
						<Label check>
							<Input type="radio" id="resEmail" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.value })} />
							Email
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="radio" id="resPhone" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.value })} />
							Phone
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup tag="fieldset">
					<legend>Which Service(s) Are You Inquiring About?</legend>
					<FormGroup check>
						<Label check>
							<Input
								id="webDev"
								type="checkbox"
								name="servInquiry"
								onChange={(e) => setContactData({ ...contactData, basicTune: e.target.value })}
							/>
							Web Development
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								id="origWords"
								type="checkbox"
								name="servInquiry"
								onChange={(e) => setContactData({ ...contactData, pitchRaise: e.target.value })}
							/>
							Original Writing/Content Creation
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								id="editing"
								type="checkbox"
								name="servInquiry"
								onChange={(e) => setContactData({ ...contactData, deluxeTune: e.target.value })}
							/>
							Editing
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								id="music"
								type="checkbox"
								name="servInquiry"
								onChange={(e) => setContactData({ ...contactData, soundDampen: e.target.value })}
							/>
							Music/Sound
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								id="otherInquriy"
								type="checkbox"
								name="servInquiry"
								onChange={(e) => setContactData({ ...contactData, otherInquriy: e.target.value })}
							/>
							Other/General Inquiry
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup floating>
					<Input
						id="otherInfo"
						name="otherInfo"
						placeholder="Other Info"
						type="textarea"
                        style={{height: '200px'}}
						onChange={(e) => setContactData({ ...contactData, otherInfo: e.target.value })}
					/>
					<Label for="otherInfo">Please provide as much detail as possible about your project</Label>
				</FormGroup>{' '}
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}

function Contact() {
	return (
		<div className="container">
			<PageHead title={contactUs.title} text={contactUs.text} image="img/dc-blk-full-logo.png" />
			<ContactForm postContactData={postContactData} />
		</div>
	);
}

export default Contact;
