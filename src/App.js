import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Maincontent from './components/Maincontent';

function App() {
  const[list,setList]=useState([]);
  const[topAnime,setTopAnime] = useState([]);
  const[search,setSearch] =useState("");

  const GetTopAnime = async() => {
    const temp= await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json());

    setTopAnime(temp.top.slice(0,10));
  }

  // useEffect(() => {
  //   (async() => {
  //     try{
  //       const res= await axios.get("https://api.jikan.moe/v/top/anime/1/bypopularity")
  //       setList(res.topAnime)
  //       console.log(res.topAnime)
  //     }catch(err){
  //       console.log(err.topAnime)
  //   }) ()
  //   }
  //   GetTopAnime();
  // },[])
  
  // console.log(topAnime);

  const HandleSearch =e => {
    e.preventDefault();
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`)
			.then(res => res.json());

		setList(temp.results);
	}
   useEffect(()=> {
    GetTopAnime()
   }, [])

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime}/>
          <Maincontent HandleSearch={HandleSearch} search={search} setSearch={setSearch} list={list}/>
      </div>
    </div>
  );
}

export default App;
