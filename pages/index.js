import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Card from 'components/Card'

function Home({ movies }) {
  console.log(movies);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            {movies.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data
    }
  }
};

export default Home;