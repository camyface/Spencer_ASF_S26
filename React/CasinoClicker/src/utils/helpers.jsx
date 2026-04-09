

export const displayMessage = (number) => {
    if (number === 7) {

        return <h2>YOU WIN!!!</h2>;
    } else {
        return <button onClick={handleClick}>Click me or else!</button>
    }
}