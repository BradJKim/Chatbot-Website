"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "black",
  assistant: "green",
  function: "",
  data: "",
  tool: ""
};

export default function Home() {

  
}
