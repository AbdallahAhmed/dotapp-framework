import Repository from "./Repository";

const resource = "/post";

export default {
    getPost(id) {
        return Repository.get(`${resource}/${id}`).then((response) => {
            if (response.data.success) {
                return response.data.data;
            }
        });
    },
    updatePost(id, data) {
        return Repository.put(`${resource}/${id}`, data).then((response) => {
            if (response.data.success) {
                return response.data;
            }
        }).catch(error => {
            return error.response.data.errors;
        })
    },
    deletePost(id) {
        return Repository.delete(`${resource}/${id}`).then((response) => {
            if (response.data.success) {
                return response.data;
            }
        });
    },
    deletePosts(ids) {
        return Repository.patch(`${resource}/?operation=delete&ids=${ids}`).then((response) => {
            if (response.data.success) {
                return response.data;
            }
        });
    },
    getAllPosts(page, limit, filters = {}) {
        let statusQuery = (filters.status && filters.status !== '') ? '&status=' + filters.status : '';
        let searchQuery = (filters.searchQuery && filters.searchQuery !== '') ? '&q=' + filters.searchQuery : '';
        let filterQuery = searchQuery + statusQuery;

        return Repository.get(`${resource}?page=${page}&limit=${limit}${filterQuery}&sort_field=_id&sort_type=desc`).then((response) => {
            if (response.data.success) {
                return response.data;
            }
        });
    },
    newPost(data) {
        return Repository.post(`${resource}`, data).then((response) => {
            if (response.data.success) {
                return response.data;
            }
        }).catch(error => {
            return error.response.data.errors;
        })
    },
};