import Layout from '@/layout/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adaeze Ndupu | Frontend Developer Portfolio</title>
        <meta name="description"
          content="Adaeze Ndupu is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and Webflow. Explore her portfolio to see her latest projects and learn more about her skills and experience." />
        <meta name="author" content="Adaeze Ndupu" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Adaeze Ndupu's Portfolio" />
        <meta property="og:description" content="Adaeze Ndupu - Frontend Developer. Passionate about creating exceptional websites that merge functionality with aesthetics. Specializing in frontend development. Crafting user-friendly and responsive solutions that enhance user experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adacoder.ng/" />
        <meta property="og:image" content="https://adacoder.ng/ada.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@what_is_a_swat" />
        <meta name="twitter:image" content="https://adacoder.ng/ada.jpg" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Adaeze Ndupu's Frontend Developer Portfolio",
              "description": "Adaeze Ndupu is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and WordPress.",
              "author": {
                "@type": "Person",
                "name": "Adaeze Ndupu"
              },
              "url": "https://adacoder.ng/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://adacoder.ng/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://twitter.com/what_is_a_swat",
                "https://www.linkedin.com/in/adaeze-ndupu",
                "https://github.com/vermilion4",
                "https://medium.com/@andupu4",
                "https://www.hackerrank.com/andupu4",
                "https://www.frontendmentor.io/profile/vermilion4"
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://adacoder.ng/"
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
