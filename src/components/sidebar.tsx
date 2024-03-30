import Link from "next/link";
import { CardHeader } from "./ui/card";

export default function Sidebar() {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <h1>Your Notes</h1>
        </div>
      </div>
    </div>
  );
}
