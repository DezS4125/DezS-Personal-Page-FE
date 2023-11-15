<template>
    <!-- HTML goes here -->
	<div class="row" style="background-color:black;">
		<div class="col-sm-2" >Left pane</div>
		<div class="col-sm-6">
            <button>New post</button>
            <div class="blog">
                <div v-for="item in items" :key="item.id">
                    <Post :post="item" />
                </div>
            </div>
        </div>
		<div class="col-sm-3" >
            <div class="tag sticky">
                <div v-for="tag in tags" :key="tag.tag_id">
                    <TagList :tag="tag"/>
                </div>
            </div>
        </div>
		<div class="col-sm-1" >Right pane</div>
	</div>
</template>

<script>
import contactsService from '@/services/contacts.service';
import Post from '@/components/Post.vue';
import TagList from '@/components/TagList.vue';
export default {
    // JavaScript goes here
    data() {
        return {
            items: [],
            tags: []
        }
    },
    async created() {
        try {
            this.items = await contactsService.getAllPost();
            this.tags = await contactsService.getAllTags();
            // console.log(this.items)
        } catch (error) {
            console.log(error);
        }
    },
    components: {
        Post,
        TagList
    },
}
</script>

<style scoped>
    /* CSS goes here */
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
    }
    .tag {
        background-color: #1A1A1B;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        width: 15%;
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