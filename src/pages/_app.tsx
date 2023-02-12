import { AppProps } from 'next/app';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
