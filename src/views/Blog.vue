<template>
    <!-- HTML goes here -->
    <h1>My blog</h1>
    <div class="container">
        <div class="blog">
            <div v-for="item in items" :key="item.id">
                {{ item.text }}
            </div>
        </div>
        <div class="right">Right Div</div>
    </div>
</template>

<script>
export default {
    // JavaScript goes here
    data() {
        return {
            items: [
                { id: 1, text: 'Div 1' },
                { id: 2, text: 'Div 2' },
                { id: 3, text: 'Div 3' }
            ]
        }
    }
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
        background-color: greenyellow;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-right: 2%;
    }
    .right {
        width: 200px;
        height: 200px;
        background-color: lightblue;
    }
</style>