"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
      <Link href="/">Back home</Link>
    </div>
  );
};

export default Error;
