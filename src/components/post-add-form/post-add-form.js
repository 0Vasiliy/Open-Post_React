import React from "react";

import './post-add-form.js'

const PostAddForm = () =>{
    return(
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="sumbit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </form>
    )
}

export default PostAddForm;