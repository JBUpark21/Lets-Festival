import Layout from "../components/Layout";

export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-8">개발자에게 메일보내기</h1>
      <div className="container mt-5">
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <input
              id="email"
              name="email"
              type="email"
              className="border-b w-full"
              placeholder="자신의 이메일을 입력하세요. ex) name@example.com"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              className="border-b w-full"
              placeholder="문의 내용을 입력하세요."
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="p-2 bg-black text-white">
              전송
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
