import { useState } from "react";
import { Circle } from "../types/Circle";
import { getRandomColor } from "../utils/getRandomColor";
import Circles from "./Circles";
import Controls from "./Controls";

export default function Board() {
	const [circle, setCircle] = useState<Circle[]>([]);
	const [history, setHistory] = useState<Circle[]>([]);

	const handleClick = (e: React.MouseEvent) => {
		setCircle((prev) => {
			return [
				...prev,
				{
					x: e.clientX,
					y: e.clientY,
					id: +new Date(),
					bgColor: getRandomColor(),
				},
			];
		});
	};

	const handleUndo = () => {
		const copy = [...circle];
		const lastCircle = copy.pop();

		if (!lastCircle) return;
		setHistory((prev) => [...prev, lastCircle]);

		setCircle(copy);
	};

	const handleRedo = () => {
		const copy = [...history];
		const lastHistory = copy.pop();

		if (!lastHistory) return;
		setCircle((prev) => [...prev, lastHistory]);

		setHistory(copy);
	};

	const handleReset = () => {
		setCircle([]);
		setHistory([]);
	};

	return (
		<div
			id="board"
			onClick={handleClick}
		>
			<Circles circles={circle} />
			<Controls
				hasCircles={circle.length > 0}
				hasHistory={history.length > 0}
				onUndo={handleUndo}
				onRedo={handleRedo}
				onReset={handleReset}
			/>
		</div>
	);
}
