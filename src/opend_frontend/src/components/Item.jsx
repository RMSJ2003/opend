import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";

function Item(props) {
  const [name, setName] = useState();

  const id = Principal.fromText(props.id);

  /* In order to be able to access that canister (id), and call the methods on that
  canister, including getName, getOwner, and getAsset. We have to run a HTTP command
  to use hypertext transfer protocol to fetch that canister on the Internet Computer,
  blockchain. In terms of working locally, that will be our local dfx. So let's set
  this up by creating a new const:
  */ 
  const localHost = "http://localhost:8080/";
  // Then create a new HTTP agent which comes from the @dfinity/agent NPM package
  // Provide initializers in the form of JS object where we pass localhost as host property.
  const agent = new HttpAgent ({host: localHost});
  // Now we use this agent to fetch our name, owner, and image from the canister.
  // Since the canister's getName, getOwner, and getAsset returns asynchronously.
  // We'll make these method calls async function as well.
  // We only really want to call this once:
  async function loadNFT() {
    // Get hold of agent of our canister which is called an actor.
    // Inside .createActor we pass 2 inputs:
    // 1st = IDL factory which lives inside the declarations folder > nft.did.js
    // 2nd = options?: { agentOptions?: any; actorOptions?: any; }
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id
    });

    // Grab hold of the NFT canister.
    // We can now use the methods inside the NFT actor if we type NFTActor.
    const name = await NFTActor.getName();
    setName(name);
  }

  useEffect(() => {
    loadNFT();
  }, []);// Empty array will make the anon function be called only once.

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={logo}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: sdfsdf-erwerv-sdf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
