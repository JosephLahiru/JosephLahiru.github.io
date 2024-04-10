import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
 return (
    <Html lang="en">
      <Head>
        <Script
          id="clarity"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ludxxofh0q");
            `,
          }}
        />
      </Head>
      <body>
        {/* Your existing theme switcher script */}
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
 );
}
