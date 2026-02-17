import React, { useState, useEffect, useRef } from 'react';
import {
    CheckCheck, Music, Settings, FileText, Check, X, Mail, MapPin, Calendar, Star, ArrowLeft, Search, Phone, Folder, Paperclip, Smile, Video, PhoneCall, MoreVertical, PlusCircle, Mic, Image, Send
} from 'lucide-react';

const ProfileModal = ({ contact, onClose }) => {
    if (!contact) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85dvh]">
                <div className="relative h-32 bg-gradient-to-r from-primary/20 to-primary/5 flex-shrink-0">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full transition-colors backdrop-blur-md"
                    >
                        <X size={20} className="text-slate-600 dark:text-slate-300" />
                    </button>
                </div>
                <div className="px-6 pb-6 -mt-16 flex flex-col items-center overflow-y-auto custom-scrollbar">
                    <div className="relative mb-4 flex-shrink-0">
                        <img
                            src={contact.avatar}
                            alt={contact.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-lg"
                        />
                        {contact.online && (
                            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full"></div>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 text-center">{contact.name}</h2>
                    <p className="text-primary font-medium mb-6 text-center">{contact.role}</p>

                    <div className="grid grid-cols-3 gap-4 w-full mb-8 flex-shrink-0">
                        <div className="text-center p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl">
                            <span className="block text-xl font-bold text-slate-700 dark:text-slate-200">98%</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Attendance</span>
                        </div>
                        <div className="text-center p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl">
                            <span className="block text-xl font-bold text-slate-700 dark:text-slate-200">4.9</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Rating</span>
                        </div>
                        <div className="text-center p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl">
                            <span className="block text-xl font-bold text-slate-700 dark:text-slate-200">24</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Lessons</span>
                        </div>
                    </div>

                    <div className="w-full space-y-4 flex-shrink-0">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-zinc-800/30 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-primary shadow-sm">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 break-all">student@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-zinc-800/30 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-primary shadow-sm">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-zinc-800/30 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-primary shadow-sm">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Joined</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 text-nowrap">September 2023</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0 mb-2">
                        View Full Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

const Chat = () => {
    // Mock Data
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Sophie Martin",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhTZbSrSz9ENNWUQhkoSxERubKJ-pYDAgN8mL0rYA7MA_8rG9U7CLa26m89sGCLQxRBWqKjS1AdrIDRx_h_eEMjqycoTDeKCELo0RmKrQAIO30Z_zWI69DG1iCLSDQ4bNlmn_1lX1yNI5MXfWsAU_lLM4BK9pxzX95itxsbSncvg2m556Xby0kxO_60rGvP1s5PEtQi-o8G3vGcObN4bXbyHqh4gyuRcgdL2mFNm32ZmjixwsMcAb5KhVriT9TTcQ3NNQo8G5OliEG",
            lastMessage: "\"Thank you! The piano lesson was...\"",
            time: "2m ago",
            unread: 2,
            online: true,
            role: "Piano Student",
            desc: "Active Now"
        },
        {
            id: 2,
            name: "Marc Lefebvre",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6FVUbWWg3Ixr39m4UfAHcCctZGYKQZlkCmNUL6o-f8WUpHY7ElwsjGCnpwcFmN0IJS81KlwVXSSQRzTdanNF0PSEsIAJ66I08KCJNQSo6XXDi8OGlYd1cH8dbJBLhnE8Cr2ILl8Uhyfm2S4cP9CR7HJl9jX_mi_BDXzFzwceIpPgO5uE90tn3beoX9qStlwVs-IvIFTa1ia4D7Tl6Dh39e_6Dx6Rk0l4-FIrnX-yaIomMeibxV_GJMqoYs2or8LdcNjTa3S3DaoW0",
            lastMessage: "I'll be a few minutes late for the guitar class.",
            time: "1h ago",
            unread: 0,
            online: false,
            role: "Guitar Student",
            desc: "Offline"
        },
        {
            id: 3,
            name: "Clara Rossi",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhTZbSrSz9ENNWUQhkoSxERubKJ-pYDAgN8mL0rYA7MA_8rG9U7CLa26m89sGCLQxRBWqKjS1AdrIDRx_h_eEMjqycoTDeKCELo0RmKrQAIO30Z_zWI69DG1iCLSDQ4bNlmn_1lX1yNI5MXfWsAU_lLM4BK9pxzX95itxsbSncvg2m556Xby0kxO_60rGvP1s5PEtQi-o8G3vGcObN4bXbyHqh4gyuRcgdL2mFNm32ZmjixwsMcAb5KhVriT9TTcQ3NNQo8G5OliEG",
            lastMessage: "Sheet music uploaded to the portal.",
            time: "4h ago",
            unread: 0,
            online: true,
            role: "Violin Teacher",
            desc: "Active Now"
        },
        {
            id: 4,
            name: "Julien Petit",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6FVUbWWg3Ixr39m4UfAHcCctZGYKQZlkCmNUL6o-f8WUpHY7ElwsjGCnpwcFmN0IJS81KlwVXSSQRzTdanNF0PSEsIAJ66I08KCJNQSo6XXDi8OGlYd1cH8dbJBLhnE8Cr2ILl8Uhyfm2S4cP9CR7HJl9jX_mi_BDXzFzwceIpPgO5uE90tn3beoX9qStlwVs-IvIFTa1ia4D7Tl6Dh39e_6Dx6Rk0l4-FIrnX-yaIomMeibxV_GJMqoYs2or8LdcNjTa3S3DaoW0",
            lastMessage: "Can we reschedule for Friday?",
            time: "Yesterday",
            unread: 1,
            online: false,
            role: "Drum Student",
            desc: "Offline"
        }
    ]);

    const [activeChatId, setActiveChatId] = useState(1);
    const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [messages, setMessages] = useState({
        1: [
            { id: 1, text: "Hello! I was wondering if I could get the PDF of the Chopin sheet music we discussed during yesterday's piano lesson? 🎹", sender: 'them', time: "10:24 AM", status: 'read' },
            { id: 2, text: "Hi Sophie! Of course. I'm uploading it for you right now. It should appear in your \"Documents\" section in a moment.", sender: 'me', time: "10:25 AM", status: 'read' },
            { id: 3, type: 'file', fileType: 'pdf', fileName: "Chopin_Nocturne_Op9_No2.pdf", fileSize: "1.2 MB", sender: 'me', time: "10:26 AM", status: 'read' },
            { id: 4, text: "Thank you! The piano lesson was amazing by the way. I'm feeling much more confident with my left-hand technique.", sender: 'them', time: "10:30 AM", status: 'read' }
        ],
        2: [
            { id: 1, text: "Hey, just a heads up I might be late.", sender: 'them', time: "Yesterday", status: 'read' }
        ]
    });

    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const activeContact = contacts.find(c => c.id === activeChatId);
    const activeMessages = messages[activeChatId] || [];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeMessages, activeChatId]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: inputText,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'sent'
        };

        setMessages(prev => ({
            ...prev,
            [activeChatId]: [...(prev[activeChatId] || []), newMessage]
        }));
        setInputText("");

        // Move contact to top
        setContacts(prev => {
            const updated = prev.map(c =>
                c.id === activeChatId ? { ...c, lastMessage: inputText, time: "Just now" } : c
            );
            return updated.sort((a, b) => (a.id === activeChatId ? -1 : 1));
        });
    };

    return (
        <div className="flex flex-1 h-[calc(100dvh-2rem)] md:h-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
            {/* Profile Modal */}
            {isProfileOpen && activeContact && (
                <ProfileModal contact={activeContact} onClose={() => setIsProfileOpen(false)} />
            )}

            <aside className={`w-full md:w-80 bg-white dark:bg-zinc-900 border-r border-primary/5 flex flex-col z-20 ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            className="w-full bg-slate-100 dark:bg-zinc-800 border-none rounded-full py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 outline-none"
                            placeholder="Search conversations..."
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-6">
                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => {
                                setActiveChatId(contact.id);
                                setIsMobileChatOpen(true);
                            }}
                            className={`p-4 rounded-2xl mb-2 cursor-pointer transition-all group ${activeChatId === contact.id
                                ? 'bg-primary/5 border border-primary/10'
                                : 'hover:bg-slate-50 dark:hover:bg-zinc-800/50'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        alt={contact.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        src={contact.avatar}
                                    />
                                    {contact.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-semibold text-sm truncate">{contact.name}</h3>
                                        <span className={`text-[10px] font-medium ${activeChatId === contact.id ? 'text-primary' : 'text-slate-400'}`}>
                                            {contact.time}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate leading-relaxed italic">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                                {contact.unread > 0 && (
                                    <div className="w-5 h-5 bg-primary text-[10px] text-white rounded-full flex items-center justify-center font-bold">
                                        {contact.unread}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 mt-auto border-t border-primary/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-primary/20">
                        <img
                            alt="Admin Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76stIfD6DUgEU42-vk7TrNP5H-VqvM2vCWt92wnyv9rs3IhmAVMzT_7day9YwrQmLKlJBJHvrZjq-cDHnrwYAR7sUK1dZfpoD7QsPzNd7DNjPvUgqFUV-EFlzNNVwXWeOwlgWdLgdZQCkS_lSERSJ6tOjT8AvthPQ81hbP22NIs1x_pkboI8o3aYUKQJA-Uz1cVcrLCafUWRTtZ8O3dsn75elVs-D_ONQBHXxOk7WGHUrb6dEgxh5wdkz22DUjkuU6Ez3hHg5mqDi"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate">Admin Staff</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Online</p>
                    </div>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <Settings size={20} />
                    </button>
                </div>
            </aside>

            <main className={`flex-1 flex-col bg-chat-cream dark:bg-zinc-950/40 relative ${isMobileChatOpen ? 'flex' : 'hidden md:flex'}`}>
                {activeContact ? (
                    <>
                        <header className="h-16 md:h-20 glass-effect bg-white dark:bg-zinc-900/80 border-b border-primary/5 px-4 md:px-8 flex items-center justify-between z-10 shrink-0">
                            <div className="flex items-center gap-3 md:gap-4">
                                <button
                                    onClick={() => setIsMobileChatOpen(false)}
                                    className="md:hidden p-2 -ml-2 text-slate-500 hover:text-primary transition-colors"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <div
                                    className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setIsProfileOpen(true)}
                                >
                                    <div className="relative">
                                        <img
                                            alt={activeContact.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                            src={activeContact.avatar}
                                        />
                                        {activeContact.online && (
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-base hover:text-primary transition-colors">{activeContact.name}</h2>
                                        <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                                            {activeContact.role} • {activeContact.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors hidden sm:flex">
                                    <Phone size={20} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors hidden sm:flex">
                                    <Folder size={20} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                    <MoreVertical size={20} />
                                </button>
                            </div>
                        </header>

                        <section className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 custom-scrollbar pb-24 md:pb-8">
                            <div className="flex justify-center">
                                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Today</span>
                            </div>

                            {activeMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-end gap-3 max-w-[85%] md:max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse ml-auto' : ''}`}
                                >
                                    {msg.sender !== 'me' && (
                                        <img
                                            alt={activeContact.name}
                                            className="w-8 h-8 rounded-full object-cover mb-1 hidden sm:block"
                                            src={activeContact.avatar}
                                        />
                                    )}
                                    <div>
                                        <div className={`p-4 rounded-xl shadow-sm text-sm leading-relaxed ${msg.sender === 'me'
                                            ? 'bg-primary text-white rounded-br-none shadow-lg shadow-primary/20'
                                            : 'bg-white dark:bg-zinc-800 rounded-bl-none border border-slate-100 dark:border-zinc-700'
                                            }`}>
                                            {msg.type === 'file' ? (
                                                <div className={`flex items-center gap-4 ${msg.sender === 'me' ? 'bg-white/20 border-white/20' : 'bg-primary/10 border-primary/20'} border p-3 rounded-lg`}>
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${msg.sender === 'me' ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                                                        <FileText size={20} />
                                                    </div>
                                                    <div>
                                                        <p className={`text-sm font-semibold ${msg.sender === 'me' ? 'text-white' : 'text-primary'}`}>{msg.fileName}</p>
                                                        <p className={`text-[10px] ${msg.sender === 'me' ? 'text-white/80' : 'text-primary/60'}`}>{msg.fileSize} • {msg.fileType.toUpperCase()}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                        <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'me' ? 'mr-1' : 'ml-1'}`}>
                                            <span className="text-[10px] text-slate-400">{msg.time}</span>
                                            {msg.sender === 'me' && (
                                                <CheckCheck className={msg.status === 'read' ? 'text-primary' : 'text-slate-400'} size={14} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </section>

                        <footer className="p-4 md:p-6 bg-chat-cream dark:bg-zinc-950/20 glass-effect border-t border-primary/5 absolute bottom-0 w-full md:relative shrink-0">
                            <div className="max-w-5xl mx-auto relative flex items-center gap-3">
                                <div className="flex-1 bg-white dark:bg-zinc-800 rounded-full shadow-xl shadow-primary/5 flex items-center px-4 border border-primary/5">
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hidden sm:block">
                                        <PlusCircle size={24} />
                                    </button>
                                    <form onSubmit={handleSendMessage} className="flex-1">
                                        <input
                                            className="w-full bg-transparent border-none focus:ring-0 py-4 text-sm placeholder:text-slate-400 outline-none"
                                            placeholder="Type your message..."
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                        />
                                    </form>
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors hidden sm:block">
                                            <Smile size={24} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors hidden sm:block">
                                            <Mic size={24} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-105 transition-transform"
                                >
                                    <Send size={24} />
                                </button>
                            </div>
                        </footer>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center opacity-50">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <Smile size={48} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200">Welcome to Messages</h2>
                        <p className="text-slate-500 max-w-sm">Select a conversation from the left to start chatting.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Chat;
