import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      'blog.post.self-discipline.title': 'How to Help Children Become More Self-Disciplined',
      'blog.post.self-discipline.desc': 'Building self-discipline through family systems and age-appropriate strategies.',
      'blog.post.smart-goals.title': 'SMART Principles in Family Goal Setting',
      'blog.post.smart-goals.desc': 'Transform family aspirations into achievable, measurable goals.',
      'blog.post.family-motivation.title': 'How Family Members Motivate Each Other',
      'blog.post.family-motivation.desc': 'Building supportive environments where everyone thrives together.',
      'blog.post.execution-problems.title': 'Overcoming Execution Problems',
      'blog.post.execution-problems.desc': 'From planning to action - bridging the gap between intention and results.',
      'blog.post.three-minute-heat.title': 'Why We Lose Enthusiasm After Three Minutes',
      'blog.post.three-minute-heat.desc': 'Understanding and overcoming short-term motivation patterns.',
      'blog.post.no-motivation.title': 'What to Do When There\'s No Motivation',
      'blog.post.no-motivation.desc': 'Practical strategies for rebuilding drive and creating sustainable motivation.',
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
      'blog.post.self-discipline.title': '如何让孩子变得更自律',
      'blog.post.self-discipline.desc': '通过家庭系统和适合年龄的策略建立自律。',
      'blog.post.smart-goals.title': 'SMART原则在家庭目标中的应用',
      'blog.post.smart-goals.desc': '将家庭愿望转化为可实现、可衡量的目标。',
      'blog.post.family-motivation.title': '家庭成员如何互相激励',
      'blog.post.family-motivation.desc': '建立支持性环境，让每个人一起茁壮成长。',
      'blog.post.execution-problems.title': '克服执行力问题',
      'blog.post.execution-problems.desc': '从规划到行动——弥合意图与结果之间的差距。',
      'blog.post.three-minute-heat.title': '为什么总是三分钟热度',
      'blog.post.three-minute-heat.desc': '理解和克服短期动机模式。',
      'blog.post.no-motivation.title': '没有动力怎么办',
      'blog.post.no-motivation.desc': '重建动力和创造可持续动机的实用策略。',
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
      'blog.post.self-discipline.title': 'Cómo ayudar a los niños a ser más autodisciplinados',
      'blog.post.self-discipline.desc': 'Construir autodisciplina a través de sistemas familiares y estrategias apropiadas para la edad.',
      'blog.post.smart-goals.title': 'Principios SMART en el establecimiento de metas familiares',
      'blog.post.smart-goals.desc': 'Transformar aspiraciones familiares en metas alcanzables y medibles.',
      'blog.post.family-motivation.title': 'Cómo los miembros de la familia se motivan mutuamente',
      'blog.post.family-motivation.desc': 'Construir entornos de apoyo donde todos prosperen juntos.',
      'blog.post.execution-problems.title': 'Superar problemas de ejecución',
      'blog.post.execution-problems.desc': 'De la planificación a la acción - cerrar la brecha entre intención y resultados.',
      'blog.post.three-minute-heat.title': 'Por qué perdemos el entusiasmo después de tres minutos',
      'blog.post.three-minute-heat.desc': 'Entender y superar patrones de motivación a corto plazo.',
      'blog.post.no-motivation.title': 'Qué hacer cuando no hay motivación',
      'blog.post.no-motivation.desc': 'Estrategias prácticas para reconstruir el impulso y crear motivación sostenible.',
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
      'blog.post.self-discipline.title': 'Comment aider les enfants à devenir plus autodisciplinés',
      'blog.post.self-discipline.desc': 'Construire l\'autodiscipline à travers des systèmes familiaux et des stratégies adaptées à l\'âge.',
      'blog.post.smart-goals.title': 'Principes SMART dans la fixation d\'objectifs familiaux',
      'blog.post.smart-goals.desc': 'Transformer les aspirations familiales en objectifs atteignables et mesurables.',
      'blog.post.family-motivation.title': 'Comment les membres de la famille se motivent mutuellement',
      'blog.post.family-motivation.desc': 'Construire des environnements de soutien où tout le monde prospère ensemble.',
      'blog.post.execution-problems.title': 'Surmonter les problèmes d\'exécution',
      'blog.post.execution-problems.desc': 'De la planification à l\'action - combler l\'écart entre intention et résultats.',
      'blog.post.three-minute-heat.title': 'Pourquoi nous perdons l\'enthousiasme après trois minutes',
      'blog.post.three-minute-heat.desc': 'Comprendre et surmonter les patterns de motivation à court terme.',
      'blog.post.no-motivation.title': 'Que faire quand il n\'y a pas de motivation',
      'blog.post.no-motivation.desc': 'Stratégies pratiques pour reconstruire l\'élan et créer une motivation durable.',
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
      'blog.post.self-discipline.title': 'Wie man Kindern hilft, selbstdisziplinierter zu werden',
      'blog.post.self-discipline.desc': 'Selbstdisziplin durch Familiensysteme und altersgerechte Strategien aufbauen.',
      'blog.post.smart-goals.title': 'SMART-Prinzipien in der Familienzielsetzung',
      'blog.post.smart-goals.desc': 'Familienaspirationen in erreichbare, messbare Ziele verwandeln.',
      'blog.post.family-motivation.title': 'Wie Familienmitglieder sich gegenseitig motivieren',
      'blog.post.family-motivation.desc': 'Unterstützende Umgebungen schaffen, in denen alle zusammen gedeihen.',
      'blog.post.execution-problems.title': 'Ausführungsprobleme überwinden',
      'blog.post.execution-problems.desc': 'Von der Planung zur Aktion - die Lücke zwischen Absicht und Ergebnissen schließen.',
      'blog.post.three-minute-heat.title': 'Warum wir nach drei Minuten den Enthusiasmus verlieren',
      'blog.post.three-minute-heat.desc': 'Kurzzeitmotivationsmuster verstehen und überwinden.',
      'blog.post.no-motivation.title': 'Was tun, wenn keine Motivation vorhanden ist',
      'blog.post.no-motivation.desc': 'Praktische Strategien zum Wiederaufbau des Antriebs und zur Schaffung nachhaltiger Motivation.',
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
    {
      slug: 'self-discipline',
      title: t('blog.post.self-discipline.title', locale),
      description: t('blog.post.self-discipline.desc', locale),
    },
    {
      slug: 'smart-goals',
      title: t('blog.post.smart-goals.title', locale),
      description: t('blog.post.smart-goals.desc', locale),
    },
    {
      slug: 'family-motivation',
      title: t('blog.post.family-motivation.title', locale),
      description: t('blog.post.family-motivation.desc', locale),
    },
    {
      slug: 'execution-problems',
      title: t('blog.post.execution-problems.title', locale),
      description: t('blog.post.execution-problems.desc', locale),
    },
    {
      slug: 'three-minute-heat',
      title: t('blog.post.three-minute-heat.title', locale),
      description: t('blog.post.three-minute-heat.desc', locale),
    },
    {
      slug: 'no-motivation',
      title: t('blog.post.no-motivation.title', locale),
      description: t('blog.post.no-motivation.desc', locale),
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

      <Footer currentLocale={locale} />
    </div>
  );
}

