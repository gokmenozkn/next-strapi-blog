import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Coderstwins helps you to become a good web developer. We teach you HTML, CSS and Javascript. Enjoy learning." />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Domine&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/d0d9868073.js" crossOrigin="anonymous"></script>
        <title> {title} </title>
        <meta name="google-site-verification" content="FKApUNhSKv1SfKXC0nsKio99Qtsrbrphx8v-DMLdCv4" />
      </Head>
      <main className="container">
        {/** Navbar */}
        <section className="section">
          <nav className="navbar">
            <div className="logo">
              <Link href="/"><a>codertwins</a></Link>
            </div>
            <div className="links">
              <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href=""><a>Post</a></Link></li>
                <li><Link href=""><a>Categories</a></Link></li>
              </ul>
            </div>
          </nav>
        </section>
        {/** Navbar END*/}

        {/** Blog Container */}
        <section className="blog-container">
          <div className="blog__posts">
            {children}
          </div>
        </section>
        {/** Blog Container END */}
      </main>
    </>
  )
}