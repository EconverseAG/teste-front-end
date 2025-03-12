import './style.scss'

type Props ={
  imagem: string;
  text: string
}


function Card({imagem, text}:Props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imagem} alt={text} />
      </div>
      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;