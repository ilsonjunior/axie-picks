import('node-fetch').then(({ default: fetch }) => {
    require('dotenv').config();

    const API_KEY = process.env.MORALIS_API_KEY;
    const RONIN_ADDRESS = 'khedirah.ron';
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
            const axies = data.result;

            console.log(axies);
        } catch (error) {
            console.error('Erro ao buscar Axies:', error);
        }
    }

    getAxies();
});


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA0MjQyMDBlLWM1ZGItNDk0Ny1hNmQyLTYxNWE4M2QwOTc2YiIsIm9yZ0lkIjoiNDMwNjA2IiwidXNlcklkIjoiNDQyOTQ0IiwidHlwZUlkIjoiMmIwOGI2MjEtZWQ5ZS00ZGM3LThjMzgtNDhjZDYyNjY0OGQxIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzkyMTc4NzMsImV4cCI6NDg5NDk3Nzg3M30.dRIW1gOgbPpjkajRNQeaooVQ4dLw4GZH0hTIjat7pMU