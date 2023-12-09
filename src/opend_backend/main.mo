import Debug "mo:base/Debug";
actor OpenD {
    Debug.print(debug_show("this is the main.mo"));
};
//NOTE: Edited webpack.config.js 
// Added "dfx": "0.15.2", in dfx.json

// Normally, we've always been working within the main.mo file, but in this case
// because we're building an NFT and each NFT is a new instantiated canister on
// the Internet Computer blockchain, we actually shouldn't really be building it
// within the main file because this is going to the backend for our NFT marketplace.
// So it's the E-commerce part.
// I created a new folder called NFT and a new file called nft.mo.
// I also added it to the dfx.json