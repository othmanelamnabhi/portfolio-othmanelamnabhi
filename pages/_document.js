import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='dark:bg-custom-dark-coal-sprouse bg-custom-dark-off-by-one'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
