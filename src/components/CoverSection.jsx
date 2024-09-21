import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function CoverSection() {
  const buttons = [
    "Physical Security",
    "High Profile Special Events",
    "Security Escort",
    "Training & Courses",
    "Bullet Proof Vehicles",
  ];

  return (
    <section className="cover-bg">
      <Container className="flex flex-col items-center justify-center gap-8 min-h-64">
        <h1 className="text-4xl text-background font-bold">Secure NOW!</h1>
        <div className="flex flex-wrap gap-4">
          {buttons.map((label, index) => (
            <Button key={index}>{label}</Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
