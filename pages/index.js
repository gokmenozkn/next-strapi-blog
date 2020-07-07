// import Head from 'next/head';
// import fetch from 'isomorphic-unfetch';
import Layout from 'components/Layout';
import moment from 'moment';
import showdown from 'showdown';

const converter = new showdown.Converter();

function Home({ articles }) {
  return (
    <Layout>
      {articles.map(article => (
        <div className="blog__post" key={article.id}>
          <div className="blog__post--letter">{article.title[0]}</div>
          <span className="heading-2"> {article.title} </span>
          <span className="blog__post--date"> { moment(article.created_at).calendar() } </span>
          <div className="blog__post--paragraph" dangerouslySetInnerHTML={{__html: converter.makeHtml(article.content) }}></div>
          <a href="" className="blog__post--button">Read On</a>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
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