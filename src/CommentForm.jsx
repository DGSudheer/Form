import { useState } from "react";

export default function CommentForm() {
    return(
        <div>
            <input type="text" placeholder="enter the full name"/>
            <button>Submit</button>
        </div>
    );
}