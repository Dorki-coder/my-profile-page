import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Hello, I am Daniil Semenov!",
      contactInfo: "This is my contact information:",
      phone: "Phone",
      email: "Email",
      nif: "NIF",
      city: "City",
      address: "Address",
      phoneNumber: "+351 915870593",
      emailAddress: "DorkiPt@yandex.ru",
      nifNumber: "314778870",
      cityName: "Guimarães",
      addressDetail: "R. Dr. Avelino Germano 18, 2 andar"
    }
  },
  ru: {
    translation: {
      welcome: "Привет, я Даниил Семенов!",
      contactInfo: "Это моя контактная информация:",
      phone: "Телефон",
      email: "Email",
      nif: "Налоговый номер",
      city: "Город",
      address: "Адрес",
      phoneNumber: "+351 915870593",
      emailAddress: "DorkiPt@yandex.ru",
      nifNumber: "314778870",
      cityName: "Guimarães",
      addressDetail: "R. Dr. Avelino Germano 18, 2 andar"
    }
  },
  pt: {
    translation: {
      welcome: "Olá, eu sou Daniil Semenov!",
      contactInfo: "Estas são as minhas informações de contato:",
      phone: "Telefone",
      email: "Email",
      nif: "NIF",
      city: "Cidade",
      address: "Endereço",
      phoneNumber: "+351 915870593",
      emailAddress: "DorkiPt@yandex.ru",
      nifNumber: "314778870",
      cityName: "Guimarães",
      addressDetail: "R. Dr. Avelino Germano 18, 2 andar"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
