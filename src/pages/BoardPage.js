import React, { Component } from 'react';
import '../css/BoardPage.css';

import Board from '../components/Board';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';
import UploadModal from '../components/UploadModal';
import { Prompt } from 'react-router'

class BoardPage extends Component { 
	componentDidUpdate = () => {
	  if (true) {
	    window.onbeforeunload = () => true
	  } else {
	    window.onbeforeunload = undefined
	  }
	}
	
	render() {
		return (
			<div className="pageContainer">
				<Prompt
					when={true}
					message='You have unsaved changes to your board, are you sure you want to leave?'
				/>
				<UploadModal/>
				<div className="titleWrapper">
					<input className="title" type="string" defaultValue="my board"></input>
				</div>
				<div className="boardWrapper">
					<Board/>
				</div>
				<div className="toolbarWrapper">
					<Toolbar/>
				</div>
				<div className="footerWrapper">
					<Footer/>
				</div>
			</div>
			)
	}
}


export default BoardPage;