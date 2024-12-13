import { SearchIcon } from "lucide-react";
import Search from "../../components/inputs/SearchInput";
import { EcommercenavLinks } from "../../constants/objects";
import AppNavbar from "../../partials/navBar/AppNavbar";
import image from "../../constants/images";
import { BsEmojiSmile, BsFile, BsFileEarmark, BsPerson, BsPersonCircle, BsPersonFill, BsSearch, BsSend, BsSendFill, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import UserMessage from "./components/chat/UserMessages";
import Messages from "./components/chat/Messages";
import { useState } from "react";

export default function Chat(){
    const [searchTerm, setSearchTerm] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello!', sender: 'user' },
        { id: 2, text: 'Hi there!', sender: 'recipient' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        
        const message = {
            id: messages.length + 1,
            text: newMessage,
            sender: 'user',
        };
        
        setMessages([...messages, message]);
        setNewMessage('');
    };

    const filteredMessages = messages.filter(message =>
        message.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div className="bg-white h-screen">
            <AppNavbar array={EcommercenavLinks} see={true} />
            <div className="flex h-[91%]">
                <div className="w-1/3 border-r-[1px] border ">
                    <div className="shadow-sm mb-1 bg-white p-2 px-3 ">
                        <div className="flex gap-2  bg-lightgrey w-[80%] p-2 px-4 rounded-lg">
                            <SearchIcon size={18} className="m-1 text-gray-500"/>
                            <input
                                type="text"
                                placeholder='Search...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="text-lightblack text-sm bg-transparent outline-none w-full p-1 rounded-md"
                            />
                        </div>
                    </div>
                    <div className=" h-[92%] overflow-y-auto">
                        {/* Sample user messages (Replace with dynamic data) */}
                        {filteredMessages.map(message => (
                            <UserMessage key={message.id} text={message.text} read={message.sender === 'recipient'} />
                        ))}
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="border-b-[1px] flex justify-between px-6 gap-4 bg-white p-2 border">
                        <div className="flex gap-4">
                            <div className="h-11 w-11 bg-gray-100 text-gray-300 text-center rounded-full">
                                <BsPersonCircle size={45} />
                            </div>
                            <div className="text-gray-700">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-sm">Mixed Farming</p>
                            </div>
                        </div>
                        <div className="flex text-lightblack gap-6 py-3 ">
                            <BsSearch size={16} />
                            <BsThreeDotsVertical/>
                        </div>
                    </div>
                    <div className="bg-bg_dash h-[83%] overflow-y-scroll">
                        {filteredMessages.map(message => (
                            <Messages key={message.id} text={message.text} recieve={message.sender} />
                        ))}
                    </div>
                    <div className="bg-white p-2 px-6 justify-between flex gap-2">
                        <div className="flex gap-1 text-gray-500">
                            <div className="hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-full"><BsFileEarmark size={20} className="my-2 "/></div>
                            <div className="hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-full"><BsEmojiSmile size={20} className="my-2 "/></div>
                        </div>
                        <div className="bg-gray-100 ring-1 ring-gray-200 rounded-lg w-[90%]">
                            <input
                                type="text"
                                placeholder='Enter text'
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="text-lightblack text-md focus:ring-1 h-full pl-6 focus:ring-gray-300 bg-transparent outline-none w-full p-1 rounded-md"
                            />
                        </div>
                        <div className="bg-primary cursor-pointer hover:scale-105 px-3 text-white rounded-full" onClick={handleSendMessage}>
                            <BsSendFill size={24} className="my-3"/>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}