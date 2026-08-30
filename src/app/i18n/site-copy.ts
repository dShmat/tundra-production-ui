import {EquipmentType} from '../models/models';

export type Locale = 'en' | 'ru' | 'ar';
export type SitePage = 'home' | 'equipment' | 'rules' | 'privacy';

export interface ContentSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface SiteCopy {
  languageName: string;
  nav: { spaces: string; equipment: string; price: string; contact: string; talk: string; languages: string };
  actions: { book: string; bookStudio: string; more: string; backToTop: string };
  home: {
    heroTitle: string;
    heroDescription: string;
    heroAlt: string;
    featuresTitle: string;
    features: Array<{ image: string; name: string }>;
    spacesTitle: string;
    spacesIntro: string;
    indoorSpaces: Array<{ name: string; description: string }>;
    outdoorSpacesIntro: string;
    outdoorSpaces: Array<{ name: string; description: string }>;
    spaces: Array<{ image: string; name: string; description: string }>;
    spacesOutro: string;
    studioPlanAlt: string;
    equipmentTitle: string;
    equipmentDescription: string;
    equipmentDescriptionContinuation: string;
    equipmentAlt: string;
    priceTitle: string;
    priceNotes: string[];
    additionalRate: string;
    hourLabels: string[];
    daytime: string;
    afterHours: string;
    instagram: string;
    contactsTitle: string;
    socialAlt: { instagram: string; whatsapp: string; telegram: string };
  };
  equipment: {
    title: string;
    intro: string;
    all: string;
    unit: string;
    categories: Record<EquipmentType, string>;
  };
  booking: { title: string; loading: string; fallback: string };
  contactDialog: {
    title: string;
    description: string;
    fullName: string;
    phone: string;
    email: string;
    message: string;
    send: string;
    whatsappGreeting: string;
  };
  rules: { title: string; updated: string; intro: string; sectionsLabel: string; sections: ContentSection[]; contactTitle: string; contactText: string };
  privacy: { title: string; updated: string; sectionsLabel: string; intro: string; sections: ContentSection[]; contactTitle: string; contactText: string };
  footer: { rights: string; rules: string; privacy: string };
  seo: Record<SitePage, { title: string; description: string }>;
  notFound: { title: string; description: string; home: string };
}

const commonFeatures = [
  'icons/map-gradient-icon.png',
  'icons/infinity-gradient-icon.png',
  'icons/equipment-gradient-icon.png',
  'icons/cyclorama-gradient-icon.png',
  'icons/daylight-gradient-icon.png',
];

export const SITE_COPY: Record<Locale, SiteCopy> = {
  en: {
    languageName: 'English',
    nav: {spaces: 'Spaces', equipment: 'Equipment', price: 'Prices', contact: 'Contact', talk: "Let's talk", languages: 'Choose language'},
    actions: {book: 'Book now', bookStudio: 'Book Studio Now', more: 'More', backToTop: 'Back to top'},
    home: {
      heroTitle: 'Abu Dhabi’s Creative Photo Studio',
      heroDescription: '',
      heroAlt: 'Daylight photo studio for rent in Al Zeina, Abu Dhabi',
      featuresTitle: 'Studio features',
      features: [
        {image: commonFeatures[0], name: 'Abu Dhabi Al Zeina'},
        {image: commonFeatures[1], name: 'All studio included'},
        {image: commonFeatures[2], name: 'Professional equipment'},
        {image: commonFeatures[3], name: '4×5 m cyclorama'},
        {image: commonFeatures[4], name: 'Daylight Studio'},
      ],
      spacesTitle: 'SPACES',
      spacesIntro: 'is a spacious 100 m² room that easily transforms into different setups:',
      indoorSpaces: [
        {name: 'Cyclorama', description: '4×5 m with professional lighting, perfect for fashion, ads, and creative shoots.'},
        {name: 'Stylised furniture', description: 'a curated set of furniture and decor, adaptable for your vision.'},
      ],
      outdoorSpacesIntro: 'You also get access to private outdoor spaces:',
      outdoorSpaces: [
        {name: 'Terrace', description: 'a secluded area of the house for cozy shoots.'},
        {name: 'Rooftop', description: 'a rooftop with stunning city views and unforgettable sunsets.'},
      ],
      spaces: [
        {image: 'images/spaces/cyclorama.png', name: 'Cyclorama', description: 'A 4×5 m cyclorama with professional lighting for fashion, advertising and creative shoots.'},
        {image: 'images/spaces/stylised.png', name: 'Stylised furniture', description: 'A curated set of furniture and decor, adaptable for your vision.'},
        {image: 'images/spaces/terrace.jpg', name: 'Terrace', description: 'Open-air terrace with city light.'},
      ],
      spacesOutro: 'All in one place — to create diverse stories without changing locations.',
      studioPlanAlt: 'Floor plan of Tundra Studio in Abu Dhabi',
      equipmentTitle: 'EQUIPMENT',
      equipmentDescription: 'We provide professional equipment to cover every stage of your shoot.',
      equipmentDescriptionContinuation: 'From powerful studio lights to versatile stands and modifiers — everything you need to bring your vision to life.',
      equipmentAlt: 'Professional lighting equipment inside Tundra Studio',
      priceTitle: 'PRICE LIST',
      priceNotes: ['*PRICE INCLUDES FULL SPACE AND PROPS', '*2 LIGHTS INCLUDED UP TO 4 HOURS', '5+ HOURS — FULL ACCESS'],
      additionalRate: 'ADDITIONAL HOURLY RATE',
      hourLabels: ['1 HOUR', '2 HOURS', '3 HOURS', '4 HOURS', '5 HOURS', '6 HOURS', '7 HOURS', '8 HOURS', '9 HOURS', '10 HOURS'],
      daytime: '10AM – 8PM',
      afterHours: 'AFTER HOURS',
      instagram: 'VISIT OUR INSTAGRAM',
      contactsTitle: 'Contacts',
      socialAlt: {instagram: 'Tundra Studio on Instagram', whatsapp: 'Contact Tundra Studio on WhatsApp', telegram: 'Contact Tundra Studio on Telegram'},
    },
    equipment: {
      title: 'Photo Studio Equipment in Abu Dhabi',
      intro: 'Explore the lighting, modifiers, stands and sound equipment available with your Tundra Studio booking in Al Zeina.',
      all: 'All equipment',
      unit: 'pcs',
      categories: {
        [EquipmentType.VIDEO_LIGHT]: 'Continuous lights',
        [EquipmentType.FLASH_LIGHT]: 'Flash lights',
        [EquipmentType.MODIFIERS]: 'Modifiers',
        [EquipmentType.SOUND]: 'Sound',
        [EquipmentType.STANDS]: 'Stands',
        [EquipmentType.OTHER]: 'Other',
      },
    },
    booking: {title: 'Book Tundra Studio', loading: 'Loading booking calendar…', fallback: 'Open the booking calendar'},
    contactDialog: {
      title: "Let's work together!", description: 'Tell us about your shoot and we will help with your booking.', fullName: 'Full name', phone: 'Phone number', email: 'Email address', message: 'Your message', send: 'Send via WhatsApp', whatsappGreeting: "Hello! I'd like to book a session.",
    },
    rules: {
      title: 'Studio Rules', updated: 'Last updated: 20 August 2025', sectionsLabel: 'Studio rule sections',
      intro: 'These rules help keep the studio safe, productive and respectful for every guest. By booking or entering the studio, you agree to follow them.',
      sections: [
        {id: 'booking', title: 'Booking and payments', items: ['Bookings are confirmed after payment is received; unpaid holds may be released.', 'Setup and breakdown must be completed within the reserved time.', 'Rescheduling and cancellation terms are stated in the confirmation email.', 'Commercial projects may require insurance or permits.']},
        {id: 'access', title: 'Access, check-in and hours', items: ['Standard hours are 09:00–21:00; other times are available by request.', 'Late arrival does not extend the booking.', 'Check-in and orientation are required before using equipment.', 'Only registered guests may enter the studio.']},
        {id: 'use', title: 'Use of the space', items: ['Protect floors and walls and use furniture pads or sandbags when appropriate.', 'Do not drill, nail or permanently alter any surface.', 'Keep sound at a reasonable level and respect neighbouring premises.', 'Use clean shoes on the cyclorama; painting requires prior approval.']},
        {id: 'equipment', title: 'Equipment', items: ['Use included equipment safely and return it to its original location.', 'Only qualified operators may handle electrical, grip and lighting equipment.', 'Report defects immediately and do not use damaged equipment.', 'Additional rentals may be arranged and billed separately.']},
        {id: 'safety', title: 'Safety, food and drinks', items: ['Food and drinks are permitted only in designated areas and must be kept away from equipment.', 'Smoking and vaping are prohibited inside the studio.', 'Alcohol requires prior approval and compliance with local law.']},
        {id: 'restricted', title: 'Restricted items and activities', items: ['Weapons, illegal substances and hazardous materials are prohibited.', 'Rooftop access or exterior mounting requires written permission.', 'Indoor drone use requires an experienced operator and prior approval.']},
        {id: 'cleaning', title: 'Cleaning and reset', items: ['Leave the studio as you found it and return furniture and equipment.', 'Excessive mess, including glitter, paint or spills, may incur a cleaning fee.', 'Report damage before departure.']},
        {id: 'overtime', title: 'Overtime and penalties', items: ['Overtime is billed in 30-minute increments and exit must occur before the booking ends.', 'Unauthorised overtime or early access is charged at the posted rate or higher.', 'Repeated violations may result in refusal of future bookings.']},
        {id: 'damage', title: 'Damage and liability', items: ['You are responsible for your party and damage during the booking.', 'Charges apply for cyclorama repainting, repairs or replacement of damaged equipment.', 'The studio is not responsible for personal property that is lost, stolen or left behind.']},
        {id: 'privacy', title: 'Privacy and security', items: ['CCTV may operate in common areas for safety and security.', 'Do not film outside your reserved area or compromise another client’s privacy.', 'Personal information is handled under our Privacy Policy.']},
      ],
      contactTitle: 'Questions?', contactText: 'Contact Tundra Studio at',
    },
    privacy: {
      title: 'Privacy Policy', updated: 'Last updated: 20 August 2025', sectionsLabel: 'Privacy policy sections',
      intro: 'This Privacy Policy explains how Tundra Studio collects, uses and protects personal information when you browse our portfolio, book the studio or contact us.',
      sections: [
        {id: 'collect', title: 'Information we collect', items: ['Contact details such as name, email and phone number.', 'Booking details such as date, time, selected space and preferences.', 'Payment information processed by secure third parties; we do not store complete card details.', 'Usage data such as pages viewed, browser information and approximate location.', 'References or project notes that you choose to send.']},
        {id: 'use', title: 'How we use information', items: ['Manage bookings, studio access and customer support.', 'Improve site performance, content and user experience.', 'Send confirmations, reminders and service updates.', 'Meet legal obligations and prevent misuse or fraud.', 'Send optional marketing only with consent.']},
        {id: 'legal', title: 'Legal bases', paragraphs: ['Where applicable, processing is based on performance of a contract, legitimate interests, legal obligations or consent.']},
        {id: 'cookies', title: 'Cookies and similar technologies', paragraphs: ['We use essential cookies for core functionality and may use optional analytics cookies. Browser settings can be used to control cookies.']},
        {id: 'analytics', title: 'Analytics', paragraphs: ['Analytics services may process device and browser information to help us understand traffic and improve the website.']},
        {id: 'sharing', title: 'When we share information', items: ['Service providers supporting hosting, booking, payments, analytics or communications.', 'Authorities when required by law or necessary to protect rights and safety.', 'A successor organisation in connection with a merger, acquisition or business transfer.']},
        {id: 'retention', title: 'Data retention', paragraphs: ['We retain information only as long as necessary for the purposes described, legal compliance and dispute resolution.']},
        {id: 'security', title: 'Security', paragraphs: ['We use administrative and technical safeguards, but no method of transmission or storage can be guaranteed completely secure.']},
        {id: 'rights', title: 'Your rights', paragraphs: ['Depending on your location, you may request access, correction, deletion, restriction, objection or portability, and may withdraw consent. Contact us to make a request.']},
        {id: 'children', title: "Children's privacy", paragraphs: ['Our services are not directed to children below the applicable legal age. Contact us if you believe a child has provided personal information.']},
        {id: 'changes', title: 'Changes to this policy', paragraphs: ['We may update this policy and will publish the revised version and update date on this page.']},
      ],
      contactTitle: 'Contact us', contactText: 'For privacy questions or requests, email',
    },
    footer: {rights: 'Tundra Studio — All rights reserved.', rules: 'Studio Rules', privacy: 'Privacy Policy'},
    seo: {
      home: {title: 'Photo Studio Rental in Abu Dhabi | Tundra Studio', description: 'Rent a 100 m² daylight photo studio in Al Zeina, Abu Dhabi, with a 4×5 m cyclorama, styled interiors, outdoor spaces and professional lighting.'},
      equipment: {title: 'Photo Studio Equipment in Abu Dhabi | Tundra Studio', description: 'Explore lights, modifiers, stands and sound equipment available with your Tundra Studio booking in Al Zeina, Abu Dhabi.'},
      rules: {title: 'Studio Rules | Tundra Studio Abu Dhabi', description: 'Read the booking, access, equipment, safety and studio-use rules for Tundra Studio in Al Zeina, Abu Dhabi.'},
      privacy: {title: 'Privacy Policy | Tundra Studio Abu Dhabi', description: 'Learn how Tundra Studio collects, uses and protects personal information for website visits, enquiries and studio bookings.'},
    },
    notFound: {title: 'Page not found', description: 'The requested page does not exist.', home: 'Return to the studio'},
  },
  ru: {
    languageName: 'Русский',
    nav: {spaces: 'Пространства', equipment: 'Оборудование', price: 'Цены', contact: 'Контакты', talk: 'Написать нам', languages: 'Выбрать язык'},
    actions: {book: 'Забронировать', bookStudio: 'Забронировать студию', more: 'Подробнее', backToTop: 'Наверх'},
    home: {
      heroTitle: 'Аренда фотостудии в Абу-Даби',
      heroDescription: 'Светлая студия площадью 100 м² в Al Zeina: циклорама 4×5 м, стильные интерьеры, открытые площадки и профессиональный свет.',
      heroAlt: 'Светлая фотостудия в аренду в районе Al Zeina, Абу-Даби',
      featuresTitle: 'Преимущества студии',
      features: [
        {image: commonFeatures[0], name: 'Al Zeina, Абу-Даби'},
        {image: commonFeatures[1], name: 'Вся студия включена'},
        {image: commonFeatures[2], name: 'Профессиональное оборудование'},
        {image: commonFeatures[3], name: 'Циклорама 4×5 м'},
        {image: commonFeatures[4], name: 'Естественный свет'},
      ],
      spacesTitle: 'Пространства',
      spacesIntro: '— просторный зал площадью 100 м², который легко трансформируется под разные задачи:',
      indoorSpaces: [
        {name: 'Циклорама', description: '4×5 м с профессиональным светом для модных, рекламных и творческих съёмок.'},
        {name: 'Стильная мебель', description: 'подборка мебели и декора, которую можно адаптировать под вашу идею.'},
      ],
      outdoorSpacesIntro: 'Также доступны приватные открытые пространства:',
      outdoorSpaces: [
        {name: 'Терраса', description: 'уединённая часть дома для уютных съёмок.'},
        {name: 'Крыша', description: 'площадка с видом на город и незабываемыми закатами.'},
      ],
      spaces: [
        {image: 'images/spaces/cyclorama.png', name: 'Циклорама', description: 'Циклорама 4×5 м с профессиональным светом для модных, рекламных и творческих съёмок.'},
        {image: 'images/spaces/stylised.png', name: 'Стильный интерьер', description: 'Подборка мебели и декора, которую легко адаптировать под вашу идею.'},
        {image: 'images/spaces/terrace.jpg', name: 'Терраса и крыша', description: 'Приватные открытые зоны с естественным светом, видом на город и закат.'},
      ],
      spacesOutro: 'Всё в одном месте — для разных историй без смены локации.',
      studioPlanAlt: 'План фотостудии Tundra Studio в Абу-Даби',
      equipmentTitle: 'Профессиональное оборудование',
      equipmentDescription: 'Мы предоставляем профессиональное оборудование для каждого этапа съёмки.',
      equipmentDescriptionContinuation: 'Мощный студийный свет, универсальные стойки и модификаторы — всё, чтобы воплотить вашу идею.',
      equipmentAlt: 'Профессиональное световое оборудование в Tundra Studio',
      priceTitle: 'Стоимость аренды',
      priceNotes: ['Вся студия и реквизит включены', 'Два источника света включены при аренде до четырёх часов', 'Полный доступ к оборудованию при аренде от пяти часов'],
      additionalRate: 'Дополнительный тариф за час',
      hourLabels: ['1 час', '2 часа', '3 часа', '4 часа', '5 часов', '6 часов', '7 часов', '8 часов', '9 часов', '10 часов'],
      daytime: '10:00–20:00', afterHours: 'В нерабочее время', instagram: 'Наш Instagram', contactsTitle: 'Контакты Tundra Studio',
      socialAlt: {instagram: 'Tundra Studio в Instagram', whatsapp: 'Написать Tundra Studio в WhatsApp', telegram: 'Написать Tundra Studio в Telegram'},
    },
    equipment: {
      title: 'Оборудование фотостудии в Абу-Даби', intro: 'Свет, модификаторы, стойки и звуковое оборудование, доступные при бронировании Tundra Studio в Al Zeina.', all: 'Всё оборудование', unit: 'шт.',
      categories: {[EquipmentType.VIDEO_LIGHT]: 'Постоянный свет', [EquipmentType.FLASH_LIGHT]: 'Импульсный свет', [EquipmentType.MODIFIERS]: 'Модификаторы', [EquipmentType.SOUND]: 'Звук', [EquipmentType.STANDS]: 'Стойки', [EquipmentType.OTHER]: 'Другое'},
    },
    booking: {title: 'Забронировать Tundra Studio', loading: 'Загружаем календарь…', fallback: 'Открыть календарь бронирования'},
    contactDialog: {title: 'Давайте работать вместе!', description: 'Расскажите о съёмке, и мы поможем с бронированием.', fullName: 'Имя', phone: 'Телефон', email: 'Email', message: 'Сообщение', send: 'Отправить в WhatsApp', whatsappGreeting: 'Здравствуйте! Я хочу забронировать съёмку.'},
    rules: {
      title: 'Правила студии', updated: 'Обновлено: 20 августа 2025', sectionsLabel: 'Разделы правил студии', intro: 'Эти правила помогают сохранять безопасную, продуктивную и уважительную атмосферу. Бронируя или посещая студию, вы соглашаетесь их соблюдать.',
      sections: [
        {id: 'booking', title: 'Бронирование и оплата', items: ['Бронирование подтверждается после оплаты; неоплаченная бронь может быть снята.', 'Подготовка и уборка должны завершиться в оплаченное время.', 'Условия переноса и отмены указаны в письме-подтверждении.', 'Для коммерческих проектов могут потребоваться страховка или разрешения.']},
        {id: 'access', title: 'Доступ, регистрация и часы', items: ['Стандартные часы работы — 09:00–21:00; другое время согласуется отдельно.', 'Опоздание не продлевает время бронирования.', 'Перед использованием оборудования обязательны регистрация и инструктаж.', 'В студию допускаются только зарегистрированные гости.']},
        {id: 'use', title: 'Использование пространства', items: ['Берегите полы и стены, используйте защитные накладки и утяжелители.', 'Запрещено сверлить, забивать гвозди и необратимо менять поверхности.', 'Соблюдайте разумный уровень шума и уважайте соседей.', 'На циклораме используйте чистую обувь; покраска возможна только по согласованию.']},
        {id: 'equipment', title: 'Оборудование', items: ['Используйте оборудование безопасно и возвращайте его на место.', 'Электрическое, световое и грип-оборудование используют только квалифицированные специалисты.', 'Сразу сообщайте о неисправностях и не используйте повреждённую технику.', 'Дополнительная аренда согласуется и оплачивается отдельно.']},
        {id: 'safety', title: 'Безопасность, еда и напитки', items: ['Еда и напитки разрешены только в обозначенных зонах вдали от оборудования.', 'Курение и вейпы внутри запрещены.', 'Алкоголь требует предварительного согласования и соблюдения местных законов.']},
        {id: 'restricted', title: 'Запрещённые предметы и действия', items: ['Запрещены оружие, незаконные вещества и опасные материалы.', 'Выход на крышу и наружный монтаж требуют письменного разрешения.', 'Полёты дрона внутри требуют опытного оператора и согласования.']},
        {id: 'cleaning', title: 'Чистота и порядок', items: ['Оставьте студию в исходном состоянии и верните мебель и технику на места.', 'За сильное загрязнение, включая блёстки, краску и разливы, может взиматься плата.', 'Сообщите о повреждениях до ухода.']},
        {id: 'overtime', title: 'Продление и штрафы', items: ['Продление оплачивается интервалами по 30 минут; покинуть помещение нужно до окончания брони.', 'Несогласованное продление или ранний вход оплачиваются по повышенному тарифу.', 'Повторные нарушения могут привести к отказу в будущих бронированиях.']},
        {id: 'damage', title: 'Повреждения и ответственность', items: ['Вы отвечаете за свою группу и ущерб во время бронирования.', 'Покраска циклорамы, ремонт и замена техники оплачиваются отдельно.', 'Студия не отвечает за потерянные, украденные или забытые вещи.']},
        {id: 'privacy', title: 'Конфиденциальность и безопасность', items: ['В общих зонах может вестись видеонаблюдение.', 'Не снимайте за пределами арендованной зоны и уважайте приватность других клиентов.', 'Персональные данные обрабатываются согласно Политике конфиденциальности.']},
      ], contactTitle: 'Остались вопросы?', contactText: 'Напишите Tundra Studio:',
    },
    privacy: {
      title: 'Политика конфиденциальности', updated: 'Обновлено: 20 августа 2025', sectionsLabel: 'Разделы политики конфиденциальности', intro: 'Эта политика объясняет, как Tundra Studio собирает, использует и защищает персональные данные при просмотре портфолио, бронировании студии и обращении к нам.',
      sections: [
        {id: 'collect', title: 'Какие данные мы собираем', items: ['Контактные данные: имя, email и телефон.', 'Данные бронирования: дата, время, выбранное пространство и пожелания.', 'Платёжные данные обрабатываются защищёнными сторонними сервисами; полные данные карты мы не храним.', 'Данные об использовании сайта: просмотренные страницы, браузер и примерное местоположение.', 'Референсы и описание проекта, которые вы отправляете добровольно.']},
        {id: 'use', title: 'Как мы используем данные', items: ['Управляем бронированиями, доступом и поддержкой.', 'Улучшаем сайт, контент и пользовательский опыт.', 'Отправляем подтверждения, напоминания и сервисные сообщения.', 'Соблюдаем закон и предотвращаем злоупотребления.', 'Отправляем маркетинговые сообщения только с согласия.']},
        {id: 'legal', title: 'Правовые основания', paragraphs: ['Когда применимо, обработка основана на исполнении договора, законном интересе, юридической обязанности или согласии.']},
        {id: 'cookies', title: 'Cookie и похожие технологии', paragraphs: ['Мы используем необходимые cookie и можем использовать необязательные аналитические cookie. Управлять ими можно в настройках браузера.']},
        {id: 'analytics', title: 'Аналитика', paragraphs: ['Аналитические сервисы могут обрабатывать сведения об устройстве и браузере для анализа трафика и улучшения сайта.']},
        {id: 'sharing', title: 'Передача данных', items: ['Поставщикам услуг хостинга, бронирования, платежей, аналитики и коммуникаций.', 'Государственным органам, когда этого требует закон или защита прав и безопасности.', 'Правопреемнику при слиянии, покупке или передаче бизнеса.']},
        {id: 'retention', title: 'Срок хранения', paragraphs: ['Мы храним данные только столько, сколько необходимо для указанных целей, соблюдения закона и разрешения споров.']},
        {id: 'security', title: 'Безопасность', paragraphs: ['Мы применяем административные и технические меры защиты, но ни один способ передачи или хранения не гарантирует абсолютной безопасности.']},
        {id: 'rights', title: 'Ваши права', paragraphs: ['В зависимости от страны вы можете запросить доступ, исправление, удаление, ограничение, возражение или перенос данных, а также отозвать согласие.']},
        {id: 'children', title: 'Данные детей', paragraphs: ['Услуги не предназначены для детей младше установленного законом возраста. Сообщите нам, если ребёнок передал персональные данные.']},
        {id: 'changes', title: 'Изменения политики', paragraphs: ['Мы можем обновлять эту политику; новая версия и дата обновления будут опубликованы на этой странице.']},
      ], contactTitle: 'Связаться с нами', contactText: 'По вопросам персональных данных напишите:',
    },
    footer: {rights: 'Tundra Studio — Все права защищены.', rules: 'Правила студии', privacy: 'Конфиденциальность'},
    seo: {
      home: {title: 'Аренда фотостудии в Абу-Даби | Tundra Studio', description: 'Арендуйте светлую фотостудию 100 м² в Al Zeina, Абу-Даби: циклорама 4×5 м, интерьеры, открытые зоны и профессиональный свет.'},
      equipment: {title: 'Оборудование фотостудии в Абу-Даби | Tundra Studio', description: 'Свет, модификаторы, стойки и звук, доступные при бронировании фотостудии Tundra Studio в районе Al Zeina.'},
      rules: {title: 'Правила фотостудии | Tundra Studio Абу-Даби', description: 'Правила бронирования, доступа, использования оборудования и безопасности в фотостудии Tundra Studio.'},
      privacy: {title: 'Политика конфиденциальности | Tundra Studio', description: 'Как Tundra Studio собирает, использует и защищает данные посетителей сайта и клиентов фотостудии.'},
    },
    notFound: {title: 'Страница не найдена', description: 'Такой страницы не существует.', home: 'Вернуться к студии'},
  },
  ar: {
    languageName: 'العربية',
    nav: {spaces: 'المساحات', equipment: 'المعدات', price: 'الأسعار', contact: 'التواصل', talk: 'تواصل معنا', languages: 'اختر اللغة'},
    actions: {book: 'احجز الآن', bookStudio: 'احجز الاستوديو الآن', more: 'المزيد', backToTop: 'العودة إلى الأعلى'},
    home: {
      heroTitle: 'استوديو تصوير للإيجار في أبوظبي',
      heroDescription: 'استوديو بإضاءة طبيعية بمساحة 100 م² في الزينة، مع سيكلوراما 4×5 م وديكورات أنيقة ومساحات خارجية وإضاءة احترافية.',
      heroAlt: 'استوديو تصوير بإضاءة طبيعية للإيجار في الزينة، أبوظبي',
      featuresTitle: 'مميزات الاستوديو',
      features: [
        {image: commonFeatures[0], name: 'الزينة، أبوظبي'},
        {image: commonFeatures[1], name: 'الاستوديو بالكامل مشمول'},
        {image: commonFeatures[2], name: 'معدات احترافية'},
        {image: commonFeatures[3], name: 'سيكلوراما 4×5 م'},
        {image: commonFeatures[4], name: 'إضاءة طبيعية'},
      ],
      spacesTitle: 'المساحات',
      spacesIntro: 'عبارة عن قاعة واسعة بمساحة 100 م² يمكن تحويلها بسهولة إلى إعدادات مختلفة:',
      indoorSpaces: [
        {name: 'السيكلوراما', description: 'بمساحة 4×5 م وإضاءة احترافية، مثالية للأزياء والإعلانات والتصوير الإبداعي.'},
        {name: 'الأثاث المنسّق', description: 'مجموعة مختارة من الأثاث والديكور يمكن تكييفها مع رؤيتك.'},
      ],
      outdoorSpacesIntro: 'كما تتوفر مساحات خارجية خاصة:',
      outdoorSpaces: [
        {name: 'التراس', description: 'مساحة منعزلة من المنزل لجلسات تصوير مريحة.'},
        {name: 'السطح', description: 'سطح بإطلالات رائعة على المدينة وغروب لا يُنسى.'},
      ],
      spaces: [
        {image: 'images/spaces/cyclorama.png', name: 'السيكلوراما', description: 'سيكلوراما 4×5 م مع إضاءة احترافية لتصوير الأزياء والإعلانات والمشاريع الإبداعية.'},
        {image: 'images/spaces/stylised.png', name: 'ديكور أنيق', description: 'مجموعة مختارة من الأثاث والديكور يمكن تكييفها مع فكرتك.'},
        {image: 'images/spaces/terrace.jpg', name: 'التراس والسطح', description: 'مساحات خارجية خاصة بإضاءة طبيعية وإطلالات على المدينة وخلفيات الغروب.'},
      ],
      spacesOutro: 'كل ذلك في مكان واحد لصناعة قصص متنوعة من دون تغيير الموقع.',
      studioPlanAlt: 'مخطط Tundra Studio في أبوظبي',
      equipmentTitle: 'معدات استوديو احترافية',
      equipmentDescription: 'نوفر معدات احترافية تغطي كل مرحلة من مراحل جلسة التصوير.',
      equipmentDescriptionContinuation: 'من إضاءة الاستوديو القوية إلى الحوامل ومعدّلات الإضاءة المتنوعة — كل ما تحتاجه لتحقيق رؤيتك.',
      equipmentAlt: 'معدات إضاءة احترافية داخل Tundra Studio',
      priceTitle: 'أسعار إيجار الاستوديو',
      priceNotes: ['الاستوديو بالكامل والإكسسوارات مشمولة', 'مصدران للإضاءة مشمولان للحجوزات حتى أربع ساعات', 'استخدام كامل للمعدات للحجوزات من خمس ساعات فأكثر'],
      additionalRate: 'السعر الإضافي للساعة',
      hourLabels: ['ساعة واحدة', 'ساعتان', '3 ساعات', '4 ساعات', '5 ساعات', '6 ساعات', '7 ساعات', '8 ساعات', '9 ساعات', '10 ساعات'],
      daytime: '10:00–20:00', afterHours: 'خارج ساعات العمل', instagram: 'زوروا حسابنا على Instagram', contactsTitle: 'تواصل مع Tundra Studio',
      socialAlt: {instagram: 'Tundra Studio على Instagram', whatsapp: 'تواصل مع Tundra Studio عبر WhatsApp', telegram: 'تواصل مع Tundra Studio عبر Telegram'},
    },
    equipment: {
      title: 'معدات استوديو تصوير في أبوظبي', intro: 'تعرّف على الإضاءة والمعدّلات والحوامل ومعدات الصوت المتاحة مع حجز Tundra Studio في الزينة.', all: 'كل المعدات', unit: 'قطعة',
      categories: {[EquipmentType.VIDEO_LIGHT]: 'إضاءة مستمرة', [EquipmentType.FLASH_LIGHT]: 'إضاءة فلاش', [EquipmentType.MODIFIERS]: 'معدّلات الإضاءة', [EquipmentType.SOUND]: 'الصوت', [EquipmentType.STANDS]: 'الحوامل', [EquipmentType.OTHER]: 'أخرى'},
    },
    booking: {title: 'احجز Tundra Studio', loading: 'جارٍ تحميل تقويم الحجز…', fallback: 'فتح تقويم الحجز'},
    contactDialog: {title: 'لنعمل معاً!', description: 'أخبرنا عن جلسة التصوير وسنساعدك في الحجز.', fullName: 'الاسم الكامل', phone: 'رقم الهاتف', email: 'البريد الإلكتروني', message: 'رسالتك', send: 'إرسال عبر WhatsApp', whatsappGreeting: 'مرحباً! أود حجز جلسة تصوير.'},
    rules: {
      title: 'قواعد الاستوديو', updated: 'آخر تحديث: 20 أغسطس 2025', sectionsLabel: 'أقسام قواعد الاستوديو', intro: 'تساعد هذه القواعد في الحفاظ على بيئة آمنة ومنتجة ومحترمة للجميع. عند الحجز أو دخول الاستوديو فإنك توافق على الالتزام بها.',
      sections: [
        {id: 'booking', title: 'الحجز والدفع', items: ['يتأكد الحجز بعد استلام الدفع، وقد يتم إلغاء الحجوزات غير المدفوعة.', 'يجب إنهاء التجهيز والترتيب ضمن وقت الحجز.', 'ترد شروط التعديل والإلغاء في رسالة تأكيد الحجز.', 'قد تتطلب المشاريع التجارية تأميناً أو تصاريح.']},
        {id: 'access', title: 'الدخول وتسجيل الوصول والساعات', items: ['ساعات العمل المعتادة 09:00–21:00، ويمكن طلب أوقات أخرى.', 'التأخر لا يمدد مدة الحجز.', 'يلزم تسجيل الوصول والحصول على إرشادات قبل استخدام المعدات.', 'يسمح بالدخول للضيوف المسجلين فقط.']},
        {id: 'use', title: 'استخدام المساحة', items: ['احمِ الأرضيات والجدران واستخدم الوسائد أو أكياس الرمل عند الحاجة.', 'يمنع الحفر أو تثبيت المسامير أو إجراء تغييرات دائمة.', 'حافظ على مستوى صوت مناسب واحترم الجيران.', 'استخدم أحذية نظيفة على السيكلوراما، ويتطلب الطلاء موافقة مسبقة.']},
        {id: 'equipment', title: 'المعدات', items: ['استخدم المعدات بأمان وأعدها إلى مكانها.', 'يتعامل مع معدات الكهرباء والإضاءة والتثبيت أشخاص مؤهلون فقط.', 'أبلغ فوراً عن الأعطال ولا تستخدم المعدات التالفة.', 'يمكن ترتيب معدات إضافية مقابل رسوم منفصلة.']},
        {id: 'safety', title: 'السلامة والطعام والمشروبات', items: ['يسمح بالطعام والمشروبات في المناطق المخصصة فقط وبعيداً عن المعدات.', 'يمنع التدخين واستخدام السجائر الإلكترونية داخل الاستوديو.', 'يتطلب الكحول موافقة مسبقة والالتزام بالقوانين المحلية.']},
        {id: 'restricted', title: 'المواد والأنشطة الممنوعة', items: ['تمنع الأسلحة والمواد غير القانونية والمواد الخطرة.', 'يتطلب دخول السطح أو التثبيت الخارجي إذناً كتابياً.', 'يتطلب تشغيل الدرون في الداخل مشغلاً خبيراً وموافقة مسبقة.']},
        {id: 'cleaning', title: 'النظافة وإعادة الترتيب', items: ['اترك الاستوديو كما وجدته وأعد الأثاث والمعدات.', 'قد تفرض رسوم تنظيف عند وجود فوضى شديدة مثل اللمعان أو الطلاء أو السوائل المسكوبة.', 'أبلغ عن أي ضرر قبل المغادرة.']},
        {id: 'overtime', title: 'الوقت الإضافي والمخالفات', items: ['يحتسب الوقت الإضافي كل 30 دقيقة ويجب المغادرة قبل نهاية الحجز.', 'يحتسب الدخول المبكر أو الوقت الإضافي غير المصرح به بالسعر المعلن أو أعلى.', 'قد تؤدي المخالفات المتكررة إلى رفض الحجوزات المستقبلية.']},
        {id: 'damage', title: 'الأضرار والمسؤولية', items: ['أنت مسؤول عن مجموعتك وعن أي ضرر خلال الحجز.', 'تطبق رسوم لإعادة طلاء السيكلوراما أو إصلاح المعدات أو استبدالها.', 'الاستوديو غير مسؤول عن الممتلكات المفقودة أو المسروقة أو المتروكة.']},
        {id: 'privacy', title: 'الخصوصية والأمان', items: ['قد تعمل كاميرات المراقبة في المناطق المشتركة لأغراض السلامة.', 'لا تصوّر خارج المساحة المحجوزة واحترم خصوصية العملاء الآخرين.', 'تعالج البيانات الشخصية وفق سياسة الخصوصية.']},
      ], contactTitle: 'هل لديك سؤال؟', contactText: 'تواصل مع Tundra Studio عبر',
    },
    privacy: {
      title: 'سياسة الخصوصية', updated: 'آخر تحديث: 20 أغسطس 2025', sectionsLabel: 'أقسام سياسة الخصوصية', intro: 'توضح هذه السياسة كيف تجمع Tundra Studio المعلومات الشخصية وتستخدمها وتحميها عند تصفح الأعمال أو حجز الاستوديو أو التواصل معنا.',
      sections: [
        {id: 'collect', title: 'المعلومات التي نجمعها', items: ['بيانات التواصل مثل الاسم والبريد الإلكتروني ورقم الهاتف.', 'تفاصيل الحجز مثل التاريخ والوقت والمساحة المختارة والتفضيلات.', 'تعالج جهات خارجية آمنة بيانات الدفع، ولا نخزن تفاصيل البطاقة كاملة.', 'بيانات استخدام الموقع مثل الصفحات والمتصفح والموقع التقريبي.', 'المراجع أو ملاحظات المشروع التي ترسلها باختيارك.']},
        {id: 'use', title: 'كيف نستخدم المعلومات', items: ['إدارة الحجوزات والدخول ودعم العملاء.', 'تحسين أداء الموقع والمحتوى وتجربة المستخدم.', 'إرسال التأكيدات والتذكيرات وتحديثات الخدمة.', 'الامتثال للقانون ومنع إساءة الاستخدام أو الاحتيال.', 'إرسال التسويق الاختياري بعد الحصول على الموافقة.']},
        {id: 'legal', title: 'الأسس القانونية', paragraphs: ['عند انطباقها، تستند المعالجة إلى تنفيذ العقد أو المصلحة المشروعة أو الالتزام القانوني أو الموافقة.']},
        {id: 'cookies', title: 'ملفات تعريف الارتباط', paragraphs: ['نستخدم ملفات ضرورية للوظائف الأساسية وقد نستخدم ملفات تحليلية اختيارية. يمكن التحكم بها من إعدادات المتصفح.']},
        {id: 'analytics', title: 'التحليلات', paragraphs: ['قد تعالج خدمات التحليل معلومات الجهاز والمتصفح لفهم الزيارات وتحسين الموقع.']},
        {id: 'sharing', title: 'مشاركة المعلومات', items: ['مع مزودي خدمات الاستضافة والحجز والدفع والتحليلات والتواصل.', 'مع الجهات الرسمية عندما يفرض القانون ذلك أو لحماية الحقوق والسلامة.', 'مع الجهة الخلف عند الاندماج أو الاستحواذ أو نقل الأعمال.']},
        {id: 'retention', title: 'الاحتفاظ بالبيانات', paragraphs: ['نحتفظ بالمعلومات فقط للمدة اللازمة للأغراض المذكورة والامتثال القانوني وتسوية النزاعات.']},
        {id: 'security', title: 'الأمان', paragraphs: ['نستخدم وسائل حماية إدارية وتقنية، لكن لا يمكن ضمان الأمان الكامل لأي وسيلة نقل أو تخزين.']},
        {id: 'rights', title: 'حقوقك', paragraphs: ['بحسب موقعك، قد تطلب الوصول أو التصحيح أو الحذف أو التقييد أو الاعتراض أو نقل البيانات، ويمكنك سحب الموافقة.']},
        {id: 'children', title: 'خصوصية الأطفال', paragraphs: ['خدماتنا غير موجهة للأطفال دون السن القانوني. تواصل معنا إذا كنت تعتقد أن طفلاً قدم معلومات شخصية.']},
        {id: 'changes', title: 'تغييرات السياسة', paragraphs: ['قد نحدّث هذه السياسة وسننشر النسخة الجديدة وتاريخ التحديث في هذه الصفحة.']},
      ], contactTitle: 'تواصل معنا', contactText: 'للاستفسارات أو الطلبات المتعلقة بالخصوصية، راسلنا على',
    },
    footer: {rights: 'Tundra Studio — جميع الحقوق محفوظة.', rules: 'قواعد الاستوديو', privacy: 'سياسة الخصوصية'},
    seo: {
      home: {title: 'استوديو تصوير للإيجار في أبوظبي | Tundra Studio', description: 'استأجر استوديو تصوير بإضاءة طبيعية بمساحة 100 م² في الزينة، أبوظبي، مع سيكلوراما 4×5 م وديكورات وإضاءة احترافية.'},
      equipment: {title: 'معدات استوديو تصوير في أبوظبي | Tundra Studio', description: 'تعرّف على الإضاءة والمعدّلات والحوامل ومعدات الصوت المتاحة مع حجز Tundra Studio في الزينة، أبوظبي.'},
      rules: {title: 'قواعد استوديو التصوير | Tundra Studio أبوظبي', description: 'قواعد الحجز والدخول واستخدام المعدات والسلامة في Tundra Studio في الزينة، أبوظبي.'},
      privacy: {title: 'سياسة الخصوصية | Tundra Studio أبوظبي', description: 'تعرّف على كيفية جمع Tundra Studio للمعلومات الشخصية واستخدامها وحمايتها عند زيارة الموقع أو الحجز.'},
    },
    notFound: {title: 'الصفحة غير موجودة', description: 'الصفحة المطلوبة غير موجودة.', home: 'العودة إلى الاستوديو'},
  },
};
