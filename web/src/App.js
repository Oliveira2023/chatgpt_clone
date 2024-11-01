import { useEffect, useRef, useState } from 'react';
import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([{
    user: 'gpt',
    message: 'Hello, how can I help you today?'
  }]);
  const chatLogRef = useRef(null);
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatlog]);

  async function handleSubmit(event) {
    event.preventDefault();

    let sendInput = input;
    setInput('');
    try {
      let response = await makeRequest({ prompt: sendInput });

      let messageResponse = response.message.content;
      // response.message.content.split('\n').map((line) => {
      //   return messageResponse += <p>{line}</p>;
      // })
     
      setChatlog([...chatlog, {
      user: 'me',
      message: input
      }, 
      {
        user: 'gpt',
        message: `${messageResponse}`
      }]);

    } catch(err){
      console.log('handleSubmit error:', err);
      }
  }
  
  return (
    <div className="App">
        <section className="chatbox">
          <div className='chat-log' ref={chatLogRef}>
            {chatlog.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>
          <div className='chat-input-holder'>
            <form onSubmit={handleSubmit} >
              <input
                rows='1'
                className='chat-input-textarea'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
            </form>
          </div>
        
        </section>
    </div>
  );
}

export default App;
