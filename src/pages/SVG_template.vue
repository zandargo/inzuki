<template>
	<div>
		<svg id="svg" width="200" height="600">
			<g>
				<rect
					x="50px"
					y="50px"
					width="100px"
					height="80px"
					fill="#666666"
					stroke="#333333"
					stroke-width="5px"
					stroke-dasharray="16 20"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke-dashoffset="0"
				>
					<animate
						attributeName="stroke-dashoffset"
						from="0"
						to="36"
						dur="3.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: "SplashScreen01",
};
</script>

<style></style>
