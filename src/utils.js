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

  export function getArticleById(articleId) {
    return apiClient
      .get(`/articles/${articleId}`)
      .then((response) => {
        return response.data.article;
      });
  }

  export function getCommentsById (articleId){
    return apiClient
    .get(`/articles/${articleId}/comments`)
    .then((response) => {
     return (response.data.comments)
    })
  }