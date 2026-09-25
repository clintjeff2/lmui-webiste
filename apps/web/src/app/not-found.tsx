import { Button } from "@/components/Button";
import { VisualPanel } from "@/components/VisualPanel";

export default function NotFound() {
  return (
    <main className="not-found">
      <VisualPanel pattern="radial" tone="navy" monogram className="not-found__visual" />
      <div className="container not-found__content">
        <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
          Page not found
        </span>
        <h1 className="headline--display" style={{ color: "white", marginTop: 18 }}>
          This page didn't make the cut.
        </h1>
        <p className="lede" style={{ color: "rgba(255,255,255,0.7)", marginTop: 18, marginBottom: 32 }}>
          The page you're looking for doesn't exist, or has moved.
        </p>
        <Button href="/" variant="gold">
          Back to Home
        </Button>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .not-found { position: relative; min-height: 70vh; display: flex; align-items: center; overflow: hidden; }
        .not-found__visual { position: absolute; inset: 0; }
        .not-found__content { position: relative; z-index: 2; }
      ` }} />
    </main>
  );
}
