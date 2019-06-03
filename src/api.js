import axios from 'axios';

const baseUrl = 'https://fk-news-app.herokuapp.com/api';

const getArticles = query => {
  axios.get(`${baseUrl}/articles`, query).then(({ data: { articles } }) => {
    return articles;
  });
};

export default getArticles;
