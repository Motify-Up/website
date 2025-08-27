import Markdown from "../../components/Markdown";
import { readFileSync } from "fs";
import { join } from "path";

export default async function ProcrastinationArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fileByLocale: Record<string, string> = {
    en: join(process.cwd(), "content/blog/procrastination/en.md"),
    zh: join(process.cwd(), "content/blog/procrastination/zh.md"),
    es: join(process.cwd(), "content/blog/procrastination/es.md"),
    fr: join(process.cwd(), "content/blog/procrastination/fr.md"),
    de: join(process.cwd(), "content/blog/procrastination/de.md"),
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 md:p-10">
          <Markdown content={md} />
        </div>
      </div>
    </div>
  );
}

