<script setup>
defineProps({
	tag: { type: Object, required: true },
});
</script>
<template>
    <div class="p-1">
        <strong>t/{{ tag.tag_name }}</strong>
    </div>
</template>

<style scoped>
	/* .sticky {
		position: sticky;
		top: 30mm;
		z-index: 100;
	} */
</style>