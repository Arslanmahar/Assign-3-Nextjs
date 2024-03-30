"use client";

import { useRouter } from "next/navigation";

export default function Name() {
  const router = useRouter();
  return (
    <div>
      My name is waqar.
      <br />
      <button type="button" onClick={() => router.push("/name/address")}>
        Go to Address
      </button>
      <br />
      <button type="button" onClick={() => router.push("/")}>
        Go Back To Home
      </button>
    </div>
  );
}