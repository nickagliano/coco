import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Layer.css';

class Layer extends Component { 
	render() {
		const style = {
			"z-index": this.props.z,
			backgroundColor: this.props.backgroundColor
		};
		
		return(
			<canvas id={this.props.layerID} style={style}></canvas>
		)
	}
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Layer);