import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Item from "./Item";

function App() {
  // The value is this variable is the id of canister nft (dfx canister id nft)
  const NFTID = "dfdal-2uaaa-aaaaa-qaama-cai";

  return (
    <div className="App">
      <Header />
      <Item id={NFTID}/>
      {/* <img className="bottom-space" src={homeImage} /> */}
      <Footer />
    </div>
  );
}

export default App;
