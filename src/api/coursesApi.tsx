import axios from "axios";

const API_URL =
  "https://gist.githubusercontent.com/mitrarsh/c591a4b8614a62033e8f57cc201f058e/raw/7ed41f853f22ef8b43ec74a606d4481c5f2d9d89/coursea.json";

export const fetchData = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchTodayCourses = async () => {
  const data = await fetchData();
  return data.todayCourses;
};

export const fetchMentors = async () => {
  const data = await fetchData();
  return data.mentors;
};

export const fetchMonthlyCourses = async () => {
  const data = await fetchData();
  return data.monthlyCourses;
};
