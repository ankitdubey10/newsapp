import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
        <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title} </h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source} </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text">By <b style={{color:"blueviolet"}}>{author}</b> on {new Date (date).toGMTString()}</small></p>
                        <a rel= "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        {/* target = "_blank"  will open it in new tab*/}
                    </div>
            </div>
        </div>
        )
    }
}
