"use client";

import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/header";

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);
  const [noteContent, setNoteContent] = useState<OutputData>();
  const ref = useRef<EditorJS>();

  const loadNoteContentFromLocalStorage = () => {
    const storedContent = localStorage.getItem("noteContent");
    if (storedContent) {
      setNoteContent(JSON.parse(storedContent));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    // @ts-ignore
    const Table = (await import("@editorjs/table")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    const Title = (await import("title-editorjs")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          table: Table,
          title: Title,
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
        },
        data: noteContent,
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
      loadNoteContentFromLocalStorage();
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [initializeEditor, isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((output: any) => {
        console.log(output);
        localStorage.setItem("noteContent", JSON.stringify(output));
        toast("Your Note is saved!");
      });
    }
  };
  // md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]
  return (
    <div>
      <Header />
      <div className="grid min-h-screen w-full">
        {/* <Sidebar /> */}
        <div>
          <div
            id="editorjs"
            className="prose max-w-full max-h-screen sm:p-10"
          />
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
            <Button className="w-full" onClick={() => save()}>
              Save Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
