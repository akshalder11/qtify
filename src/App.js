import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { fetchTopAlbums } from "./api/api";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);


  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateData();
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
      <div>
        <Section data={topAlbumsData} title="Top Albums"/> 
      </div>

    </div>
  );
}

export default App;
