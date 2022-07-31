import '../styles/globals.css'
import Navbar from '../components/Navbar';
//import { GetServerSideProps } from '../node_modules/next/app';

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  );
}

export default MyApp
