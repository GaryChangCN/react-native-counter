import React,{Component} from 'react';
import {View} from 'react-native'

import Monitor from '../components/monitor';
import Control from '../components/control';

export default class Index extends Component{
	render(){
		return (
			<View style={container}>
				<Monitor></Monitor>
				<Control></Control>
			</View>
		)
	}
}
const container={
	flex:1
}