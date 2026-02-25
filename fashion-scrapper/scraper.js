const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let products = [
  {
    id: 1,
    name: "Hot Trend Crop Top",
    price: "₹449",
    image: "https://m.media-amazon.com/images/I/71swqqe7XAL._AC_UL320_.jpg",
    affiliateUrl: "https://amzn.to/3YourAffiliateID" // Replace with YOUR Amazon link
  },
  {
    id: 2,
    name: "Statement Gold Hoops", 
    price: "₹279",
    image: "https://m.media-amazon.com/images/I/61XzK8Y5JQL._AC_UL320_.jpg",
    affiliateUrl: "https://amzn.to/3YourID2"
  },
  {
    id: 3,
    name: "High Waist Mom Jeans",
    price: "₹799", 
    image: "https://m.media-amazon.com/images/I/81Q1qY3bLJL._AC_UL320_.jpg",
    affiliateUrl: "https://amzn.to/3YourID3"
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(3001, () => {
  console.log('🚀 Fashion Scraper: http://192.168.1.48:3001/api/products');
  console.log('✅ 3 hot products ready!');
});
