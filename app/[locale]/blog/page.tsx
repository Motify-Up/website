import Navbar from "../components/Navbar";

// Localized metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const titleByLocale: Record<string, string> = {
    en: 'Blog | MotifyUp',
    zh: '博客 | MotifyUp',
    es: 'Blog | MotifyUp',
    fr: 'Blog | MotifyUp',
    de: 'Blog | MotifyUp',
  };
  const descriptionByLocale: Record<string, string> = {
    en: 'Tips on goals, time management, habits, and family motivation.',
    zh: '关于目标管理、时间管理、习惯养成与家庭激励的实用文章。',
    es: 'Consejos sobre objetivos, gestión del tiempo, hábitos y motivación familiar.',
    fr: 'Conseils sur les objectifs, la gestion du temps, les habitudes et la motivation familiale.',
    de: 'Tipps zu Zielen, Zeitmanagement, Gewohnheiten und Familienmotivation.',
  };
  return {
    title: titleByLocale[locale] ?? titleByLocale.en,
    description: descriptionByLocale[locale] ?? descriptionByLocale.en,
  };
}

// Simple i18n similar to home page
function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string>> = {
    en: {
      'navigation.features': 'Features',
      'navigation.gallery': 'Gallery',
      'navigation.download': 'Download',
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Family, goals, and motivation — practical guides and insights',
      'blog.post.procrastination.title': 'How to Overcome Procrastination at Home',
      'blog.post.procrastination.desc': 'Goals, Pomodoro, habit tracking, and family challenges.',
    },
    zh: {
      'navigation.features': '功能',
      'navigation.gallery': '图库',
      'navigation.download': '下载',
      'navigation.app': '应用',
      'navigation.blog': '博客',
      'blog.title': '博客',
      'blog.subtitle': '家庭、目标与动机——实操方法与深度洞见',
      'blog.post.procrastination.title': '如何克服家庭中的拖延症',
      'blog.post.procrastination.desc': '目标管理、番茄工作法、习惯打卡与家庭挑战。',
    },
    es: {
      'navigation.features': 'Características',
      'navigation.gallery': 'Galería',
      'navigation.download': 'Descargar',
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Familia, objetivos y motivación — guías prácticas',
      'blog.post.procrastination.title': 'Cómo superar la procrastinación en casa',
      'blog.post.procrastination.desc': 'Objetivos, Pomodoro, hábitos y retos familiares.',
    },
    fr: {
      'navigation.features': 'Fonctionnalités',
      'navigation.gallery': 'Galerie',
      'navigation.download': 'Télécharger',
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Famille, objectifs et motivation — guides pratiques',
      'blog.post.procrastination.title': 'Comment vaincre la procrastination à la maison',
      'blog.post.procrastination.desc': 'Objectifs, Pomodoro, habitudes et défis familiaux.',
    },
    de: {
      'navigation.features': 'Funktionen',
      'navigation.gallery': 'Galerie',
      'navigation.download': 'Herunterladen',
      'navigation.app': 'App',
      'navigation.blog': 'Blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Familie, Ziele und Motivation — praktische Leitfäden',
      'blog.post.procrastination.title': 'Aufschieben zu Hause überwinden',
      'blog.post.procrastination.desc': 'Ziele, Pomodoro, Gewohnheiten und Familien-Challenges.',
    },
  };
  return messages[locale]?.[key] || messages.en[key] || key;
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const posts = [
    {
      slug: 'procrastination',
      title: t('blog.post.procrastination.title', locale),
      description: t('blog.post.procrastination.desc', locale),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar
        appLabel={t('navigation.app', locale)}
        blogLabel={t('navigation.blog', locale)}
        currentLocale={locale}
      />

      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t('blog.title', locale)}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('blog.subtitle', locale)}</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600 font-semibold">✦</span>
                </div>
                <p className="text-gray-600">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

