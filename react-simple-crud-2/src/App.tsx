import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import {Topic} from './Nav';
import { Mode } from './model/Mode';
import Create from './Create';
import Update from './Update';

const App: React.FC = () => {
	const [mode, setMode] = useState('WELCOME')
	const [id, setId] = useState(-1)
  const [topics, setTopics] = useState([
    {id:1, title:'HTML', body: 'html is ...'},
    {id:2, title:'CSS', body: 'css is ...'},
    {id:3, title:'JavaScript', body: 'javascript is ...'}
  ])
	const addTopic = (title:string, body:string) => {
		const newTopicId = Math.max(...topics.map(topic=>topic.id))+1;
		const newTopic = { id: newTopicId, title, body };
		setTopics([...topics, newTopic]);
	}

	let articleContent = null;

	function findTopic(topics: Topic[], id:number): Topic {
		return topics.find(topic => topic.id == id) || { id: -1, title: 'not found', body : 'not found'};
	}
	
	if(mode === Mode.WELCOME) {
		articleContent = 
		<>
			<Article title="Welcome" body="Hello, WEB"></Article>
		</>
	} 
	else if(mode === Mode.READ) {
		const foundTopic = findTopic(topics, id);
		articleContent = 
		<>
			<Article title={foundTopic.title} body={foundTopic.body} />
		</>
	}
	else if(mode === Mode.CREATE) {
		articleContent = 
			<>
				<Create onAddTopic={addTopic} />
			</>
	}
	else if(mode === Mode.UPDATE) {
		const foundTopic = findTopic(topics, id);
		articleContent = 
			<>
				<Update 
					topic={foundTopic} 
					onUpdateTopic={(_title: string, _body: string)=>{
						foundTopic.title = _title;
						foundTopic.body = _body;
						const newTopics = [...topics];
						setTopics(newTopics);
						setMode(Mode.READ);
				}}/>
			</>
	}
	else if(mode === Mode.DELETE) {
		const topicsAfterDeleted = [...topics.filter(topic => topic.id !== id)];
		setMode(Mode.WELCOME);
		setTopics(topicsAfterDeleted);
	}

	let updateFormButton = mode === Mode.READ 
		? 
		<>
			<br />
			<a href='/udpate' onClick={ (event) => {
				event.preventDefault();
				setMode(Mode.UPDATE);
			}}>Update</a>
		</>
		: null

	let	deleteFormButton = mode === Mode.READ
		?
		<>
			<br />
			<a href='/delete' onClick={ (event) => {
				event.preventDefault();
				setMode(Mode.DELETE);
			}}>Delete</a>
		</>
		: null

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
				setMode(Mode.WELCOME);
      }} />
      <Nav topics={topics} onChangeMode={(selectedId)=>{
				setMode(Mode.READ);
				setId(selectedId);
			}}></Nav>
			<hr />
      { articleContent }
			<hr />
			<a href='/create' onClick={(event)=>{
				event.preventDefault();
				setMode(Mode.CREATE);
			}}>Create</a>
			{ updateFormButton }
			{ deleteFormButton }
    </div>
  )
}

export default App
