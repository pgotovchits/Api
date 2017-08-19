# RambleChat API

The RambleChat API gives anyone the ability to create a chat experience for 
their visitors/customers/users beyond what is provided by 
[RambleChat](https://www.ramblechat.com).

## Getting Started

These instructions are intended to get you started by creating a demo node 
application that can interact directly with your RambleChat account.

### Prerequisites

You'll need to install [NodeJS](https://nodejs.org/) if you haven't already. 
The example below was written using es6 style modules and imports along with 
`const` and `let`.  Check [Node Green](http://node.green) to find out what 
features your version of Node supports.  Only a few sections of codes need to 
be ammended to be supported with ES5.

### Installing

```bash
npm install ramblechat-api --save
```

You'll also want [socket.io-client](https://github.com/socketio/socket.io-client):

```bash
npm install socket.io-client --save
```

### Running the tests

If you want to run the tests for this project you'll need to install the dev 
dependencies as well followed by:

```bash
npm run test
```

## Example - Visitor Client

### Connecting

This will get you connected to RambleChat and ready to start sending and 
receiving events.

```javascript
import * as io from 'socket.io-client';
import * as CONSTANTS from 'ramblechat-api/visitor/constants';

import { BACKEND_REALTIME_EVENT, REALTIME_ACTION_REQUEST, VISITOR_REALTIME_EVENT } from 'ramblechat-api';
import { API_VERSION } from 'ramblechat-api/visitor';

const socket = io('https://realtime.ramblechat.com:8443/visitor', {
  reconnection: false,
  query: {
    apiVersion: API_VERSION,
    code: '', // or your team code
  }
});
```

### Making a request to chat as a visitor

This will send a request to chat to your RambleChat dashboard.  If a member of 
your team is logged in and available they'll be prompted to accept a chat.

```javascript
const targetTeam = '<the team you want to connect with>';

socket.on("connect", () => {
    socket.on(BACKEND_REALTIME_EVENT, (action) => console.log(action));

    const startChat = {
        type: CONSTANTS.VISITOR_CREATE_CHAT,
        flowType: REALTIME_ACTION_REQUEST,
        meta: {
            realtime: true,
            authenticated: false,
        },
        payload: {
            code: targetTeam,
            email: '[<visitors email address>] - OPTIONAL'
        }
    };

    socket.emit(VISITOR_REALTIME_EVENT, startChat, (response) => {
        console.log(response.payload);
    });
});
```

### Getting information about the team

You may want to know ahead of time if anyone is available to chat.  If you're 
making a custom visitor client or workflow you'll want to use this event type 
for telling your users whether or not anyone is available.  Probably not a great 
experience if it just sits there, right?

```javascript
const targetTeam = '<the team you want to connect with>';

socket.on("connect", () => {
    socket.on(BACKEND_REALTIME_EVENT, (action) => console.log(action));

    const requestInfo = {
        type: CONSTANTS.VISITOR_GET_TEAM_INFO,
        flowTppe: REALTIME_ACTION_REQUEST,
        meta: {
            realtime: true
        },
        payload: {
            code: targetTeam
        }
    };

    socket.emit(VISITOR_REALTIME_EVENT, requestInfo, (response) => {
        console.log(response.payload);
    });
});
```

More documentation will be made availabe via gitbook in the future.
