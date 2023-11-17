<template>
    <form @submit.prevent="submitForm">
        <table>
            <tr>
                <td>Post Title:</td>
                <td><input type="text" v-model="postTitle" required placeholder="Post title"></td>
            </tr>
            <tr>
                <td>Post Content:</td>
                <td><textarea v-model="postContent" required placeholder="Post Content"></textarea></td>
            </tr>
            <tr>
                <td>Tag:</td>
                <td>
                    <select v-model="tagId" required>
                        <option v-for="tag in tags" :key="tag.tag_id" :value="tag.tag_id" required >{{ tag.tag_name }}</option>
                    </select>
                </td>
            </tr>
        </table>
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