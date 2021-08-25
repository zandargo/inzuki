<template>
	<div>
		<q-page class="column justify-start items-center q-pa-none">
			<div class="col">
				<q-card class="title-card q-ma-md" bordered elevated>
					<q-card-section class="text-center text-justify q-pa-md">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute
						irure dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</q-card-section>
				</q-card>
			</div>
			<div class="col">
				<q-btn rounded color="primary" label="Clique aqui" />
			</div>
			<div class="col">
				<q-btn-group rounded dense>
					<q-btn rounded dense color="primary" icon="add" />
					<q-btn rounded dense color="primary" icon="remove" />
				</q-btn-group>
			</div>
		</q-page>
	</div>
</template>

<script>
export default {
	name: "page1",
};
</script>

<style></style>
