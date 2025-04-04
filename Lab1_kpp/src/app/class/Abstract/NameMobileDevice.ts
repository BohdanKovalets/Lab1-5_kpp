export type NameMobileDevice = "Смартфон" | "Планшет" | "Ноутбук";
export type NameMobileDeviceMap = {
  [key: string]: NameMobileDevice;
};

export const NameMobileDeviceMaps: NameMobileDeviceMap = {
  smartphone: "Смартфон",
  tablet: "Планшет",
  laptop: "Ноутбук",
};
