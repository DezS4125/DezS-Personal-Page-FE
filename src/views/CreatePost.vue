<template>
    <h1>Create a new post!</h1>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="postTitle" required placeholder="Post title"><br>
        <textarea v-model="postContent" required placeholder="Post Content"></textarea> <br>
        Tag:
        <select v-model="tagId" required>
            <option v-for="tag in tags" :key="tag.tag_id" :value="tag.tag_id" required >{{ tag.tag_name }}</option>
        </select>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
// import { ref } from 'vue';
import contactsService from '@/services/contacts.service';

export default {
    data() {
        return {
            postTitle: '',
            postContent: '',
            tagId: 0,
            tags: []
        }
    },
    async created() {
        try {
            this.tags = await contactsService.getAllTags();
            console.log(this.tags);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        submitForm() {
            console.log(this.tagId);
            const post = {
                post_title: this.postTitle,
                post_content: this.postContent,
                tag_id: this.tagId
            }
            contactsService.createPost(post);
        }
    },
}
</script>


<style scoped>
    /* CSS goes here */
</style>