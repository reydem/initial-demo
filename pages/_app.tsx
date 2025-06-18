import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: JSX.Element) => JSX.Element;
};


type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page );
    return getLayout(<Component {...pageProps} />);
}

export default MyApp;