import axios from 'axios';

const baseUrl = 'https://fk-news-app.herokuapp.com/api';

export const getArticles = params => {
  return axios
    .get(`${baseUrl}/articles`, params)
    .then(({ data: { articles } }) => {
      return articles;
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
