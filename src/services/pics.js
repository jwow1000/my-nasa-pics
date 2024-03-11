// import axios api configuration
import api from './apiConfig.js';

// ------------------- api methods
// get all images
export const getImages = async () => {
    try {
        const response = await api.get("/");
        return response.data;

    } catch(error) {
        console.error("Error Getting all Images: ", error);
    }
}

// get one image by id
export const getImage = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;

    } catch(error) {
        console.error("Error Getting the Image: ", error);
    }
}

// create a cat with body data
export const createImage = async (imgData) => {
    try {
        const response = await api.post(`/`, imgData);
        return response.data;

    } catch(error) {
        console.error("posting new image", error);
    }
}

// update(edit) an image with id and body data
export const editImage = async (id, imgData) => {
    try {
        const response = await api.put(`/${id}`, imgData);
        return response.data;

    } catch(error) {
        console.error("edit image sumthin wrong", error);
    }
}

// delete a cat with id 
export const deleteImage = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;

    } catch(error) {
        console.error("delete image", error);
    }
}
