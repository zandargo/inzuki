<template>
	<div class="fullscreen flex flex-center">
		<svg id="svg-splash" :width="win.width" :height="win.height">
			//* CIRCLE 01 - OUTER CIRCLE
			<circle
				cx="50%"
				cy="50%"
				:r="shapes.circle01.radius"
				:stroke-dasharray="shapes.circle01.dasharray0"
				:stroke-dashoffset="shapes.circle01.dashoffset0"
				stroke="#0077b5"
				:stroke-width="shapes.circle01.strokewidth"
				fill="none"
			>
				<animate
					id="circ01_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle01.dasharray0"
					:to="shapes.circle01.dasharray1"
					:dur="shapes.circle01.anim.duration"
					begin="0s;circ01_anim1.end+2s"
				/>
				<animate
					id="circ01_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle01.dasharray1"
					:to="shapes.circle01.dasharray0"
					:dur="shapes.circle01.anim.duration"
					begin="2s;circ01_anim2.end+2s"
				/>
				<animate
					id="circ01_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle01.dashoffset0"
					:to="shapes.circle01.dashoffset1"
					:dur="shapes.circle01.anim.duration"
					begin="2s;circ01_anim3.end+2s"
				/>
			</circle>
			//* CIRCLE 02 - CLOCK CIRCLE 01
			<circle
				cx="50%"
				cy="50%"
				stroke="#263238"
				stroke-linecap="butt"
				:r="shapes.circle02.radius"
				:stroke-dasharray="shapes.circle02.dasharray0"
				:stroke-dashoffset="shapes.circle02.dashoffset0"
				:stroke-width="shapes.circle02.strokewidth"
				fill="none"
			>
				<animate
					id="circ02_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle02.dasharray0"
					:to="shapes.circle02.dasharray1"
					:dur="shapes.circle02.anim.duration"
					begin="0s;circ02_anim1.end+4s"
				/>
				<animate
					id="circ02_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle02.dasharray1"
					:to="shapes.circle02.dasharray0"
					:dur="shapes.circle02.anim.duration"
					begin="4s;circ02_anim2.end+4s"
				/>
				<animate
					id="circ02_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle02.dashoffset0"
					:to="shapes.circle02.dashoffset1"
					:dur="shapes.circle02.anim.duration"
					begin="4s;circ02_anim3.end+4s"
				/>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					from="0 180 320"
					to="360 180 320"
					dur="4s"
					repeatCount="indefinite"
				/>
			</circle>
			//* CIRCLE 03 - CLOCK CIRCLE 02
			<circle
				cx="50%"
				cy="50%"
				stroke="#263238"
				stroke-linecap="butt"
				:r="shapes.circle03.radius"
				:stroke-dasharray="shapes.circle03.dasharray0"
				:stroke-dashoffset="shapes.circle03.dashoffset0"
				:stroke-width="shapes.circle03.strokewidth"
				fill="none"
			>
				<animate
					id="circ03_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle03.dasharray0"
					:to="shapes.circle03.dasharray1"
					:dur="shapes.circle03.anim.duration"
					begin="0s;circ03_anim1.end+6s"
				/>
				<animate
					id="circ03_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle03.dasharray1"
					:to="shapes.circle03.dasharray0"
					:dur="shapes.circle03.anim.duration"
					begin="6s;circ03_anim2.end+6s"
				/>
				<animate
					id="circ03_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle03.dashoffset0"
					:to="shapes.circle03.dashoffset1"
					:dur="shapes.circle03.anim.duration"
					begin="6s;circ03_anim3.end+6s"
				/>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 180 320"
					to="360 180 320"
					begin="0s"
					dur="6s"
					repeatCount="indefinite"
				/>
			</circle>
			//* LINE 01 - CLOCK ARM - HOURS
			<line
				x1="50%"
				y1="50%"
				x2="50%"
				y2="45%"
				stroke="#263238"
				stroke-width="16px"
				stroke-linecap="round"
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					from="0 180 320"
					to="360 180 320"
					dur="60s"
					repeatCount="indefinite"
				/>
			</line>
			//* LINE 2 - CLOCK ARM - MINUTES
			<line
				x1="50%"
				y1="50%"
				x2="50%"
				y2="40%"
				stroke="#263238"
				stroke-width="16px"
				stroke-linecap="round"
				transform="rotate(-120 180 320)
                "
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					from="-120 180 320"
					to="240 180 320"
					dur="5s"
					repeatCount="indefinite"
				/>
			</line>
		</svg>
	</div>
</template>

<script>
export default {
	name: "SplashScreen01",
	data() {
		return {
			win: {
				width: 0,
				height: 0,
				cx: 0,
				cy: 0,
			},
			shapes: {
				circle01: {
					radius: 0,
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: "",
					anim: {
						duration: "2s",
						begin: "0s",
					},
				},
				circle02: {
					radius: 0,
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: "",
					anim: {
						duration: "4s",
						begin: "0s",
					},
				},
				circle03: {
					radius: 0,
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: "",
					anim: {
						duration: "6s",
						begin: "0s",
					},
				},
			},
			txtviewbox: "",
			color1: "#0077b5",
		};
	},
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	unmounted() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			this.win.width = window.innerWidth;
			this.win.height = window.innerHeight;
			this.win.cx = window.innerWidth / 2;
			this.win.cy = window.innerHeight / 2;
			this.txtviewbox =
				"0 0 " + window.innerWidth + " " + window.innerHeight;

			let base = Math.max(window.innerWidth, window.innerHeight);
			let pi = Math.PI;
			let radius = 0;
			let ang = 0;
			let len = 0;
			let gap = 0;

			this.shapes.circle01.stroke = this.color1;
			this.shapes.circle03.stroke = this.color1;
			this.shapes.circle02.stroke = this.color1;
			//* Bigger circle
			radius = Math.round(base * 0.5);
			ang = pi / 4;
			len = Math.round(2 * radius * pi);
			gap = Math.round(2 * radius * ang);
			this.shapes.circle01.radius = radius + "px";
			this.shapes.circle01.dasharray0 = "0 " + len;
			this.shapes.circle01.dasharray1 = len + " 0";
			this.shapes.circle01.dashoffset0 = gap;
			this.shapes.circle01.dashoffset1 = gap - len;
			this.shapes.circle01.strokewidth = 2 * radius + "px";
			this.shapes.circle01.fill = "none";
			//* Clock circle 1
			radius = Math.round(base * 0.16);
			ang = pi / 4;
			len = Math.round(2 * radius * pi);
			// gap = Math.round(2 * radius * ang);
			gap = 0;
			this.shapes.circle02.radius = radius + "px";
			this.shapes.circle02.dasharray0 = "0 " + len;
			this.shapes.circle02.dasharray1 = len + " 0";
			this.shapes.circle02.dashoffset0 = gap;
			this.shapes.circle02.dashoffset1 = gap - len;
			this.shapes.circle02.strokewidth = "16px";
			this.shapes.circle02.fill = "none";
			//* Clock circle 2
			radius = Math.round(base * 0.2);
			ang = pi / 4;
			len = Math.round(2 * radius * pi);
			// gap = Math.round(2 * radius * ang) + 1;
			gap = 0;
			this.shapes.circle03.radius = radius + "px";
			this.shapes.circle03.dasharray0 = "0 " + len;
			this.shapes.circle03.dasharray1 = len + " 0";
			this.shapes.circle03.dashoffset0 = gap;
			this.shapes.circle03.dashoffset1 = gap - len;
			this.shapes.circle03.strokewidth = "12px";
			this.shapes.circle03.fill = "none";
		},
	},
};
</script>

<style lang="scss" scoped>
// #svg-splash {
// circle {
// 	stroke: $primary;
// 	fill: none;
// 	stroke-dasharray: 640, 160;
// 	stroke-dashoffset: 41;
// 	stroke-width: 49%;
// animation: chomp 1s linear infinite alternate;
// animation: turn01 2s linear infinite;
// }
// }
// @keyframes turn01 {
// 	from {
// 		stroke-dasharray: 640, 160;
// 		stroke-dashoffset: 41;
// 	}
// 	to {
// 		stroke-dasharray: 160, 640;
// 		stroke-dashoffset: -15;
// 	}
// }
</style>
