import React, { useRef } from 'react'

interface OwnProps {
	onAddTopic: (title: string, body: string) => void;
}


const Create: React.FC<OwnProps> = ({ onAddTopic }) => {

	const titleRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const body = (form.elements.namedItem('body') as HTMLTextAreaElement).value;
		onAddTopic(title, body);
  };

	return (
		<article>
			<h2>Create</h2>
			<form onSubmit={handleSubmit}>
				<p><input ref={titleRef} type="text" name="title" placeholder="title" /></p>
				<p><textarea name="body" placeholder="body"></textarea></p>
				<p><input type="submit" value="Do Create" /></p>
			</form>
		</article>
	)
}

export default Create