// client/src/components/Card.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

function Card(props) {
    const imageUrl =
        props.photos && props.photos[0]
            ? props.photos[0]
            : "https://via.placeholder.com/300x200?text=No+Image";

    return (
        <div className="card">
            <div className="content">
                <img id="post-image" src={imageUrl} alt="Post" />

                <h4>{props.title}</h4>
                <h6>
                    <span>Date: </span> {props.date}
                </h6>
                <h6>
                    <span>Location: </span> {props.location}
                </h6>
                <p>{props.text.slice(0, 60)}...</p>

                <Link to={`view/${props._id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
