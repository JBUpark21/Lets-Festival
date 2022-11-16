import Layout from "../components/Layout";
import Link from "next/link";

export default function posts() {
  return (
    <Layout>
      <div className="pb-4 mb-8 border-b">
        <Link href="/create">
          <button className="p-2 bg-black text-white">글쓰기</button>
        </Link>
      </div>

      <ul>
        <li className="flex flex-row w-full border-b p-2 mb-4">
          <div className="flex-1">제목</div>
          <div className="w-64">작성자</div>
        </li>
      </ul>
    </Layout>
  );
}
