import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: "Othmane Lamnabhi | MERN Developer",
    description:
      "I've been developing websites for 5 years straight. Get in touch with me to know more.",
    image: "/og.png",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:type' content='website' />
        <meta name='og:title' property='og:title' content={meta.title} />
        <meta
          name='og:description'
          property='og:description'
          content={meta.description}
        />
        <meta property='og:url' content={`https://thewannabedev.com${router.asPath}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:site' content='@thewannabedev' />
        <meta name='twitter:creator' content='@thewannabedev' />
        <link rel='icon' type='image/png' href='' />
        <link rel='apple-touch-icon' href='' />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:image' content={meta.image} />
        <link rel='canonical' href={`https://thewannabedev.com${router.asPath}`} />
      </Head>
      <main className={`my-8`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
