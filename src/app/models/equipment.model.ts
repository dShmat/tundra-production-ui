export interface Equipment {
  id: number;
  name: string;
  description: string;
  type: "light" | "cameras" | "other" | "";
  imageURL: string;
}

export enum EquipmentType {
  Light = "light",
  Cameras = "cameras",
  Other = "other",
  Empty = ""
}

export interface SelectedEquipment {
  light: boolean;
  cameras: boolean;
  other: boolean;
}
