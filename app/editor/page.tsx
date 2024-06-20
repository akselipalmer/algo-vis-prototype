"use client";

import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

export default function CodeEditor() {
  const { theme } = useTheme();

  const handleChnage = (value?: string) => {
    console.log(value);
  };

  // an idea of how to run the delay in the code editor is to give users the
  // ability to place the delay directly into there code
  // they also will need a way to update state every time they change the array

  return (
    <div className="h-full w-full">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
        onChange={handleChnage}
      />
    </div>
  );
}
