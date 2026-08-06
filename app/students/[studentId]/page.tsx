import { getStudentById } from "@/lib/students";
import css from "./Page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ studentId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { studentId } = await params;
  const student = await getStudentById(studentId);

  if (!student) {
    notFound();
  }

  return (
    <div className={css["page"]}>
      <h1>
        {student.firstName} {student.lastName}
      </h1>

      <Link href="/students">Back to students</Link>
    </div>
  );
};

export default Page;
