<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark">
		<a
			href="/"
			class="navbar-brand"
			>Ứng dụng Quản lý danh bạ</a
		>
		<div class="mr-auto navbar-nav">
			<li  class="nav-item">
				<router-link to="/" class="nav-link">Home</router-link>
			</li>
			<li>
				<router-link to="/about" class="nav-link">About</router-link>
			</li>
			<li>
				<router-link to="/contact" class="nav-link">Contact</router-link>
			</li>
		</div>
	</nav>
</template>
