'use client';

import { Repository } from "./Repository";

export default function Home() {

  const repository = new Repository();
  repository.add("foo");

  return (
    <main>
      <p>Hello World</p>
    </main>
  );
}
