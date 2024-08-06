import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://nc-backend-project-gmqk.onrender.com/api",
  });

  export function getArticles() {
    return apiClient
      .get("/articles")
      .then((response) => {
      
        return response.data.articles;
      });
  }
