interface NavItemInterface {
	label: string;
	href: string;
}

export const navItems: NavItemInterface[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Accounts', href: '/accounts' },
	{ label: 'Quotes', href: '/quotes' },
];


type MappedNavItemType = { [key: string]: string };

export const mappedNavItemsObject: MappedNavItemType = navItems.reduce((baseItem: MappedNavItemType, currentItem) => {
	baseItem[currentItem.href] = currentItem.label;
	return baseItem;
}, {});