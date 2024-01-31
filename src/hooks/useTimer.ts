import { useEffect, useState } from 'react';

export const useTimer = (): [number, React.Dispatch<React.SetStateAction<number>>] => {
	const [timer, setTimer] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer > 0) {
				setTimer(timer - 1);
			} else {
				clearInterval(interval);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [timer]);

	return [timer, setTimer];
};
