import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Privacy Policy - MotifyUp',
    zh: '隐私政策 - MotifyUp',
    es: 'Política de Privacidad - MotifyUp',
    fr: 'Politique de Confidentialité - MotifyUp',
    de: 'Datenschutzrichtlinie - MotifyUp'
  };

  const descriptions = {
    en: 'Learn how MotifyUp protects your privacy and handles your personal information.',
    zh: '了解 MotifyUp 如何保护您的隐私并处理您的个人信息。',
    es: 'Aprende cómo MotifyUp protege tu privacidad y maneja tu información personal.',
    fr: 'Découvrez comment MotifyUp protège votre vie privée et gère vos informations personnelles.',
    de: 'Erfahren Sie, wie MotifyUp Ihre Privatsphäre schützt und Ihre persönlichen Daten verarbeitet.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string | string[]>> = {
    en: {
      'title': 'Privacy Policy',
      'lastUpdated': 'Last Updated: January 2025',
      'intro': 'At MotifyUp, we are committed to protecting your privacy. This Privacy Policy explains how we handle your data when you use our mobile application. Importantly, MotifyUp operates entirely on your device with no server-side data collection.',
      'dataCollection.title': 'Information We Collect',
      'dataCollection.description': 'MotifyUp is a client-side only application. We do not collect, store, or transmit any personal information to external servers. All your data remains on your device and is not shared with us or any third parties.',
      'dataCollection.items': [
        'No personal information is collected',
        'No data is transmitted to external servers',
        'All app data is stored locally on your device',
        'No analytics or tracking data is collected'
      ],
      'dataUsage.title': 'How We Use Your Information',
      'dataUsage.description': 'Since we do not collect any personal information, there is no data for us to use. MotifyUp operates entirely on your device:',
      'dataUsage.items': [
        'All data processing happens locally on your device',
        'No personal information is shared with external services',
        'Your privacy is protected by design',
        'No data mining or profiling occurs'
      ],
      'dataSharing.title': 'Information Sharing',
      'dataSharing.description': 'Since MotifyUp does not collect any personal information, there is no data to share. Your information never leaves your device and is never transmitted to us or any third parties.',
      'dataSecurity.title': 'Data Security',
      'dataSecurity.description': 'Since MotifyUp operates entirely on your device, your data security is primarily dependent on your device\'s security measures. We recommend keeping your device updated and using appropriate security features.',
      'yourRights.title': 'Your Rights',
      'dataRights.items': [
        'Your data is completely under your control',
        'No data is stored on external servers',
        'You can delete all app data by uninstalling the app',
        'No communications to opt-out from since we don\'t collect data'
      ],
      'contact.title': 'Contact Us',
      'contact.description': 'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
      'backToHome': 'Back to Home',
      'appLabel': 'App',
      'blogLabel': 'Blog',
      'footer.tagline': 'Motivate to achieve goals. Transform your family\'s motivation with our innovative goal-tracking app.',
      'footer.quickLinks': 'Quick Links',
      'footer.developer': 'Developer',
      'footer.designedFor': 'Designed for iPad and iPhone',
      'footer.copyright': '© 2025 MetaLeap LLC. All rights reserved.',
      'footer.legal': 'Legal',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'navigation.features': 'Features',
      'navigation.gallery': 'Gallery',
      'navigation.blog': 'Blog',
      'navigation.download': 'Download'
    },
    zh: {
      'title': '隐私政策',
      'lastUpdated': '最后更新：2025年1月',
      'intro': '在 MotifyUp，我们致力于保护您的隐私并确保您个人信息的安全。本隐私政策说明了当您使用我们的移动应用程序时，我们如何收集、使用和保护您的数据。',
      'dataCollection.title': '我们收集的信息',
      'dataCollection.description': '我们收集您直接提供给我们的信息，例如当您创建账户、设定目标或追踪进度时。这可能包括：',
      'dataCollection.items': [
        '账户信息（姓名、电子邮件地址）',
        '目标和进度数据',
        '应用程序使用统计',
        '设备信息'
      ],
      'dataUsage.title': '我们如何使用您的信息',
      'dataUsage.description': '我们使用收集的信息来：',
      'dataUsage.items': [
        '提供和维护我们的服务',
        '个性化您的体验',
        '改进我们的应用程序',
        '发送重要更新和通知'
      ],
      'dataSharing.title': '信息共享',
      'dataSharing.description': '未经您的同意，我们不会向第三方出售、交易或以其他方式转让您的个人信息，除非本政策中另有说明。',
      'dataSecurity.title': '数据安全',
      'dataSecurity.description': '我们实施适当的安全措施来保护您的个人信息免受未经授权的访问、更改、披露或破坏。',
      'yourRights.title': '您的权利',
      'dataRights.items': [
        '访问您的个人数据',
        '纠正不准确的信息',
        '请求删除您的数据',
        '选择退出某些通信'
      ],
      'contact.title': '联系我们',
      'contact.description': '如果您对本隐私政策或我们的数据实践有任何问题，请联系我们：',
      'backToHome': '返回首页',
      'appLabel': '应用',
      'blogLabel': '博客',
      'footer.tagline': '激励实现目标。通过我们创新的目标跟踪应用改变您家庭的动力。',
      'footer.quickLinks': '快速链接',
      'footer.developer': '开发者',
      'footer.designedFor': '专为 iPad 和 iPhone 设计',
      'footer.copyright': '© 2025 MetaLeap LLC。保留所有权利。',
      'footer.legal': '法律',
      'footer.privacyPolicy': '隐私政策',
      'footer.termsOfService': '服务条款',
      'navigation.features': '功能',
      'navigation.gallery': '图库',
      'navigation.blog': '博客',
      'navigation.download': '下载'
    },
    es: {
      'title': 'Política de Privacidad',
      'lastUpdated': 'Última actualización: Enero 2025',
      'intro': 'En MotifyUp, nos comprometemos a proteger tu privacidad y garantizar la seguridad de tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos cuando utilizas nuestra aplicación móvil.',
      'dataCollection.title': 'Información que Recopilamos',
      'dataCollection.description': 'Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, estableces objetivos o rastreas el progreso. Esto puede incluir:',
      'dataCollection.items': [
        'Información de la cuenta (nombre, dirección de correo electrónico)',
        'Datos de objetivos y progreso',
        'Estadísticas de uso de la aplicación',
        'Información del dispositivo'
      ],
      'dataUsage.title': 'Cómo Usamos tu Información',
      'dataUsage.description': 'Usamos la información recopilada para:',
      'dataUsage.items': [
        'Proporcionar y mantener nuestros servicios',
        'Personalizar tu experiencia',
        'Mejorar nuestra aplicación',
        'Enviar actualizaciones y notificaciones importantes'
      ],
      'dataSharing.title': 'Compartir Información',
      'dataSharing.description': 'No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto como se describe en esta política.',
      'dataSecurity.title': 'Seguridad de Datos',
      'dataSecurity.description': 'Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
      'yourRights.title': 'Tus Derechos',
      'dataRights.items': [
        'Acceder a tus datos personales',
        'Corregir información inexacta',
        'Solicitar la eliminación de tus datos',
        'Optar por no recibir ciertas comunicaciones'
      ],
      'contact.title': 'Contáctanos',
      'contact.description': 'Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos en:',
      'backToHome': 'Volver al Inicio',
      'appLabel': 'App',
      'blogLabel': 'Blog',
      'footer.tagline': 'Motiva para lograr objetivos. Transforma la motivación de tu familia con nuestra innovadora aplicación de seguimiento de objetivos.',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.developer': 'Desarrollador',
      'footer.designedFor': 'Diseñado para iPad e iPhone',
      'footer.copyright': '© 2025 MetaLeap LLC. Todos los derechos reservados.',
      'footer.legal': 'Legal',
      'footer.privacyPolicy': 'Política de Privacidad',
      'footer.termsOfService': 'Términos de Servicio',
      'navigation.features': 'Características',
      'navigation.gallery': 'Galería',
      'navigation.blog': 'Blog',
      'navigation.download': 'Descargar'
    },
    fr: {
      'title': 'Politique de Confidentialité',
      'lastUpdated': 'Dernière mise à jour : Janvier 2025',
      'intro': 'Chez MotifyUp, nous nous engageons à protéger votre vie privée et à assurer la sécurité de vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos données lorsque vous utilisez notre application mobile.',
      'dataCollection.title': 'Informations que nous collectons',
      'dataCollection.description': 'Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, définissez des objectifs ou suivez les progrès. Cela peut inclure :',
      'dataCollection.items': [
        'Informations de compte (nom, adresse e-mail)',
        'Données d\'objectifs et de progrès',
        'Statistiques d\'utilisation de l\'application',
        'Informations sur l\'appareil'
      ],
      'dataUsage.title': 'Comment nous utilisons vos informations',
      'dataUsage.description': 'Nous utilisons les informations collectées pour :',
      'dataUsage.items': [
        'Fournir et maintenir nos services',
        'Personnaliser votre expérience',
        'Améliorer notre application',
        'Envoyer des mises à jour et notifications importantes'
      ],
      'dataSharing.title': 'Partage d\'informations',
      'dataSharing.description': 'Nous ne vendons, n\'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf comme décrit dans cette politique.',
      'dataSecurity.title': 'Sécurité des données',
      'dataSecurity.description': 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, l\'altération, la divulgation ou la destruction.',
      'yourRights.title': 'Vos droits',
      'dataRights.items': [
        'Accéder à vos données personnelles',
        'Corriger les informations inexactes',
        'Demander la suppression de vos données',
        'Vous désabonner de certaines communications'
      ],
      'contact.title': 'Nous contacter',
      'contact.description': 'Si vous avez des questions sur cette Politique de Confidentialité ou nos pratiques en matière de données, contactez-nous à :',
      'backToHome': 'Retour à l\'Accueil',
      'appLabel': 'App',
      'blogLabel': 'Blog',
      'footer.tagline': 'Motivez pour atteindre les objectifs. Transformez la motivation de votre famille avec notre application innovante de suivi d\'objectifs.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.developer': 'Développeur',
      'footer.designedFor': 'Conçu pour iPad et iPhone',
      'footer.copyright': '© 2025 MetaLeap LLC. Tous droits réservés.',
      'footer.legal': 'Mentions légales',
      'footer.privacyPolicy': 'Politique de Confidentialité',
      'footer.termsOfService': 'Conditions d\'Utilisation',
      'navigation.features': 'Fonctionnalités',
      'navigation.gallery': 'Galerie',
      'navigation.blog': 'Blog',
      'navigation.download': 'Télécharger'
    },
    de: {
      'title': 'Datenschutzrichtlinie',
      'lastUpdated': 'Zuletzt aktualisiert: Januar 2025',
      'intro': 'Bei MotifyUp setzen wir uns für den Schutz Ihrer Privatsphäre und die Sicherheit Ihrer persönlichen Daten ein. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Daten sammeln, verwenden und schützen, wenn Sie unsere mobile Anwendung nutzen.',
      'dataCollection.title': 'Informationen, die wir sammeln',
      'dataCollection.description': 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, wie wenn Sie ein Konto erstellen, Ziele setzen oder den Fortschritt verfolgen. Dies kann umfassen:',
      'dataCollection.items': [
        'Kontoinformationen (Name, E-Mail-Adresse)',
        'Ziel- und Fortschrittsdaten',
        'App-Nutzungsstatistiken',
        'Geräteinformationen'
      ],
      'dataUsage.title': 'Wie wir Ihre Informationen verwenden',
      'dataUsage.description': 'Wir verwenden die gesammelten Informationen, um:',
      'dataUsage.items': [
        'Unsere Dienste bereitzustellen und zu warten',
        'Ihre Erfahrung zu personalisieren',
        'Unsere Anwendung zu verbessern',
        'Wichtige Updates und Benachrichtigungen zu senden'
      ],
      'dataSharing.title': 'Informationsweitergabe',
      'dataSharing.description': 'Wir verkaufen, handeln oder übertragen Ihre persönlichen Daten nicht ohne Ihre Zustimmung an Dritte, es sei denn, dies ist in dieser Richtlinie beschrieben.',
      'dataSecurity.title': 'Datensicherheit',
      'dataSecurity.description': 'Wir implementieren angemessene Sicherheitsmaßnahmen, um Ihre persönlichen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.',
      'yourRights.title': 'Ihre Rechte',
      'dataRights.items': [
        'Auf Ihre persönlichen Daten zugreifen',
        'Ungenaue Informationen korrigieren',
        'Löschung Ihrer Daten beantragen',
        'Sich von bestimmten Kommunikationen abmelden'
      ],
      'contact.title': 'Kontaktieren Sie uns',
      'contact.description': 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns unter:',
      'backToHome': 'Zurück zur Startseite',
      'appLabel': 'App',
      'blogLabel': 'Blog',
      'footer.tagline': 'Motivieren, um Ziele zu erreichen. Transformiere die Motivation deiner Familie mit unserer innovativen Zielverfolgungs-App.',
      'footer.quickLinks': 'Schnelllinks',
      'footer.developer': 'Entwickler',
      'footer.designedFor': 'Entwickelt für iPad und iPhone',
      'footer.copyright': '© 2025 MetaLeap LLC. Alle Rechte vorbehalten.',
      'footer.legal': 'Rechtliches',
      'footer.privacyPolicy': 'Datenschutzrichtlinie',
      'footer.termsOfService': 'Nutzungsbedingungen',
      'navigation.features': 'Funktionen',
      'navigation.gallery': 'Galerie',
      'navigation.blog': 'Blog',
      'navigation.download': 'Herunterladen'
    }
  };

  const result = messages[locale]?.[key] || messages.en[key] || key;
  return result;
}

// Helper function to get array values safely
function tArray(key: string, locale: string = 'en'): string[] {
  const result = t(key, locale);
  return Array.isArray(result) ? result : [];
}

// Helper function to get string values safely
function tString(key: string, locale: string = 'en'): string {
  const result = t(key, locale);
  return typeof result === 'string' ? result : String(result);
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar 
        appLabel={tString('appLabel', locale)}
        blogLabel={tString('blogLabel', locale)}
        currentLocale={locale}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t('title', locale)}
            </h1>
            <p className="text-gray-600">
              {t('lastUpdated', locale)}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              {t('intro', locale)}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('dataCollection.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('dataCollection.description', locale)}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('dataCollection.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('dataUsage.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('dataUsage.description', locale)}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('dataUsage.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('dataSharing.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('dataSharing.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('dataSecurity.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('dataSecurity.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('yourRights.title', locale)}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('dataRights.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('contact.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('contact.description', locale)}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">MetaLeap LLC</p>
                <p className="text-gray-600">Email: hello@metaleap.so</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                  <a href={`/${locale}#features`} className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.features', locale)}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}#screenshots`} className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.gallery', locale)}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/blog`} className="text-gray-400 hover:text-white transition-colors">
                    {t('navigation.blog', locale)}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}#download`} className="text-gray-400 hover:text-white transition-colors">
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
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">{t('footer.copyright', locale)}</p>
              <div className="flex items-center space-x-6 text-sm">
                <a href={`/${locale}/privacy-policy`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacyPolicy', locale)}
                </a>
                <a href={`/${locale}/terms-of-service`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.termsOfService', locale)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
