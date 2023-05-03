import React from "react";
import './post-status-filter.css'



const PostStatusFilter = () =>{
    return(
        <div>
            <button type="button" className="btn btn-outline-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;