import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '@/data/config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="icon" href={config.favIcon} type="image/png" />
        </Head>
        <body className="bg-white dark:bg-gray-800 transition-colors duration-100 ease-linear">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
