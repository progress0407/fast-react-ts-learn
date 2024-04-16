import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  return <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault(); // // a태그의 이벤트(href)를 막는다
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function Nav(props) {
  const lis = []
  const topics = props.topics

  for(let i=0; i < topics.length; i++) {
    let topic = topics[i];
    lis.push(
      <li key={topic.id}>
        <a id={topic.id} href={'/read/' + topic.id} onClick={(event, id)=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));  // event를 발생시킨 태그를 가리킴 -> a 태그
        }}>{topic.title}</a>
      </li>
    );
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="제목" /></p>
      <p><textarea name="body" placeholder="본문"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Update(props) {

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
    <h2>Update</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" value={title} onChange={(event)=>{
        setTitle(event.target.value)
      }}/></p>
      <p><textarea name="body" value={body} onChange={(event)=>{
        setBody(event.target.body)
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[0];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);

  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode === 'READ') {
    let title = null;
    let body = null;

    for(let i=0; i < topics.length; i++) {
      let topic = topics[i];
      if(topic.id === id) {
        title = topic.title;
        body = topic.body;
      }
    }

    content = <Article title={title} body={body}></Article>

    contextControl = <>
    <li>
      <a href={'/update/'+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a>
    </li>
    <li>
      <a href={'/delete/'+id} onClick={event=>{
        event.preventDefault();
        setMode('DELETE');
      }}>Delete</a>
    </li>
    </>
  }
  else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      const newTopics = [...topics];
      const newTopic = {id: nextId, title:_title, body:_body}
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } 
  else if(mode  === 'UPDATE') {
    let foundTopic = topics.find(item => item.id === id)
    content = <Update title={foundTopic.title} body={foundTopic.body} onUpdate={(_title, _body)=>{
      foundTopic.title = _title
      foundTopic.body = _body
      const newTopics = [...topics];
      setTopics(newTopics)
      setMode('READ')
    }}></Update>
  }
  else if(mode  === 'DELETE') {
    let topicsAfterDeleted = topics.filter(topic=> topic.id !== id)
    setTopics(topicsAfterDeleted)
    setMode('WELCOME')
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        alert('Hello, Welcome!');
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={(event)=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
      
    </div>
  );
}

export default App;
