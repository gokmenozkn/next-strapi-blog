import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <div className="navbar">
        <nav>
          <div className="container nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}