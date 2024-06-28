import {useSelector} from 'react-redux'
import { albumSelector } from '../redux/reducers/albumReducer';
// import {styles} from '../styles/Item.module.css'
import AlbumCard from './AlbumCard';
import { useEffect, useState } from 'react';

function Albums(){

    const styles = '';
    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchResult() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          const data = await response.json();
          setAlbums(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }

    fetchResult();
  }, []);

  console.log('albums: ', albums);

    return(
        <>
    <div className={styles.wrapper}>
      {albums.map((item) => (
        <AlbumCard
          key={item.id}
          id={item.id}
          name={item.title}
          price={item.body}
        />
      ))}
    </div>
        </>
    )
}

export default Albums;