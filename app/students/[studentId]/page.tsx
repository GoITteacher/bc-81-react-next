import BackButton from "@/components/BackButton/BackButton";
import { getStudentById } from "@/lib/students";
import Link from "next/link";

interface PageProps {
  params: Promise<{ studentId: string }>;
}

const sleep = (x: number) => new Promise((res) => setTimeout(res, x));

const Page = async ({ params }: PageProps) => {
  const { studentId } = await params;

  const student = await getStudentById(studentId);
  await sleep(5000);

  return (
    <main>
      <h1>Student Details</h1>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>
        {student.cohortYear} {student.gpa}
      </p>
      <Link href="/students">Back to students list</Link>
      <Link href={`/students/${studentId}/update`}>Update Student</Link>
      <Link href={`/students/${studentId}/remove`}>Remove Student</Link>

      <BackButton />
    </main>
  );
};

export default Page;
