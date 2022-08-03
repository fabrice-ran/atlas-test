# atlas-test

### Clone the project from GitHub
1. in the terminal, run:
git clone https://github.com/fabrice-ran/atlas-test.git
2. choose the placement
### To run it in local
1. npm install (install packages)
2. npm start or npm run dev
3. run http://localhost:8082/ in the browser

### Mongodb Atlas
login: fabricerandriamamp@gmail.com
password: wCExnl73t80#

=> the Network Access Ip Address whitelist is already: 0.0.0.0/0
It mean accessible everywhere, so no need to add the cpanel server address IP here.
Normally there is no need to change MongoDB Atlas config.
I just give the access in case you need

### Upload the project to cPanel
1. compress the project to .zip format
2. in cPanel file system, create a folder name 'atlas-test' in the root directory (home)
3. upload the zip to cpanel into that folder (atlas-test)
4. create a subdomain with the name : atlas-test.mydomain.com
5. create a NodeJs application with the following setup
  . Node.js version: 14.18.3
  . Application mode: Production
  . Application root: atlas-test
  . Application URL: atlas-test.mydomain.com
  . Application startup file: index.js
  . Environment variables:
    . SERVER_URL: https://atlas-test.mydomain.com
