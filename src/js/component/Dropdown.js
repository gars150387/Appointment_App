import React from "react";

export const Dropdown = () => {
	return (
		<div
			className="col-4 origin-top-right absolute mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
			<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
				<div
					className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900 d-flex justify-content-between cursor-pointer"
					role="menuitem">
					<p>Pet Name</p>
					<i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900 d-flex justify-content-between cursor-pointer"
					role="menuitem">
					<p>Owner Name</p> <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900 d-flex justify-content-between cursor-pointer"
					role="menuitem">
					<p>Date</p> <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900 d-flex justify-content-between cursor-pointer border-gray-1 border-t-2"
					role="menuitem">
					<p>Asc</p> <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900 d-flex justify-content-between cursor-pointer"
					role="menuitem">
					<p>Desc</p> <i className="fas fa-check" />
				</div>
			</div>
		</div>
	);
};
