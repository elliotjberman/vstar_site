'use strict';

import React from 'react';
import { Link } from 'react-router';

import './contact.scss';

class Contact extends React.Component {

	constructor() {
		super();
	}

	componentDidMount = () => {
		document.getElementById("info-container").classList.add('showing');
		document.getElementById("back").classList.add('showing');
	}

	spamProofEmail = () => {
		// Email obfuscator script 2.1 by Tim Williams, University of Arizona
		// Random encryption key feature coded by Andrew Moulden
		// This code is freeware provided these four comment lines remain intact
		// A wizard to generate this code is at http://www.jottings.com/obfuscator/
			let coded = "e2prk8Wr82pgNrks@Hg2kB.sCg"
			let key = "ByLFjo2eczHEXu350Q1wmkKfpMRWUSJC9bstlxGNqYavA6gZ7PD4hOVndiITr8"
			let shift=coded.length
			let link=""
			for (let i=0; i<coded.length; i++) {
				if (key.indexOf(coded.charAt(i))==-1) {
					let ltr = coded.charAt(i)
					link += (ltr)
				}
				else {
					let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
					link += (key.charAt(ltr))
				}
			}
		return <a className="grid fifth" href={'mailto:' + link}><h2>{link}</h2></a>
	}


  render = () => {
		var path = this.props.location.pathname;
    return (
	      <div id="contact">

					<Link id="back" to="/">Back</Link>

					<div id="info">

						<div id="info-container">
							<div className="grid fifth">
								<h1>Contact</h1>
							</div>
							<a href="tel:" className="grid fifth space-1">
								<h2>978.729.3655</h2>
							</a>
							{this.spamProofEmail()}
							<a href="http://vincenzojohnson.com/" className="grid fifth">
								<h2>Photography by Vincenzo Johnson</h2>
							</a>
						</div>

					</div>

				</div>
    );
  }
}

// Uncomment properties you need
// Contact.propTypes = {};
// Contact.defaultProps = {};

export default Contact;
