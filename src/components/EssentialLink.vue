<template>
	<q-item clickable tag="a" :to="route">
		<q-item-section v-if="icon" avatar>
			<q-icon :name="icon" />
		</q-item-section>

		<q-item-section>
			<q-item-label class="z-caps">{{ title }}</q-item-label>
			<q-item-label caption>
				{{ caption }}
			</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "EssentialLink",
	props: {
		title: {
			type: String,
			required: true,
		},

		caption: {
			type: String,
			default: "",
		},

		icon: {
			type: String,
			default: "",
		},

		route: {
			type: String,
			default: "",
		},
	},
});
</script>

<style lang="scss" scoped>
//> Caps
.z-caps {
	// font-variant-caps: small-caps;
	text-transform: uppercase;
}
</style>
