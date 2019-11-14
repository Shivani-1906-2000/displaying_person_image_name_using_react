import React from 'react';
import './App.css';

const App = () => <Personlist />

const Personlist = () => 
{
  const people=[{img:22,name:'Jon Doe',job:'developer'},
    {img:23,name:'Hardy',job:'singer'},
    {img:30,name:'ritik',job:'actor'}]
  return (
  <section>
  <Person props={people[0]} />
  <Person props={people[1]} />
  <Person props={people[2]} />
  </section>);
}

const Person = (props) => 
{ 
  const {img,name,job}=props.props
  const url=`https://randomuser.me/portraits/thumb/men/${img}.jpg`
  return (
    <div className='person'> 
      <img src={url} />
      <div> 
        <h4>  {name}</h4>
        <h4> {job}</h4>
      </div>
    </div>
  );
}

export default App;
