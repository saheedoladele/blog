import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL


export const createUser = async (formData) => {
    return axios.post(`${baseUrl}/user`,formData );
}

export const login = async (formData) => {
    
    return axios.post(`${baseUrl}/user/login`,formData );
}

export const createPost = async (formData) => {

    return axios.post(`${baseUrl}/blog`, formData);
  };


  export const updatePost = async (formData, id) => {

    return axios.put(`${baseUrl}/blog/update/${id}`, formData);
  };

// get all blogs
export const getAllPost = async () => {
    return axios.get(`${baseUrl}/blog`);
};

// single post
export const getSinglePost = async (id) => {
    return axios.get(`${baseUrl}/blog/${id}`);
};

export const getPostBuName = async (name) => {
    return axios.get(`${baseUrl}/blog/post?name=${name}`);
};

export const deletePost = async (id) => {
    return axios.delete(`${baseUrl}/blog/${id}`);
};

// single post
export const getUserPost = async (id) => {
    return axios.get(`${baseUrl}/blog/user/${id}`);
};

export const createComment = async (formData, id) => {

    return axios.post(`${baseUrl}/comment/${id}`, formData);
  };