<script setup>
import { ref, watchEffect } from 'vue';
import contactsService from '@/services/contacts.service';
import PostList from '@/components/PostList.vue';
import TagList from '@/components/TagList.vue';

const props = defineProps({
    tagId: { type: String, required: false, default: null},
    searchString: { type: String, required: false, default: null},
});

let posts = ref([]);
let tags = ref([]);

watchEffect(async () => {
    try {
        console.log(props.tagId);
        if(props.tagId==null & props.searchString==null){
            posts.value = await contactsService.getAllPost();
        }
        if(props.tagId!=null){
            posts.value = await contactsService.getPostByTag(props.tagId);
        }
        if(props.searchString!=null){
            posts.value = await contactsService.searchPost(props.searchString);
        }
        tags.value = await contactsService.getAllTags();
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
	<div class="row" style="background-color:black;">
		<div class="col-sm-2" ></div>
		<div class="col-sm-6">
            Tag: {{ tagId }}
            <button class="btn btn-outline-secondary" type="button" @click="this.$router.push(`/blog/createPost`);">New post</button>
            <div class="blog">
                <PostList :posts="posts" />
            </div>
        </div>
		<div class="col-sm-3" >
            <div class="tag sticky">
                <!-- <strong>Check out the tags:</strong> -->
                <TagList :tags="tags"/>
            </div>
        </div>
		<div class="col-sm-1" ></div>
	</div>
</template>


<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
    }
    .middle {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .blog {
        background-color: black;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-right: 2%;
		min-height: 100vh;
		overflow: auto;
    }
    .tag {
        background-color: #1A1A1B;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        width: 15%;
        border-radius: 4%;
    }

	.sticky {
		position: fixed;
		top: 30mm;
		z-index: 100;
	}
    .right {
        width: 200px;
        height: 200px;
        background-color: lightblue;
    }
</style>