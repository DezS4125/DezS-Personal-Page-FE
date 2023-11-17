function makeContactsService() {
	const baseUrl = '/api/contacts';
	// const headers = {
	// 	'Content-Type': 'application/json',
	// };

	// async function getContacts(page, limit = 5) {
	// 	let url = `${baseUrl}?page=${page}&limit=${limit}`;
	// 	return await fetch(url).then((res) => res.json());
	// }

	// async function createContact(contact) {
	// 	return await fetch(baseUrl, {
	// 		method: 'POST',
	// 		headers,
	// 		body: JSON.stringify(contact),
	// 	}).then((res) => res.json());
	// }
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
	// async function deleteAllContacts() {
	// 	return await fetch(baseUrl, {
	// 		method: 'DELETE',
	// 	}).then((res) => res.json());
	// }

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
		// .then((res) => res.json());
	}
	async function downvote(postId) {
		return await fetch(`${baseUrl}/blog/downvote/${postId}`, {
			method: 'POST',
		})
		// .then((res) => res.json());
	}
	// async function updateContact(id, contact) {
	// 	return await fetch(`${baseUrl}/${id}`, {
	// 		method: 'PUT',
	// 		headers,
	// 		body: JSON.stringify(contact),
	// 	}).then((res) => res.json());
	// }

	// async function deleteContact(id) {
	// 	return await fetch(`${baseUrl}/${id}`, {
	// 		method: 'DELETE',
	// 	}).then((res) => res.json());
	// }

	return {
		// getContacts,
		// deleteAllContacts,
		// getContact,
		// createContact,
		// updateContact,
		// deleteContact,
		getAllPost,
		getAllTags,
		getPostByTag,
		searchPost,
		upvote,
		downvote
	};
}

export default makeContactsService();
