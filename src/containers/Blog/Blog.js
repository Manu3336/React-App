import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost'
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import post from '../../components/Post/Post';
import SideMenu from '../../components/SideMenu/SideMenu'
import Header from '../../components/Header/Header';

class Blog extends Component {
    render () {
        return (
            <div>
                <Header/>
                <SideMenu/>
                <Switch>
                    <Route path ="/new-post" component={NewPost}/>
                    <Route path ="/posts" component={Posts}/>
                    <Redirect from = "/" to="/posts"/>
                </Switch>    
            </div>
        );
    }
}

export default Blog;