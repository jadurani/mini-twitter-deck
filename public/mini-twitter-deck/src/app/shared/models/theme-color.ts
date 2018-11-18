/**
 * value
 * - the string name of class evaluating the hex value
 * - see base.scss for details
 */
export interface ThemeColor {
    name: string;
    value: string;
}

export const DEFAULT_THEME_COLOR: ThemeColor = {
    name: 'Curious Blue',
    value: 'curious-blue'
};

export const THEME_COLOR_CHOICES: Array<ThemeColor> = [
    {
        name: 'Amaranth',
        value: 'amaranth'
    },
    {
        name: 'Curious Blue',
        value: 'curious-blue'
    },
    {
        name: 'Lightning Yellow',
        value: 'lightning-yellow'
    },
    {
        name: 'Mountain Meadow',
        value: 'mountain-meadow'
    },
];
