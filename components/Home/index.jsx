import './home.scss';
import React, { Component } from 'react';
import Cover from '../../images/cover_big.jpg';

export default class AppComponent extends Component {

	constructor(props) {
		super(props);
	}

	render = () => {
    return (
      <div id="home">
				<a id="cover" href="https://varsitystar.bandcamp.com/"><img src={Cover} /></a>
      </div>
    );
  }

}
