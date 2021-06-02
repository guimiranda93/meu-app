import React from "react";
import TextField from "@material-ui/core/TextField";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import classes from "./classes";

function App() {
	const styles = classes();

	return (
		<div className="App">
			<div className={styles.quadrado}></div>
			<TextField id="standard-basic" label="Standard" />
			<TextField id="filled-basic" label="Filled" variant="filled" />
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<AccessAlarmIcon />
		</div>
	);
}

export default App;
