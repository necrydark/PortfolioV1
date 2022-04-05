import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { FormspreeProvider } from '@formspree/react'

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1914443541589786412">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp
