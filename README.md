# ngContact Manager

ngContact Manger is Angular based personal contact manager, which saves contact into backend and retrives them back using REST API's. The application is responsive and can be viewed across modern web and mobile browser's.

This application does the following things.
1. Create new contact
2. Update existing contact
3. Search contact

Future RoadMap :
1. Login page
2. Confirmation Dialog on Deletion
3. Import/Export contacts
4. Contact Image
5. Test cases



## Installation on local machine
This application has two parts backend (mockJSON a dummy db server) and frontend (Angular application). The setup for them is as follows.

### 1. Setup Backend [mockJSON]
This application uses mock JSON as a backend so will require running instance of mockJSON to work application smoothly. [MockJSON](https://github.com/sam83045/mockJSON.git). Clone the repository and after doing `npm install` in root folder use command `npm run json:server` to start the mockJSON application. 

``` bash
 git clone https://github.com/sam83045/mockJSON.git
 cd mockJSON
 npm install
 npm run json:server
```

### 2. Angular Setup
This application can be run as any normal Angular application which run on `port 4200`. Follow the following steps to run the front-end.

``` bash
 git clone https://github.com/sam83045/ngContacts.git
 cd ngContacts
 npm install
 npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
