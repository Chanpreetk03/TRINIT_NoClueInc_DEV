import logger from 'jet-logger';

import server from './server';
import * as process from "process";


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' +
    process.env.PORT);

server.listen(process.env.PORT, () => logger.info(SERVER_START_MSG));
