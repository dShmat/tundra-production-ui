export type EquipmentItem = { id: string; name: string; type?: 'light'|'cameras'|'other'; description: string; image: string; specs?: string; };

export type SiteConfig = { siteName: string; logo: string; calendlyUrl: string; whatsappNumber: string; };

export type CommonData = { id?: number, image: string; name: string; description: string; type?: EquipmentType, number?: number };

export type PriceRate = { label: string,  price: number };

export enum EquipmentType {
  VIDEO_LIGHT = 'video light',
  FLASH_LIGHT = 'flash light',
  MODIFIERS = 'modifers',
  SOUND = 'sound',
  STANDS = 'stands',
  OTHER = 'other',
}
