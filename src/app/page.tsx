import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello This is Home Page
      <br />
      <Link href="/name">Go to name page</Link>
    </div>
  );
}
