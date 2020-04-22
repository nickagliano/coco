import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Canvas.css';

class RightClickMenu extends Component { 

	render() {
	    return(
	      <div>
			<div className="canvasWrapper">
				<div className="myCanvas">
				</div>
			</div>
	        
	      </div>
	    )
	  }
	}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(RightClickMenu);