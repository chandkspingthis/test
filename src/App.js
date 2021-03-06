import React from 'react';
// import PubNub from 'pubnub';
// import { PubNubProvider, usePubNub } from 'pubnub-react';
import browser from 'browser-detect';

// const pubnub = new PubNub({
//   publishKey: 'pub-c-4fac54c2-de3f-4ce9-9975-c8d4c7223dbd',
//   subscribeKey: 'sub-c-8c20f8d0-a998-11eb-9cd5-b6e2b128ec2a',
//   uuid: 'sec-c-NTVjZTJjYzgtODFlNS00MTM1LWE3M2QtMzJmOGEwMDZiOTQ1'
// });

function App() {
  return (
    // <PubNubProvider client={pubnub}>
      <Chat />
    // {/* </PubNubProvider> */}
  );
}

function Chat() {
  // const pubnub = usePubNub();
  // const [channels] = useState(['awesome-channel']);
  // const [messages, addMessage] = useState([]);
  // const [message, setMessage] = useState('');

  // const handleMessage = event => {
  //   const message = event.message;
  //   if (typeof message === 'string' || message.hasOwnProperty('text')) {
  //     const text = message.text || message;
  //     addMessage(messages => [...messages, text]);
  //   }
  // };

  // const sendMessage = message => {
  //   if (message) {
  //     pubnub
  //       .publish({ channel: channels[0], message })
  //       .then(() => setMessage(''));
  //   }
  // };

  // useEffect(() => {
  //   pubnub.addListener({ message: handleMessage });
  //   pubnub.subscribe({ channels });
  // }, [pubnub, channels]);
  const result = browser();
  let isActive = true;
  if(result["os"].includes("OS")){
    if(result["name"]){
      isActive = true;
    } else {
      isActive = false;
    }

  } else {
    if(result["name"] !== "safari"){
      isActive = true;
    } else {
      isActive = false;
    }
  }
  debugger
  return (
    <div style={pageStyles}>
      <div style={chatStyles}>
        <div style={headerStyles}>React Chat Example</div>
        
        <div style={listStyles}>
          {/* {messages.map((message, index) => {
            return (
              <div key={`message-${index}`} style={messageStyles}>
                {message}
              </div>
            );
          })} */}

          <div>{`isActive: ${isActive}`}</div>
          <div>{`includes OS: ${result["os"].includes("OS")}`}</div>
          <div>{`name: ${result["name"]}`}</div>
          <div>{`name not equal to safari: ${result["name"] !== "safari"}`}</div>



{Object.keys(result).map((key, value) => {
  debugger
            return (
              <div style={messageStyles}>
                {`${key} : ${result[key]}`}
              </div>
            );
          })}
        </div>
        {/* <div style={footerStyles}>
          <input
            type="text"
            style={inputStyles}
            placeholder="Type your message"
            value={message}
            onKeyPress={e => {
              if (e.key !== 'Enter') return;
              sendMessage(message);
            }}
            onChange={e => setMessage(e.target.value)}
          />
          <button
            style={buttonStyles}
            onClick={e => {
              e.preventDefault();
              sendMessage(message);
            }}
          >
            Send Message
          </button>
        </div> */}
      </div>
    </div>
  );
}

const pageStyles = {
  alignItems: 'center',
  background: '#282c34',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
};

const chatStyles = {
  display: 'flex',
  flexDirection: 'column',
  // height: '50vh',
  // width: '50%',
};

const headerStyles = {
  background: '#323742',
  color: 'white',
  fontSize: '1.4rem',
  padding: '10px 15px',
};

const listStyles = {
  alignItems: 'flex-start',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'auto',
  padding: '10px',
};

const messageStyles = {
  backgroundColor: '#eee',
  borderRadius: '5px',
  color: '#333',
  fontSize: '1.1rem',
  margin: '5px',
  padding: '8px 15px',
};

// const footerStyles = {
//   display: 'flex',
// };

// const inputStyles = {
//   flexGrow: 1,
//   fontSize: '1.1rem',
//   padding: '10px 15px',
// };

// const buttonStyles = {
//   fontSize: '1.1rem',
//   padding: '10px 15px',
// };

export default App;