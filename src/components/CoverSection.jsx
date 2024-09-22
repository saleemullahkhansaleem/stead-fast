import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function CoverSection({ title }) {
  const buttons = [
    "Physical Security",
    "High Profile Special Events",
    "Security Escort",
    "Training & Courses",
    "Bullet Proof Vehicles",
  ];

  return (
    <section className="cover-bg">
      <div className="w-full h-full bg-black/50">
        <Container className="flex flex-col items-center justify-center gap-8 min-h-64 p-4 text-background">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold mb-2">
               {title}
            </h1>
            <p className="text-backgroundMuted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quasi voluptatibus architecto nihil dicta. Suscipit, ratione
              perspiciatis. Error sint impedit recusandae.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {buttons.map((label, index) => (
              <Button key={index}>{label}</Button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
