import React, { useEffect, useState } from "react";
import Splash from "components/splash";

import GlobalStyle from "./globalStyles";
import MovieList from "./movieList";

function App() {
  const [isShowSplash, setIsShowSplash] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 3000);
  },[])

  return (
    <>
      <GlobalStyle />
      {isShowSplash ?
      <Splash/>
      :
      <MovieList/>
    }
    </>
  );
}

export default App;
