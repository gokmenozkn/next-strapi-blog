
export default function Card({ movie }) {
  const { API_URL } = process.env;

  return (
    <div className="card card_size">
      <div className="card-image image">
        <img src={movie.poster.url} alt="poster" />
        <span className="card-title">{ movie.title }</span>
      </div>
    </div>
  )
}
