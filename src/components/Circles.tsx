interface CircleProps {
	id: number;
	x: number;
	y: number;
	bgColor: string;
}

const Circle = ({ x, y, bgColor }: CircleProps) => {
	return (
		<div
			className="circle"
			style={{
				backgroundColor: bgColor,
				top: `${y - 24}px`,
				left: `${x - 24}px`,
			}}
		></div>
	);
};

interface CirclesProps {
	circles: CircleProps[];
}

export default function Circles({ circles }: CirclesProps) {
	return circles.map((circle) => {
		return (
			<Circle
				key={circle.id}
				{...circle}
			/>
		);
	});
}
