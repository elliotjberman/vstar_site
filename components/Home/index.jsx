import './home.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';
import Cover from '../../images/cover_big.jpg';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	stretch = (event) => {
		event.preventDefault();
		event.currentTarget.classList.add("stretched");

		let elements = document.getElementsByClassName("choice")
		for (var i = 0; i < elements.length; i++) {
			if (elements[i] != event.currentTarget)
				elements[i].classList.add("ignored");
		}
	}




	render = () => {
    return (
      <div id="home" className="transition-item">

				<div onClick={this.stretch} className="choice">
					<Link to="/album">Album</Link>
				</div>
				<div onClick={this.stretch} className="choice">
					<Link to="/contact">Contact</Link>
				</div>

      </div>
    );
  }

}

export default Home
