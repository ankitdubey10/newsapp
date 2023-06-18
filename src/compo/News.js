import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
    static defaultProps = {
        country : "in",
        pageSize : 6,
        category : "science"
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state= {
            articles: [],
            loading: false,
            page: 1

        }
        
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e3a6869141c34c778ef6e7f437f58582&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url); // async will wait till the promise is fulfilled
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        document.title = `${this.capitalizeFirst(this.props.category)} -  NewsApp`;
    }
    async componentDidMount(){
        this.updateNews();

    }
    handlePrevPage = async() => {
        this.setState({page: this.state.page - 1})
        this.updateNews();
    }
    handleNextPage = async() => {
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }
    render() {
        console.log("render running");
        return (
        <div className='container my-3'>
            <h1 className="text-center" style={{margin: '35px'}}>
            {this.capitalizeFirst(this.props.category)} - NewsApp 
            {this.state.loading && <Spinner/>}
            </h1>
            
            <div className="row">
            {!this.state.loading && this.state.articles.map((ele)=>{   
                return <div className="col-md-4" key={ele.url}>
                <NewsItem title  = {ele.title!=null?ele.title:""} description = {ele.description!=null?ele.description.slice(0,100):""}  
                    imageUrl = {ele.urlToImage!=null || ele.urlToImage === 403 ? ele.urlToImage : "https://img2.storyblok.com/1120x292/filters:format(webp)/f/47007/2400x626/9990599857/how-to-build-a-news-app-banner.png"}
                    newsUrl = {ele.url}
                    author = { !ele.author ? ele.source.name:ele.author} date = {ele.publishedAt} source = {ele.source.name}
                />
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
            <h7><b>Page No:- {this.state.page<10?"0"+this.state.page:this.state.page} / {Math.ceil(this.state.totalResults/this.props.pageSize)<10?"0"+Math.ceil(this.state.totalResults/this.props.pageSize):Math.ceil(this.state.totalResults/this.props.pageSize)}</b></h7>
            <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
            </div>
        </div>
        )
    }
}