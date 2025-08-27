import Image from "next/image";
import Navbar from "./components/Navbar";

// Simple internationalization function
function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string>> = {
    en: {
      'navigation.features': 'Features',
      'navigation.gallery': 'Gallery',
      'navigation.download': 'Download',
      'navigation.procrastination': 'Procrastination',
      'navigation.blog': 'Blog',
      'navigation.app': 'App',
      'hero.title': 'Stay Focused.',
      'hero.subtitle': 'Stay Motivated.',
      'hero.description': "Your journey to achieving more starts with MotifyUp. Transform your family's motivation and track progress together with our innovative goal-tracking app.",
      'hero.download': 'Download on App Store',
      'hero.rating': '5.0',
      'hero.ratings': '(2 Ratings)',
      'features.title': 'Why Choose MotifyUp?',
      'features.subtitle': 'Designed to help families stay motivated and achieve their goals together',
      'features.family.title': 'For Every Family Member',
      'features.family.description': 'Create individual profiles for each family member and track their unique goals and progress separately.',
      'features.progress.title': 'Track Progress Daily',
      'features.progress.description': 'Monitor daily achievements with visual progress indicators, earned stars, and task completion tracking.',
      'features.journey.title': 'Complete Your Journeys',
      'features.journey.description': 'Set long-term goals and track completion rates across different categories like reading, fitness, and creativity.',
      'gallery.title': 'App Gallery',
      'gallery.subtitle': 'Beautiful, intuitive interface designed for the whole family',
      'download.title': "Ready to Transform Your Family's Motivation?",
      'download.subtitle': 'Join thousands of families who are already achieving their goals with MotifyUp',
      'download.free': 'Free to download',
      'footer.tagline': 'Motivate to achieve goals. Transform your family\'s motivation with our innovative goal-tracking app.',
      'footer.quickLinks': 'Quick Links',
      'footer.developer': 'Developer',
      'footer.copyright': '© 2025 MetaLeap LLC. All rights reserved.',
      'footer.designedFor': 'Designed for iPad and iPhone'
    },
    zh: {
      'navigation.features': '功能',
      'navigation.gallery': '图库',
      'navigation.download': '下载',
      'navigation.procrastination': '克服拖延症',
      'navigation.blog': '博客',
      'navigation.app': '应用',
      'hero.title': '保持专注',
      'hero.subtitle': '保持动力',
      'hero.description': '您的成就之旅从 MotifyUp 开始。通过我们创新的目标跟踪应用，改变您家庭的动力并一起跟踪进度。',
      'hero.download': '在 App Store 上下载',
      'hero.rating': '5.0',
      'hero.ratings': '（2 个评分）',
      'features.title': '为什么选择 MotifyUp？',
      'features.subtitle': '专为帮助家庭保持动力并共同实现目标而设计',
      'features.family.title': '适合每个家庭成员',
      'features.family.description': '为每个家庭成员创建个人资料，分别跟踪他们独特的目标和进度。',
      'features.progress.title': '每日跟踪进度',
      'features.progress.description': '通过视觉进度指示器、获得的星星和任务完成跟踪来监控每日成就。',
      'features.journey.title': '完成您的旅程',
      'features.journey.description': '设定长期目标，跟踪阅读、健身和创造力等不同类别的完成率。',
      'gallery.title': '应用图库',
      'gallery.subtitle': '专为整个家庭设计的美丽、直观界面',
      'download.title': '准备好改变您家庭的动力了吗？',
      'download.subtitle': '加入已经通过 MotifyUp 实现目标的数千个家庭',
      'download.free': '免费下载',
      'footer.tagline': '激励实现目标。通过我们创新的目标跟踪应用改变您家庭的动力。',
      'footer.quickLinks': '快速链接',
      'footer.developer': '开发者',
      'footer.copyright': '© 2025 MetaLeap LLC。保留所有权利。',
      'footer.designedFor': '专为 iPad 和 iPhone 设计'
    },
    es: {
      'navigation.features': 'Características',
      'navigation.gallery': 'Galería',
      'navigation.download': 'Descargar',
      'navigation.procrastination': 'Procrastinación',
      'navigation.blog': 'Blog',
      'navigation.app': 'App',
      'hero.title': 'Mantén el Enfoque.',
      'hero.subtitle': 'Mantén la Motivación.',
      'hero.description': 'Tu viaje para lograr más comienza con MotifyUp. Transforma la motivación de tu familia y rastrea el progreso juntos con nuestra innovadora aplicación de seguimiento de objetivos.',
      'hero.download': 'Descargar en App Store',
      'hero.rating': '5.0',
      'hero.ratings': '(2 Calificaciones)',
      'features.title': '¿Por qué Elegir MotifyUp?',
      'features.subtitle': 'Diseñado para ayudar a las familias a mantenerse motivadas y lograr sus objetivos juntos',
      'features.family.title': 'Para Cada Miembro de la Familia',
      'features.family.description': 'Crea perfiles individuales para cada miembro de la familia y rastrea sus objetivos únicos y progreso por separado.',
      'features.progress.title': 'Rastrea el Progreso Diario',
      'features.progress.description': 'Monitorea los logros diarios con indicadores de progreso visual, estrellas ganadas y seguimiento de finalización de tareas.',
      'features.journey.title': 'Completa Tus Viajes',
      'features.journey.description': 'Establece objetivos a largo plazo y rastrea las tasas de finalización en diferentes categorías como lectura, fitness y creatividad.',
      'gallery.title': 'Galería de la App',
      'gallery.subtitle': 'Interfaz hermosa e intuitiva diseñada para toda la familia',
      'download.title': '¿Listo para Transformar la Motivación de tu Familia?',
      'download.subtitle': 'Únete a miles de familias que ya están logrando sus objetivos con MotifyUp',
      'download.free': 'Descarga gratuita',
      'footer.tagline': 'Motiva para lograr objetivos. Transforma la motivación de tu familia con nuestra innovadora aplicación de seguimiento de objetivos.',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.developer': 'Desarrollador',
      'footer.copyright': '© 2025 MetaLeap LLC. Todos los derechos reservados.',
      'footer.designedFor': 'Diseñado para iPad e iPhone'
    },
    fr: {
      'navigation.features': 'Fonctionnalités',
      'navigation.gallery': 'Galerie',
      'navigation.download': 'Télécharger',
      'navigation.procrastination': 'Procrastination',
      'navigation.blog': 'Blog',
      'navigation.app': 'App',
      'hero.title': 'Restez Concentré.',
      'hero.subtitle': 'Restez Motivé.',
      'hero.description': 'Votre voyage vers plus de réalisations commence avec MotifyUp. Transformez la motivation de votre famille et suivez les progrès ensemble avec notre application innovante de suivi d\'objectifs.',
      'hero.download': 'Télécharger sur l\'App Store',
      'hero.rating': '5.0',
      'hero.ratings': '(2 Évaluations)',
      'features.title': 'Pourquoi Choisir MotifyUp ?',
      'features.subtitle': 'Conçu pour aider les familles à rester motivées et atteindre leurs objectifs ensemble',
      'features.family.title': 'Pour Chaque Membre de la Famille',
      'features.family.description': 'Créez des profils individuels pour chaque membre de la famille et suivez leurs objectifs uniques et leurs progrès séparément.',
      'features.progress.title': 'Suivez les Progrès Quotidiens',
      'features.progress.description': 'Surveillez les réalisations quotidiennes avec des indicateurs de progrès visuels, des étoiles gagnées et le suivi de l\'achèvement des tâches.',
      'features.journey.title': 'Complétez Vos Parcours',
      'features.journey.description': 'Définissez des objectifs à long terme et suivez les taux de réussite dans différentes catégories comme la lecture, la forme physique et la créativité.',
      'gallery.title': 'Galerie de l\'App',
      'gallery.subtitle': 'Interface belle et intuitive conçue pour toute la famille',
      'download.title': 'Prêt à Transformer la Motivation de Votre Famille ?',
      'download.subtitle': 'Rejoignez des milliers de familles qui atteignent déjà leurs objectifs avec MotifyUp',
      'download.free': 'Téléchargement gratuit',
      'footer.tagline': 'Motiver pour atteindre les objectifs. Transformez la motivation de votre famille avec notre application innovante de suivi d\'objectifs.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.developer': 'Développeur',
      'footer.copyright': '© 2025 MetaLeap LLC. Tous droits réservés.',
      'footer.designedFor': 'Conçu pour iPad et iPhone'
    },
    de: {
      'navigation.features': 'Funktionen',
      'navigation.gallery': 'Galerie',
      'navigation.download': 'Herunterladen',
      'navigation.procrastination': 'Prokrastination',
      'navigation.blog': 'Blog',
      'navigation.app': 'App',
      'hero.title': 'Bleib Fokussiert.',
      'hero.subtitle': 'Bleib Motiviert.',
      'hero.description': 'Deine Reise zu mehr Erfolg beginnt mit MotifyUp. Transformiere die Motivation deiner Familie und verfolge gemeinsam den Fortschritt mit unserer innovativen Zielverfolgungs-App.',
      'hero.download': 'Im App Store herunterladen',
      'hero.rating': '5.0',
      'hero.ratings': '(2 Bewertungen)',
      'features.title': 'Warum MotifyUp Wählen?',
      'features.subtitle': 'Entwickelt, um Familien dabei zu helfen, motiviert zu bleiben und ihre Ziele gemeinsam zu erreichen',
      'features.family.title': 'Für Jedes Familienmitglied',
      'features.family.description': 'Erstelle individuelle Profile für jedes Familienmitglied und verfolge ihre einzigartigen Ziele und Fortschritte getrennt.',
      'features.progress.title': 'Verfolge den Täglichen Fortschritt',
      'features.progress.description': 'Überwache tägliche Erfolge mit visuellen Fortschrittsindikatoren, verdienten Sternen und Aufgabenabschlussverfolgung.',
      'features.journey.title': 'Vervollständige Deine Reisen',
      'features.journey.description': 'Setze langfristige Ziele und verfolge Erfolgsquoten in verschiedenen Kategorien wie Lesen, Fitness und Kreativität.',
      'gallery.title': 'App-Galerie',
      'gallery.subtitle': 'Schöne, intuitive Benutzeroberfläche, die für die ganze Familie entwickelt wurde',
      'download.title': 'Bereit, die Motivation deiner Familie zu Transformieren?',
      'download.subtitle': 'Schließe dich Tausenden von Familien an, die bereits ihre Ziele mit MotifyUp erreichen',
      'download.free': 'Kostenlos herunterladen',
      'footer.tagline': 'Motivieren, um Ziele zu erreichen. Transformiere die Motivation deiner Familie mit unserer innovativen Zielverfolgungs-App.',
      'footer.quickLinks': 'Schnelllinks',
      'footer.developer': 'Entwickler',
      'footer.copyright': '© 2025 MetaLeap LLC. Alle Rechte vorbehalten.',
      'footer.designedFor': 'Entwickelt für iPad und iPhone'
    }
  };

  return messages[locale]?.[key] || messages.en[key] || key;
}

// Language selector component
function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
        <span className="text-lg">
          {languages.find(lang => lang.code === currentLocale)?.flag || '🌐'}
        </span>
        <span className="hidden sm:inline">
          {languages.find(lang => lang.code === currentLocale)?.code.toUpperCase() || 'EN'}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <a
            key={language.code}
            href={`/${language.code}`}
            className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
              currentLocale === language.code ? 'text-green-600 bg-green-50' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {currentLocale === language.code && (
              <svg className="w-4 h-4 ml-auto text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar
        appLabel={t('navigation.app', locale)}
        blogLabel={t('navigation.blog', locale)}
        currentLocale={locale}
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl overflow-hidden">
              <Image
                src="/app-icon.svg"
                alt="MotifyUp App Icon"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title', locale)}
              <span className="block text-green-600"> {t('hero.subtitle', locale)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description', locale)}
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/us/app/motifyup/id6738029147?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t('hero.download', locale)}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">{t('hero.rating', locale)}</span>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title', locale)}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('features.subtitle', locale)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.family.title', locale)}</h3>
              <p className="text-gray-600">{t('features.family.description', locale)}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.progress.title', locale)}</h3>
              <p className="text-gray-600">{t('features.progress.description', locale)}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.journey.title', locale)}</h3>
              <p className="text-gray-600">{t('features.journey.description', locale)}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('gallery.title', locale)}</h2>
            <p className="text-xl text-gray-600">{t('gallery.subtitle', locale)}</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: 1, suffix: 'st' },
              { num: 2, suffix: 'nd' },
              { num: 3, suffix: 'rd' },
              { num: 4, suffix: 'th' },
              { num: 5, suffix: 'th' },
              { num: 6, suffix: 'th' }
            ].map(({ num, suffix }) => (
              <div key={num} className="group flex justify-center">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src={`/${num}${suffix}-screen.png`}
                      alt={`MotifyUp App Screen ${num}`}
                      width={160}
                      height={320}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('download.title', locale)}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('download.subtitle', locale)}</p>
          <div className="flex justify-center mb-8">
            <a
              href="https://apps.apple.com/us/app/motifyup/id6738029147?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-500">{t('download.free', locale)}</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/app-icon.svg"
                    alt="MotifyUp App Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-2xl font-bold">MotifyUp</span>
              </div>
              <p className="text-gray-400">{t('footer.tagline', locale)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks', locale)}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.features', locale)}
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.gallery', locale)}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/blog`} className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.blog', locale)}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/procrastination`} className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.procrastination', locale)}
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.download', locale)}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.developer', locale)}</h3>
              <p className="text-gray-400 mb-2">MetaLeap LLC</p>
              <p className="text-gray-400 text-sm">{t('footer.designedFor', locale)}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t('footer.copyright', locale)}</p>
          </div>
        </div>
      </footer>
      {/* Floating right-side anchor for section shortcuts */}
      <nav className="hidden md:flex fixed right-6 top-1/3 z-40">
        <div className="flex flex-col gap-2 rounded-2xl border border-green-100 bg-white/70 backdrop-blur-md shadow-lg p-2">
          <a
            href="#features"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
            title={t('navigation.features', locale)}
            aria-label={t('navigation.features', locale)}
          >
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{t('navigation.features', locale)}</span>
          </a>
          <a
            href="#screenshots"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
            title={t('navigation.gallery', locale)}
            aria-label={t('navigation.gallery', locale)}
          >
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1-1a2 2 0 012.828 0L20 15m-6-9h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
            </svg>
            <span className="text-sm font-medium">{t('navigation.gallery', locale)}</span>
          </a>
          <a
            href="#download"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
            title={t('navigation.download', locale)}
            aria-label={t('navigation.download', locale)}
          >
            <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z" />
            </svg>
            <span className="text-sm font-medium">{t('navigation.download', locale)}</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
