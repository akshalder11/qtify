import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";

function App() {
  // const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    // console.log(value);
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }

    const res = songsData.filter(item => item.genre.key === key);
    console.log(res)
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const generateData = async () => {
    try {
      //Top Albums Data
      const dataTopAlbums = await fetchTopAlbums();
      setTopAlbumsData(dataTopAlbums);

      //New Albums Data
      const dataNewAlbums = await fetchNewAlbums();
      setNewAlbumsData(dataNewAlbums);
    } catch (error) {
      console.log(error);
    }
  };

  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateData();
    generateAllSongData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* {topAlbumsData.map ((item) => {
        return (
          <Card key={item.id} data={item} type='album' />
        )
      })} */}
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" type="album" filteredDataValues={topAlbumsData}/>
        <Section title="New Albums" type="album" filteredDataValues={newAlbumsData}/>
        <Section
          data={songsData}
          title="Songs"
          type="song"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
