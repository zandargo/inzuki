<template>
	<div class="fullscreen flex flex-center q-elecron-drag">
		<svg id="svg-splash" :width="win.width" :height="win.height">
			//* DEFINITIONS
			<filter id="dropshadow">
				<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
				<feOffset dx="2" dy="2" />
				<feComponentTransfer>
					<feFuncA type="linear" slope="0.2" />
				</feComponentTransfer>
				<feMerge>
					<feMergeNode />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>

			<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
				<feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
				<feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
				<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
			</filter>

			<filter
				id="shadowline"
				x="-50%"
				y="-50%"
				height="200%"
				width="200%"
				filterUnits="userSpaceOnUse"
			>
				<feGaussianBlur in="SourceAlpha" stdDeviation="2" />
				<feOffset dx="2" dy="2" result="offsetblur" />
				<feComponentTransfer>
					<feFuncA type="linear" slope="0.25" />
				</feComponentTransfer>

				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
			//* CIRCLE 01 - OUTER CIRCLE
			<circle
				id="circ01"
				cx="50%"
				cy="50%"
				:r="shapes.circle01.radius"
				:stroke-dasharray="shapes.circle01.dasharray0"
				:stroke-dashoffset="shapes.circle01.dashoffset0"
				:stroke="color1"
				:stroke-width="shapes.circle01.strokewidth"
				:fill="shapes.circle01.fill"
				:transform="'rotate(-90 ' + win.cx + ' ' + win.cy + ')'"
				filter="url(#dropshadow)"
			>
				<animate
					id="circ01_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle01.dasharray0"
					:to="shapes.circle01.dasharray1"
					:dur="shapes.circle01.anim.duration"
					:begin="
						shapes.circle01.anim.begin +
						';circ01_anim1.end+' +
						shapes.circle01.anim.offset
					"
				/>
				<animate
					id="circ01_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle01.dasharray1"
					:to="shapes.circle01.dasharray0"
					:dur="shapes.circle01.anim.duration"
					:begin="
						shapes.circle01.anim.offset +
						';circ01_anim2.end+' +
						shapes.circle01.anim.offset
					"
				/>
				<animate
					id="circ01_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle01.dashoffset0"
					:to="shapes.circle01.dashoffset1"
					:dur="shapes.circle01.anim.duration"
					:begin="
						shapes.circle01.anim.offset +
						';circ01_anim3.end+' +
						shapes.circle01.anim.offset
					"
				/>
			</circle>
			//* CIRCLE 02 - CLOCK CIRCLE 01
			<circle
				id="circ02"
				cx="50%"
				cy="50%"
				:r="shapes.circle02.radius"
				:stroke-dasharray="shapes.circle02.dasharray0"
				:stroke-dashoffset="shapes.circle02.dashoffset0"
				:stroke="color2"
				:stroke-width="shapes.circle02.strokewidth"
				stroke-linecap="round"
				:fill="shapes.circle02.fill"
				:transform="'rotate(-45 ' + win.cx + ' ' + win.cy + ')'"
				filter="url(#dropshadow)"
			>
				<animate
					id="circ02_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle02.dasharray0"
					:to="shapes.circle02.dasharray1"
					:dur="shapes.circle02.anim.duration"
					:begin="
						shapes.circle02.anim.begin +
						';circ02_anim1.end+' +
						shapes.circle02.anim.offset
					"
				/>
				<animate
					id="circ02_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle02.dasharray1"
					:to="shapes.circle02.dasharray0"
					:dur="shapes.circle02.anim.duration"
					:begin="
						shapes.circle02.anim.offset +
						';circ02_anim2.end+' +
						shapes.circle02.anim.offset
					"
				/>
				<animate
					id="circ02_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle02.dashoffset0"
					:to="shapes.circle02.dashoffset1"
					:dur="shapes.circle02.anim.duration"
					:begin="
						shapes.circle02.anim.offset +
						';circ02_anim3.end+' +
						shapes.circle02.anim.offset
					"
				/>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					:from="'-180 ' + win.cx + ' ' + win.cy"
					:to="'180 ' + win.cx + ' ' + win.cy"
					:dur="shapes.circle02.anim.duration"
					repeatCount="indefinite"
				/>
			</circle>

			//* CIRCLE 03 - CLOCK CIRCLE 02
			<circle
				id="circ03"
				cx="50%"
				cy="50%"
				:r="shapes.circle03.radius"
				:stroke-dasharray="shapes.circle03.dasharray0"
				:stroke-dashoffset="shapes.circle03.dashoffset0"
				:stroke="color2"
				:stroke-width="shapes.circle03.strokewidth"
				stroke-linecap="round"
				:fill="shapes.circle03.fill"
				:transform="'rotate(-60 ' + win.cx + ' ' + win.cy + ')'"
				filter="url(#dropshadow)"
			>
				<animate
					id="circ03_anim1"
					attributeName="stroke-dasharray"
					:from="shapes.circle03.dasharray0"
					:to="shapes.circle03.dasharray1"
					:dur="shapes.circle03.anim.duration"
					:begin="
						shapes.circle03.anim.begin +
						';circ03_anim1.end+' +
						shapes.circle03.anim.offset
					"
				/>
				<animate
					id="circ03_anim2"
					attributeName="stroke-dasharray"
					:from="shapes.circle03.dasharray1"
					:to="shapes.circle03.dasharray0"
					:dur="shapes.circle03.anim.duration"
					:begin="
						shapes.circle03.anim.offset +
						';circ03_anim2.end+' +
						shapes.circle03.anim.offset
					"
				/>
				<animate
					id="circ03_anim3"
					attributeName="stroke-dashoffset"
					:from="shapes.circle03.dashoffset0"
					:to="shapes.circle03.dashoffset1"
					:dur="shapes.circle03.anim.duration"
					:begin="
						shapes.circle03.anim.offset +
						';circ03_anim3.end+' +
						shapes.circle03.anim.offset
					"
				/>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					:from="'0 ' + win.cx + ' ' + win.cy"
					:to="'360 ' + win.cx + ' ' + win.cy"
					:dur="shapes.circle02.anim.duration"
					repeatCount="indefinite"
				/>
			</circle>

			//* LINE 01 - CLOCK ARM - HOURS
			<line
				:x1="win.cx"
				:y1="win.cy"
				:x2="win.cx"
				:y2="
					Math.round(
						win.cy - (Math.min(win.width, win.height) / 2) * 0.25
					) + 'px'
				"
				:stroke="color2"
				stroke-width="16px"
				stroke-linecap="round"
				filter="url(#shadowline)"
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					:from="'0 ' + win.cx + ' ' + win.cy"
					:to="'360 ' + win.cx + ' ' + win.cy"
					dur="60s"
					repeatCount="indefinite"
				/>
			</line>
			//* LINE 2 - CLOCK ARM - MINUTES
			<line
				:x1="win.cx"
				:y1="win.cy"
				:x2="win.cx"
				:y2="
					Math.round(
						win.cy - (Math.min(win.width, win.height) / 2) * 0.4
					) + 'px'
				"
				:stroke="color2"
				stroke-width="16px"
				stroke-linecap="round"
				filter="url(#shadowline)"
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					:from="'0 ' + win.cx + ' ' + win.cy"
					:to="'360 ' + win.cx + ' ' + win.cy"
					dur="5s"
					repeatCount="indefinite"
				/>
			</line>
			//* INZUKI
			<text
				id="txtInzuki"
				:x="win.cx"
				:y="win.cy"
				stroke-linecap="round"
				stroke-linejoin="round"
				dominant-baseline="auto"
				text-anchor="end"
				textLength="160px"
				lengthAdjust="spacing"
				class="txt01"
				:transform="
					'rotate(-90 ' +
					win.cx +
					' ' +
					win.cy +
					') translate(' +
					Math.round(win.cy - 10) +
					' ' +
					Math.round(win.cx - 5) +
					') scale(1 0.95)'
				"
				filter="url(#dropshadow)"
			>
				INZUKI
			</text>

			<use
				xlink:href="#txtInzuki"
				stroke-width="5"
				class="txt01"
				fill="#eceff1"
				stroke="#eceff1"
			/>
			<use
				xlink:href="#txtInzuki"
				stroke-width="2"
				class="txt01"
				fill="#0077b5"
				stroke="#0077b5"
			/>
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
					radius: "1px",
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: 0,
					center: {
						x: 0,
						y: 0,
					},
					anim: {
						begin: "1s",
						duration: "1s",
						offset: "1s",
					},
				},
				circle02: {
					radius: "1px",
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: "",
					center: {
						x: 0,
						y: 0,
					},
					anim: {
						begin: "0s",
						duration: "4s",
						offset: "4s",
					},
				},
				circle03: {
					radius: "1px",
					dasharray0: "",
					dasharray1: "",
					dashoffset0: "",
					dashoffset1: "",
					stroke: "",
					strokewidth: "",
					fill: "",
					center: {
						x: 0,
						y: 0,
					},
					anim: {
						begin: "0s",
						duration: "6s",
						offset: "6s",
					},
				},
			},
			txtviewbox: "",
			color1: "#0077b5",
			color2: "#37474F",
			color3: "#eceff1",
		};
	},
	setup() {
		return {};
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
			this.setMainVals();
			//* Bigger circle
			//> obj, radP, thick, color, begin, duration, offset
			this.setCircle(
				this.shapes.circle01,
				0.5,
				"full",
				this.color1,
				0,
				2,
				2
			);
			//* Clock circle 1
			this.setCircle(this.shapes.circle02, 0.35, 16, this.color2, 0, 4, 4);
			//* Clock circle 2
			this.setCircle(this.shapes.circle03, 0.25, 12, this.color2, 0, 5, 5);
		},
		setMainVals() {
			this.win.width = window.innerWidth;
			this.win.height = window.innerHeight;
			this.win.cx = window.innerWidth / 2;
			this.win.cy = window.innerHeight / 2;
			this.txtviewbox =
				"0 0 " + window.innerWidth + " " + window.innerHeight;
		},
		setCircle(obj, radP, thick, color, begin, duration, offset) {
			obj.fill = "none";
			obj.center.x = window.innerWidth / 2;
			obj.center.y = window.innerHeight / 2;
			let base =
				thick === "full"
					? Math.max(window.innerWidth, window.innerHeight)
					: Math.min(window.innerWidth, window.innerHeight);
			let pi = Math.PI;
			let ang = pi / 4;
			let radius = Math.round(base * radP);
			obj.radius = "" + radius + "px";
			let len = Math.round(2 * pi * radius);
			let gap = 0;
			// // gap = Math.round(2 * radius * ang) + 1;
			obj.strokewidth =
				thick === "full" ? 1.95 * radius + "px" : thick + "px";
			obj.stroke = color;

			obj.anim.begin = begin + "s";
			obj.anim.duration = duration + "s";
			obj.anim.offset = offset + "s";
			obj.dasharray0 = "0 " + len;
			obj.dasharray1 = len + " 0";
			obj.dashoffset0 = gap;
			obj.dashoffset1 = gap - len;
		},
	},
};
</script>

<style lang="scss" scoped>
#svg-splash {
	background-color: #eceff1;
	animation-fill-mode: forwards;
}
.txt01 {
	font-family: RobotoCondensed;
	font-size: 48px;
	// mix-blend-mode: darken;
}
</style>
