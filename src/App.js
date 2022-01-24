
import React from "react";
function App() {

// Declared an array of items
const name = [
	'Ada Ehi',
'Bola Are',
'Cobhams Asuquo',
'David Ekene Daniels',
'Dunni Olanrewaju',
'Eben',
'Ebenezer Obey',
'el Mafrex',
'Frank Edwards',
'Funmi Aragbaye',
'Jahdiel',
'Jeremiah Gyang',
'Joe Praize',
'Joseph Adebayo Adelakun',
'Kefee',
'Kunle Ajayi',
'Lara George',
'Mega 99',
'Mercy Chinwo',
'Nathaniel Bassey',
'Nikki Laoye',
'Nosa',
'Obiwon',
'Onos Ariyo',
'Onyeka Onwenu',
'Oluwaseyi Olufemi',
'Patty Obasi',
'Samsong',
'Sinach',
'Snatcha',
'Sola Allyson',
'Tim Godfrey',
'Tope Alabi',
'TY Bello'
];

// styling for the items
const styles = {
	backgroundColor: 'white',
	width: '50%',
	height: '50%',
	marginLeft: 'auto',
    marginRight: 'auto',
	textAlign: 'center',
    marginBottom: '10px',
	padding: '10px',
	color: 'brown',
	boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px'
};

return <>
	{
	/* This maps each array item to a div and adds
	the style declared above and return it */
	name.map(name => <div key={name}
			style={styles}>{name}</div>)
	}
</>;
}

export default App;
