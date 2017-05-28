import React,{Component} from 'react';
import {View,Button,StyleSheet} from 'react-native';

import {connect} from 'react-redux';

class Control extends Component{
	handleDecrease(){
		this.props.dec();
	}
	handleIncrease(){
		this.props.inc();
	}
	render(){
		return (
			<View style={styles.container}>
				<Button
					title="减一"
					onPress={this.handleDecrease.bind(this)}
					color="#000000"
				/>
				<Button
					title="加一"
					onPress={this.handleIncrease.bind(this)}
					color="#000000"
				/>
			</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		justifyContent:"space-around"
	}
})

import {increase,decrease} from '../actions/counter';

function mapDispatchToProps(dispatch){
	return {
		dec(){
			dispatch(decrease())
		},
		inc(){
			dispatch(increase());
		}
	}
}

export default connect(null,mapDispatchToProps)(Control);