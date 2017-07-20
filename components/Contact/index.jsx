'use strict';

import React from 'react';
import { Link } from 'react-router';

import './contact.scss';

class Contact extends React.Component {

	constructor() {
		super();
		this.state = {
			intervalId: null,
			phone: null,
			email: null
		}
	}

	componentDidMount = () => {
		let interval = setInterval(this.adjustCircle, 10000);
		this.setState({intervalId: interval});
	}

	componentWillUnmount = () => {
		clearInterval(this.state.intervalId);
	}

	adjustCircle = () => {
		let min = Math.ceil(1);
		let max = Math.floor(4);
		let number = Math.round(Math.random() * (max - min)) + min;
		let circle = document.getElementById('circle-boy-' + number);

		let randomRadius = Math.random() * 50;

		circle.style.borderRadius = randomRadius + "%";
	}

	showPhoneInfo = () => {
		this.setState({phone: '978-729-3655'})
	}

	showEmail = () => {
		this.setState({email: 'varsitystarmusic@gmail.com'})
	}

  render = () => {
		var path = this.props.location.pathname;
    return (
	      <div id="contact">

				<div id="intro" className="whole grid">
					<h1>Contact</h1>
				</div>

				<div className="flexContainer">
					<div className="row"></div>
					<div className="row">
						<div className="grid fifth">

							<div className="circle-container">
								<Link to="/"><div id="circle-boy-0"></div></Link>
							</div>
						</div>

						<div className="grid fifth">

							<div className="circle-container">
								<div id="circle-boy-1"></div>
							</div>
						</div>


						<div className="grid fifth">

							<div className="circle-container">
								<div id="circle-boy-2"></div>
							</div>
						</div>



						<div className="grid fifth">

							<div className="circle-container">
								<div id="circle-boy-3"></div>
							</div>

						</div>


						<div className="grid fifth">

							<div className="circle-container">
								<div id="circle-boy-4"></div>
							</div>
						</div>

					</div>

					<div className="row">
						<div className="grid fifth">
							<h2><Link to="/">Back</Link></h2>
						</div>

						<div className="grid fifth"><p></p></div>

						<div className="grid fifth">
							<h2 onMouseEnter={this.showEmail}><a href={"mailto:" + this.state.email}>Email</a></h2>
							<p>
								<a href={"mailto:" + this.state.email}>
									{this.state.email}
								</a>
							</p>
						</div>

						<div className="grid fifth">
							<h2 onMouseEnter={this.showPhoneInfo}>
								<a href={"+tel:" + this.state.phone}>Call</a>
							</h2>
							<p>
								<a href={"+tel:" + this.state.phone}>{this.state.phone}</a>
							</p>
						</div>

						<div className="grid fifth">
							<h2 className="contrast">Elliot Berman</h2>

							<p>
								<span className="contrast">is a Brooklyn-based musician. </span>
								Hit him up if you're want music for a live show, movie, video game, or anything else you can think of.
							</p>
						</div>
					</div>

				</div>

    </div>
    );
  }
}

Contact.displayName = 'Contact';

// Uncomment properties you need
// Contact.propTypes = {};
// Contact.defaultProps = {};

export default Contact;
