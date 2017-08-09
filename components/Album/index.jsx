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
						<a href="https://open.spotify.com/album/0CdMLYwTEWKDFWUpNaewTP">Spotify</a>
						<a href="https://itunes.apple.com/us/album/model-home/id1266944102">iTunes</a>
						<a href="https://varsitystar.bandcamp.com/album/model-home">Bandcamp</a>
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
