import React from "react";
import { AiOutlineInbox } from "react-icons/ai";

const NoData = () => {
	return (
		<div className="no-data">
			<AiOutlineInbox className="no-data-icon" />
			<p className="no-data-text">No Data!</p>
		</div>
	);
};

export default NoData;
