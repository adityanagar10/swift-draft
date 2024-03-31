import Link from "next/link";
import { CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { NoteContent } from "@/app/editor/page";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getSavedNotes } from "@/utils/save";
import { Plus } from "lucide-react";

export default function Sidebar({
  createNewNote,
  getNoteById,
}: {
  createNewNote: any;
  getNoteById: any;
}) {
  const notesTitles = getSavedNotes();
  useEffect(() => {}, []);
  return (
    <div className='hidden border-r bg-muted/40 md:block h-screen'>
      <div className='flex flex-col h-full max-h-screen gap-2'>
        <div className='flex items-center h-14 border-b px-4 lg:h-[60px] lg:px-6'>
          <h1>Your Notes</h1>
        </div>
        <Button
          variant='secondary'
          className='mb-4'
          onClick={() => createNewNote()}
        >
          <span className='flex items-center'>
            Create New Note
            <Plus className='ml-2 h-4 w-4' />
          </span>
        </Button>

        {notesTitles.map((note: NoteContent) => (
          <Button
            key={note.id}
            variant='ghost'
            onClick={() => getNoteById(note.id)}
            className='text-left' // Ensure text alignment to the left
          >
            {note.noteName}
          </Button>
        ))}
      </div>
    </div>
  );
}
