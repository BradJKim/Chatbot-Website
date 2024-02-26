"use client";

import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';

import Image, { StaticImageData } from 'next/image'
import Bot1Image from '../public/images/robot1.png'
import Bot2Image from '../public/images/robot2.png'
import Bot3Image from '../public/images/robot3.jpg'
import Bot4Image from '../public/images/robot4.png'
import Bot5Image from '../public/images/robot5.png'


interface ChatbotProps {
    onClick: () => void;
    text: string;
    image: StaticImageData;
}

const Chatbot: React.FC<ChatbotProps> = ({onClick, text, image}) => {
    return (
        <div>
            <button 
                onClick={onClick} 
                style={{
                    padding: '10px 20px', // Adjust padding for size
                    border: '2px solid #ccc', // Border style
                    borderRadius: '5px', // Border radius for rounded corners
                }}>{text}
                <Image 
                    src={image} 
                    alt="Bot Image" 
                    width={100}  
                    height={100}  
                    blurDataURL="data:..."  
                    //placeholder="blur" 
                />
            </button>
        </div>
    );
}

export default function Home() {
    const router = useRouter();

    return (
        <main>
            <div>
                <h1>Welcome to My Next.js App</h1>
                <p>This is the default home page.</p>
            </div>

            <div className="flexbox-container">
                <Chatbot onClick={() => router.push('/chatbots/bot1')} text="Chatbot1" image={Bot1Image}/>
                <Chatbot onClick={() => router.push('/chatbots/bot2')} text="Chatbot2" image={Bot2Image}/>
                <Chatbot onClick={() => router.push('/chatbots/bot3')} text="Chatbot3" image={Bot3Image}/>
                <Chatbot onClick={() => router.push('/chatbots/bot4')} text="Chatbot4" image={Bot4Image}/>
                <Chatbot onClick={() => router.push('/chatbots/bot5')} text="Chatbot5" image={Bot5Image}/> 
            </div>
        </main>
      );
}