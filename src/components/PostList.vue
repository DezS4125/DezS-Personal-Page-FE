<script setup>
import contactsService from '@/services/contacts.service';

defineProps({
	posts: { type: Array, required: true },
});
const upvote = async (post) => {
    post.upvote++;
    await contactsService.upvote(post.post_id);
};

const downvote = async (post) => {
    post.upvote--;
    await contactsService.downvote(post.post_id);
};
</script>
    <template><div v-if="posts.length === 0">
        Hmmmmmm, We couldn't find any post.
    </div>
    <div v-else v-for="post in posts" :key="post.id">
        <div class="post">
            <div class="p-1">
                <strong style="font-size: x-large;">{{ post.post_title }}</strong>
            </div>
            <div class="p-1">
                <!-- broken if the query doesn't connect to tag table -->
                <strong>Tag:<router-link :to="`/blog/t/${post.tag_id}`" class="nav-link" style="display: inline-block; color: white;">{{ post.tag_name }}</router-link></strong>
            </div>
            <div class="p-1">
                <strong>Content:</strong>
                {{ post.post_content }}
            </div>
            <div class="p-1">
                <strong>Upvote:</strong>
                {{ post.upvote }}
            </div>
            <div>
                <button @click="upvote(post)">Upvote</button>
                <button @click="downvote(post)">Downvote</button>
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
.post:hover{
    box-shadow: 0 0 10px #00ff00;
}
</style>
