import 'regenerator-runtime';

import server from './server';
import './socket';

// const PORT = process.env.PORT || 3000;
// const handleListen = () =>
//   console.log(`✅ Server listening on http://localhost:${PORT}`);

const handleListen = () => console.log(`✅ Listening on http://localhost:3000`);

server.listen(3000, handleListen);
