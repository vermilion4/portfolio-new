import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta
            name="description"
            content="Echezona Oji - Product Designer. Passionate about creating exceptional designs that merge functionality with aesthetics. Specializing in product and UI/UX design. Crafting meaningful and user-friendly solutions that delight both the eye and the end user. Located in Abuja, Nigeria. Contact: Echezona2000@gmail.com. View resume for more details."
          />

          <meta charSet="UTF-8" />

          <meta name="author" content="Echezona Oji" />

          {/* Open Graph and Twitter Card meta tags for social sharing */}
          <meta property="og:title" content="Echezona Oji's Portfolio" />
          <meta property="og:description" content="Echezona Oji - Product Designer. Passionate about creating exceptional designs that merge functionality with aesthetics. Specializing in product and UI/UX design. Crafting meaningful and user-friendly solutions that delight both the eye and the end user. Located in Abuja, Nigeria. Contact: Echezona2000@gmail.com. View resume for more details." />
          <meta property="og:image" content="https://www.yourportfolio.com/eche.jpg" />
          <meta property="og:url" content="https://www.yourportfolio.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@EcheOji" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
