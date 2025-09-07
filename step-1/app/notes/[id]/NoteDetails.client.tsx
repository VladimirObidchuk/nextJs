"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Some error..</p>;

  const formattedDate = note.updateAt
    ? `Updated at:${note.updateAt}`
    : `Created at: ${note.createAt}`;

  return (
    <div className="content">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button>Edit</button>
      <p>{formattedDate}</p>
    </div>
  );
};

export default NoteDetailsClient;
