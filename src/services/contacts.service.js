function makeContactsService() {
	// import { useMutation, useQuery } from '@tanstack/vue-query';
	// import axios from 'axios';
	const baseUrl = '/api/contacts';
	const headers = {
		'Content-Type': 'application/json',
	};

	async function getAllPost(){
		return await fetch(`${baseUrl}/blog`, {
			method: 'GET',
		}).then((res) => res.json());
	}
	async function getAllTags(){
		return await fetch(`${baseUrl}/tagList`, {
			method: 'GET',
		}).then((res) => res.json());
	}

	async function getPostByTag(tag) {
		return await fetch(`${baseUrl}/blog/t/${tag}`)
		.then((res) => res.json());
	}
	async function searchPost(searchString) {
		return await fetch(`${baseUrl}/blog/${searchString}`, {
			method: 'POST',
		})
		.then((res) => res.json());
	}
	async function upvote(postId) {
		return await fetch(`${baseUrl}/blog/upvote/${postId}`, {
			method: 'POST',
		})
	}
	async function downvote(postId) {
		return await fetch(`${baseUrl}/blog/downvote/${postId}`, {
			method: 'POST',
		})
	}
	async function createPost(post) {
		return await fetch(`${baseUrl}/blog`, {
			method: 'POST',
			headers,
			body: JSON.stringify(post),
		}).then((res) => res.json());
	}
	return {
		getAllPost,
		getAllTags,
		getPostByTag,
		searchPost,
		upvote,
		downvote,
		createPost
	};
}

export default makeContactsService();
