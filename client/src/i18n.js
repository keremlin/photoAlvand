import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Categories": "Photo Categories",
      "selections":"Best Selections",
      "bestQuality":"Best Quality",
      "goodPrice":"Good Price",
      "orderedPicture": "Ordered Picture",
      "expressPrepration":"Express Prepration",
      "home":"Home",
      "cart":"Cart",
      "logout":"LogOut",
      "login":"Login",
      "gallery":"Gallery",
      "collections":"Collections",
      "admin":"Admin",
      "searchImage":"Search",
      "search":"Search",
      "socialMedia":"Social Media",
      "aboutUs":"About Us",
      "links":"Links",
      "telegram":"Telegram",
      "instagram":"Instagram",
      "facebook":"Facebook",
      "contact":"Contacts",
      "rules":"Rules",
      "help":"Help",
      "hozeh":"Hozeh Honari",
      "ershad":"Ministry of culture",
      "shutter":"Shutter Stock",

    }
  },
  fa: {
    translation: {
      "Categories": "دسته بندی محتوی",
      "selections": "مجموعه های منتخب",
      "bestQuality":"کیفیت عالی",
      "goodPrice" : "قیمت مناسب",
      "orderedPicture":"عکس سفارشی",
      "expressPrepration":"تحویل سریع",
      "home":"صفحه اصلی",
      "cart":" سبد خرید",
      "logout":"خروج",
      "login":"ورود",
      "gallery":"گالری",
      "collections":"مجموعه ها",
      "admin":"ادمین",
      "searchImage":"جستجو عکس",
      "search":"جستجو",
      "socialMedia":"شبکه های اجتماعی",
      "aboutUs":"درباره ما",
      "links":"لینک های مفید",
      "telegram":"تلگرام",
      "instagram":"اینستاگرام",
      "facebook":"فیسبوک",
      "contact":"تماس با ما",
      "rules":"قوانین و مقررات",
      "help":"راهنمایی",
      "hozeh":"حوزه هنری",
      "ershad":"وزارت ارشاد",
      "shutter":"سایت رسمی شاتر استوک",

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;