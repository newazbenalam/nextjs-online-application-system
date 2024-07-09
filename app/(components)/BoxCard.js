import Image from "next/image";
import React from "react";

export default function BoxCard({ title, image }) {
  return (
    <div
      className="rounded "
      style={{
        height: 250,
        width: 450,
        objectFit: "cover",
        backgroundImage:
          "url(https://www.allbanglanewspaper.co/blog/wp-content/uploads/Services-nidw-gov-bd.png)",
          
      }}
    >
      <p
        className="text-center z-5 "
        style={{ fontWeight: 600, marginTop: 200, color: '#EBDA3F'}}
      >
        {title}
      </p>
    </div>
  );
}
