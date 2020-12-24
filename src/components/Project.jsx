import React, { useState } from "react";




function Project(props) {
    return (
      <div className="card-container">
          <div className="card"> 
          <div>
            <img className="ex-img" src={props.img} />
          </div>       
            <div className="card-body">
              <p className="title">{props.title}</p>
              <a className="btn" href={props.github}><i className="fas fa-code-branch"></i> View on Github</a>
              <p className="description">{props.desc}</p>
              <p className="description">Skills Used:</p>
              <div className="tech">{props.tech}</div>
            </div>
          </div>
        </div>
    );
}

export default Project;
