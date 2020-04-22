import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/BoardImage.css';

import { mouseDown, mouseUp, mouseMove } from '../actions/boardImageActions'

class BoardImage extends Component { 
    
    leftClickHandler = (event) => {
        if (event.type === "mousedown") {
            this.mouseDown(event);
        } else if (event.type === "mouseup") {
            this.mouseUp(event);
        } 
    }
    
    mouseMoveHandler = (event) => {
        if (this.props.canvasReducer.dragging) {
            this.mouseMove(event);
        }
    }
    
	render() {
	    return(
            <img
                alt={this.props.imageID} src={this.props.src}
                width={this.props.width} height={this.props.height}
                position={this.props.position}>
            </img>
	    )
	  }
	}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    mouseDown: (event) => dispatch(mouseDown(event)),
    mouseUp: (event) => dispatch(mouseUp(event)),
    mouseMove: (event) => dispatch(mouseMove(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardImage);