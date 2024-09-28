import { CoverSection, Container, Button } from "../components";

export default function NotFound() {
  return (
    <>
      <CoverSection
        title="404 - Page Not Found"
        description="Oops! The page you're looking for does not exist. At Stead Fast Security, we strive to provide you with the best security solutions, but it seems you've ventured into uncharted territory. Don't worry; our team is here to help you find your way."
      />

      <Container className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Sorry, we couldn't find that page.
        </h2>
        <p className="text-lg text-foregroundMuted mb-8">
          It might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>

        <div className="mt-4">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </>
  );
}
