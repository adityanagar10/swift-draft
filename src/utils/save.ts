import { NoteContent } from "@/app/editor/page";
import { OutputData } from "@editorjs/editorjs";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

export function getSavedNotes(id?: string) {
  const storedContent = JSON.parse(localStorage.getItem("noteContent") || "[]");
  if (id) {
    const existingNoteIndex = storedContent.findIndex(
      (note: NoteContent) => note.id === id
    );
    return storedContent[existingNoteIndex];
  }
  return storedContent;
}

export function saveNotes({
  noteContent,
  id,
}: {
  noteContent: OutputData;
  id?: string;
}) {
  let parsedStoredContent = [];
  let updatedNote;
  const storedContent = localStorage.getItem("noteContent");

  if (storedContent) {
    parsedStoredContent = JSON.parse(storedContent);
  }

  if (!noteContent) {
    toast("Unable to save your note");
    return;
  }

  const existingNoteIndex = parsedStoredContent.findIndex(
    (note: NoteContent) => note.id === id
  );

  if (existingNoteIndex !== -1) {
    // Update existing note
    parsedStoredContent[existingNoteIndex].data = noteContent;
    updatedNote = parsedStoredContent[existingNoteIndex];
  } else {
    // Create new note
    const newNote = {
      id: uuidv4(),
      noteName:
        noteContent?.blocks[0]?.data?.text ||
        `Note ${parsedStoredContent.length + 1}`,
      data: noteContent,
    };
    parsedStoredContent.push(newNote);
    updatedNote = newNote;
  }

  localStorage.setItem("noteContent", JSON.stringify(parsedStoredContent));
  toast("Your Note is saved!");
  return updatedNote;
}
