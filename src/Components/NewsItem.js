import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description,imageURL,newsURL} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: '25rem'}}>
          <img src={imageURL?imageURL:"https://th.bing.com/th/id/OIP.-mlwDVsSwfABKmZBtIBbtQHaFY?w=254&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} target = "_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
