export interface TabInfo {
    label: string;
    description: string;
    to: string;
    actions?: Component,
    children?: Record<TabChild, TabChildInfo>,
}

export interface TabChildInfo extends TabInfo {
    icon: Component,
}

export type TabState = 'moocs' | 'team' | 'settings';
export type TabChild = 'profile' | 'themes';