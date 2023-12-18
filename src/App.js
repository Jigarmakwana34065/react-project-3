import logo from './logo.svg';
import './App.css';
import Record from './Record';
import { useState,useEffect } from 'react';

const App = () => {

  const [allRecord, setAllRecord] = useState([
    {
      id: 1,
      name: "SAMSUNG Galaxy S23 FE",
      price: 54500,
      qty: 1,
      category: "mobile",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/1/s23-fe-sm-s711b-samsung-original-imagunqc47vafgak.jpeg?q=70"
    },
    {
      id: 2,
      name: "Samsung Refrigerator",
      price: 26999,
      qty: 1,
      category: "electronics",
      img : "https://m.media-amazon.com/images/I/61LlRngOGwL._AC_UY218_.jpg"
    },
    {
      id: 3,
      name: "washing machine",
      price: 15999,
      qty: 1,
      category: "electronics",
      img : "https://m.media-amazon.com/images/I/71Qe5R2sC-L._AC_UY218_.jpg"
    },
    {
      id: 4,
      name: "vivo",
      price: 100,
      qty: 1,
      category: "mobile",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/r/-original-imagpfbtmrr7spgc.jpeg?q=70"
    },
    {
      id: 5,
      name: "PANTS & JOGGERS",
      price: 5990,
      qty: 1,
      category: "cloth",
      img: "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EEEA%7Eothers%7EKOPs%7EAW23%7ESEASONAL%7ECATEGORIES+SEPT%7EMAN%7EEEA_m_trouser_dec.png/fmt/png"
    },
    {
      id: 6,
      name: "Jogger Set",
      price: 3999,
      qty: 1,
      category: "cloth",
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/622239/01/fnd/EEA/fmt/png/PUMA-x-LIBERTY-Toddlers'-Jogger-Set"
    },
    {
      id: 7,
      name: "oppo",
      price: 400,
      qty: 1,
      category: "mobile",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70"
    },
    {
      id: 8,
      name: "gujarati food",
      price: 150,
      qty: 1,
      category: "food",
      img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768,h_1024/https://saltandsandals.com/wp-content/uploads/IMG_20200220_193302_copy_1500x2000-768x1024.jpg"
    },
    {
      id: 9,
      name: "panjabi frankie",
      price: 100,
      qty: 1,
      category: "food",
      img : "https://turmerickitchen.files.wordpress.com/2015/08/schezwan-chicken-frankie-a-treat-for-spicy-street-food-lovers-recipe-1024x1024-2.jpg"
    }
  ])

  const [filter, setFilter] = useState([]);

  const handalClick = (cat) => {
    let oldRecord = [...allRecord]

    if (cat == "all") {
      setFilter(allRecord)
      console.log(allRecord);
    }
    else {
      oldRecord = allRecord.filter((item) => {
        return item.category == cat
      })
      setFilter(oldRecord)
      console.log(oldRecord);
    }
  }

  useEffect(()=>{
    setFilter(allRecord)
  },[])

  return (
    <div className="App">
      <Record
        allRecordData={filter}
        btnclick={handalClick}
      />
    </div>
  );
}

export default App;
