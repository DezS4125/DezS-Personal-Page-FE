<script setup>
defineProps({
	tags: { type: Array, required: true },
});
</script>
<template>

	<div v-for="tag in tags" :key="tag.tag_id">
		<div class="p-1">
			<router-link :to="`/blog/t/${tag.tag_id}`" class="nav-link">t/{{ tag.tag_name }}</router-link>
		</div>
	</div>
</template>

<style scoped>	
	/* .sticky {
		position: sticky;
		top: 30mm;
		z-index: 100;
	} */
</style>