import React from 'react';
import { Component } from 'react';

import Header from '../containers/header';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <div className='row'>
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
