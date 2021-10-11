import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Search = () => {
	const [toggleSearch, setToggleSearch] = useState(toggleSearch);
	const [searchChange, setSearchChange] = useState("");

	return (
		<div className="container-fluid rounded bd-solid-dark mt-4 items-align-center">
			<div className="row rounded bd-solid-black bg-blue d-flex-inline">
				<input
					type="text"
					id="search"
					value={searchChange}
					className="col-10 rounded bd-solid-1px"
					placeholder="search"
					onChange={e => setSearchChange(e.target.value)}
				/>
				<button
					type="button"
					className="col-2 justify-center bg-blue border-2 border-blue-solid text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
					id="options-menu"
					aria-haspopup="true"
					aria-expanded="true"
					onClick={() => setToggleSearch(!toggleSearch)}>
					Sort By <i className="fas fa-caret-down ml-2" />
				</button>
				{toggleSearch && <Dropdown className="d-flex justify-content-end y-9000" />}{" "}
			</div>
		</div>
	);
};
