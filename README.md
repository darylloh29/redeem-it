## Redeem IT!

Redeem IT is a gift redemption tracking app for redemption tracking needs!
Welcome to Redeem IT! This software tool is designed to streamline the process of redeeming gifts or rewards. With this application, users can easily track the status of gift redemptions and issue gifts to eligible individuals and teams.

Core functionalities:

1. Immediate look up of the representative's staff pass ID against the mapping file
2. Verification of whether a team has already redeemed their gifts
3. Handle new redemptions by team representations

Assumptions:

1. A team representative will always redeem gifts for the entire team
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
