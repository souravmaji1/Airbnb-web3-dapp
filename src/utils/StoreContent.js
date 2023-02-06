import { Web3Storage } from "web3.storage";

const web3storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI4ZkQyNzE5ZjA0MTQ0N0NhMURGYjNFNTg1NkY2YzFGNmVmOTEyNTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzUxOTIxMzUxMzAsIm5hbWUiOiJhaXJibmIifQ.7OvXovo0s1O4x0GyYPZiqTPZOc0L7Kj94uk2JjxYt9o";

function GetAccessToken() {
  return web3storage_key;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("Stored files with cid:", cid);
  return cid;
};
