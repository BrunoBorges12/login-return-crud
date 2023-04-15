import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Titillium_Web } from 'next/font/google'


const titilliumWeb = Titillium_Web({subsets:['latin'],weight:['200','400','600','700'],display:'swap'})
export default function App({ Component, pageProps }: AppProps) {

  
  return ( <>
   <style jsx global>
          {`
            :root {
              --font-titillium-web: ${titilliumWeb.style.fontFamily};
              
            }
          `}
        </style>
              <Component {...pageProps} />
          </>
  )
}
