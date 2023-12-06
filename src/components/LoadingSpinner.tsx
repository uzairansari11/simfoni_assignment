import React from "react";
import { PacmanLoader } from "react-spinners";

const LoadingSpinner: React.FC<{ height?: string }> = ({ height }) => {
	return (
		<div className={`h-${height ||'auto'} flex justify-center items-center`}>
			<PacmanLoader color="#36d7b7" size={50} />
		</div>
	);
};

export default LoadingSpinner;
