import('node-fetch').then(({ default: fetch }) => {
    require('dotenv').config();

    const API_KEY = process.env.MORALIS_API_KEY;
    const RONIN_ADDRESS = '0x130c5d0e94B992eca862eEdb5F80E6FD6a34202c';
    const CHAIN = 'ronin';

    async function getAxies() {
        const url = `https://deep-index.moralis.io/api/v2/${RONIN_ADDRESS}/nft?chain=${CHAIN}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-Key': API_KEY,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            // Filtra apenas os Axies
            const axies = data.result.filter(nft => nft.token_address === '0x32950db2a7164ae833121501c797d79e7b79d74c').map(nft => Number(nft.token_id)).join(', ');

            console.log(axies);
        } catch (error) {
            console.error('Erro ao buscar Axies:', error);
        }
    }

    getAxies();
});