import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function season() {
  let [categories] = useState({
    봄: [
      {
        id: 1,
        title: "봄 축제1",
        date: "2022/3",
        commentCount: 5,
      },
      {
        id: 2,
        title: "봄 축제2",
        date: "2022/5",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "봄 축제3",
        date: "2022/5",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    여름: [
      {
        id: 1,
        title: "여름 축제1",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "여름 축제2",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    가을: [
      {
        id: 1,
        title: "가을 축제1",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "가을 축제2",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    겨울: [
      {
        id: 1,
        title: "겨울 축제1",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "겨울 축제2",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 bg-blue-200">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-center text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="content-center mt-1 flex space-x-1 t text-xs font-normal leading-4 text-gray-500 ">
                      <li>{post.date}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
