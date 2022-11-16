import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function create() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-8">글쓰기</h1>

      <form>
        <div className="mb-4">
          <input
            className="border-b w-full"
            type="text"
            placeholder="제목을 입력하세요."
          />
        </div>
        <div className="mb-4">
          <textarea
            className="border-b w-full"
            placeholder="내용을 입력하세요."
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            onClick={() => router.replace("/posts")}
            className="border p-2 bg-black text-white"
          >
            전송
          </button>
        </div>
      </form>
    </Layout>
  );
}
