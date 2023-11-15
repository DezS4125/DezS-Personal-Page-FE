<script setup>
defineProps({
	posts: { type: Array, required: true },
});
</script>
<template>
    <div v-for="post in posts" :key="post.id">
        <div class="post">
            <div class="p-1">
                <strong style="font-size: x-large;">{{ post.post_title }}</strong>
            </div>
            <div class="p-1">
                <strong>Tag:</strong>
                {{ post.tag_id }}
            </div>
            <div class="p-1">
                <strong>Content:</strong>
                {{ post.post_content }}
            </div>
            <div class="p-1">
                <strong>Upvote:</strong>
                {{ post.upvote }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.post {
  background-color: #1A1A1B;
  color: white;
  border-radius: 2mm;
  margin: 1.5mm;
}
</style>
