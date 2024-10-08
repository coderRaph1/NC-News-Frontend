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

  export function voteOnArticle(articleId, voteChange) {
    return apiClient.patch(`/articles/${articleId}`, { inc_votes: voteChange }).then((response) => {
      return response.data.article.votes;
    });
  }

  export function postNewComment(articleId, username, comment) {

    const data = {username: username, body: comment}
    
    return apiClient.post(`/articles/${articleId}/comments`, data)
      .then((response) => {
        return response.data
      });
  }

  export function deleteComment(commentId){

    return apiClient.delete(`/comments/${commentId}`)
    .then((response) => {
      console.log(response)
    })
  }