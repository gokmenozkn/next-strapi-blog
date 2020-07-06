// import Head from 'next/head';
// import fetch from 'isomorphic-unfetch';
import Layout from 'components/Layout';
import moment from 'moment';

function Home({ articles }) {
  return (
    <Layout>
      {articles.map(article => (
        <div className="blog__post" key={article.id}>
          <div className="blog__post--letter">{article.title[0]}</div>
          <span className="heading-2"> {article.title} </span>
          <span className="blog__post--date"> { moment(article.created_at).calendar() } </span>
          <p className="blog__post--paragraph">
            {article.content.substring(0, 450)+" ..."}
          </p>
          <a href="" className="blog__post--button">Read On</a>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/articles`);
  const data = await res.json();

  return {
    props: {
      articles: data
    }
  }
};

export default Home;