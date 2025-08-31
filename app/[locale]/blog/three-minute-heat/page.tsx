import Markdown from "../../components/Markdown";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { readFileSync } from "fs";
import { join } from "path";

// Simple internationalization function
function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string>> = {
    en: {
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
    },
    zh: {
      'navigation.app': '应用',
      'navigation.blog': '博客',
    },
    es: {
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
    },
    fr: {
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
    },
    de: {
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
    }
  };

  return messages[locale]?.[key] || messages.en[key] || key;
}

export default async function ThreeMinuteHeatArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fileByLocale: Record<string, string> = {
    en: join(process.cwd(), "content/blog/three-minute-heat/en.md"),
    zh: join(process.cwd(), "content/blog/three-minute-heat/zh.md"),
    es: join(process.cwd(), "content/blog/three-minute-heat/es.md"),
    fr: join(process.cwd(), "content/blog/three-minute-heat/fr.md"),
    de: join(process.cwd(), "content/blog/three-minute-heat/de.md"),
  };
  const fallback = fileByLocale.en;
  const filePath = fileByLocale[locale] || fallback;
  let md = "";
  try {
    md = readFileSync(filePath, "utf8");
  } catch {
    md = readFileSync(fallback, "utf8");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar
        appLabel={t('navigation.app', locale)}
        blogLabel={t('navigation.blog', locale)}
        currentLocale={locale}
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 md:p-10">
            <Markdown content={md} />
          </div>
        </div>
      </div>

      <Footer currentLocale={locale} />
    </div>
  );
}
