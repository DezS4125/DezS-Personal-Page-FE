<template>
    <!-- HTML goes here -->
    <h1>My Github page</h1>
    <div>
        <h1>{{ user.name }}</h1>
        <img :src="user.avatar_url" alt="User Avatar">
        <p>{{ user.bio }}</p>
        <p>Followers: {{ user.followers }}</p>
        <p>Following: {{ user.following }}</p>
        <div>
            <h1>Public Repositories of DezS4125</h1>
            <ul>
                <li v-for="repo in repos" :key="repo.id">
                    <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GitHub',
    data() {
        return {
            user: {},
            repos: [],
        };
        },
    async mounted() {
        const githubUsername='DezS4125';
        axios.get(`https://api.github.com/users/${githubUsername}`)
            .then(response => {
            this.user = response.data;
            })
            .catch(error => {
            console.log(error);
            });
        try {
            const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
            this.repos = response.data;
        } catch (error) {   
            console.error(error);
        }
        },
    };
</script>

<style scoped>
    /* CSS goes here */
</style>