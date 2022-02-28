import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <div className="h-full bg-gray-50">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
