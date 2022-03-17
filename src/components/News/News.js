import React from 'react'
import Lis from '../../images/lis.png';

import './News.styles.css';

function News(props){
    return(
        <div className="box">
            <img className="image" src={Lis} />
            <h1 className="title">
                {props.title}
            </h1>
            <div className="desc">
        <span className="author">
          Emma Roth
        </span>
                <div className="point"></div>
                <span className="date">12 Dec</span>
            </div>
        </div>
    )
}

export default News;