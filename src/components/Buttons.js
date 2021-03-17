
const Buttons = (props) => {
    return (
        <article>
            <button onClick={props.handleAscending}>Sort by Data Ascending</button>
            <button onClick={props.handleDescending}>Sort by Data Descending</button>
            <button onClick={props.handleRate}>Best Rate</button>
            <button onClick={props.handleAlphabetAsc}>A-Z</button>
            <button onClick={props.handleAlphabetDes}>Z-A</button>
        </article>
    );
}

export default Buttons;