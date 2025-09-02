import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchTodayCourses = async () =>{
    const res= await axios.get(`${API_URL}/todayCourses`);
    return res.data;
}

export const fetchMentors= async()=>{
    const res= await axios.get(`${API_URL}/mentors`);
    return res.data
} 

export const fetchMonthlyCourses=async()=>{
    const res= await axios.get(`${API_URL}/monthlyCourses`);
    return res.data
}

// export const createPost = async (newPost: { title: string; body: string }) => {
//   const res = await axios.post(`${API_URL}/posts`, newPost);
//   return res.data;
// };