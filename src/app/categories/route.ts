export const dynamic = 'force-static'; // This will ensure the route is always statically generated

export async function GET() {
	const categories = [
		{ id: 1, name: 'Electronics' },
		{ id: 2, name: 'Books' },
		{ id: 3, name: 'Clothing' },
		{ id: 4, name: 'Home & Garden' },
	];

	return Response.json(categories);
}

