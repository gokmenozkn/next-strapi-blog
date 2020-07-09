import Layout from 'components/Layout';
import moment from 'moment';
import showdown from 'showdown';

const converter = new showdown.Converter();

function Article({ post }) {
  return (
    <Layout>
      <div className="blog__post">
        <div className="blog__post--letter">{post.title[0]}</div>
        <span className="heading-2">{post.title}</span>
        <span className="blog__post--date"> { moment(post.created_at).calendar() } </span>
          <div className="blog__post--paragraph" 
            dangerouslySetInnerHTML={{__html: converter.makeHtml(post.content) }}>
          </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/articles`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => `/articles/${post.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // URL from .env
  const { API_URL } = process.env;

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${API_URL}/articles/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } }
}

export default Article;