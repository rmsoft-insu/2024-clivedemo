import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <Link href="/login">로그인</Link>
    </div>
  );
}
