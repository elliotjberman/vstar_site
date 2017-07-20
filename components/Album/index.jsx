import './album.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';
import Cover from '../../images/cover_big.jpg';

export default class Album extends Component {

	constructor(props) {
		super(props);
	}

	render = () => {
    return (
      <div id="album">

				<Link id="back" to="/">Back</Link>

				<div id="cover">
					<div id="overlay">
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
