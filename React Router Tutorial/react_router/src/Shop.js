import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v1/banners');

    const items = await data.json();
    // console.log(items.data[0]);

    for (var i = 0; i < items.data.length; i++) {
      console.log(items.data[i]);
      setItems(items.data[i]);
    }
  }

  return (
    <div>
        <h1>
          <Link to={`/shop/${items.devName}`}>{items.devName}</Link>
        </h1>
    </div>
  );
}

export default Shop;