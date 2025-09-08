export type Space = { id: string; name: string; description: string; image: string; };
export type EquipmentItem = {id: string; name: string; type?: 'light'|'cameras'|'other'; description: string; image: string; specs?: string; };
export type SiteConfig = { siteName: string; logo: string; calendlyUrl: string; whatsappNumber: string; };
export type Contacts = { phone: string; email: string; address: string; socials: { name: string; icon: string; url: string; }[]; };

export type Card = { id?: number, image: string; name: string; description: string; type?: 'light'|'cameras'|'other' };
