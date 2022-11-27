import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL as string; // your mongodb connection string
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let client;
let clientPromise: Promise<any>;

declare global {
    var _mongoClientPromise: Promise<any>;
}

if (!process.env.DATABASE_URL) {
    throw new Error('Please add your Mongo URI to ..env');
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        // @ts-ignore
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    // @ts-ignore
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;