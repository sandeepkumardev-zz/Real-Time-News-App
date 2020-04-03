import React from "react";

function card(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="200"
          src={props.img}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={props.url} target="_blank" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
