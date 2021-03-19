import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Deni Andreawan" />
          <meta
            name="keywords"
            content="nextjs, animalio, pet, react-pet-site, nextjs-mongodb, pet-sharing"
          />
          <meta name="title" content="Animalio - Show your pet to the world" />
          <meta
            name="description"
            content="Share and discover pets from around the globe"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://animalio.vercel.app/" />
          <meta
            property="og:title"
            content="Animalio - Show your pet to the world"
          />
          <meta
            property="og:description"
            content="Share and discover pets from around the globe"
          />
          <meta property="fb:app_id" content="217035993441109" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://animalio.vercel.app" />
          <meta
            property="twitter:title"
            content="Animalio - Show your pet to the world"
          />
          <meta
            property="twitter:description"
            content="Share and discover pets from around the globe"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Rubik"
          />
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
