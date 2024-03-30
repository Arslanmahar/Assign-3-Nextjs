"use client";

import { useRouter } from "next/navigation";

export default function Address() {
  const router = useRouter();
  return (
    <div>
      My name is Waqar.
      <br />
      <button type="button" onClick={() => router.push("/")}>
        Go Back To Home
      </button>
    </div>
  );
}