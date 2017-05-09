import * as React     from 'react';


import Dropdown from './Dropdown';

export default class Form extends React.Component<any, any> {
	render(){
		return (
			<form>
				<Dropdown text="hi"/>
			</form>
		)
	}
}

