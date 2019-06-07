import React, { Component } from 'react';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';
import { navigate } from '@reach/router';
import { getArticles, getTopics, postNewArticle } from '../api';
import ArticlePostForm from '../Form components/ArticlePostForm';
import FilterButton from '../Filter button component/FilterButton';
import Error from '../Error Component/Error';

class ArticlesPage extends Component {
  state = {
    articles: [],
    topics: [],
    created_at: 'created_at',
    comment_count: 'comment_count',
    votes: 'votes',
    button: false,
    err: null
  };

  componentDidMount() {
    getArticles({})
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
    getTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles.length !== this.state.articles.length) {
      getArticles()
        .then(articles => {
          this.setState({ articles });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data.msg;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }

  render() {
    const { articles, button, topics } = this.state;
    const { user } = this.props;
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div>
        {user && (
          <button
            className="post-article-btn"
            onClick={() => this.showNewArticleForm(button)}
          >
            Wrtite an Article{' '}
            <span role="img" aria-label="hand-writing">
              ✍🏻
            </span>
          </button>
        )}
        {user && button && (
          <div className="new-article-box">
            <ArticlePostForm handleSubmit={this.handleSubmit} topics={topics} />
          </div>
        )}
        <div className="filter-post-article-btns">
          <FilterButton
            className="buttons-area"
            filterBySelectedFilter={this.filterBySelectedFilter}
          />
        </div>
        <div className="new-article-box">{button && <form />}</div>
        <div className="main">
          <ul id="container">
            {articles.map(article => {
              return (
                <ArticleList
                  key={`article${article.article_id}`}
                  article={article}
                />
              );
            })}
          </ul>
          <button id="page-changer">
            <span role="img" aria-label="left-arrow">
              ⇠
            </span>
          </button>
          <button id="page-changer">
            <span role="img" aria-label="right-arrow">
              ⇢
            </span>
          </button>
        </div>
      </div>
    );
  }

  handleSubmit = state => {
    const { titleInput, bodyInput, topicInput } = state;
    const { user } = this.props;
    const newArticle = {
      title: titleInput,
      body: bodyInput,
      topic: topicInput,
      username: user.username
    };
    postNewArticle(newArticle)
      .then(article => {
        navigate(`/articles/${article.article_id}`);
        getArticles({})
          .then(articles => {
            this.setState({ articles });
          })
          .catch(({ response }) => {
            const errStatus = response.status;
            const errMessage = response.data.msg;
            const err = { errStatus, errMessage };
            this.setState({ err });
          });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  };

  filterBySelectedFilter = params => {
    getArticles(params)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  };

  updateTitleInput = e => {
    this.setState({ titleInput: e.target.value });
  };

  updateBodyInput = e => {
    this.setState({ bodyInput: e.target.value });
  };

  updateTopicInput = e => {
    this.setState({ topicInput: e.target.value });
  };

  showNewArticleForm = bool => {
    let newBool = bool;
    bool ? (newBool = false) : (newBool = true);
    this.setState({ button: newBool });
  };
}

export default ArticlesPage;
