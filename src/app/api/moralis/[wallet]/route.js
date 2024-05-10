export async function GET(request, { params }) {
    const walletAddress = params.wallet;
  
    const res = await fetch(
      `https://deep-index.moralis.io/api/v2.2/wallets/${walletAddress}/net-worth`,
      {
        params: {
          exclude_spam: true,
          exclude_unverified_contracts: true,
        },
        headers: {
          accept: 'application/json',
          'X-API-Key': process.env.MORALIS_API_KEY,
        },
      }
    );
    const netWorth = await res.json();
  
    return Response.json({ netWorth });
  }
  