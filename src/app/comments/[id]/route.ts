import { comments } from "../data"

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}) {
	const { id } = await params //extracting id from the parameters
	const comment = comments.find((comment) => comment.id === parseInt(id)); //finding data co-responding to that id

	return Response.json(comment); //return as json
}
