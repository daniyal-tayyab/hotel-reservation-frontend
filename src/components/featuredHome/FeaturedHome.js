import React from "react";
import "./featuredHome.css";

const FeaturedHome = () => {
  return (
    <section className="featured-home">
      <div className="featured-home-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="fh1"
          className="featured-home-img"
        />
        <span className="featured-home-name">Comfort Suites Airport</span>
        <span className="featured-home-city">Austin</span>
        <span className="featured-home-price">Starting from $140</span>
        <div className="featured-home-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featured-home-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt="fh1"
          className="featured-home-img"
        />
        <span className="featured-home-name">Comfort Suites Airport</span>
        <span className="featured-home-city">Austin</span>
        <span className="featured-home-price">Starting from $140</span>
        <div className="featured-home-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featured-home-item">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt="fh1"
          className="featured-home-img"
        />
        <span className="featured-home-name">Comfort Suites Airport</span>
        <span className="featured-home-city">Austin</span>
        <span className="featured-home-price">Starting from $140</span>
        <div className="featured-home-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featured-home-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt="fh1"
          className="featured-home-img"
        />
        <span className="featured-home-name">Comfort Suites Airport</span>
        <span className="featured-home-city">Austin</span>
        <span className="featured-home-price">Starting from $140</span>
        <div className="featured-home-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHome;
