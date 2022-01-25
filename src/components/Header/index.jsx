import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";

const Header = ({
	withBtn,
	withSearch,
	heading,
	searchTerm,
	setSearchTerm,
}) => {
	const handleSearch = (e) => setSearchTerm(e.target.value);
	return (
		<div className="header">
			<h1 className="heading">{heading}</h1>
			<div className="operations">
				{withSearch && (
					<div className="input-icon">
						<RiSearchLine className="icon" />
						<input
							className="search-field"
							value={searchTerm}
							onChange={handleSearch}
							placeholder="Search Tasks"
							type="search"
							name="search"
						/>
					</div>
				)}
				{withBtn && (
					<button className="add-new">
						<AiOutlinePlus className="add-icon" /> Add New
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
