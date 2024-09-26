import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
    const [changeTest, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {!changeTest && (<Output>it's good to see you!</Output>)}
            {changeTest && (<Output>Text Changed!</Output>)}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}