import { useState } from "react";

export default function CommentForm() {
    let [fullname, SetFullName] = useState("");
    return(
        <div>
            <input type="text" placeholder="enter the full name" value={fullname}/>
            <button>Submit</button>
        </div>
    );
}