import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <title>What is DevRel?</title>
      <meta
        name="description"
        content="All you need to know about DevRel and how to get into it."
      />
      <meta property="og:url" content={`https://www.whatisdevrel.com`} />
      <meta property="og:site_name" content="WhatisDevRel.com" />
      <meta
        property="og:description"
        content="All you need to know about DevRel and how to get into it."
      />
      <meta property="og:title" content="What is DevRel?" />
      <meta
        property="og:image"
        content="https://www.whatisdevrel.com/ogimage.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nutlope" />
      <meta name="twitter:title" content="What is DevRel?" />
      <meta
        name="twitter:description"
        content="All you need to know about DevRel and how to get into it."
      />
      <meta
        name="twitter:image"
        content="https://www.whatisdevrel.com/ogimage.png"
      />
    </Head>
  );
}
