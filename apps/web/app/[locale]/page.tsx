import { notFound } from "next/navigation";

import { featureFlagDefaults } from "@bemara/config";
import { officialSurfaces } from "@bemara/domain";
import { getDictionary, isLocale } from "@bemara/i18n";
import { BemaraBrand, BemaraButton, BemaraEditorialPanel } from "@bemara/ui-web";

type LocalePageProps = {
  params: Promise<{ locale: string }> | { locale: string };
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const copy = getDictionary(localeParam);
  const publicSurface = officialSurfaces.find((surface) => surface.id === "publicSite");
  const personalSurface = officialSurfaces.find((surface) => surface.id === "personal");

  return (
    <main className="public-page">
      <header className="site-header" aria-label={copy["brand.name"]}>
        <BemaraBrand />
        <nav aria-label={copy["nav.home"]}>
          <a href={`/${localeParam}`}>{copy["nav.home"]}</a>
          <a href={`/${localeParam}#personal`}>{copy["nav.personal"]}</a>
          <a href={`/${localeParam}#access`}>{copy["nav.access"]}</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{copy["public.hero.eyebrow"]}</p>
          <h1>{copy["public.hero.title"]}</h1>
          <p>{copy["public.hero.body"]}</p>
          <div className="hero-actions" id="access">
            <BemaraButton>{copy["public.hero.primaryCta"]}</BemaraButton>
            <BemaraButton variant="secondary">{copy["public.hero.secondaryCta"]}</BemaraButton>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <img src="/brand/bemara-icon.png" alt="" />
        </div>
      </section>

      <BemaraEditorialPanel className="foundation-band">
        <div>
          <p className="eyebrow">{copy["brand.intelligence"]}</p>
          <h2>{copy["public.foundation.title"]}</h2>
        </div>
        <div className="foundation-grid" id="personal">
          <article>
            <h3>{copy["public.foundation.lifeGraph"]}</h3>
            <p>{copy["public.foundation.lifeGraphBody"]}</p>
          </article>
          <article>
            <h3>{copy["public.foundation.privacy"]}</h3>
            <p>{copy["public.foundation.privacyBody"]}</p>
          </article>
          <article>
            <h3>{copy["public.foundation.lena"]}</h3>
            <p>{copy["public.foundation.lenaBody"]}</p>
          </article>
        </div>
      </BemaraEditorialPanel>

      <section className="surface-strip" aria-label={copy["public.foundation.contractsLabel"]}>
        <span>{publicSurface?.name}</span>
        <span>{personalSurface?.name}</span>
        <span>
          {featureFlagDefaults.community.enabled
            ? copy["status.prepared"]
            : copy["status.disabled"]}
        </span>
      </section>
    </main>
  );
}
