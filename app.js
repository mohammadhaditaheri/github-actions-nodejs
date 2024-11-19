// app.js
const envVariable = process.env.MY_SECRET;

if (!envVariable) {
    console.error("Environment variable 'MY_SECRET' is not set.");
    process.exit(1);
}

console.log(`MY_SECRET: ${envVariable}`);
