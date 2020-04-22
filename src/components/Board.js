import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Board.css';
import { rightClick, keyBindHandler, mouseUp, mouseDown, mouseMove } from '../actions/boardActions'


function getBoardClass(zoom) {
	if (zoom === 125) {
		return "myBoard125";
	} else if (zoom === 100) {
		return "myBoard100";
	} else if (zoom === 75) {
		return "myBoard75";
	} else if (zoom === 50) {
		return "myBoard50";
	} else if (zoom === 25) {
		return "myBoard25";
	} else {
		return "myBoard50";
	}
}

class Board extends Component { 
	
	// handles mouse down event, sets dragging to true if mouse down on an image
	mouseDownHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		mouseDown(event, this.props.boardReducer);
	}
	
	// ends dragging event
	mouseUpHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.props.mouseUp();
	}
	
	mouseMoveHandler = (event) => {
		if (this.props.boardReducer.translator.dragging) {
			console.log(("mouse x: ") + event.clientX + ", mouse y: " + event.clientY);
			event.preventDefault();
			event.stopPropagation();
			mouseMove(event, this.props.boardReducer);
		}
	}
	
	// handle right click, bring up custom context menu
	rightClick = (event) => {
		event.preventDefault();
		this.props.rightClick();
	}
	
	// handle key binds, for undo/redo, and zooming in/out
	keyBindHandler = (event) => {
		this.props.dispatch(keyBindHandler(event));
	}
	
	drawLayers(numLayers) {
		let layers = [];
		for (let i = 0; i <= numLayers; i++) {
			let layerName = "layer_"+i;
			layers.push(<canvas key={layerName} ref={layerName} className="layer"
				onMouseDown={this.mouseDownHandler} onMouseMove={this.mouseMoveHandler}
				onMouseUp={this.mouseUpHandler} onKeyDown={this.keyBindHandler} tabIndex="0" />);
		}
		
		for(var imageID in this.props.boardReducer.images) {
			let layer = this.refs["layer_"+this.props.boardReducer.images[imageID].layer];
			let height = this.props.boardReducer.images[imageID].height;
			let width = this.props.boardReducer.images[imageID].width;
			let posX = this.props.boardReducer.images[imageID].positionX;
			let posY = this.props.boardReducer.images[imageID].positionY;
			let ctx = layer.getContext("2d");
			let image = new Image();
			image.ref = imageID;
			image.src = this.props.boardReducer.images[imageID].image;
			image.onload = function() {
				ctx.drawImage(image, posX, posY, width, height);
			}
		}
		
		return layers;
	}
	

	render() {
		return(
			<div>
				{/* define the board--the most important part of this app */}
				<div ref="board" className={getBoardClass(this.props.boardReducer.zoomPercentage)} 
						onContextMenu={this.rightClick} onKeyDown={this.keyBindHandler}
						tabIndex="0">
					{this.drawLayers(this.props.boardReducer.numLayers)}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	rightClick: () => dispatch(rightClick()),
	mouseUp: () => dispatch(mouseUp()),
	dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);