# Real time stock and currency data through terminal 

- Make sure node and npm are installed
- Clone this repo

```
git clone https://github.com/mudittt/realtime-stockprice-cli.git

```

- Go to the project folder

```
cd realtime-stockprice-cli
```
- Install the necessary npm packages using

```
npm install
```
-  Go to this link and get your api key
```
https://rapidapi.com/manwilbahaa/api/yahoo-finance127
```

- Once you get the api key, Create a new '.env' file inside the project folder.
- Open the .env file and paste your key 

```
KEY=your_api_key_here
```

- Then, run the following command

```
npm link
```

- Finally, to see if the project is working or not, run

```
check -h
check yahoo -h
```