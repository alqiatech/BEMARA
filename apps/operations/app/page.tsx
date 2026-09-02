import { officialSurfaces } from "@bemara/domain";
import { getDictionary } from "@bemara/i18n";

const copy = getDictionary("es-MX");

export default function OperationsPage() {
  const internalSurface = officialSurfaces.find((surface) => surface.id === "operations");

  return (
    <main className="operations-page">
      <aside className="operations-rail" aria-label={copy["operations.title"]}>
        <img src="/brand/bemara-icon.png" alt="" aria-hidden="true" />
        <strong>{internalSurface?.name}</strong>
      </aside>
      <section className="operations-content">
        <p className="eyebrow">{copy["operations.foundation"]}</p>
        <h1>{copy["operations.title"]}</h1>
        <p>{copy["operations.body"]}</p>
        <div className="operations-grid">
          <article>
            <span>{copy["status.prepared"]}</span>
            <h2>{copy["operations.safety"]}</h2>
            <p>{copy["operations.safetyBody"]}</p>
          </article>
          <article>
            <span>{copy["status.prepared"]}</span>
            <h2>{copy["operations.entitlements"]}</h2>
            <p>{copy["operations.entitlementsBody"]}</p>
          </article>
          <article>
            <span>{copy["status.disabled"]}</span>
            <h2>{copy["operations.futureFlags"]}</h2>
            <p>{copy["operations.futureFlagsBody"]}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
