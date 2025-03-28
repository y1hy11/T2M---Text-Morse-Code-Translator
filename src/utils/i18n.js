// Core i18n Imports
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//Translation resources for all supported language
const resources = {
  // English translations
  en: {
    translation: {
      navigation: {
        home: "Home",
        translate: "Translate",
        contact: "Contact",
      },
      theme: {
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
      },
      translator: {
        textToMorse: "Text to Morse",
        morseToText: "Morse to Text",
        enterText: "Enter text",
        enterMorse: "Enter Morse code",
        translateToMorse: "Translate to Morse",
        translateToText: "Translate to Text",
        playMorseCode: "Play Morse Code",
        pauseMorseCode: "Pause Morse Code",
        switchMode: "Switch to",
      },
      homePage: {
        appTitle: "Text - Morse Code Translator",
        heroDescription:
          "A modern web application that translates between text and Morse code, with audio playback support.",
        startTranslating: "Start Translating",
        whatIsMorse: "What is Morse Code?",
        morseDefinition:
          "Morse code is a method of encoding text characters as sequences of dots and dashes (or short and long signals). Developed in the 1830s by Samuel Morse for use with the telegraph, it was the first widely used method of electrical communication.",
        usesOfMorse: "Uses of Morse Code",
        emergency: "Emergency Communications",
        aviation: "Aviation and Navigation",
        military: "Military Operations",
        accessibility: "Accessibility",
        amateurRadio: "Amateur Radio",
        emergencyDesc:
          "Used as SOS signals (···−−−···) during emergencies when other forms of communication fail",
        aviationDesc:
          "Employed in aviation for navigation aids and maritime communications",
        militaryDesc:
          "Historically used in military settings for secure communications",
        accessibilityDesc:
          "Enables communication for people with certain disabilities who cannot use conventional methods",
        amateurRadioDesc:
          "Still popular among amateur radio operators worldwide",
      },
      features: {
        title: "Features",
        textToMorse: "Convert any text to Morse code with ease.",
        morseToText: "Translate Morse code back to readable text.",
        audioPlayback: "Listen to the Morse code translation in real-time.",
        responsiveDesign:
          "Works flawlessly on both desktop and mobile devices.",
      },
      contact: {
        title: "Contact Us",
        intro:
          "Have questions or feedback about the Morse Code Translator? We'd love to hear from you!",
        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send Message",
        thankYou: "Thank you for your message!",
        errorMessage:
          "There was an error sending your message. Please try again.",
        sending: "Sending...",
        willReply: "We'll get back to you as soon as possible.",
        sendAnother: "Send Another Message",
        otherWays: "Other Ways to Connect",
        visitGithub1: "Visit our ",
        visitGithuba: "GitHub repository ",
        visitGithub2: "to contribute to the project.",
        nameRequired: "Name is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
      },
      footer: {
        aboutUs: "About Us",
        aboutText:
          "Morse Code Translator is a modern web application that helps you convert text to Morse code and vice versa.",
        quickLinks: "Quick Links",
        privacyPolicy: "Privacy Policy",
        connectWithUs: "Connect With Us",
        allRights: "All rights reserved.",
        madeWith: "Made with",
        by: "by",
      },
      error: {
        404: "404",
        pageNotFound: "Page Not Found",
        pageNotFoundDesc:
          "The page you're looking for doesn't exist or has been moved.",
        returnHome: "Return to Home",
        somethingWrong: "Something went wrong",
        refreshMessage:
          "We apologize for the inconvenience. Please try refreshing the page.",
        refreshPage: "Refresh Page",
      },
      privacy: {
        title: "Privacy Policy",
        infoWeCollect: "Information We Collect",
        cookies: "Cookies",
        cookiesInfo:
          "This application does not use cookies or similar tracking technologies.",
        thirdPartyServices: "Third-Party Services",
        thirdPartyServicesInfo:
          "We do not use any third-party services that collect or process your data.",
        changes: "Changes to This Policy",
        changesDesc:
          "We may update this privacy policy from time to time. You will be notified of any significant changes.",
        lastUpdated: "Last updated",
        contactDesc:
          "If you have any questions about this Privacy Policy, please",
      },
    },
  },
  // French translations
  fr: {
    translation: {
      navigation: {
        home: "Accueil",
        translate: "Traduire",
        contact: "Contact",
      },
      theme: {
        darkMode: "Mode Sombre",
        lightMode: "Mode Clair",
      },
      translator: {
        textToMorse: "Texte en Morse",
        morseToText: "Morse en Texte",
        enterText: "Entrez du texte",
        enterMorse: "Entrez du code Morse",
        translateToMorse: "Traduire en Morse",
        translateToText: "Traduire en Texte",
        playMorseCode: "Jouer le Code Morse",
        pauseMorseCode: "Pause le Code Morse",
        switchMode: "Passer à",
      },
      homePage: {
        appTitle: "Traducteur Texte - Code Morse",
        heroDescription:
          "Une application web moderne qui traduit entre le texte et le code Morse, avec support de lecture audio.",
        startTranslating: "Commencer la Traduction",
        whatIsMorse: "Qu'est-ce que le Code Morse ?",
        morseDefinition:
          "Le code Morse est une méthode de codage des caractères de texte en séquences de points et de tirets (ou signaux courts et longs). Développé dans les années 1830 par Samuel Morse pour le télégraphe, ce fut la première méthode de communication électrique largement utilisée.",
        usesOfMorse: "Utilisations du Code Morse",
        emergency: "Communications d'Urgence",
        aviation: "Aviation et Navigation",
        military: "Opérations Militaires",
        accessibility: "Accessibilité",
        amateurRadio: "Radio Amateur",
        emergencyDesc:
          "Utilisé comme signal SOS (···−−−···) lors d'urgences quand les autres formes de communication échouent",
        aviationDesc:
          "Employé dans l'aviation pour les aides à la navigation et les communications maritimes",
        militaryDesc:
          "Historiquement utilisé dans les contextes militaires pour des communications sécurisées",
        accessibilityDesc:
          "Permet la communication pour les personnes ayant certains handicaps qui ne peuvent pas utiliser les méthodes conventionnelles",
        amateurRadioDesc:
          "Toujours populaire parmi les opérateurs radio amateurs du monde entier",
      },
      features: {
        title: "Fonctionnalités",
        textToMorse:
          "Convertissez facilement n'importe quel texte en code Morse.",
        morseToText: "Traduisez le code Morse en texte lisible.",
        audioPlayback: "Écoutez la traduction en code Morse en temps réel.",
        responsiveDesign: "Fonctionne parfaitement sur ordinateur et mobile.",
      },
      contact: {
        title: "Contactez-nous",
        intro:
          "Vous avez des questions ou des commentaires sur le Traducteur de Code Morse ? Nous aimerions vous entendre !",
        name: "Nom",
        email: "Email",
        message: "Message",
        sendMessage: "Envoyer le Message",
        errorMessage:
          "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        sending: "Envoi en cours...",
        thankYou: "Merci pour votre message !",
        willReply: "Nous vous répondrons dès que possible.",
        sendAnother: "Envoyer un Autre Message",
        otherWays: "Autres Moyens de Connexion",
        visitGithub1: "Visitez notre",
        visitGithuba: "dépôt GitHub ",
        visitGithub2: "pour contribuer au projet.",
        nameRequired: "Le nom est requis",
        emailInvalid: "Veuillez entrer une adresse e-mail valide",
        messageRequired: "Le message est requis",
      },
      footer: {
        aboutUs: "À Propos",
        aboutText:
          "Le Traducteur de Code Morse est une application web moderne qui aide à convertir le texte en code Morse et vice versa.",
        quickLinks: "Liens Rapides",
        privacyPolicy: "Politique de Confidentialité",
        connectWithUs: "Connectez-vous avec Nous",
        allRights: "Tous droits réservés.",
        madeWith: "Fait avec",
        by: "par",
      },
      error: {
        404: "404",
        pageNotFound: "Page Non Trouvée",
        pageNotFoundDesc:
          "La page que vous recherchez n'existe pas ou a été déplacée.",
        returnHome: "Retour à l'Accueil",
        somethingWrong: "Quelque chose s'est mal passé",
        refreshMessage:
          "Nous nous excusons pour la gêne occasionnée. Veuillez rafraîchir la page.",
        refreshPage: "Rafraîchir la Page",
      },
      privacy: {
        title: "Politique de Confidentialité",
        infoWeCollect: "Informations que Nous Collectons",
        cookies: "Cookies",
        cookiesInfo:
          "Cette application n'utilise pas de cookies ou de technologies de suivi similaires.",
        thirdPartyServices: "Services Tiers",
        thirdPartyServicesInfo:
          "Nous n'utilisons aucun service tiers qui collecte ou traite vos données.",
        changes: "Modifications de cette Politique",
        changesDesc:
          "Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Vous serez informé de tout changement important.",
        lastUpdated: "Dernière mise à jour",
        contactDesc:
          "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez",
      },
    },
  },
  // Arabic translations
  ar: {
    translation: {
      navigation: {
        home: "الرئيسية",
        translate: "ترجمة",
        contact: "اتصل بنا",
      },
      theme: {
        darkMode: "الوضع الداكن",
        lightMode: "الوضع الفاتح",
      },
      translator: {
        textToMorse: "نص إلى مورس",
        morseToText: "مورس إلى نص",
        enterText: "أدخل النص",
        enterMorse: "أدخل شفرة مورس",
        translateToMorse: "ترجمة إلى مورس",
        translateToText: "ترجمة إلى نص",
        playMorseCode: "تشغيل شفرة مورس",
        pauseMorseCode: "إيقاف شفرة مورس",
        switchMode: "التبديل إلى",
      },
      homePage: {
        appTitle: "مترجم النص - شفرة مورس",
        heroDescription:
          "تطبيق ويب حديث يترجم بين النص وشفرة مورس، مع دعم تشغيل الصوت.",
        startTranslating: "ابدأ الترجمة",
        whatIsMorse: "ما هي شفرة مورس؟",
        morseDefinition:
          "شفرة مورس هي طريقة لترميز أحرف النص كسلسلة من النقاط والشرطات (أو إشارات قصيرة وطويلة). تم تطويرها في ثلاثينيات القرن التاسع عشر بواسطة صامويل مورس للاستخدام مع التلغراف، وكانت أول طريقة اتصال كهربائي تستخدم على نطاق واسع.",
        usesOfMorse: "استخدامات شفرة مورس",
        emergency: "اتصالات الطوارئ",
        aviation: "الطيران والملاحة",
        military: "العمليات العسكرية",
        accessibility: "إمكانية الوصول",
        amateurRadio: "راديو الهواة",
        emergencyDesc:
          "يستخدم كإشارات استغاثة (···−−−···) في حالات الطوارئ عندما تفشل وسائل الاتصال الأخرى",
        aviationDesc:
          "يستخدم في الطيران للمساعدة في الملاحة والاتصالات البحرية",
        militaryDesc: "استخدم تاريخياً في المواقع العسكرية للاتصالات الآمنة",
        accessibilityDesc:
          "يمكّن الاتصال للأشخاص ذوي الإعاقات الذين لا يمكنهم استخدام الطرق التقليدية",
        amateurRadioDesc:
          "لا يزال شائعاً بين هواة الراديو في جميع أنحاء العالم",
      },
      features: {
        title: "المميزات",
        textToMorse: "حول أي نص إلى شفرة مورس بسهولة.",
        morseToText: "ترجم شفرة مورس إلى نص مقروء.",
        audioPlayback: "استمع إلى ترجمة شفرة مورس في الوقت الفعلي.",
        responsiveDesign: "يعمل بسلاسة على أجهزة الكمبيوتر والمحمول.",
      },
      contact: {
        title: "اتصل بنا",
        intro: "هل لديك أسئلة أو تعليقات حول مترجم شفرة مورس؟ نود أن نسمع منك!",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        errorMessage: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
        sending: "جارٍ الإرسال...",
        thankYou: "شكراً لرسالتك!",
        willReply: "سنرد عليك في أقرب وقت ممكن.",
        sendAnother: "إرسال رسالة أخرى",
        otherWays: "طرق أخرى للتواصل",
        visitGithub1: "قم بزيارة ",
        visitGithuba: "مستودع GitHub ",
        visitGithub2: "للمساهمة في المشروع.",
        nameRequired: "الاسم مطلوب",
        emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صالح",
        messageRequired: "الرسالة مطلوبة",
      },
      footer: {
        aboutUs: "من نحن",
        aboutText:
          "مترجم شفرة مورس هو تطبيق ويب حديث يساعد في تحويل النص إلى شفرة مورس والعكس.",
        quickLinks: "روابط سريعة",
        privacyPolicy: "سياسة الخصوصية",
        connectWithUs: "تواصل معنا",
        allRights: "جميع الحقوق محفوظة.",
        madeWith: "صنع بـ",
        by: "بواسطة",
      },
      error: {
        404: "404",
        pageNotFound: "الصفحة غير موجودة",
        pageNotFoundDesc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
        returnHome: "العودة إلى الرئيسية",
        somethingWrong: "حدث خطأ ما",
        refreshMessage: "نعتذر عن الإزعاج. يرجى تحديث الصفحة.",
        refreshPage: "تحديث الصفحة",
      },
      privacy: {
        title: "سياسة الخصوصية",
        infoWeCollect: "المعلومات التي نجمعها",
        cookies: "الكوكيز",
        cookiesInfo:
          "هذا التطبيق لا يستخدم ملفات تعريف الارتباط أو تقنيات التتبع المماثلة.",
        thirdPartyServices: "خدمات الطرف الثالث",
        thirdPartyServicesInfo:
          "نحن لا نستخدم أي خدمات من طرف ثالث تجمع أو تعالج بياناتك.",
        changes: "التغييرات في هذه السياسة",
        changesDesc:
          "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم إخطارك بأي تغييرات مهمة.",
        lastUpdated: "آخر تحديث",
        contactDesc: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى",
      },
    },
  },
};

// i18next configuration and initialization
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;