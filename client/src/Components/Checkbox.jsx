import React, { useEffect, useState } from "react";

const Checkbox = ({ id, label, checked, onToggleCheckboxChange }) => {
	const [localChecked, setLocalChecked] = useState(false);

	useEffect(() => {
		setLocalChecked(checked);
	}, [checked]);

	function toggleCheckboxChange(e) {
		setLocalChecked(!localChecked);

		onToggleCheckboxChange(id, !localChecked);
	}

	const myStyle = localChecked
		? {
				backgroundColor: "rgb(0, 77, 128)",
				color: "white",
				fontSize: "bold",
		  }
		: {
				backgroundColor: "white",
		  };

	return (
		<div style={myStyle} className="rounded-xl">
			<label className="block cursor-pointer hover:bg-sky-400 py-1 px-4">
				<input
					className="hidden"
					type="checkbox"
					checked={localChecked}
					onChange={toggleCheckboxChange}
				/>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
