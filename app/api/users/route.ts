import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const editedUsers = res.data.map((el) => el.name);
  return NextResponse.json(editedUsers);
};
