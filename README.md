# ipfs-keep
This is a library for keeping data on IPFS network.

### Requirements
* Node.js
* npm

### Usage
**install**
```bash
npm install --save TakutoYoshikai/ipfs-keep
```

**keep**
```javascript
const keep = require("ipfs-keep");

await keep([
  "QmSFtLtBMgzXo3Jvi2Lsu5C4hekkuHPdpUVcgRBoEwkfjr",
  "QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o",
]);
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
