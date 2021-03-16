
const Buttons = (props) => {
    return (
        <article>
            <button onClick={props.handleAscending}>Sort by Data Ascending</button>
            <button onClick={props.handleDescending}>Sort by Data Descending</button>
            <button>Best Rate</button>
            <button>A-Z</button>
            <button>Z-A</button>
        </article>
    );
}

export default Buttons;