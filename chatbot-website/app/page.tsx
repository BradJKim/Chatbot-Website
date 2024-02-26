"use client";

import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';

interface ChatbotProps {
    onClick: () => void;
    text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({onClick, text}) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
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

            <Chatbot onClick={() => router.push('/chatbots/bot1')} text="Chatbot1"/>
            <Chatbot onClick={() => router.push('/chatbots/bot2')} text="Chatbot2"/>
            <Chatbot onClick={() => router.push('/chatbots/bot3')} text="Chatbot3"/>
            <Chatbot onClick={() => router.push('/chatbots/bot4')} text="Chatbot4"/>
            <Chatbot onClick={() => router.push('/chatbots/bot5')} text="Chatbot5"/>
        </main>
      );
}