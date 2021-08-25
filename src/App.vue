<template>
	<router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
</script>

<style lang="scss">
@import "./css/app.scss";
@font-face {
	font-family: "RobotoCondensed";
	//_ src: url('./assets/fonts/RobotoCondensed-Regular.ttf') format('truetype');
	src: url("../public/fonts/RobotoCondensed-Regular.ttf") format("truetype");
}
* {
	font-family: "RobotoCondensed";
	letter-spacing: 0.08em;
}
</style>
