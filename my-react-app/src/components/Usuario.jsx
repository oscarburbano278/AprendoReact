
const Usuario = ({userName, Name, imgUsuario}) => {
  return (
    <article className="followCard-article">
      <header className="card-header">
        <img
        className="followCard-avatar"
        src={imgUsuario}
        alt="" />

        <div className="followCard-info">
          <strong> {Name} </strong>
          <span className='followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='followCard-boton'>
          seguir
        </button>
      </aside>
    </article>
  )

}

export default Usuario;
