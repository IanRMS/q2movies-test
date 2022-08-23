import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { getMovies } from './services';

function App() {


  const handleMovies = async () => {
    try {
      const {data} = await getMovies();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log('acabou')
    }
  }
  useEffect(() => {
    handleMovies()
  },[])

  return (
    <>
    <GlobalStyle/>
    <div><h2>TESTE DO IANZÃO</h2></div>
    </>
  );
}

export default App;
