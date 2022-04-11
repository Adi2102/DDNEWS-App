import React from "react";

const NewsItems = (props) => {
  let { title, description, urlToImage, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge bg-danger p-2">{source}</span>
        </div>

        <img
          src={
            !urlToImage
              ? "https://1.bp.blogspot.com/-AP7mJpZIec8/YPVWAjOPIoI/AAAAAAAACYk/H21Y2DYMov4azO0TIJ6QbuRKE1vruljDgCLcBGAsYHQ/download%2B%252821%2529.jpeg"
              : urlToImage
          }
          className="card-img-top"
          style={{ height: "15rem" }}
          alt="articleImage"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-outline-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
