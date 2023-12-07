export function ProductSchema(
	sku: string,
	image: string,
	price: number,
	title: string,
	manufacture_name: string,
	quantity: number,
	liked: boolean
) {
	return {
		sku,
		image,
		price,
		title,
		manufacture_name,
		quantity,
		liked,
	};
}


