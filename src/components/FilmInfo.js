const FilmInfo = (props) => {
    return (

        <section>
            <div id="background">
                <p id="title">{props.title}</p>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.genre}</p>
                <p >{props.rate}</p>
            </div>
        </section>
    );
}

export default FilmInfo;