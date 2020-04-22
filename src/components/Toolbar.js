import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Toolbar.css';
import { FiLayers } from 'react-icons/fi';
import { MdAddBox } from 'react-icons/md';
import { AiOutlineDownload } from 'react-icons/ai';

import { startUploadModal } from '../actions/uploadModalActions';


class Toolbar extends Component { 
	
	startUploadModal = (event) => {
		this.props.startUploadModal(event);
	}
	
	render() {
	    return(
            <div className="toolbar">
				<span className="item" onClick={this.startUploadModal}><MdAddBox size={18}/></span>
				<span className="item"><FiLayers size={18}/></span>
				<span className="item"><AiOutlineDownload size={18}/></span>
            </div>
	    )
	  }
	}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    startUploadModal: (event) => dispatch(startUploadModal(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);