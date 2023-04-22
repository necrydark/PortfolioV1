import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { FormspreeProvider } from '@formspree/react'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

// function MyApp({ Component, pageProps }) {
//   return (
//     <FormspreeProvider project="1914443541589786412">
//       <Component {...pageProps} />
//     </FormspreeProvider>
//   );
// }

// export default MyApp

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <FormspreeProvider project="1914443541589786412">
        <Component {...pageProps} />
      </FormspreeProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);