# Animalio | Pet Showcase App

## Configuration

### Step 1. Set up environment variables

Create ```.env.local``` env variables and set the following:
```
MONGODB_URI=<mongodb uri>
SESSION_SECRET=<any secret key>
BASE_URL=<your frontend url>
CLOUDINARY_NAME=<you cloudinary name>
CLOUDINARY_API_KEY=<you cloudinary api key>
CLOUDINARY_API_SECRET=<you cloudinary secret>
FACEBOOK_CLIENT_ID=<you app client id>
FACEBOOK_CLIENT_SECRET=<you app client secret>
GOOGLE_CLIENT_ID=<you app client id>
GOOGLE_CLIENT_SECRET=<you app client secret>
```

You can get your Facebook client id/secret here [Facebook for developers](http://developers.facebook.com/) and for Google here [Google Cloud Platform](https://console.cloud.google.com/) and set the necessary env vars above.  

### Step 2. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

## Deploy on Vercel

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
