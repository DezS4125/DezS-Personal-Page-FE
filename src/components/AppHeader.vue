<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark sticky">
		<a
			href="/"
			class="navbar-brand"
			>DezS's page</a
		>
		<div class="mr-auto navbar-nav">
			<li  class="nav-item">
				<router-link to="/" class="nav-link">Home</router-link>
			</li>
			<li>
				<router-link to="/about" class="nav-link">About</router-link>
			</li>
			<li>
				<router-link to="/github" class="nav-link">GitHub</router-link>
			</li>
			<li>
				<router-link to="/blog" class="nav-link">Blog</router-link>
			</li>
		</div>
	</nav>
</template>


<style scoped>
	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}
</style>