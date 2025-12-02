import React, { useState, useRef, useEffect } from 'react';

const ChatMessage = ({ message, isUser }) => (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
        {!isUser && (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span className="text-xs">🍷</span>
            </div>
        )}
        <div className={`max-w-[80%] rounded-2xl px-6 py-4 ${
            isUser 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-white border border-gray-100 shadow-sm text-text rounded-bl-none'
        }`}>
            <p className="text-sm leading-relaxed">{message}</p>
        </div>
        {isUser && (
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-primary ml-3 flex-shrink-0">
                <span className="text-xs font-bold">I</span>
            </div>
        )}
    </div>
);

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { text: "Bonjour! I am your personal AI Sommelier. How can I assist you with your wine journey today? I can help with pairings, recommendations, or cellar management.", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: inputValue, isUser: true }];
        setMessages(newMessages);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That's an excellent choice. The tannins in that vintage are particularly refined.",
                "For that dish, I would highly recommend a bold Cabernet Sauvignon from Napa Valley.",
                "Based on your cellar history, you might enjoy exploring more Super Tuscans.",
                "I can certainly help you track that bottle. Would you like to add tasting notes?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-100 bg-background/50 flex justify-between items-center">
                <div>
                    <h3 className="font-heading text-lg text-primary font-bold">AI Sommelier</h3>
                    <p className="text-xs text-text-light uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                    </p>
                </div>
                <button 
                    onClick={() => setMessages([messages[0]])}
                    className="text-xs text-text-light hover:text-primary transition-colors uppercase tracking-wider font-bold"
                >
                    Clear Chat
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-background/30">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
                ))}
                
                {isTyping && (
                    <div className="flex justify-start mb-6">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                            <span className="text-xs">🍷</span>
                        </div>
                        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-none px-6 py-4 flex items-center gap-1">
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-100">
                <form onSubmit={handleSendMessage} className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask for a recommendation..."
                        className="w-full pl-6 pr-14 py-4 bg-background border border-gray-200 rounded-full focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-text-light/50 text-sm"
                    />
                    <button 
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInterface;

