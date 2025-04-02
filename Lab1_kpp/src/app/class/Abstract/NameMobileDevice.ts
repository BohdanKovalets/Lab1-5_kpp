export type NameMobileDevice = 'Смартфон' | 'Планшет';
export type NameMobileDeviceMap = {
    [key: string]: NameMobileDevice;
};

export const NameMobileDeviceMaps: NameMobileDeviceMap = {
    smartphone: 'Смартфон',
    tablet: 'Планшет',
};