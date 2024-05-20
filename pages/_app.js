import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import AuthProviders from "./api/Providers";
const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "500", "700", "900"] });
export default function App({ Component, pageProps }) {
  return (<main className={inter.className}>
    <AuthProviders>
    <Component {...pageProps} />
    </AuthProviders>
  </main>);
}
