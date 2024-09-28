import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function CoverSection({
  title,
  buttons = null,
  description = "",
}) {
  return (
    <section className="cover-bg">
      <div className="w-full h-full bg-black/80">
        <Container
          className={`flex flex-col items-center justify-center gap-8 ${
            buttons ? "min-h-[450px]" : "min-h-52"
          } p-4 text-background`}
        >
          <div className="text-center max-w-3xl">
            {buttons && (
              <h1 className="text-5xl font-bold uppercase text-background py-4 px-8 inline-block bg-primary rounded-full mb-8 border-4 border-secondary">
                 Stead Fast
              </h1>
            )}
            <h1 className="text-2xl font-bold mb-2 text-secondary"> {title}</h1>
            <p className="text-backgroundMuted">{description}</p>
          </div>
          {buttons && (
            <div className="flex flex-wrap justify-center items-center">
              {buttons.map((button, index) => (
                <Button
                  className="w-1/2 sm:w-auto max-w-[45%] m-2 text-center"
                  href={button?.url}
                  key={index}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
