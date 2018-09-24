import React from 'react';
import './Tiles.css';

const tile = () => (
    <div className = "MainTile">
        <div className = "BigTile">
            <h2>Name</h2>
            <p>Stack is a responsive and fluid WordPress theme that works on all resolutions, and on any device (desktop, tablet, and mobile). It comes with masonry & infinite scroll features for WordPress Post Formats, Portfolio, and WooCommerce shop.
                
                Check out more demos here…</p>
                <div className = "ButtonDiv">
                <button type="button" className = "DemoButton">Click Me!</button>
                <button type="button" className = "DemoButton">Click Me!</button>
                <button type="button" className = "DemoButton">Click Me!</button>
                </div>    
        </div>
        <div className = "BigTileTrans">
            <div className = "Tile3">
              
            </div>
            <div className = "Tile2">
                <h3>What is Lorem Ipsum?</h3>
                <p>Stack is a responsive and fluid WordPress theme that works on all resolutions on any device (desktop, tablet, and mobile). </p>
            </div>
        </div>
       
        <div className = "Tile4">
         
        </div>
        <div className = "Tile5">
           
        </div>
        <div className = "Tile6">
        <h3>What is Lorem Ipsum?</h3>
                <p>Stack is a responsive and fluid WordPress theme that works on all resolutions on any device (desktop, tablet, and mobile). </p>
        </div>
        <div className = "Tile7">
        
        </div>
        
    </div>    
);

export default tile;