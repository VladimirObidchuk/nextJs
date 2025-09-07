import NoteList from "@/components/NoteList/NoteLiast";
import { getNotes } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
};

const Notes = async () => {
  const res = await getNotes();
  console.log("🚀 ~ res:", res);
  return (
    <section>
      <h1>Notes List</h1>
      {res?.notes?.length > 0 && <NoteList notes={res.notes} />}
    </section>
  );
};

export default Notes;
