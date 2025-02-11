import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA0MjQyMDBlLWM1ZGItNDk0Ny1hNmQyLTYxNWE4M2QwOTc2YiIsIm9yZ0lkIjoiNDMwNjA2IiwidXNlcklkIjoiNDQyOTQ0IiwidHlwZUlkIjoiMmIwOGI2MjEtZWQ5ZS00ZGM3LThjMzgtNDhjZDYyNjY0OGQxIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzkyMTc4NzMsImV4cCI6NDg5NDk3Nzg3M30.dRIW1gOgbPpjkajRNQeaooVQ4dLw4GZH0hTIjat7pMU",
  });

  const allNFTs = [];

  const address = "0x130c5d0e94B992eca862eEdb5F80E6FD6a34202c";

  const chains = [EvmChain.RONIN];

  for (const chain of chains) {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    allNFTs.push(response.toJSON());
  }

  console.log(allNFTs.filter(nft => nft.token_address === '0x32950db2a7164ae833121501c797d79e7b79d74c'));
};

runApp();
