import Link from "next/link";
import React from 'react'

export const PostLink = (props) => {
  return (
    <li>
        <a href={`/pposts?id=${props.id}`} style={{ fontSize: "1.5rem" }}>
          {props.title}
        </a>
    </li>
  );
}
