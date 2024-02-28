"use client";

import { useEffect, useRef } from "react";

export default function About() {

    return (
        <main>
            <div className="text-center mt-40 mb-10">
                <p>
                    This website is an example website meant to demonstrate how to the OpenAI Assistant API
                </p>
                <p>
                    can be applied to a website to allow a user to interact with custom chat bots.
                </p>
            </div>
            <div className="text-center mb-20">
                <p> 
                    The chatbots are designed to provide assistance to the user and will provide relavent 
                </p>
                <p> 
                    information and/or advice as long as it is within OpenAI's guidelines.
                </p>
            </div>
            <div className="flex justify-center">
                <p className="px-2">
                    Github Link: 
                </p>
                <div className=" font-bold to-blue-600">
                    <a target="_blank" href="https://github.com/BradJKim/Chatbot-Website" rel="noopener noreferrer">https://github.com/BradJKim/Chatbot-Website</a>
                </div>
            </div>
        </main>
      );
}