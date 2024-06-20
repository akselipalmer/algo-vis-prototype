"use client";

import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

export default function CodeEditor() {
  const { theme } = useTheme();

  return (
    <div className="h-full w-full">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
      />
    </div>
  );
}
