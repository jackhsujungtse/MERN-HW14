import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className='col-md-4'>Select a book to get started.</div>;
    }

    return (
      <div className='detail col-md-8'>
        <h2 className = "booktitle">{this.props.book.title}</h2>
        <div className = "bookpage">Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
