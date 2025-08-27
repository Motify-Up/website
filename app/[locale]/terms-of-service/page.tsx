import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Terms of Service - MotifyUp',
    zh: '服务条款 - MotifyUp',
    es: 'Términos de Servicio - MotifyUp',
    fr: 'Conditions d\'Utilisation - MotifyUp',
    de: 'Nutzungsbedingungen - MotifyUp'
  };

  const descriptions = {
    en: 'Read the terms and conditions for using MotifyUp services and application.',
    zh: '阅读使用 MotifyUp 服务和应用程序的条款和条件。',
    es: 'Lee los términos y condiciones para usar los servicios y la aplicación de MotifyUp.',
    fr: 'Lisez les termes et conditions d\'utilisation des services et de l\'application MotifyUp.',
    de: 'Lesen Sie die Nutzungsbedingungen für MotifyUp-Dienste und -Anwendung.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

function t(key: string, locale: string = 'en') {
  const messages: Record<string, Record<string, string | string[]>> = {
    en: {
      'title': 'Terms of Service',
      'lastUpdated': 'Last Updated: January 2025',
      'intro': 'These Terms of Service ("Terms") govern your use of the MotifyUp mobile application and related services. By using our app, you agree to be bound by these Terms.',
      'acceptance.title': 'Acceptance of Terms',
      'acceptance.description': 'By downloading, installing, or using the MotifyUp application, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
      'serviceDescription.title': 'Description of Service',
      'serviceDescription.description': 'MotifyUp is a family goal-tracking application that helps families stay motivated and achieve their goals together. Our service includes:',
      'serviceDescription.items': [
        'Goal setting and tracking features',
        'Progress monitoring and statistics',
        'Family member management',
        'Motivational tools and rewards'
      ],
      'userAccounts.title': 'User Accounts',
      'userAccounts.description': 'To use certain features of the app, you may need to create an account. You are responsible for:',
      'userAccounts.items': [
        'Maintaining the confidentiality of your account',
        'All activities that occur under your account',
        'Providing accurate and complete information',
        'Notifying us of any unauthorized use'
      ],
      'acceptableUse.title': 'Acceptable Use',
      'acceptableUse.description': 'You agree to use the app only for lawful purposes and in accordance with these Terms. You agree not to:',
      'acceptableUse.items': [
        'Use the app for any illegal or unauthorized purpose',
        'Interfere with or disrupt the app or servers',
        'Attempt to gain unauthorized access to any part of the app',
        'Use the app to harm others or their property'
      ],
      'intellectualProperty.title': 'Intellectual Property',
      'intellectualProperty.description': 'The MotifyUp app and its content, including but not limited to text, graphics, logos, and software, are the property of MetaLeap LLC and are protected by copyright and other intellectual property laws.',
      'privacy.title': 'Privacy and Data',
      'privacy.description': 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the app, to understand our practices.',
      'termination.title': 'Termination',
      'termination.description': 'We may terminate or suspend your access to the app immediately, without prior notice, for any reason, including if you breach these Terms.',
      'disclaimer.title': 'Disclaimer of Warranties',
      'disclaimer.description': 'The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.',
      'limitation.title': 'Limitation of Liability',
      'limitation.description': 'In no event shall MetaLeap LLC be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the app.',
      'changes.title': 'Changes to Terms',
      'changes.description': 'We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms in the app.',
      'contact.title': 'Contact Information',
      'contact.description': 'If you have any questions about these Terms of Service, please contact us at:',
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
      'title': '服务条款',
      'lastUpdated': '最后更新：2025年1月',
      'intro': '这些服务条款（"条款"）管理您对 MotifyUp 移动应用程序和相关服务的使用。通过使用我们的应用程序，您同意受这些条款的约束。',
      'acceptance.title': '条款接受',
      'acceptance.description': '通过下载、安装或使用 MotifyUp 应用程序，您确认您已阅读、理解并同意受这些服务条款的约束。',
      'serviceDescription.title': '服务描述',
      'serviceDescription.description': 'MotifyUp 是一个家庭目标追踪应用程序，帮助家庭保持动力并共同实现目标。我们的服务包括：',
      'serviceDescription.items': [
        '目标设定和追踪功能',
        '进度监控和统计',
        '家庭成员管理',
        '激励工具和奖励'
      ],
      'userAccounts.title': '用户账户',
      'userAccounts.description': '要使用应用程序的某些功能，您可能需要创建一个账户。您负责：',
      'userAccounts.items': [
        '维护您账户的机密性',
        '您账户下发生的所有活动',
        '提供准确和完整的信息',
        '通知我们任何未经授权的使用'
      ],
      'acceptableUse.title': '可接受使用',
      'acceptableUse.description': '您同意仅将应用程序用于合法目的并符合这些条款。您同意不：',
      'acceptableUse.items': [
        '将应用程序用于任何非法或未经授权的目的',
        '干扰或破坏应用程序或服务器',
        '尝试未经授权访问应用程序的任何部分',
        '使用应用程序伤害他人或他们的财产'
      ],
      'intellectualProperty.title': '知识产权',
      'intellectualProperty.description': 'MotifyUp 应用程序及其内容，包括但不限于文本、图形、徽标和软件，是 MetaLeap LLC 的财产，受版权和其他知识产权法律保护。',
      'privacy.title': '隐私和数据',
      'privacy.description': '您的隐私对我们很重要。请查看我们的隐私政策，它也管理您对应用程序的使用，以了解我们的做法。',
      'termination.title': '终止',
      'termination.description': '如果您违反这些条款，我们可能会立即终止或暂停您对应用程序的访问，恕不另行通知。',
      'disclaimer.title': '免责声明',
      'disclaimer.description': '应用程序按"原样"提供，不提供任何形式的保证。我们不保证应用程序无错误或不会中断。',
      'limitation.title': '责任限制',
      'limitation.description': '在任何情况下，MetaLeap LLC 都不对因使用应用程序而产生或与之相关的任何间接、偶然、特殊或后果性损害承担责任。',
      'changes.title': '条款变更',
      'changes.description': '我们保留随时修改这些条款的权利。我们将通过在应用程序中发布新条款来通知用户任何重大变更。',
      'contact.title': '联系信息',
      'contact.description': '如果您对这些服务条款有任何问题，请联系我们：',
      'backToHome': '返回首页',
      'appLabel': '应用',
      'blogLabel': '博客',
      'footer.tagline': '激励实现目标。通过我们创新的目标追踪应用转变您家庭的动力。',
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
      'title': 'Términos de Servicio',
      'lastUpdated': 'Última actualización: Enero 2025',
      'intro': 'Estos Términos de Servicio ("Términos") rigen tu uso de la aplicación móvil MotifyUp y servicios relacionados. Al usar nuestra aplicación, aceptas estar sujeto a estos Términos.',
      'acceptance.title': 'Aceptación de Términos',
      'acceptance.description': 'Al descargar, instalar o usar la aplicación MotifyUp, reconoces que has leído, entendido y aceptas estar sujeto a estos Términos de Servicio.',
      'serviceDescription.title': 'Descripción del Servicio',
      'serviceDescription.description': 'MotifyUp es una aplicación de seguimiento de objetivos familiares que ayuda a las familias a mantenerse motivadas y lograr sus objetivos juntas. Nuestro servicio incluye:',
      'serviceDescription.items': [
        'Características de establecimiento y seguimiento de objetivos',
        'Monitoreo de progreso y estadísticas',
        'Gestión de miembros de la familia',
        'Herramientas motivacionales y recompensas'
      ],
      'userAccounts.title': 'Cuentas de Usuario',
      'userAccounts.description': 'Para usar ciertas características de la aplicación, es posible que necesites crear una cuenta. Eres responsable de:',
      'userAccounts.items': [
        'Mantener la confidencialidad de tu cuenta',
        'Todas las actividades que ocurran bajo tu cuenta',
        'Proporcionar información precisa y completa',
        'Notificarnos de cualquier uso no autorizado'
      ],
      'acceptableUse.title': 'Uso Aceptable',
      'acceptableUse.description': 'Aceptas usar la aplicación solo para propósitos legales y de acuerdo con estos Términos. Aceptas no:',
      'acceptableUse.items': [
        'Usar la aplicación para cualquier propósito ilegal o no autorizado',
        'Interferir o interrumpir la aplicación o servidores',
        'Intentar obtener acceso no autorizado a cualquier parte de la aplicación',
        'Usar la aplicación para dañar a otros o su propiedad'
      ],
      'intellectualProperty.title': 'Propiedad Intelectual',
      'intellectualProperty.description': 'La aplicación MotifyUp y su contenido, incluyendo pero no limitado a texto, gráficos, logotipos y software, son propiedad de MetaLeap LLC y están protegidos por leyes de derechos de autor y otras leyes de propiedad intelectual.',
      'privacy.title': 'Privacidad y Datos',
      'privacy.description': 'Tu privacidad es importante para nosotros. Por favor revisa nuestra Política de Privacidad, que también rige tu uso de la aplicación, para entender nuestras prácticas.',
      'termination.title': 'Terminación',
      'termination.description': 'Podemos terminar o suspender tu acceso a la aplicación inmediatamente, sin previo aviso, por cualquier razón, incluyendo si violas estos Términos.',
      'disclaimer.title': 'Descargo de Responsabilidades',
      'disclaimer.description': 'La aplicación se proporciona "tal como está" sin garantías de ningún tipo. No garantizamos que la aplicación esté libre de errores o sea ininterrumpida.',
      'limitation.title': 'Limitación de Responsabilidad',
      'limitation.description': 'En ningún caso MetaLeap LLC será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan de o en conexión con tu uso de la aplicación.',
      'changes.title': 'Cambios en los Términos',
      'changes.description': 'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos a los usuarios de cualquier cambio material publicando los nuevos Términos en la aplicación.',
      'contact.title': 'Información de Contacto',
      'contact.description': 'Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos en:',
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
      'title': 'Conditions d\'Utilisation',
      'lastUpdated': 'Dernière mise à jour : Janvier 2025',
      'intro': 'Ces Conditions d\'Utilisation ("Conditions") régissent votre utilisation de l\'application mobile MotifyUp et des services associés. En utilisant notre application, vous acceptez d\'être lié par ces Conditions.',
      'acceptance.title': 'Acceptation des Conditions',
      'acceptance.description': 'En téléchargeant, installant ou utilisant l\'application MotifyUp, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions d\'Utilisation.',
      'serviceDescription.title': 'Description du Service',
      'serviceDescription.description': 'MotifyUp est une application de suivi d\'objectifs familiaux qui aide les familles à rester motivées et à atteindre leurs objectifs ensemble. Notre service comprend :',
      'serviceDescription.items': [
        'Fonctionnalités de définition et de suivi d\'objectifs',
        'Surveillance des progrès et statistiques',
        'Gestion des membres de la famille',
        'Outils motivationnels et récompenses'
      ],
      'userAccounts.title': 'Comptes Utilisateur',
      'userAccounts.description': 'Pour utiliser certaines fonctionnalités de l\'application, vous devrez peut-être créer un compte. Vous êtes responsable de :',
      'userAccounts.items': [
        'Maintenir la confidentialité de votre compte',
        'Toutes les activités qui se produisent sous votre compte',
        'Fournir des informations précises et complètes',
        'Nous notifier de toute utilisation non autorisée'
      ],
      'acceptableUse.title': 'Utilisation Acceptable',
      'acceptableUse.description': 'Vous acceptez d\'utiliser l\'application uniquement à des fins légales et conformément à ces Conditions. Vous acceptez de ne pas :',
      'acceptableUse.items': [
        'Utiliser l\'application à des fins illégales ou non autorisées',
        'Interférer avec ou perturber l\'application ou les serveurs',
        'Tenter d\'obtenir un accès non autorisé à toute partie de l\'application',
        'Utiliser l\'application pour nuire aux autres ou à leurs biens'
      ],
      'intellectualProperty.title': 'Propriété Intellectuelle',
      'intellectualProperty.description': 'L\'application MotifyUp et son contenu, y compris mais sans s\'y limiter le texte, les graphiques, les logos et les logiciels, sont la propriété de MetaLeap LLC et sont protégés par les lois sur les droits d\'auteur et autres lois sur la propriété intellectuelle.',
      'privacy.title': 'Confidentialité et Données',
      'privacy.description': 'Votre confidentialité est importante pour nous. Veuillez consulter notre Politique de Confidentialité, qui régit également votre utilisation de l\'application, pour comprendre nos pratiques.',
      'termination.title': 'Résiliation',
      'termination.description': 'Nous pouvons résilier ou suspendre votre accès à l\'application immédiatement, sans préavis, pour toute raison, y compris si vous violez ces Conditions.',
      'disclaimer.title': 'Avertissement de Garanties',
      'disclaimer.description': 'L\'application est fournie "telle quelle" sans garanties d\'aucune sorte. Nous ne garantissons pas que l\'application sera exempte d\'erreurs ou ininterrompue.',
      'limitation.title': 'Limitation de Responsabilité',
      'limitation.description': 'En aucun cas MetaLeap LLC ne sera responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de ou en relation avec votre utilisation de l\'application.',
      'changes.title': 'Modifications des Conditions',
      'changes.description': 'Nous nous réservons le droit de modifier ces Conditions à tout moment. Nous informerons les utilisateurs de toute modification importante en publiant les nouvelles Conditions dans l\'application.',
      'contact.title': 'Informations de Contact',
      'contact.description': 'Si vous avez des questions sur ces Conditions d\'Utilisation, contactez-nous à :',
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
      'title': 'Nutzungsbedingungen',
      'lastUpdated': 'Zuletzt aktualisiert: Januar 2025',
      'intro': 'Diese Nutzungsbedingungen ("Bedingungen") regeln Ihre Nutzung der MotifyUp-Mobilanwendung und der damit verbundenen Dienste. Durch die Nutzung unserer App stimmen Sie zu, an diese Bedingungen gebunden zu sein.',
      'acceptance.title': 'Annahme der Bedingungen',
      'acceptance.description': 'Durch das Herunterladen, Installieren oder Verwenden der MotifyUp-Anwendung bestätigen Sie, dass Sie diese Nutzungsbedingungen gelesen, verstanden und zugestimmt haben, an sie gebunden zu sein.',
      'serviceDescription.title': 'Beschreibung des Dienstes',
      'serviceDescription.description': 'MotifyUp ist eine Familienzielverfolgungsanwendung, die Familien hilft, motiviert zu bleiben und ihre Ziele gemeinsam zu erreichen. Unser Service umfasst:',
      'serviceDescription.items': [
        'Zielsetzungs- und Verfolgungsfunktionen',
        'Fortschrittsüberwachung und Statistiken',
        'Familienmitgliederverwaltung',
        'Motivationswerkzeuge und Belohnungen'
      ],
      'userAccounts.title': 'Benutzerkonten',
      'userAccounts.description': 'Um bestimmte Funktionen der App zu nutzen, müssen Sie möglicherweise ein Konto erstellen. Sie sind verantwortlich für:',
      'userAccounts.items': [
        'Die Vertraulichkeit Ihres Kontos zu wahren',
        'Alle Aktivitäten, die unter Ihrem Konto stattfinden',
        'Genaue und vollständige Informationen bereitzustellen',
        'Uns über unbefugte Nutzung zu benachrichtigen'
      ],
      'acceptableUse.title': 'Zulässige Nutzung',
      'acceptableUse.description': 'Sie stimmen zu, die App nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen Bedingungen zu verwenden. Sie stimmen zu, nicht:',
      'acceptableUse.items': [
        'Die App für illegale oder unbefugte Zwecke zu verwenden',
        'Die App oder Server zu stören oder zu unterbrechen',
        'Unbefugten Zugriff auf einen Teil der App zu erlangen',
        'Die App zu verwenden, um anderen oder ihrem Eigentum zu schaden'
      ],
      'intellectualProperty.title': 'Geistiges Eigentum',
      'intellectualProperty.description': 'Die MotifyUp-App und ihr Inhalt, einschließlich, aber nicht beschränkt auf Text, Grafiken, Logos und Software, sind Eigentum von MetaLeap LLC und werden durch Urheberrechts- und andere Gesetze zum geistigen Eigentum geschützt.',
      'privacy.title': 'Datenschutz und Daten',
      'privacy.description': 'Ihr Datenschutz ist uns wichtig. Bitte überprüfen Sie unsere Datenschutzrichtlinie, die auch Ihre Nutzung der App regelt, um unsere Praktiken zu verstehen.',
      'termination.title': 'Kündigung',
      'termination.description': 'Wir können Ihren Zugang zur App sofort ohne vorherige Ankündigung aus jedem Grund beenden oder aussetzen, einschließlich wenn Sie diese Bedingungen verletzen.',
      'disclaimer.title': 'Haftungsausschluss',
      'disclaimer.description': 'Die App wird "wie besehen" ohne Garantien jeglicher Art bereitgestellt. Wir garantieren nicht, dass die App fehlerfrei oder ununterbrochen funktioniert.',
      'limitation.title': 'Haftungsbeschränkung',
      'limitation.description': 'In keinem Fall haftet MetaLeap LLC für indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung der App entstehen oder damit zusammenhängen.',
      'changes.title': 'Änderungen der Bedingungen',
      'changes.description': 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Wir werden Benutzer über wesentliche Änderungen informieren, indem wir die neuen Bedingungen in der App veröffentlichen.',
      'contact.title': 'Kontaktinformationen',
      'contact.description': 'Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns unter:',
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

export default async function TermsOfService({ params }: { params: Promise<{ locale: string }> }) {
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
                {t('acceptance.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('acceptance.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('serviceDescription.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('serviceDescription.description', locale)}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('serviceDescription.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('userAccounts.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('userAccounts.description', locale)}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('userAccounts.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('acceptableUse.title', locale)}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('acceptableUse.description', locale)}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {tArray('acceptableUse.items', locale).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('intellectualProperty.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('intellectualProperty.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('privacy.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termination.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('termination.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('disclaimer.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('disclaimer.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('limitation.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('limitation.description', locale)}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('changes.title', locale)}
              </h2>
              <p className="text-gray-700">
                {t('changes.description', locale)}
              </p>
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
