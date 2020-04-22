import React, { Component } from 'react';
import '../css/Footer.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component { 
	
	render() {
	    return(
	      <div>
			<div className="footer">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" href="/"/>
                </Link>
                <p className="slogan">{" "} Make collages. With Friends. In your browser.</p>
			</div>
	        
	      </div>
	    )
	  }
	}


export default Footer;