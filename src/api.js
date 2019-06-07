import axios from 'axios';

const baseUrl = 'https://fk-news-app.herokuapp.com/api';

export const getArticles = params => {
  return axios
    .get(`${baseUrl}/articles`, { params })
    .then(({ data: { articles, total_count } }) => {
      return { articles, total_count: +total_count };
    });
};

export const getArticleById = id => {
  return axios
    .get(`${baseUrl}/articles/${id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getTopicByName = topicName => {
  return axios
    .get(`${baseUrl}/topics/${topicName}`)
    .then(({ data: { topic } }) => {
      return topic;
    });
};

export const getCommentsByArticleId = id => {
  return axios
    .get(`${baseUrl}/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getUserByUsername = username => {
  return axios
    .get(`${baseUrl}/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
    });
};

export const postNewTopic = newTopic => {
  return axios
    .post(`${baseUrl}/topics`, newTopic)
    .then(({ data: newTopic }) => {
      return newTopic;
    });
};

export const postNewArticle = newArticle => {
  return axios
    .post(`${baseUrl}/articles`, newArticle)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const updateTopicsState = () => {
  return axios.get(`${baseUrl}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const patchArticle = (article_id, direction) => {
  return axios
    .patch(`${baseUrl}/articles/${article_id}`, { inc_votes: direction })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchCommentByCommentId = (comment_id, direction) => {
  return axios
    .patch(`${baseUrl}/comments/${comment_id}`, {
      inc_votes: direction
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const postCommentByArticleId = (article_id, newTopic) => {
  return axios.post(`${baseUrl}/articles/${article_id}/comments`, newTopic);
};

export const postUser = newUser => {
  return axios.post(`${baseUrl}/users`, newUser).then(({ data: { user } }) => {
    return user;
  });
};

export const deleteCommentByCommentId = comment_id => {
  return axios
    .delete(`${baseUrl}/comments/${comment_id}`)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};
