"use client";

import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";

export default function CodeEditor() {
  const { theme } = useTheme();
  const [code, setCode] = useState("");
  const handleChnage = (value?: string) => {
    if (!value) return;
    setCode(value);
  };

  // an idea of how to run the delay in the code editor is to give users the
  // ability to place the delay directly into there code
  // they also will need a way to update state every time they change the array

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="">
        <Editor
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          onChange={handleChnage}
        />
      </div>
      <div className="h-full">
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
}
