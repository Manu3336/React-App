import React, {Component} from 'react';
import './SideMenu.css'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class SideMenu extends Component{
    render(){
        return(
            <div className="SideMenu">
                <h1>Brand Name</h1>
                <h5>Windows 8 Metro-like Tiles</h5>
                <div className="AwesomeFonts">
                    <i class="fa fa-twitter fa-1x" aria-hidden="true" ></i>
                    <i class="fa fa-facebook fa-1x" aria-hidden="true" ></i>
                    <i class="fa fa-linkedin fa-1x" aria-hidden="true" ></i>
                </div>
                <div className="SearchBox">
                    <i class="fa fa-search fa-1x" aria-hidden="true" ></i>
                    <input type = "text" className="SearchBar"/>
                </div>

                <div className="ListOptions">
                    <i class="fa fa-home fa-1x" aria-hidden="true" ></i>
                    <NavLink to="/posts"
                    activeStyle={{ color: 'white', textDecoration: 'none' }}>HOME</NavLink>                     
                </div>

                <div className="ListOptions">    
                    <i class="fa fa-suitcase fa-1x" aria-hidden="true" ></i>PORTFOLIO
                </div>
                
                <div className="ListOptions">   
                    <i class="fa fa-comment fa-1x" aria-hidden="true" ></i>
                    <NavLink to="/new-post"
                    activeStyle={{ color: 'white', textDecoration: 'none' }}>NEW POST</NavLink>       
                </div>
                <div className="ListOptions">
                    <i class="fa fa-envelope fa-1x" aria-hidden="true" ></i>CONTACT
                </div>
            </div>  
        )
    }
}

export default SideMenu;