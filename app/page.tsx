import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <div className="flex flex-col">
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
}
