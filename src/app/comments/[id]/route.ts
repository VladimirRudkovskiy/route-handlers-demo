import { comments } from "../data"

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}) {
	const { id } = await params //extracting id from the parameters
	const comment = comments.find((comment) => comment.id === parseInt(id)); //finding data co-responding to that id

	return Response.json(comment); //return as json
}


export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}) {
	const { id } = await params; //extracting id from the parameters
	const body = await request.json(); //getting the request body
	const { text } = body; //extracting text from the body

	const index = comments.findIndex((comment) => comment.id === parseInt(id)); //finding the index of the comment with that id

	comments[index].text = text; //updating the text of the comment
	return Response.json(comments[index]); //returning the upodated comment as json
}

