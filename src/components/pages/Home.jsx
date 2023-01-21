import { useEffect, useState } from 'react';
import { fetchTreadingsMovies } from 'Services/api';

function Home() {
  const [treading, setTreading] = useState([]);

  useEffect(() => {
    fetchTreadingsMovies().then(data => {
      setTreading(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <>
      <h2>Treading today</h2>
      {treading}
    </>
  );
}

export default Home;
