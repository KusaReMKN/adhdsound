'use strict';

const ctx = new AudioContext();

function
play()
{
	const oscillators = [
		new OscillatorNode(ctx, { frequency: 880.000 }),
		new OscillatorNode(ctx, { frequency: 587.330 }),
		new OscillatorNode(ctx, { frequency: 493.883 }),
		new OscillatorNode(ctx, { frequency: 587.330 }),
	];

	oscillators.forEach((e, i) => {
		e.connect(ctx.destination);
		e.start(ctx.currentTime + i * 0.25);
		e.stop(ctx.currentTime + i * 0.25 + 0.25);
	});
}

btnPlay.addEventListener('click', _ => play());
