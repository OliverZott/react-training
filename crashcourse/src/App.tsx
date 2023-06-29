import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';


export interface IState {
	people: {
		name: string,
		url: string,
		age: number,
		note?: string,
	}[]
}

function App() {

	const [people, setPeople] = useState<IState["people"]>([
		{
			name: "Sigi",
			age: 4,
			url: "https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/FeDbTv4Ozb0/7vrINirQahQ8aciFi80ERm.jpg",
			note: "Siiiigiiii"
		}
	]);


	return (
		<div className='App'>
			<h1>People invited to my party</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
