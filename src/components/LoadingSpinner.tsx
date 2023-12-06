import React from "react";
import { PacmanLoader } from "react-spinners";

const LoadingSpinner: React.FC<{ height?: string; size?: number }> = ({
	height,
	size,
}) => {
	return (
		<div className={`flex justify-center items-center`}
		
		style={{height:height||'auto'}}
		>
			<PacmanLoader color="#36d7b7" size={size || 50} />
		</div>
	);
};

export default LoadingSpinner;
