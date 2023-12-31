import { InterfaceBestSellingCategory } from "../utils/types";

export const headersConfig = {
'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
    'X-RapidAPI-Host':  `${process.env.REACT_APP_RAPID_HOST_KEY}`
}

export const ALL_ITEMS = "allitems"
export const categories = [
		{
			title: "All Categories",
			subcategories: [
				"Beverages",
				"Cleaning Supplies",
				"Food & Beverage",
				"Medical Equipment & Supplies",
				"Office Supplies",
			],
		},
		{
			title: "Fruits",
			subcategories: [
				"Beverages",
				"Cleaning Supplies",
				"Food & Beverage",
				"Medical Equipment & Supplies",
				"Office Supplies",
			],
		},
		{
			title: "Vegetables",
			subcategories: [
				"ANCILLARIES",
				"CATERING & KITCHEN SUPPLIES",
				"FLOOR CARE MACHINES",
				"Janitorial & tools",
				"PAPER",
			],
		},
		{
			title: "Dairy",
			subcategories: [
				"ANCILLARIES",
				"CATERING & KITCHEN SUPPLIES",
				"FLOOR CARE MACHINES",
				"Janitorial & tools",
				"PAPER",
			],
		},
		{
			title: "Meat & poultry",
			subcategories: [
				"ANCILLARIES",
				"CATERING & KITCHEN SUPPLIES",
				"FLOOR CARE MACHINES",
				"Janitorial & tools",
				"PAPER",
			],
		},
		{
			title: "Sea food",
			subcategories: [
				"ANCILLARIES",
				"CATERING & KITCHEN SUPPLIES",
				"FLOOR CARE MACHINES",
				"Janitorial & tools",
				"PAPER",
			],
		},
	];


    export  const images = [
        { id: 1, url: "https://img.freepik.com/free-photo/one-woman-carrying-shopping-bag-from-boutique-generated-by-ai_188544-37931.jpg?t=st=1701832205~exp=1701835805~hmac=fbe2a8d5686c14678f4999297c7c11b7701e3dcf9d75e7037e47a0a4e83e4a9e&w=1060" },
        {id:2,url:"https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?w=1380&t=st=1701831283~exp=1701831883~hmac=d3d9389b339a7233ed82ef317976ca9156f45edc104ea7d3b4301bf2f2d32804"},
        { id: 3, url: "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1701831241~exp=1701831841~hmac=84444807a73c60aa719c7442e2caaea660842217edacccc3369d5eb17b92c8e3" },
		
];
	

export const PEOPLE_SEARCHED_DATA = [
		"Construction Helmet",
		"Saws",
		"Cider",
		"Apple Juice",
		"Construction Costume Blue",
		"Tapes",
		"Construction Suit",
		"Pullers",
		"Pickaxes and Crowbars",
		"Carrots",
		"Construction Hammer",
		"Wrenches",
		"Screwdrivers",
		"Construction Shovels",
		"Pullers",
		"Kinoa",
		"Banana",
		"Apple Cider Vinegar",
		"Storage Container",
		"Orange Squash",
];
	




export const topSuppliers: InterfaceBestSellingCategory[] = [
	{
		categoryId: 1,
		displayName: "Bajaj Electricals Ltd",
		ireId: 1001,
		isCategoryPage: true,
	},
	{
		categoryId: 2,
		displayName: "Bharat Electronics Limited (BEL)",
		ireId: 1002,
		isCategoryPage: false,
	},
	{
		categoryId: 3,
		displayName: "Godrej & Boyce Manufacturing Co. Ltd.",
		ireId: 1003,
		isCategoryPage: true,
	},
	{
		categoryId: 4,
		displayName: "Havells India Ltd.",
		ireId: 1004,
		isCategoryPage: false,
	},
	{
		categoryId: 5,
		displayName: "Intex Technologies (India) Ltd.",
		ireId: 1005,
		isCategoryPage: true,
	},
	{
		categoryId: 6,
		displayName: "Lava International Ltd.",
		ireId: 1006,
		isCategoryPage: false,
	},
];