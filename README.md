Redeem IT is a gift redemption app for your redemption tracking needs!

Core functionalities:

1. Immediate look up of the representative's staff pass ID against the mapping file
2. Verification of whether a team has already redeemed their gifts
3. Handle new redemptions by team representations

Assumptions:

1. Staff representative will always redeem gifts for the entire department
2. This programme is only intended for personal use

## How to use Redeem IT

First, install all required dependencies:

```bash
npm install
```

Next, intialise the environment variables in a .env.local file in your root directory:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Redeem IT supports unit testing with Vitest. Run the following command to launch the testing environment.

```bash
npm run test
```
