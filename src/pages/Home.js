import React, { Component } from 'react';
import '../css/Home.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component { 

	render() {
		return (
			<div className="Home">
				<header className="Home-header">
					<img src={logo} className="Home-logo" alt="logo" />
						<p>
							Make collages. Online. With friends.
						</p>
					<Link to="/board" className="Home-link">
						<Button>
							Start making
						</Button>
					</Link>
				</header>
			</div>
		)
	}
}


export default Home;