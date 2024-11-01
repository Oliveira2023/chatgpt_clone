import './ChatMessage.css';
import React from 'react';

import {Avatar} from '../../assets/Avatar';

// user (user chatgpt)
// message - aonde vai entrar o prompt
export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gpt' && "chatgpt"}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                    {message.user === 'gpt'? <Avatar/> : <div className='me'>Me</div>}
                </div>
                <div className="chat-message-content">
                <p>{message.message}</p>
            </div>
            </div>
        </div>
    );
};