import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'zh', 'es', 'fr', 'de'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

// Temporary hardcoded messages for testing
const tempMessages = {
  en: {
    navigation: {
      features: "Features",
      gallery: "Gallery",
      download: "Download"
    },
    hero: {
      tagline: "Stay Focused. Stay Motivated.",
      description: "Your journey to achieving more starts with MotifyUp."
    }
  },
  zh: {
    navigation: {
      features: "功能",
      gallery: "画廊",
      download: "下载"
    },
    hero: {
      tagline: "保持专注。保持动力。",
      description: "您的成就之旅从 MotifyUp 开始。"
    }
  },
  es: {
    navigation: {
      features: "Características",
      gallery: "Galería",
      download: "Descargar"
    },
    hero: {
      tagline: "Mantente enfocado. Mantente motivado.",
      description: "Tu viaje para lograr más comienza con MotifyUp."
    }
  },
  fr: {
    navigation: {
      features: "Fonctionnalités",
      gallery: "Galerie",
      download: "Télécharger"
    },
    hero: {
      tagline: "Restez concentré. Restez motivé.",
      description: "Votre voyage vers plus de réalisations commence avec MotifyUp."
    }
  },
  de: {
    navigation: {
      features: "Funktionen",
      gallery: "Galerie",
      download: "Herunterladen"
    },
    hero: {
      tagline: "Bleiben Sie fokussiert. Bleiben Sie motiviert.",
      description: "Ihre Reise zu mehr Erfolg beginnt mit MotifyUp."
    }
  }
};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) notFound();

  try {
    // Use hardcoded messages for now
    const messages = tempMessages[locale as keyof typeof tempMessages] || {};
    
    return {
      messages,
      locale: locale
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Return empty messages instead of calling notFound()
    return {
      messages: {},
      locale: locale
    };
  }
}); 