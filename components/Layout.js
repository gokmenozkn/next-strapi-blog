import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Domine&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/d0d9868073.js" crossOrigin="anonymous"></script>
      </Head>
      {/* <body className="container"></body> */}
      <div className="container">
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
      </div>
    </>
  )
}