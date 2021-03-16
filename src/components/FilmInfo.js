const FilmInfo = (props) => {
    return (

        <section>
            <div id="background">
                <h1 id="title">{props.title}</h1>
                <h3>{props.year}</h3>
                <p>{props.director}</p>
                <h1>{props.duration}</h1>
                <p >{props.rate}</p>
                <article>
                    {props.genre.map((genre, j) => <p key={j}>{genre}</p>)}
                </article>


            </div>
        </section>

    );
}

export default FilmInfo;