// React
import {
  Fragment,
  ReactNode,
  useEffect,
  useState
} from 'react';
// Next
import Head from 'next/head';


interface Props {
  children: ReactNode;

  pageTitle: string;
  pageDesc?: string;
  pageKeywords?: string;
  pageBanner?: string;
  pageUrl?: string;
}

export const ShopLayout = ({
  children,
  pageTitle,
  pageDesc,
  pageKeywords,
  pageBanner,
  pageUrl
}: Props) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;
  const [ isLoading, setIsLoading ] = useState( true );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 700 );
  }

  useEffect( () => {
    loadingControl();
  }, [] );

  return (
    <Fragment>
      <Head>
        <title>{ layoutPageTitle }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={ pageDesc } />
        <meta name="keywords" content={ pageKeywords } />
        <meta name="robots" content="index" />
        <meta name="language" content="es" />

        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content={ pageDesc } />
        <meta property="og:image" content={ pageBanner } />
        <meta property="og:url" content={ pageUrl } />
      </Head>

      <nav>
        {/*Navbar*/}
      </nav>

      {/*Sidebar*/}

      <main
       className=''
        style={{
          margin: 'auto',
          marginTop: '35px',
          maxWidth: '1080px',
          padding: '8px',
          marginBottom: '40px'
        }}
      >
        {
          ( isLoading )
            ? <>{/*LoadingPage*/}</>
            : <Fragment>{ children }</Fragment>

        }
      </main>
    </Fragment>
  );
}
