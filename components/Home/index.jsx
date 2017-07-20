import './home.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';
import Cover from '../../images/cover_big.jpg';

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render = () => {
    return (
      <div id="home">

				<div className="choice"><Link to="/album">Album</Link></div>
				<div className="choice"><Link to="/contact">Contact</Link></div>

      </div>
    );
  }

}
