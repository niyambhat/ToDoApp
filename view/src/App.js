import React, { useState, useEffect } from "react";
import Constants from "./utilities/Constants";


function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = Constants.API_URL_GET_ALL_POSTS;
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(postsFromServer => {
        setPosts(postsFromServer);
        console.log(postsFromServer)
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  useEffect(()=>{
  getPosts()
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
