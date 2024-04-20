import React, { useState } from 'react'
import { Topic } from './Nav';

interface OwnProps {
	topic: Topic,
  onUpdateTopic: (title: string, body: string) => void;
}

const Update: React.FC<OwnProps> = ({ topic, onUpdateTopic }) => {

  const [title, setTitle] = useState(topic.title)
  const [body, setBody] = useState(topic.body)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('updated something'); console.log(topic);
    const form = event.target as HTMLFormElement;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const body = (form.elements.namedItem('body') as HTMLTextAreaElement).value;
    onUpdateTopic(title, body);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={ event =>{ setTitle(event.target.value) }}
          />
        </p>
        <p>
          <textarea 
            name="body" 
            value={body}
            onChange={ event =>{ setBody(event.target.value) }}
          ></textarea>
          </p>
        <p><input type="submit" value="Do Update" /></p>
      </form>
    </>
  )
}

export default Update