import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' className='max-w-screen-lg lg:mx-auto'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-custom-dark-off-by-one dark:bg-custom-dark-coal-sprouse'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
