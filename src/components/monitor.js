import React,{Component} from 'react';
import {Text,View} from 'react-native';

import {connect} from 'react-redux';

class Monitor extends Component{
	render(){
		return (
			<View style={container}>
				<Text style={text}>{this.props.count}</Text>
			</View>
		)
	}
}

const container={
	flex:1,
	justifyContent:'center',
	flexDirection:'row',
	alignItems:'center'
}

const text={
	fontSize:50,
	color:'#77cccc'
}

function mapStateToProps(state){
	return {
		count:state.counter.count
	}
}
export default connect(mapStateToProps,null)(Monitor);