<template>
	<div>
		<q-page>
			<div class="column justify-start items-center q-pa-md q-gutter-sm">
				<div class="col">
					<q-card class="title-card" bordered elevated>
						<q-card-section class="q-py-xs bg-grey-2">
							<div class="text-h3 q-ma-none">Lorem ipsum</div>
						</q-card-section>
						<q-separator inset class="text-h3" />
						<q-card-section
							class="text-center text-justify text-body1 q-pa-md"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
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
