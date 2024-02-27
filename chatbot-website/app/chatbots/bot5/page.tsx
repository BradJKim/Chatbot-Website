"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";
import Image from 'next/image'
import Bot5Image from '../../../public/images/robot5.png'
import ScrollContainer from "@/app/components/scrollContainer";

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "black",
  assistant: "green",
  function: "",
  data: "",
  tool: ""
};

export default function Chatbot5() {

  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant5",
    });

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <div className="flex flex-col w-full max-w-md py-5 mx-auto stretch">
      <div className="py-12 flex justify-center">
        <Image 
          src={Bot5Image} 
          alt="Bot Image" 
          width={200}  
          height={200}  
          blurDataURL="data:..."  
          //placeholder="blur" 
        />
      </div>

      {error != null && (
        <div className="relative bg-red-500 text-white px-6 py-4 rounded-md">
          <span className="block sm:inline">
            Error: {(error as any).toString()}
          </span>
        </div>
      )}

      <div className="h-96 box-border p-4 border-2 border-black border-spacing-px	">
        <ScrollContainer>
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className="whitespace-pre-wrap"
              style={{ color: roleToColorMap[m.role] }}>
              <strong>{`${m.role}: `}</strong>
              {m.role !== "data" && m.content}
              {m.role === "data" && (
                <>
                  {(m.data as any).description}
                  <br />
                  <pre className={"bg-gray-200"}>
                    {JSON.stringify(m.data, null, 2)}
                  </pre>
                </>
              )}
              <br />
              <br />
            </div>
          ))}

          {status === "in_progress" && (
            <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
          )}
        </ScrollContainer>
      </div>

      <form onSubmit={submitMessage}>
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask any questions"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
