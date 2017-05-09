import React from 'react';

export default class Dropdown extends React.Component<any, any> {
	constructor(props: any){
		super();	
	}


	render(){
		let text = this.props.text;

		return (
			<select>
				<option>stuff</option>
			</select>
		)
	}
}