import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Inter } from "next/font/google";
import ScrollUp from "@/components/ScrollUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#951B81"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <ScrollUp />
      <PersistGate persistor={persistor}>
        <main className={inter.className}>
          <ToastContainer
            position="bottom-center"
            limit={1}
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
          />

          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  );
}
