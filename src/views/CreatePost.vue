<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import contactsService from '@/services/contacts.service';

const postTitle = ref('');
const postContent = ref('');
const tagId = ref(0);
const tags = ref([]);
const router = useRouter();

onMounted(async () => {
    try {
        tags.value = await contactsService.getAllTags();
        console.log(tags.value);
    } catch (error) {
        console.log(error);
    }
    });

    const submitForm = () => {
    console.log(tagId.value);
    const post = {
        post_title: postTitle.value,
        post_content: postContent.value,
        tag_id: tagId.value
    }
    contactsService.createPost(post);
    router.push(`/blog`);
}
</script>

<template>
    <div class="background">
        <div class="form">
            <h1>Create a new post!</h1>
            <form @submit.prevent="submitForm">
                <input type="text" v-model="postTitle" required placeholder="Post title" class="formControl"><br>
                <textarea v-model="postContent" required placeholder="Post Content" class="formControl longInput"></textarea> <br>
                Tag:
                <select v-model="tagId" required>
                    <option v-for="tag in tags" :key="tag.tag_id" :value="tag.tag_id" required >{{ tag.tag_name }}</option>
                </select>
                <button type="submit" class="right">Submit</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .background{
        background-color: black;
        height: 100vh;
        overflow: auto;
    }
    .form {
        width: 60%;
        background-color: grey;
        margin: 2% auto;
        padding: 15px;
        border-radius: 1%;
    }
    .formControl {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 15px;
    }
    .longInput{
        height: 40vh;
    }
    .right{
        float: right;
    }
</style>