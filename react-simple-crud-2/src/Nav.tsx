import React from 'react'

interface OwnProps {
	topics: Topic[],
	onChangeMode(id:number): void
}

export interface Topic {
	id: number,
	title: string,
	body: string
}

const Nav: React.FC<OwnProps> = ({ topics, onChangeMode }) => {
	return (
		<nav>
			<ol>
				{
					topics.map(
						topic => (
							<li key={topic.id}>
								<a id={String(topic.id)} href={`/read/${topic.id}`} onClick={(event) => {
									// console.log(`type = ${typeof(event.target)}`);
									// console.log(`instanceof = ${event.target instanceof HTMLAnchorElement}`);
									event.preventDefault();
									const target = (event.target as HTMLAnchorElement)
									onChangeMode(Number(target.id));
								}}>{topic.title}
								</a>
							</li>
						)
					)
				}
			</ol>
		</nav>
	)
}

export default Nav
