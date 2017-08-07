import './album.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';
import Cover from '../../images/cover_big.jpg';

export default class Album extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showing: false
		}
	}

	componentDidMount = () => {
		document.getElementById("back").classList.add('showing');
		document.getElementById("credit").classList.add('showing');
	}

	hideMobileOverlay = (event) => {
		if (event.currentTarget.id == 'album') {
			this.setState({
				showing: false
			});
		}
	}

	showMobileOverlay = () => {
		this.setState({
			showing: true
		});
	}

	render = () => {
    return (
      <div id="album" onClick={this.state.showing ? this.hideMobileOverlay : null}>

				<Link id="back" to="/">Back</Link>

				<div id="cover" className={this.state.showing ? "covered" : null} onClick={this.showMobileOverlay}>
					<div id="overlay" className={this.state.showing ? "showing" : null}>
						<br/>
						<a href="https://varsitystar.bandcamp.com/">Spotify</a>
						<a href="https://varsitystar.bandcamp.com/">iTunes</a>
						<a href="https://varsitystar.bandcamp.com/">Bandcamp</a>
						<br/>
					</div>
					<img src={Cover} />
				</div>

				<h2 id="credit">Artwork by <a href="https://www.partnersincrime.studio/">Partners in Crime Studio</a></h2>

      </div>
    );
  }

}
