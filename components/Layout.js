import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, title, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{ title }</title>
      </Head>
      <Navbar />
      { children }
    </>
  )
}