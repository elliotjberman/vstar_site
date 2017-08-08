import './album.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';
import Cover from '../../images/cover_big.jpg';

class Album extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showing: false
		}
	}

	componentDidMount = () => {
		setTimeout(function() {
			document.getElementById("back").classList.add('showing');
			document.getElementById("credit").classList.add('showing');
			window.setTimeout(function(){
				document.getElementById("cover").classList.add('showing');
			}, 800)
		}, 0);
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
      <div id="album" className="transition-item" onClick={this.state.showing ? this.hideMobileOverlay : null}>

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

export default Album
