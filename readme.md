
## Getting Started

1. Clone this project or download the zip file.
2. Change the current working directory to your local project in your terminal.
3. Run `npm install` to install all of the dependencies.
4. In order to run this project properly you need to run Next.js development server and Node API server at the same time on two different windows of terminal.
5. To run Next.js application run `npm run dev` and open browser at localhost:3000
6. To run Node API server run `npm run server` in new terminal window, it will run server at localhost:3001
5. Create `.env` file in root folder with values of:


GOOGLE_USER=YOUR_GOOGLE_EMAIL // e.g test@gmail.com
GOOGLE_PASSWORD=YOUR_GOOGLE_PASSWORD // testtest
DOMAIN=YOUR_DOMAIN // e.g http://localhost:3000


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Open [http://localhost:3001/api/test](http://localhost:3001/api/test) with your browser to test API Server

