import React, {Component, useState} from "react";
import '../styles/App.css';

function App() {
	const [displayMsg, setDisplayMsg] = useState(false);

	return (
		<div id="main">
			{
				(displayMsg == false)?(null):(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
			}
			<button id="click" onClick={()=>setDisplayMsg(true)}>Click me</button>
		</div>
	);
}


export default App;

