import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: '',
            listPosts: ['Second text','First text']
        };
        this.addPost = this.addPost.bind(this);
        this.filterList = this.filterList.bind(this);
    }
    addPost(post) {
        this.setState({
            listPosts: [].concat([post], this.state.listPosts),
        });
    }
    filterList(filter) {
        this.setState({
            filter,
        });
    }
    render() {
        return (
            <React.Fragment>
                <Header filterList={(filter)=> this.filterList(filter)}/>
                <Main listPosts={this.state.listPosts.filter(e => e.includes(this.state.filter))} 
                addPost={(post)=> this.addPost(post)}/>
            </React.Fragment>
        );
    }
}


export default App;