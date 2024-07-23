import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize: 5,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log ("I am a constructor from news component");
        this.state ={
            articles : [],
            loading :false,
            page: 1
        } 
    }

    componentDidMount = async () =>{
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31504e05f534e418d00ff775e1c4f78&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log (parsedData);
        this.setState({articles: parsedData.articles,
                       total: parsedData.totalResults,
                       loading : false
        });

    }

    handlenext = async() =>{
      
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31504e05f534e418d00ff775e1c4f78&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log (parsedData);
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading:false
        }
        )
    }

    handleprev= async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31504e05f534e418d00ff775e1c4f78&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log (parsedData);
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading:false
        }
        )
    }

  render() {
    console.log ("render");
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Monkey - top headlines</h1>
        {this.state.loading && <Spinner/>}
       {!this.state.loading && <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key = {element.title}>
                <NewsItem title = {element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,88):""} imageURL ={element.urlToImage} newsURL = {element.url}/>
            </div>
            })}
        </div> }
        <div className='container d-flex justify-content-between'>
        <button disabled= {this.state.page <=1} onClick={this.handleprev} type="button" className="btn btn-dark">&larr; Previous</button>
        <button disabled = {this.state.page+1 > Math.ceil (this.state.total/this.props.pageSize)} onClick={this.handlenext}  type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
