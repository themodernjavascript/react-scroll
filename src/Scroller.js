import React, { Component } from 'react';

export default class Scroller extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
      requestSent: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);

    this.initData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  initData() {
    var data = this.loadData(this.state.data.length, 100);
    this.setState({data: data});
  }

  loadData(startKey, counter) {
    var i = 0;
    var data = [];
    for (i = 0; i < counter; i++) {
      var tempData = (<div key={startKey+i} className="data-info">rocord {startKey+i}</div>);
      data.push(tempData);
    }

    return data;
  }

  querySearchResult() {
    if (this.state.requestSent) {
      return;
    }

    // enumerate a slow query
    setTimeout(this.query, 1000);

    this.setState({requestSent: true});
  }

  query() {
    var data = this.loadData(this.state.data.length, 20);
    var newData = this.state.data.concat(data);
    this.setState({data: newData, requestSent: false});
  }  

  isAtBottom() {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    return scrolledToBottom;
  }

  handleOnScroll() {
    if (this.isAtBottom()) {
      this.querySearchResult();
    }
  }

  render() {
    return (
      <div>
        <div className="data-container">
          {this.state.data}
        </div>
        
      </div>
    );
  }
}

