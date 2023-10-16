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
		const gain = new GainNode(ctx, { gain: 0.8 });
		e.connect(gain);
		gain.connect(ctx.destination);
		e.start(ctx.currentTime + i * 0.25);
		gain.gain.exponentialRampToValueAtTime(0.250, ctx.currentTime + i * 0.25 + 0.01);
		gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.25 + 0.75);
		e.stop(ctx.currentTime + i * 0.25 + 1.25);
	});
}

btnPlay.addEventListener('click', _ => play());
