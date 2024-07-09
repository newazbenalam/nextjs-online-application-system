"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState(0);

  const foo = () => {

    setTitle(title + 1);
   };

  useEffect(() => {
    console.log("Welcome " + title);

  }, [title])
  

  return (
    <>
      <div className="bg-primary text-center">AdminPage, {title}</div>
      <button onClick={ foo } >Click me!</button>
    </>
  );
}
