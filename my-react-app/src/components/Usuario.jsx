import { useState} from "react";

const Usuario = ({userName, Name, imgUsuario}) => {
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing 
  ? 'followCard-boton is-following'
  : 'followCard-boton'

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

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
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )

}

export default Usuario;
