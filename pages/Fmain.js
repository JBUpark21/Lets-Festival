import React from "react";
import Styles from "../styles/intro.module.css";
import Layout from "../components/Layout";
import Kakao_intro from "../components/Kakao_intro";
import Season from "../components/season";

import { Tab } from "@headlessui/react";

export default function Fmain() {
  return (
    <Layout title="Fmain">
      <Season></Season>
      <Kakao_intro></Kakao_intro>
    </Layout>
  );
}
