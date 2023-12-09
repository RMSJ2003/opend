import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

/* This NFT is going to have a number of properties. We might have
a itemName, nftOwner, imageBytes. And in order to fill up these
properties, we have to pass it in when we create when we create
this new actor. Instead of simply creating our actors as we have
done before, we're creating an actor class.
Docs: https://internetcomputer.org/docs/current/samples/overview/#actor-classes
The reason why we use actor class instead of just actor is because this is going
to allow us to create our canisters programmatically. That's really important if
you're making a website that's going to allow people to mind their NFTs, a place
where they can upload that image and we can create that canister programmatically
based on the things that they've uploaded and the information they've provided.
The parameter is/are the data we're going to initialize this actor class.
The content is the actual image data, which is a 8-bit natural numbers (Nat8).
*/
actor class NFT(name : Text, owner : Principal, content : [Nat8]) {
    // Every time we programmitacally create a new NFT through building this actor class
    // Each of these NFTs are going to have a unique principal ID.
    let itemName = name;
    let nftOwner = owner;
    let imageBytes = content;

    //Call these using the command line: dfx canister call NFT <function name>
    public query func getName() : async Text {
        return itemName;
    };

    public query func getOwner() : async Principal {
        return nftOwner;
    };

    public query func getAsset() : async [Nat8] {
        return imageBytes;
    };
};
