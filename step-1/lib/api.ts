import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  userId: string;
  createAt: string;
  updateAt: string;
};

export type NoteListResponse = {
  note: Note[];
  total: number;
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

export const getNotes = async () => {
  //   await delay(2000);
  const res = await axios.get<NoteListResponse>("/notes");
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};
