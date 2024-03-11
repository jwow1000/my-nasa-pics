// import axios api configuration
import api from './apiConfig.js';

// ------------------- api methods
// get all images
export const getImages = async () => {
    try {
        const response = await api.get("/");
        console.log(response.data);
        return response.data;

    } catch(error) {
        console.error("Error Getting all Images: ", error);
    }
}

// // get one cat by id
// export const getImage = async (id) => {
//     try {
//         const response = await api.get(`/${id}`);
//         return response.data;

//     } catch(error) {
//         console.error("Error Getting a Cat: ", error);
//     }
// }

// // create a cat with body data
// export const createCat = async (catData) => {
//     try {
//         const response = await api.post(`/cats`, catData);
//         return response.data;

//     } catch(error) {
//         console.error("post cat", error);
//     }
// }

// // update a cat with id and body data
// export const deleteCat = async (id, catData) => {
//     try {
//         const response = await api.put(`/cats/${id}`, catData);
//         return response.data;

//     } catch(error) {
//         console.error("put cat", error);
//     }
// }

// // delete a cat with id 
// export const editCat = async (id, catData) => {
//     try {
//         const response = await api.delete(`/cats/${id}`);
//         return response.data;

//     } catch(error) {
//         console.error("delete cat", error);
//     }
// }
