import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/UploadModal.css';

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { closeUploadModal, handleFile } from '../actions/uploadModalActions';

import { MdAddBox } from 'react-icons/md';

class UploadModal extends Component { 
	
	closeUploadModal = (event) => {
        this.props.closeUploadModal(event);
    }
	
	handleFile = (event) => {
		// if successful, dispatches add new image action, else, upload unsuccessful action
		this.props.dispatch(handleFile(event));
	}
	
	render() {
		return (
    		<Modal show={this.props.uploadModalReducer.active} className="uploadModal">
    			<Modal.Header closeButton onClick={this.closeUploadModal}>
    				<Modal.Title>Upload images</Modal.Title>
    			</Modal.Header>
    			<Modal.Body className="mainBody">
					<p>
						Drag and drop an image, or click to upload.
					</p>
					<label htmlFor="dragZone">
						<div className="dragZone">
							<MdAddBox size={32} className="icon"/>
						</div>
					</label>
					<input type="file" onChange={this.handleFile} id="dragZone"/>
				</Modal.Body>
    		</Modal>
		)
	}
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
	closeUploadModal: (event) => dispatch(closeUploadModal(event)),
	dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);