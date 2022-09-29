import React from 'react';
import './Question.css'
import 'bootstrap/dist/css/bootstrap.css';

const Question = () => {
    return (
        <div className='question'>
            <h2>Question</h2>
            <div>
            <h3>a.How does react work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

            </div>
            <div>
                <h3>b.What is the difference between props and state?</h3>
                <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3>c.What type of works useEffect does without Data load?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components.
                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.UseEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Question;