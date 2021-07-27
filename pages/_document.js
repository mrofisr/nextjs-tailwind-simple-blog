import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="icon" href="https://raw.githubusercontent.com/mrofisr/mrofisr/main/mrofisr.png" type="image/png" />
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
