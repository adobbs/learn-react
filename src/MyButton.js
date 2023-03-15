import { useState } from "react";

function MyButton({ updateTotalCount }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        updateTotalCount();
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

export default MyButton;
