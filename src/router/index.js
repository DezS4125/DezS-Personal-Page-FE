import { createWebHistory, createRouter } from 'vue-router';
// import ContactBook from '@/views/ContactBook.vue';
// import GitHubProfile from '@/components/GitHubProfile.vue';

const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: () => import('@/views/Home.vue'),
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'notfound',
    //     component: () => import('@/views/NotFound.vue'),
    // },
    // {
    //     path: '/contacts/:id',
    //     name: 'contact.edit',
    //     component: () => import('@/views/ContactEdit.vue'),
    //     props: (route) => ({ contactId: route.params.id })
    // },
    // {
    //     path: '/contacts/create',
    //     name: 'contact.create',
    //     component: () => import('@/views/ContactAdd.vue'),
    //     props: (route) => ({ contactId: route.params.id })
    // },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/github',
        name: 'github',
        component: () => import('@/views/GitHub.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/Blog.vue'),
    },
    
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;