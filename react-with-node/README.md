# REACT WITH NODE

[See GeeksForGeeks Tutorial](https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/)

Run `npm start` from ./react-with-node/server and THEN run `npm start` from ./react-with-node/client which uses a proxy in _package.json_ in order to send requests back to the other open port where node is running (in this case, by default 3000 for 'client' and 80 for 'server')
