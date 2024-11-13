import '../Estilos/Article.css'

const Article = ({placehold}) =>{

    return(
        <div className="articleInput">
            <input 
                className="inputt"
                type="text"
                placeholder= {placehold}
            />
        </div>
    )
}

export default Article;