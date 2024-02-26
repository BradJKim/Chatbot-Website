"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";

export default function Home() {
    return (
        <div>
          <h1>Welcome to My Next.js App</h1>
          <p>This is the default home page.</p>
        </div>
      );
}