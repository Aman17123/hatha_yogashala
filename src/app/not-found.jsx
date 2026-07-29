import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <Compass aria-hidden="true" />
        <p className="eyebrow plain">404 · Path not found</p>
        <h1>This path has gone quiet.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Link className="button button-primary" href="/">Return home</Link>
      </Container>
    </section>
  );
}
