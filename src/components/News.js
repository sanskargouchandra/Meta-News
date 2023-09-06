import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    pagesize: 9,
    category: 'general',
    headline: 'Top-Headline'
  }
  static propType={
    pagesize: PropTypes.number,
    category: PropTypes.string,
    headline: PropTypes.string,
  }


  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false, //for loading
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=07220f8636694150a9e1a7be4fd9113d&page=1&pageSize=${this.props.pagesize}`;
      this.setState({loading: true}) //for loading on
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults, loading: false  });//for loading off
  }

  handelPrevClick = async () => {

    if(this.state.page - 1 < 1 ){
        // Noothing to do if page count is less than 1 
    }else{
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=07220f8636694150a9e1a7be4fd9113d&page=${
        this.state.page - 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading: true}) //for loading onn
      let data = await fetch(url);
      let parsedData = await data.json();
      
  
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false 
      });//for loading off
    }

  };

  handelNextClick = async () => { 

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=07220f8636694150a9e1a7be4fd9113d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize} `;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
    
  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }else{
      // Noothing to do if page count is greater than the no of resukt
    }
  };

  render() {
    return (
      <div className=" outer">
        <div className="container my-3 " style={{ display: "contents" }}>
          <h1 className="p-2  text-white text-center">Meta-News's: {this.props.headline} Section</h1>
          {this.state.loading && <Spinner/>}
          <div className="row ">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 com" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 108) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}


            {/* Page changer  */}
            <div className="bottomsec">
              <div className="footerbtn">
                <div className="prev">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow1"></span>
                    </span>
                    <span
                      className="button-text"
                      aria-disabled={this.state.page <= 1}
                      onClick={this.handelPrevClick}
                    >
                      previous page
                    </span>
                  </button>
                </div>

                <div className="nxt">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow2"></span>
                    </span>
                    <span className="button-text" onClick={this.handelNextClick}>
                      Next page
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
