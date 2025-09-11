import {CommonData, EquipmentType, PriceRate} from '../models/models';

export const keyFeatures: CommonData[] = [
  { id: 1, image: 'icons/map-icon.png', name: 'Abu Dhabi Al Zeina', description: 'Convenient location.' },
  { id: 2, image: 'icons/floorplan-icon.png', name: 'All studio included', description: 'Starting from 1 hour.' },
  { id: 3, image: 'icons/camera-icon.png', name: 'Professional equipment', description: 'Plenty or free with your rental' },
  { id: 4, image: 'icons/cyclorama-icon.png', name: 'Cyclorama', description: '6X5 meters cyclorama' },
  { id: 5, image: 'icons/sun-icon.png', name: 'Daylight Studio', description: 'Natural light' },
]

export const spaces: CommonData[] = [
  { id: 1, image: 'images/spaces/cyclorama.png', name: 'Cyclorama', description: 'Seamless white cyc with overhead grid.' },
  { id: 2, image: 'images/spaces/stylised.png', name: 'Stylised location', description: 'Designed sets with changeable props.' },
  { id: 3, image: 'images/spaces/terrace_init.png', name: 'Terrace', description: 'Open‑air terrace with city light.' }
];

export const priceNotes: string[] = [
  '*PRICE INCLUDES FULL SPACE AND PROPS',
  '*2 LIGHTS INCLUDED UP TO 4 HOURS',
  '5+ HOURS — FULL ACCESS'
];

export const studioRates: PriceRate[] = [
  { label: '1 HOUR',  price: 370 },
  { label: '2 HOURS', price: 600 },
  { label: '3 HOURS', price: 810 },
  { label: '4 HOURS', price: 1080 },
  { label: '5 HOURS', price: 1350 },
  { label: '6 HOURS', price: 1620 },
  { label: '7 HOURS', price: 1890 },
  { label: '8 HOURS', price: 2160 },
  { label: '9 HOURS', price: 2250 },
  { label: '10 HOURS', price: 2500 },
];

export const additionalRates: PriceRate[] = [
  { label: '10AM – 8PM',   price: 270 },
  { label: 'AFTER HOURS',  price: 370 },
];

export const contacts = {
  phoneDisplay: '+971 (58) 555 55 55',
  phoneLink: '+971585555555',
  email: 'info@tundrastd.com',
  address: 'Beach - Shop B9, Al Faridah Building, Al Raha Blvd, Al Zeina, Abu Dhabi',
  mapUrl: 'https://maps.app.goo.gl/qvU93LNRbUHNuvVi8',
  instagram: 'https://www.instagram.com/tundra.studio.ae/',
  youtube: '',
  pinterest: '',
  whatsapp: '+971585555555',
  telegram: '+971585555555',
};


export const equipment: CommonData[] = [
  //VIDEO LIGHT;
  {
    id: 1,
    name: "Amaran 60x",
    type: EquipmentType.VIDEO_LIGHT,
    description: "",
    image: "images/equipment/light/amaran-60x-test.png",
    number: 1
  },
  {
    id: 2,
    name: "Amaran 100D",
    type: EquipmentType.VIDEO_LIGHT,
    description: "",
    image: "images/equipment/light/amaran-100d-test.png",
    number: 1
  },
  {
    id: 3,
    name: "Amaran 150c",
    type: EquipmentType.VIDEO_LIGHT,
    description: "",
    image: "images/equipment/light/amaran-150c-test.png",
    number: 1
  },
  {
    id: 4,
    name: "Amaran 300c",
    type: EquipmentType.VIDEO_LIGHT,
    description: "",
    image: "images/equipment/light/amaran-300c-test.png",
    number: 2
  },
  {
    id: 5,
    name: "Godox SL60W",
    type: EquipmentType.VIDEO_LIGHT,
    description: "",
    image: "images/equipment/light/godox-sl60w-test.png",
    number: 1
  },

  //FLAHS LIGHT:
  {
    id: 6,
    name: "Godox AD600Pro-II",
    type: EquipmentType.FLASH_LIGHT,
    description: "",
    image: "images/equipment/light/godox-ad600pro-II-test.png",
    number: 2
  },
  {
    id: 7,
    name: "Flash Trigger for Sony",
    type: EquipmentType.FLASH_LIGHT,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 8,
    name: "Flash Trigger for Nikon",
    type: EquipmentType.FLASH_LIGHT,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 9,
    name: "Flash Trigger for Fuji",
    type: EquipmentType.FLASH_LIGHT,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 10,
    name: "Flash Trigger for Canon",
    type: EquipmentType.FLASH_LIGHT,
    description: "",
    image: "",
    number: 1
  },

  //Modifers
  {
    id: 11,
    name: "Aputure Lantern 66cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 12,
    name: "Softbox Apature light Dome SE 85cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 13,
    name: "Aputure Light Octadome 120cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 13,
    name: "Aputure Lantern 90cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 14,
    name: "Godox SB-GUSW 60x90cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 15,
    name: "Godox SB-FW 35x160cm",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 2
  },
  {
    id: 16,
    name: "Light Reflector Diffuser",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 17,
    name: "Apature spotlight",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },
  {
    id: 18,
    name: "Beuty dish",
    type: EquipmentType.MODIFIERS,
    description: "",
    image: "",
    number: 1
  },

  //Sound
  {
    id: 19,
    name: "Zoom H6 Recorder",
    type: EquipmentType.SOUND,
    description: "",
    image: "",
    number: 1
  },

  //Stands
  {
    id: 20,
    name: "C Stand",
    type: EquipmentType.STANDS,
    description: "",
    image: "",
    number: 4
  },
  {
    id: 21,
    name: "Neewet Pro 9",
    type: EquipmentType.STANDS,
    description: "",
    image: "",
    number: 4
  },

  //Other
  {
    id: 22,
    name: "Small Spring Clamps",
    type: EquipmentType.OTHER,
    description: "",
    image: "",
    number: 4
  },
]

