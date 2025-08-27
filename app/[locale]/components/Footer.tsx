import Image from "next/image";

type FooterProps = {
  currentLocale: string;
};

// Simple internationalization function
function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string>> = {
    en: {
      'footer.tagline': 'Motivate to achieve goals. Transform your family\'s motivation with our innovative goal-tracking app.',
      'footer.quickLinks': 'Quick Links',
      'footer.developer': 'Developer',
      'footer.copyright': '© 2025 MetaLeap LLC. All rights reserved.',
      'footer.designedFor': 'Designed for iPad and iPhone',
      'footer.legal': 'Legal',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'navigation.features': 'Features',
      'navigation.gallery': 'Gallery',
      'navigation.blog': 'Blog',
      'navigation.download': 'Download'
    },
    zh: {
      'footer.tagline': '激励实现目标。通过我们创新的目标跟踪应用改变您家庭的动力。',
      'footer.quickLinks': '快速链接',
      'footer.developer': '开发者',
      'footer.copyright': '© 2025 MetaLeap LLC。保留所有权利。',
      'footer.designedFor': '专为 iPad 和 iPhone 设计',
      'footer.legal': '法律',
      'footer.privacyPolicy': '隐私政策',
      'footer.termsOfService': '服务条款',
      'navigation.features': '功能',
      'navigation.gallery': '图库',
      'navigation.blog': '博客',
      'navigation.download': '下载'
    },
    es: {
      'footer.tagline': 'Motiva para lograr objetivos. Transforma la motivación de tu familia con nuestra innovadora aplicación de seguimiento de objetivos.',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.developer': 'Desarrollador',
      'footer.copyright': '© 2025 MetaLeap LLC. Todos los derechos reservados.',
      'footer.designedFor': 'Diseñado para iPad e iPhone',
      'footer.legal': 'Legal',
      'footer.privacyPolicy': 'Política de Privacidad',
      'footer.termsOfService': 'Términos de Servicio',
      'navigation.features': 'Características',
      'navigation.gallery': 'Galería',
      'navigation.blog': 'Blog',
      'navigation.download': 'Descargar'
    },
    fr: {
      'footer.tagline': 'Motiver pour atteindre les objectifs. Transformez la motivation de votre famille avec notre application innovante de suivi d\'objectifs.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.developer': 'Développeur',
      'footer.copyright': '© 2025 MetaLeap LLC. Tous droits réservés.',
      'footer.designedFor': 'Conçu pour iPad et iPhone',
      'footer.legal': 'Mentions légales',
      'footer.privacyPolicy': 'Politique de Confidentialité',
      'footer.termsOfService': 'Conditions d\'Utilisation',
      'navigation.features': 'Fonctionnalités',
      'navigation.gallery': 'Galerie',
      'navigation.blog': 'Blog',
      'navigation.download': 'Télécharger'
    },
    de: {
      'footer.tagline': 'Motivieren, um Ziele zu erreichen. Transformiere die Motivation deiner Familie mit unserer innovativen Zielverfolgungs-App.',
      'footer.quickLinks': 'Schnelllinks',
      'footer.developer': 'Entwickler',
      'footer.copyright': '© 2025 MetaLeap LLC. Alle Rechte vorbehalten.',
      'footer.designedFor': 'Entwickelt für iPad und iPhone',
      'footer.legal': 'Rechtliches',
      'footer.privacyPolicy': 'Datenschutzrichtlinie',
      'footer.termsOfService': 'Nutzungsbedingungen',
      'navigation.features': 'Funktionen',
      'navigation.gallery': 'Galerie',
      'navigation.blog': 'Blog',
      'navigation.download': 'Herunterladen'
    }
  };

  return messages[locale]?.[key] || messages.en[key] || key;
}

export default function Footer({ currentLocale }: FooterProps) {
  return (
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
            <p className="text-gray-400">{t('footer.tagline', currentLocale)}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks', currentLocale)}</h3>
            <ul className="space-y-2">
              <li>
                <a href={`/${currentLocale}#features`} className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.features', currentLocale)}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}#screenshots`} className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.gallery', currentLocale)}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}/blog`} className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.blog', currentLocale)}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}#download`} className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.download', currentLocale)}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.developer', currentLocale)}</h3>
            <p className="text-gray-400 mb-2">MetaLeap LLC</p>
            <p className="text-gray-400 text-sm">{t('footer.designedFor', currentLocale)}</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">{t('footer.copyright', currentLocale)}</p>
            <div className="flex items-center space-x-6 text-sm">
              <a href={`/${currentLocale}/privacy-policy`} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacyPolicy', currentLocale)}
              </a>
              <a href={`/${currentLocale}/terms-of-service`} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.termsOfService', currentLocale)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
