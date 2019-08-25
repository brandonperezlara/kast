import React, { lazy, Suspense } from "react";
import "emerald-ui/lib/styles.css";
import Progressbar from "emerald-ui/lib/Progressbar";
require('dotenv').config();
const Main = lazy(() => import("./components/Main"));
function App() {
  return (
    <>
      <Suspense fallback={<Progressbar continuous />}>
        <Main />
      </Suspense>
    </>
  );
}

export default App;
