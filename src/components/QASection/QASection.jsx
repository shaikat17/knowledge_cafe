import React from 'react'
import './QASection.css'

const QASection = () => {
  return (
    <div className="qa_container">
        <h3>QA Section</h3>
      <div className="q_div">Props vs State?</div>
      <div className="ans_div">
        Props (short for properties) are read-only data that are passed from a
        parent component to a child component. They are used to communicate
        information from one component to another. When a component receives
        props, it cannot change them directly, but it can use them to render its
        output.
        <br /> <br />
        On the other hand, state is a mutable data that is owned by a component
        itself. State can be initialized in the constructor of a component, and
        can be updated by calling the setState() method. When a component's
        state changes, React will re-render the component to reflect the updated
        state.
      </div>
      <div className="q_div">How does useState works?</div>
      <div className="ans_div">
        useState is a built-in React Hook that allows functional components to
        manage state. It takes an initial value as a parameter and returns an
        array with two elements: the current state value, and a function to
        update the state value. Whenever the state is updated using the provided
        function, React will re-render the component and pass in the updated
        state value. This allows for easy management of state within functional
        components, without the need for class components or lifecycle methods.
      </div>
      <div className="q_div">
        Purpose of useEffect other than fetching data?
      </div>
      <div className="ans_div">
        Here are some other use cases for useEffect: <br />
        <em> Updating the document title:</em> useEffect can be used to update
        the title of the document based on some state value. For example, if you
        have a component that displays the name of the user, you might want to
        update the title to reflect the user's name.
        <br />
        <br />
        <em>Subscribing to events:</em> useEffect can be used to subscribe to
        events like mouse clicks or key presses, and clean up after the
        component is unmounted. <br />
        <br />
        <em>Updating a global store:</em> useEffect can be used to update a
        global store like Redux or MobX based on some state value. <br />
        <br />
        <em>Setting up and tearing down animations:</em> useEffect can be used
        to set up animations when a component mounts, and clean them up when the
        component unmounts.
        <br />
        <em>Performing cleanup tasks:</em> useEffect can be used to perform
        cleanup tasks like closing a WebSocket connection or clearing a timer
        when a component unmounts.
      </div>
      <div className="q_div">How does react work? </div>
      <div className="ans_div">
        React is a JavaScript library that is used to build user interfaces. It
        allows developers to create reusable UI components that can be used to
        build complex web applications. React uses a virtual DOM (Document
        Object Model) to render UI components. When a component's state changes,
        React updates the virtual DOM to reflect the changes. Then, it
        calculates the minimum set of changes required to update the real DOM,
        and updates the real DOM accordingly. This approach is more efficient
        than updating the entire real DOM, which is how traditional web
        applications work. React also uses a unidirectional data flow, meaning
        that data flows in one direction from parent components to child
        components. This makes it easier to reason about the state of an
        application, and makes it less prone to bugs. In addition, React uses
        JSX (JavaScript XML), a syntax extension that allows developers to write
        HTML-like code in their JavaScript files. JSX is not required to use
        React, but it makes it easier to write and read code. Overall, React's
        efficient rendering, unidirectional data flow, and use of JSX make it a
        popular choice for building complex web applications with dynamic user
        interfaces.
      </div>
    </div>
  );
}

export default QASection