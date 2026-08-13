import { NextRequest } from "next/server";

interface ReqProps {
  params: Promise<{ noteId: string }>;
}

export const GET = async (req: NextRequest, { params }: ReqProps) => {
  const { noteId } = await params;
};
export const PATCH = () => {};
export const DELETE = () => {};
