/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Pimitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
let arrayInt = [1,2,3,4,5,6]

- arrayInt.reduce((acc, int)=>{
    if(int > 1){
        acc.concat(int)
    }
})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- rquest comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatibale with databases


Hosting method
- size & level
- size of individual services
- type of cachin is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Microservices and firewalls

not-microservices; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.

AJAX programming;
AJAX is a technique for accessing web servers from a web page.

intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json


*Error Handling*

best methods;
 promise chaining use; .catch(), to 'catch' any errors

 async/await use; try{}catch(){}, to try code and catch any errors

 automatically invoke (async function(){try{}catch(){}})()
 can be used to handle errors.

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

3 promise states;
resolve; return promise was successful

reject; returned promise was unsuccessful

pending; returning a promise is in unknown process 

Async Challenges: course outline;

- Train in ways to handle async calls
- Handle errors in asynchronous code
- understand promises
- promise workout


finally() can be used
when managing promise chaining,

or when managing async promises
within automatically invoked (async functions resolver (){try{}catch(){}})()

auto invoked (async functions (){try{}catch(){}})()
then runs the resolver function as a result.

//automatically invoked function
A self-invoking expression is invoked (started) automatically, without being called.
(function(){
})()

Function expressions can be made "self-invoking".



practice fetch() api, x
async/await fetch() api, x
fetch() api error handling techniques; .catch()/try{}catch(){} x
promise chaining with fetch() api, x
async/await functions; promise chaining with fetch() api, x

promises; 3 states; [pending, resolved, rejected], x
promises + auto invoked functions, x
promises + finally method(auto invoked functions, resolver()) x

promises + fulfill all promises; Promise.all([]) x
Promise.all([]); good for resolving all promises.

promises + fulfill the fastest promise; Promise.race([]); 
Promise.race([]); good for timing out an event then not
proceeding when it takes too long.

parallel execution; 

submitting form form data using fetch() api
uploading multiple files using fetch() api.

Fetch Advanced

*/

/*
react clean up

1. delete index.css, delete import index.css in index.js
2. delete logo svg, delete import logo in app.js
3. delete header in app.js
4. delete css in app.css, don't delete file.
*/

/*
React Basics

why use react? 

- its speed
- uses virtual DOM.
- reusability

React uses Js/ES6 syntax
React allows jsx to function.

render() keyword/method; lifecycle method
that invokes the jsx to the virtual DOM.


jsx is a js rendition of html

need to wrap jsx elements inside a div.

do not need to import child components through
the main rendering page.

Parent & Child Component;

- creates a complex tree/hierarchy of components
- The render page serves an entry point for our app
when we provide an instance of the parent component '<App/>'

Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

Instances 
can apply multiple instances of child components 
within parent

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component, has to be on two different components.

function Root(){
    return(
        <div>
            //1. can give individual attributes
            <Component data='some data'/>

            or 

            //2. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1. can give use dot notation with props and attribute
            <p>{props.data}</p>

            or

            //2. can use dot notation with props on object and attribute
            <p>{props.object.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

- can leave some props missing if needed.
- can apply style={{conditional styling/rendering ? to inline style}}

Array methods;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

Jsx to js and back;

- surround javaScript within jsx with open and 
closed curly braces.
- write pure js within the function, but outside of the
return statement.

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

React props;

Mapping/Rendering props;

- can use props dot notation within mapped props component
when passing down props.

e.g. 

//within app/root component

    let newArray = array.map(arrayItem=> <MappedComponent 

        key = {propsItem.id}
        propsObj = {arrayItem}

        // can apply object obj = {data} from child components
        //when rendering outside data.
    />)

return(
    <element>{propsArray}</element>
)

//within PropsComponent

function PropsComp(props){
    return(
        <div>
            <h1>{props.propsObj.name}</h1>
            <h1>{props.propsObj.type}</h1>
        </div>
    )
}
export default PropsComp

or can use

let newArray = arrayData.map(arrayItem => 
    <MappedComponent
        key = {arrayItem.id}
        name = {arrayItem.name}
        type = {arrayItem.type}
    />
)

return(
    <div>
        {newArray}
    </div>
)

function PropsComponent(props){
    return(
        <div>
            {props.name}
            {props.type}
        </div>
    )
}
export default PropsComponent

practice; class based components.
practice; class based components and passing down props.
practice; class based components and state.
practice; class based components and adding state
within props.

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
https://reactjs.org/docs/events.html#supported-events


Handling Events in React.js;

- letting the user interact with webpage and application.
- all events will be camelCased. 
can add 

- store function inside variable to be used inline.

- within js;
const functionVariable = function someAction(){
    //block of code to run
}

- within jsx; 
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

- inline jsx event handlers;
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

//React lifecycle methods pt. 1;
render(){}; will always run jsx before and after new lifecycle methods are used.

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

React lifecycle methods pt.2 

render(){}; will always run jsx before and after new lifecycle methods are used.

//getSnapshotBeforeUpdate(){};

//creates a backup of the current way things are.
// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props
// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.

//return false makes app more performant, 
//returning true can create bugs within code.

React lifecycle methods pt. 3

render(){}; will always run jsx before and after new lifecycle methods are used.

componentDidUpdate(prevProps, prevState){}; runs after state is allowed to be changed
and after the component is rendered() and component is mounted() successfully.

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            //can run some logic
            //then change state
            this.setState({state: stateData})
        }

        or

        if(prevProps !== this.props){
            //can run some logic
            //then change props is child component

            propsObj = {{data: this.state.someData}}

            propsItem = {this.state.otherData}
        }
    }

Conditional rendering.

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <h1>Run this instead</h1>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent/>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent
                    props = {this.state.something}
                />
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <Component
                    propsObj = {{propsData: this.state.something}}
                />
            }

        </div>
    )
}

conditional rendering can be applied to a components 
style.

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            verified: true
        }
    }

    render(){
        const verifiedStyle = {
            color: 'blue'
        }
        const unverifiedStyle = {
            color: 'red'
        }
        return(
            <div>
                {
                    this.state.verified ? 
                    <h1 style = {verifiedStyle}>
                        Data verified
                    </h1>
                    :
                    <h1 style = {unverifiedStyle}>
                        Data unverified
                    </h1>
                }
            </div>
        )
    }
}
export default Parent

fetching data from api in react.js

writing forms and their methods

*/

//render  page
import React from 'react'//react library allows jsx to work
import ReactDOM, { render } from 'react-dom'

//jsx is rendered
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'))


//create a simple list within the react render page

//render page
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <h1>Software Engineering Skills</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/ES6</li>
                <li>JSX</li>
                <li>React.js</li>
                <li>Linux Systems Administration</li>
            </ul>
    </div>,
    document.getElementById('root')
)


// create  a functional component within render page to be rendered to browser

//render page

import React from 'react'
import ReactDOM from 'react-dom'

function NewList(){
    return(
        <div>
            <h1>New List</h1>
                <li>1</li>
                <li>2</li>
                <li>3</li>
        </div>
    )
}

ReactDOM.render(
    <NewList/>,
    document.getElementById('root')
)

//review 
//render page 
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <h1>JSX Title</h1>
        <p>This is practice JSX</p>
    </div>,
    document.getElementById('root')
)

//review
//render page; create functional component and render it to browser.

import React from 'react'
import ReactDOM from 'react-dom'

function App(){
    return(
        <div>
            <h1>JSX Component</h1>
                <p>First JSX Component</p>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

//React functional component practice

// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(){
    return(
        <div>
            <h1>Aaron Bevans</h1>
            <p>I am a Front End Software Engineer</p>
            <h4>Places I'd Love To Visit</h4>
            <ol>
                <li>Belize</li>
                <li>The Bahamas</li>
                <li>Japan</li>
            </ol>
        </div>
    )
}

ReactDOM.render(
    <MyInfo/>, //instance of a component
    document.getElementById('root')
)

//moving components into their own files
//render file
import React from 'react'
import ReactDOM from 'react-dom'
import Component_1 from './Component_1.js'
import Component_1a from './Component_1a.js'

ReactDOM.render(
    <Component_1/>,//imported parent component
    document.getElementById('root')
)

//moving components into their own files
//exported component from file './Component_1.js'
import React from 'react'
import Component_1a from './Component_1a.js'

function Component_1(){
    return(
        <div>
            <h1>Outside component</h1>
            <Component_1a/> {/*imported child component */}
        </div>
    )
}
export default Component_1


//moving components into their own files
//exported child component from './Component_1a.js'
import React from 'react'

function Component_1a(){
    return(
        <div>
            <h2>Outside child component</h2>
        </div>
    )
}
export default Component_1a

//moving components to their own file.
//render page 
import React from 'react'
import ReactDOM from 'react-dom'
import Component_2 from './component_2.js'


ReactDOM.render(
    <Component_2/>,//imported parent component
    document.getElementById('root')
)

//moving components to their own file.
//exported parent component
// './component_2.js'
import React from 'react'
import Component_2a from './component_2a'

function Component_2(){
    return(
        <div>
            <h1>Exported Component</h1>
            <Component_2a/>
        </div>
    )
}
export default Component_2

//moving components to their own file.
//exported child component
// './component_2a'
import React from 'react'

function Component_2a(){
    return(
        <div>
            <h1>Exported Child Component</h1>
        </div>
    )
}
export default Component_2a


/*Parent & Child Component;

 - creates a complex tree/hierarchy of components
 - The render page serves an entry point for our app
 when we provide an instance of the parent component '<App/>'
 - main parent/root component can store multiple instances of 
 other child components.
*/

//React Parent/Child components practice
// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

import React from 'react'
import React from 'react-dom'
import Root from './root.js'

ReactDOM.render(
  <Root/>,
    document.getElementById('root')
)


import React from 'react'
import Nav from './nav.js'
import Main from './main.js'
import Foot from './footer.js'

function Root(){
    return(
        <div>
            <Nav/>
            <Main/>
            <Foot/>
        </div>
    )
}
export default Root

import React from 'react'

function Nav(){
    return(
        <header>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>
        </header>
    )
}
export default Nav

import React from 'react'

function Main(){
    return(
        <div>
            <p>
                Imported main component
            </p>
        </div>
    )
}
export default Main

import React from 'react'

function Foot(){
    return(
        <div>
            <p>
                Imported footer component 2021
            </p>
        </div>
    )
}
export default Foot


//styled components practice

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'

function Root(){
    return(
        <div style={{border: 'solid 10px red', boxShadow: 'inherit'}}>
            <h1>Practice Component</h1>
        </div>
    )
}
export default Root

/*
Time to have fun styling! But first things first: 

1. Change the input/p combo 
below to be a new component 
called <TodoItem />. <TodoItem /> 
(for now) will just have the same 
displayed data below (every todo item is the same) 
hardcoded inside of it. 
(We'll learn soon how to make the TodoItem more flexible)
    
2. Style up the page however you want! 
You're welcome to use regular CSS 
(in the CSS file) or inline styles, or both!

can apply multiple instances of child components 
within parent
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

React.render(
    <div>
        <Root/>,
        document.getElementById('root')
    </div>
)

//Root component
import React from 'react'
import TodoItem from './todoItem.js'

function Root(){
    return(
        <div>
            <TodoItem/>
        </div>
    )
}
export default Root

//TodoItem component
//todoItem.js
import React from 'react'

function TodoItem(){
    return(
        <div>
            <input type='checkbox'/>
            <p>Placeholder Text</p>

            <input type='checkbox'/>
            <p>Placeholder Text</p>

            <input type='checkbox'/>
            <p>Placeholder Text</p>

            <input type='checkbox'/>
            <p>Placeholder Text</p>
        </div>
    )
}
export default TodoItem

/*
React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
*/

//pass down props with regular props, & object literal props

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//Root parent component file './root.js'
import React from 'react'
import DataComponent_1 from './data_1_file.js'
import DataComponent_2 from './data_2_file.js'

function Root(){
    return(
        <div>
            <DataComponent_1
                data_1 ='first type of data'
            />
            <DataComponent_2
                dataObj={{data_2: 'second type data'}}
            />
        </div>
    )
}
export default Root

//'./data_1_file.js'
import React from 'react'

function DataComponent_1(props){
    return (
        <div>
            <p>{props.data_1}</p>
        </div>
    )
}
export default DataComponent_1


//'./data_2_file.js'
import React from 'react'

function DataComponent_2(props){
    return(
        <div>
            <p>{props.dataObj.data_2}</p>
        </div>
    )
}
export default DataComponent_2

//set up a React
// app from scratch

// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" 
  //prop and a "punchLine" prop
  // and render those however you'd like
  
// EXTRA CREDIT:

// Some jokes are only a punch line with no question:
  // E.g.: "It’s hard to explain puns to kleptomaniacs 
  //because they always take things literally."
// If you don't pass in a "question" prop, 
//how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component

//can leave some props missing if needed.
//conditional styling.

/*map over outside array data within a component*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import DataComp from './dataComp.js'
import arrayData from './arrayData.js'

function Root(){
    const dataInfo = arrayData.map(data=> 
    <DataComp 
        key = {data.id}
        tech_name = {data.tech_name}
        type = {data.type}

        //can apply object obj={data} from child components
        //when rendering outside data.
    />)
    return(
        <div>
            {dataInfo}
        </div>
    )
}
export default Root

import React from 'react'

//passes down props
function DataComp(props){
    return(
        <div>
            <h1>{props.tech_name}</h1>
            <h1>{props.type}</h1>
            {/*
                can apply props double dot notation when 
                props.obj.propertyName for each property.

                when passing down props and rendering 
                outside data to root.
            */}
        </div>
    )
}
export default DataComp


const arrayData = [
    {
        id: 0,
        tech_name: 'linux operating system',
        type: 'open source operating system'
    },
    {
        id: 1,
        tech_name: 'windows operating system',
        type: 'closed source operating system'
    },
    {
        id: 2,
        tech_name: 'iOs',
        type: 'closed source operating system'
    }
]

//array.reduce() practice
// adding array elements based on a condition.

let arrayInt = [1,2,3,4,5,6]

let reducedArray = arrayInt.reduce((acc, int)=>{
    if(int > 1){
       return acc += int
    }
    return acc
})
console.log(reducedArray)

//array.reduce() practice
// adding array elements into a new array based on a condition.

arrayInt = [1000,200,30,44,56,6000]
reducedArray = arrayInt.reduce((acc, int)=>{
    if(int > 60){
       acc.push(int)
    }
    return acc
}, [])
console.log(reducedArray)


//class based components

import React, {Component} from 'react'

class Root extends Component{
    //other methods lives here.
    method(){
        const number = 1
        document.write(number)
    }

    render(){
        //css style objects live here
        const divStyle = {
            border: 'solid 10px red'
        }

        //invoke other methods here
        const callMethod = this.method()

        //js/display logic lives here
        if(number === 1){
            alert('the number is 1!')
        }else{
            alert(undefined)
        }
        return(
            <div style={divStyle}>
                {/*Jsx lives here {js lives within curly braces}*/}
                {callMethod}
            </div>
        )
    }
}
export default Root


//class based components allow use of state and lifecycle methods.
//class based components & props

import React, {Component} from 'react'

class Root extends Component{
    render(){
        return(
            <div>
                {/*how to pass down props in class based components*/}
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}
export default Root


//regular/prototypical class
//templates for creating objects

class CustomClass{
    constructor(name, devType, language){
        this.name = name
        this.devType = devType
        this.language = language
    }
    shareData(){
        console.log(this.language)
    }

}

const myCustomClass = new CustomClass(
    'cyberman', 
    'front end developer', 
    'javaScript'
)

// myCustomClass.shareData()
console.log(myCustomClass.name)


//react class component practice/props

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './childComp.js'

class Root extends Component{
    render(){
        return(
            <div>
                <ChildComponent
                    //passing down props/data down to ChildComponent component
                    devType = 'front end developer'
                />
            </div>
        )
    }
}
export default Root


import React, {Component} from 'react'

class ChildComponent{
    render(){//no need to add props in render method
        return(
            <div>
                {/* receiving props from Root component */}
                <h1>I am a react.js {this.props.devType}.</h1>
            </div>
        )
    }
}
export default ChildComponents

//practice; mapping props within class based components

//Mapping through array items

//{props.propObj.item}
//propsObj = {arrayItem}

//{props.item}
//item = {arrayItem.item}


//react components and state
import React from 'react'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//components can manage their own state.
//components can pass down state as props-data to children components.
import React, {Component} from 'react'
import ChildComponent from './childcomponent.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            alias:'cyberman',
            language: 'javaScript'
        }
    }
    render(){
        return(
            <div>
                {/*component managing its own state. */}

                <h1>New Developer Identified: {this.state.alias}</h1>

                {/* component passing down state as props 
                    data to other components.
                */}

                <ChildComponent
                    devLanguage = {this.state.language}

                    anObj = {
                        
                        {
                            data: 
                            'This is props data passed down'
                        }
                    }
                />
            </div>
        )
    }
}
export default Root


import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.devLanguage}</h1>

                <h1>{this.props.anObj.data}</h1>
            </div>
        )
    }
}
export default ChildComponent

//react.js conditional rendering
import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            javaScript: true
        }
    }
    render(){
        return(
            <div>
                <h1>
                    cyberman is a {this.state.javaScript ? 
                    ' front end engineer' : ' back end engineer'}
                </h1>
            </div>
        )
    }
}
export default Root

//convert functional component to stateful class component
//mapping array elements; load the 'todosData' into state.

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './childComponent.js'
import arrayData from './arrayData.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            stateArray = arrayData
        }
    }
    render(){
        const newArrayData = this.state.stateArray.map(arrayItem=>
            <ChildComponent
                key = {arrayItem.id}
                propsObj = {arrayItem}
            />
        )
        return(
            <div>
                <h1>{newArrayData}</h1>
            </div>
        )
    }
}
export default Root

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.propsObj.alias}</h1>
                <h1>{this.props.propsObj.position}</h1>
                <h1>{this.props.propsObj.software}</h1>
            </div>
        )
    }
}
export default ChildComponent

//imported array/json data
const arrayData = [
    {
        id: 0,
        alias: 'cyberman',
        position: 'front end software engineer',
        software: 'javaScript, jsx, react.js, redux'
    },
    {
        id: 1,
        alias: 'net_lit',
        position: 'network engineer',
        software: 'wireshark, linux, firewall configuration, bash, python'
    },
    {
        id: 2,
        alias: 'systemsWiz',
        position: 'linux systems administrator',
        software: 'linux distributions, bash, python'
    }
]
export default arrayData


// https://reactjs.org/docs/events.html#supported-events

//Handling events in react.js;

//letting the user interact with webpage and application.
//all events will be camelCased. 
//can add 

/*
//store function inside variable to be used inline.

//within js
const functionVariable = function someAction(){
    //block of code to run
}

//within jsx
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

//inline jsx event handlers
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

*/

function processData(data){
    console.log('newData: ' + data)
}

function processAdditionalData(callback){

    let data = prompt('please enter some new data')

    //callback function invoked within second function
    //taking in the 'data' argument
    callback(data)
}

//function passed into another function as an argument
processAdditionalData(processData)

//React.js event handlers functional based components
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'

function Root(){
    const logData = function logSomeData(){
        console.log('react functional data')
    }
    return(
        <div>
            <button onClick = {logData}> 
                Click to log data 
            </button>
        </div>
    )
}
export default Root

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
            const logNewData = function newData(){
                console.log('this is new data')
            }
        return(
            <div>
                <div onMouseOver = {logNewData}>
                    <h1>New Data here...</h1>
                </div>
            </div>
        )
    }
}
export default ChildComponent


//Setting/passing down state
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import Child from './child.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            stateData: 'state data passed down into props'
        }
    }
    render(){

        return(
            <div>
                <Child
                    propItem = {this.state.stateData}
                />
            </div>  
        )
    }
}
export default Root

import React, {Component} from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.propItem}</h3>
            </div>
        )
    }
}
export default Child


/*

    React setState, prevState; Changing component state;

    - bind new method to class inside constructor; this.method = this.method.bind(this)
    so class recognizes/owns the new method().

    - to change component state need to use setState within new methods with prevState as a
    parameter.

    - cannot directly modify state; need to apply;
    
    this.setState(prevState=>{
        return this.state = {
            stateVal: prevState.stateData
        }
    })

    - when creating a new method it needs to use the 
    
    <jsxElement eventHandler = {this.methodSyntax()}>
        Activate event handler
    </jsxElement> on the eventHandler to work properly.

*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document,getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            stateData: 0,
            stateData_2: 1
        }
    }

    //new method
    handleClick(){
        this.setState(prevState=>{
            return this.state = {
                stateData: prevState.stateData += 1
            }
        })
    }

    //new method that changes the previous state to new state.
    handleDblClick(){
        this.setState(prevState=>{
            return this.state = {
                stateData_2: prevState.stateData_2 *= 2
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.stateData}</h1>
                <button onClick = {this.handleClick}>
                    Click to change state!!
                </button>

                <h1>{this.state.stateData_2}</h1>
                <button onClick = {this.handleDblClick}>
                    Click to change second state!!
                </button>
            </div>
        )
    }
}
export default Root

//api practice
async function getData() {

    try{
      const request = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  
      const response = await request.json()
      
      const data = await response
      setTimeout(() => {
          console.log(data)
      }, 3000);
    }catch(err){
      console.error(err)
    }
  
  }
  getData()



import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        // get data I need to correctly display
    }

    shouldComponentUpdate(nextProps, nextState){
        //return true if update is needed
        //return false if do not want to update
    }

    componentWillMount(){
        //teardown or cleanup code before component
        //disappears
        //(e.g. remove event listeners)
    }


    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default Root


//practice;
//add new method to todoApp that will check and uncheck items
//based on state, props, array mapping etc.
//build application from scratch

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import TodoComponent from './todoComponent'
import todoArray from './todoArray.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            todos: todoArray
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
    /*
    if the new array elements object equals to new methods parameter
    return a new array elements object and its corresponding elements 
    opposite value.
    return the new array elements
    return the new state
    */
   this.setState(prevState =>{
       const updatedTodos = prevState.todos.map(todo =>{
           if(todo.id === id){
               return {
                   ...todo,
                   completed: !todo.completed
               }
           }
           return todo
       })
       return {
           todos: updatedTodos
       }
   })
}


    render(){
        const newTodoArray = this.state.todoArray.map(propsTodo =>
            <TodoComponent
                key = {propsTodo.id}

                propsTodo = {propsTodo}

                handleChange = {this.handleChange}
            />
        )
        return(
            <div>
                <h2>{newTodoArray}</h2>
            </div>
        )
    }
}

export default Root

import React, {Component} from 'react'

class TodoComponent extends Component{
    render(){
        return(
            <div>
                <input 
                    type="checkbox"

                    checked = {this.props.propsTodo.completed}

                    //adding the new method to event handler.
                    onChange = {()=> this.props.handleChange(
                        this.props.propsTodo.id
                    )
                }
                />
                <h3>
                    {/*
                    this class-objects property is an obj element
                        called propsTodo that accesses a text value on an object
                        which is then rendered to the Virtual DOM and into the DOM.
                    */}
                    {this.props.propsTodo.text}
                </h3>
            </div>
        )
    }
}
export default TodoComponent


//class component practice;

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            data: {
                stateMethod: function(){
                    let number = 2
                    console.log(number *= 10)
                }
            }

        }
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.data.stateMethod()}</h1>
            </div>
        )
    }

}
export default Root


//rendering state through props
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './childComponent.js'
import ChildComponent_b from './childComponent_b.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            stateData: 'state data passed down through props',
            stateData_b: 'second state data passed down through props'
        }
    }

    render(){
        return(
            <div>
                <ChildComponent 
                propsObj = {{item: this.state.stateData}}
                />
                <ChildComponent_b 
                item_b = {this.state.stateData_b}
                />
            </div>
        )
    }
}
export default Root

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.propsObj.item}</h1>
            </div>
        )
    }
}
export default ChildComponent

import React, {Component} from 'react'

class ChildComponent_b extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.item_b}</h1>
            </div>
        )
    }
}
export default ChildComponent_b


//React lifecycle methods;

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

//getSnapshotBeforeUpdate(){};
//creates a backup of the current way things are.

// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props

// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.
//return false makes app more performant, 
//returning true can create bugs within code.



/*

React lifecycle methods continued...

render(){}; determines how the component will be displayed to the user.

render; can be ran multiple times.

componentDidMount(){}; 

- acts as if a component has being born.
- good for api calls and getting data from outside sources.
then displaying data with componentDidMount(){}.


shouldComponentUpdate(nextProps, nextState){};

- making a decision if component needs to be re-rendered just incase. 

componentWillUnmount(){};

- teardown or cleanup your code before your component disappears
- remove eventListener.

static getDerivedStateFromProps(){};

- takes props and state as parameters.
- returns new updated state based on props.
- gets props from parents and set own state based on those props.

getSnapshotBeforeUpdate(){};

- creates a back up of things that are going on.

componentDidUpdate(){};

- 

*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            number: 2,
            style: ''
        }
        this.onDouble = this.onDouble.bind(this)
        this.onTriple = this.onTriple.bind(this)
    }

    //created method that updates original state.
    onDouble(){
        this.setState(prevState =>{
            return {
                number: prevState.number *= 2
            }
        })
    }

    //created method that updates original state.
    onTriple(){
        this.setState(prevState =>{
            return {
                number: prevState.number *= 3
            }
        })
    }

    //react.js lifecycle method.
    componentDidUpdate(prevProps, prevState){
        if(prevState.number !== this.state.number){
            const style = {
                border: 'solid green 5px'
            }

            this.setState({style: style})
        }
    }

    //determines how a component is displayed to the user/world
    render(){
        return(
            <div style = {{border: this.state.style}}>

                <h1>{this.state.number}</h1>
                <button onClick = {this.onDouble}>
                    CLICK TO DOUBLE!!
                </button>

                <button onClick = {this.onTriple}>
                    CLICK TO TRIPLE!!!
                </button>
            </div>
        )
    }
}
export default Root

//CONDITIONAL RENDERING; 

//1. conditional rendering; passing down state through props.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>, document.getElementById()
)


import React, {Component} from 'react'
import ChildComponent from './child.js'
import ChildComponent_b from './child_b.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }
    //two ways to pass down state as props
    render(){
        return(
            <div>
                <h1>
                    
                    <ChildComponent
                        loadConditionProps = {this.state.isLoading}
                    />

                    <ChildComponent_b
                        loadObjectProps = {
                            {
                                conditionalData: this.state.isLoading
                            }
                        }
                    />
                </h1>
            </div>
        )
    }
}
export default Root


import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>

                {
                    this.props.loadConditionProps 
                
                ? 
                    <h1> 
                        System "a" load in progress...
                    </h1> 
                :   
                    <h1>
                        System "a" load successful!!
                    </h1>
                }
                </h1>
            </div>
        )
    }
}
export default ChildComponent

import React, {Component} from 'react'

class ChildComponent_b extends Component{
    render(){
        return(
            <div>
                <h1>
                    {
                        this.props.loadObjectProps.conditionalData
                            ?
                        <h1>System "b" load in progress...</h1>
                            :
                        <h1>System "b" load successful!!</h1>
                    }
                </h1>
            </div>
        )
    }
}
export default ChildComponent_b


//2. conditional rendering; render a child component based on state.
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './child.js'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoading
                        ?
                    <h1>System loading in progress...</h1>
                        :
                    <ChildComponent/>
                }
            </div>
        )
    }
}
export default Root


import React from 'react'

class ChildComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>System load successful!!</h1>
            </div>
        )
    }
}
export default ChildComponent

//promise practice
let promise = new Promise((resolve, reject)=>{
    let devData = {
        alias: 'cyberman',
        programmingLanguage:'javaScript/es7'
    }
    devData.alias === 'cyberman'
            ? 

            resolve('developer data recognized...') 

            :
        
            reject('developer data incorrect...')
        
})
promise.then(value => console.log(value))
.catch(err => console.error(err))
.finally(console.log('identification process complete'))

//PRACTICE;
//update state; this.setState(prevState=>{}).
//lifecycle methods; componentDidMount(){}, componentDidUpdate(prevProps, prevState){condition}.
//conditional rendering passing state down through props style-a & style-b.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.js'

ReactDOM.render(
    <Root/>,
    document.getElementById(root)
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            stateData: 'previous state'
        }
    }

    //method that updates state
    updateState(){
        this.setState(prevState =>{
            return {
                stateData: prevState.stateData = 'state update successful'
            }
        })
    }

    render(){
        return(
            <div onMouseEnter = {this.updateState}>
                <h1>
                    {this.state.stateData}
                </h1>
            </div>
        )
    }
}
export default Root

//lifecycle methods;
//componentDidMount(){}, componentDidUpdate(prevProps, prevState){}

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            style: ''
        }
        this.updateCount = this.updateCount.bind(this)
    }

    //method that updates the count state
    updateCount(){
        this.setState(prevState =>{
            return this.state = {
                count: prevState.count += 1
            }
        })
    }

    componentDidMount(){
        console.log('component did update')
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){

        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.updateCount}>
                    Click to update number!!
                </button>
            </div>
        )
    }
}
export default Root


//conditional rendering passing state down through props style-a & style-b.
import React from 'react'
import ReactDOM from 'react'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './child'
import ChildComponent_b from './child_b'

class Root extends Component{
    constructor(){
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:  false})
        }, 3000);
    }


    render(){
        return(
            <div>
                {/*passing down conditional state through props*/}
                <ChildComponent 
                    loadStatus = {this.state.isLoading}
                />

                <ChildComponent_b
                    loadStatusObj = {{loadStatus: this.state.isLoading}}
                />
            </div>
        )
    }
}
export default Root


import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <di>
                {
                    this.props.loadStatus
                        ?
                    <h1>System load in progress...</h1>
                        :
                    <h1>System load successful</h1>
                }
            </di>
        )
    }
}
export default ChildComponent


import React, {Component} from 'react'

class ChildComponent_b extends Component{
    render(){
        return(
            <di>
                {
                    this.props.loadStatusObj.loadStatus
                        ?
                    <h1>System load in progress...</h1>
                        :
                    <h1>System load successful</h1>
                }
            </di>
        )
    }
}
export default ChildComponent_b

//conditional rendering

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById(root)
)

import React, {Component} from 'react'
import ChildComponent from './child'

class Root extends Component{
    constructor(){
         super()
         this.state = {
             isLoading: true
         }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(
                {
                    isLoading: false
                }
            )
        }, 3000);
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoading 
                        ?
                    <h1>System load in progress...</h1>
                        :
                    <ChildComponent
                        loadStatusObj = {{loadStatus: 'system loading successful'}}
                    />
                }
            </div>
        )
    }
}
export default Root


import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.loadStatusObj.loadStatus}</h1>
            </div>
        )
    }
}
export default ChildComponent


//conditionally render a component based on parent component state.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import Childcomponent from './child'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoading 
                        ? 
                    <h1>system load in progress...</h1>
                        :
                    <ChildComponent/>
                }
            </div>
        )
    }
}
export default Root

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>system load complete!</h1>
            </div>
        )
    }
}
export default ChildComponent

//conditional rendering practice
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

/*
create a component that uses a button to keeps track 
of state and displays certain text.
*/

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        // setting initial state
        this.state = {
            isLoggedIn: false
        }
        //binding method to the class constructor so class recognizes it.
        this.logIn = this.logIn.bind(this)
    }

    //creating a method that changes state when fired.
    logIn(){

        //cannot change state directly so we need to use this.setState() to change state
        //prevState is function used on the original state.
        this.setState(prevState=>{

            //returning state and its new state to be changed to its opposite when method is invoked.
            return this.state = {
                //state is set to its opposite.
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render(){
        //button text displayed to log out if state is 'true' or log in if state is 'false'
        let buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log In'

        //display text set to log in when state is 'true' and log out when state is set to 'false'
        let displayText = this.state.isLoggedIn ? 'Logged In!' : 'Logged Out!'

        return(
            <div>
                <h1>{displayText}</h1>
                <button onClick = {this.logIn}>
                    <h1>{buttonText}</h1>
                </button>
            </div>
        )
    }
}
export default Root

//react app phase 7.
//conditional rendering and styling.

//use this link; "https://swapi.dev/api/people/#/"


//Fetching data from an api in React.js;



//practice;
//1. create app, component that change state based on button click.

//2. conditional rendering based on state; all patterns.
//3. re-create todo application from scratch.
//4. conditional rendering and fetch api based on state.

//create app, component that change state based on button click.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState =>{
            return this.state = {
                count: prevState.count += 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onclick = {this.handleClick}>Click to add 1!</button>
            </div>
        )
    }
}
export default Root


// conditional rendering based on state; all patterns.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading: false})
        }, 3000)
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoading 
                    ? 
                    <h1>system loading in progress...</h1> 
                    : 
                    <h1>system loading successful</h1>
                }
            </div>
        )
    }
}
export default Root

//conditional rendering based on state change; pattern a
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './child'



class Root extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }
    
    render(){
        return(
            <div>
                {
                    this.state.isLoading 
                    ? <h1>system loading...</h1>
                    : <ChildComponent/>
                }
            </div>
        )
    }
}
export default Root

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>system load successful!</h1>
            </div>
        )
    }
}
export default ChildComponent

// re-create todo application from scratch.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import TaskComponent from './taskComponent'
import taskArray from './taskArray'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            tasks: taskArray
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const updatedTasks = this.prevState.tasks.map(task =>{
                if(task.id === id){
                    return{
                        ...task,
                        competed: !task.completed
                    }
                }
                return task
            })
            return {tasks: updatedTasks}
        })
    }

    render(){
        const newTaskArray = this.state.tasks.map(arrayItem =>
            <TaskComponent 
                key = {arrayItem.id}

                //return to modify
                arrayItem = {arrayItem}
                handleChange = {this.handleChange}
            />
        )

        return(
            <div>
                <Header/>
                {newTaskArray}
            </div>
        )
    }
}
export default Root

import React, {Component} from 'react'

class TaskComponent extends Component{
    //new method and state here.

    render(){
        //variable, js logic & css styling here.
        const completedStyle = {
            display: 'none'
        }
        const textStyle = {
            color: 'green'
        }

        return(
            <div>
                <input
                    
                    type = 'checkbox'
                    completed = {this.props.completed}
                    onChange = {
                        this.props.handleChange(()=>{
                            this.props.propsObj.id
                        })
                    }
                />

              <input style = {
                    this.props.propsObj.completed ?
                    completedStyle : textStyle
                }
                />
            </div>

        )
    }
}
export default TaskComponent

import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(prevState =>{
                return this.state = {
                    isLoading: prevState.isLoading = false
                }
            })
        }, 3000);
    }

    render(){
        return(
            <div>
                {
                    this.state.isLoading ? 
                    <h1>Application Loading...</h1>:
                    <h1>Task App</h1>
                }
            </div>
        )
    }
}
export default Header

//fetching data from api
//"https://swapi.dev/api/people/1/"

import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './parent'

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()

        this.state = {
            character: {},
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);
        fetch("https://swapi.dev/api/people/4/")
        .then(response => response.json())
        .then(data =>{
            this.setState({
                character: data
            })
        })
    }

    render(){
        const loadText = this.state.isLoading ? 'loading' :
        this.state.character.name
        return(
            <div>
                <h1>{loadText}</h1>
            </div>
        )
    }
}
export default Parent

/*create an application that uses a button to keep 
track of original and new state.*/
import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './parent'

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            originalState: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState =>{
            return this.state = {
                originalState: !prevState.originalState
            }
        })
    }

    render(){
        const stateText = this.state.originalState ? 'click to like | 0'
        : 'click to unlike | 1'
        return(
            <div>
                <button onClick={this.handleClick}>
                    <h1>{stateText}</h1>
                </button>
            </div>
        )
    }
}
export default Parent

//re-create todo application from scratch(focus on concepts)

import React from 'react'
import Parent from './parent'

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import TaskComponent from './taskComponent'
import taskData from './taskData'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            tasks: taskData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){//takes in a parameter called id.
        this.setState(prevState=>{
            const updatedTasks = prevState.tasks.map(task =>{
                if(task.id === id){
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
            return {tasks: updatedTasks}
        })
    }

    render(){
        const newTasksArray = this.state.tasks.map(arrayItem => 
            <TaskComponent

            //passing down props from imported taskData array into the TaskComponent
            key = {id.arrayItem}
            completed = {arrayItem.completed}
            task = {arrayItem.task}
            handleChange = {this.handleChange}
            />
        )
        return(
            <div>
                {newTasksArray}
            </div>
        )
    }
}
export default Parent

import React from 'react'

const taskData = [
    {
        id: 0,
        task: '',
        completed: true
    },
    {
        id: 1,
        task: '',
        completed: false
    },
    {
        id: 2,
        task: '',
        completed: false
    },
    {
        id: 3,
        task: '',
        completed: false
    }
]
export default taskData

import React, {Component} from 'react'
//component received props from Parent component
class TaskComponent extends Component{
    render(){
        const incompleteStyle = {
            color: 'green'
        }
        const completedStyle = {
            display: 'none'
        }
        return(
            <div>
                <input
                    type = 'checkbox'
                    completed = {this.props.completed}

                    //event listener/method needed on the input element to function.
                    onchange = {()=>{
                        this.props.handleChange(this.props.id)
                    }}
                />

                <input 
                    type="text"
                    style = {
                        this.props.completed ? completedStyle:
                        incompleteStyle
                    }
                />
            </div>
        )
    }
}
export default TaskComponent

{/* Formik; used for writing forms*/}
//react.js forms pt. 1

import React from 'react'
import Parent from './parent'

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //handleChange method takes in a parameter(variable) that exists as a DOM object(form-input)
    handleChange(event){
        /*
            {name, value} both live within an <element/>
            that contains a event.that.targets data when 
            fired.

            used mainly for displaying text outside from within <input type = 'text/>
        */
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input 
                    type = "text"
                    name = 'firstName'
                    value = {this.state.firstName}
                    onChange = {this.handleChange}
                    placeholder = 'First Name'
                />

                    <br/>

                <input 
                    type = "text"
                    name = 'lastName'
                    value = {this.state.lastName}
                    onChange = {this.handleChange}
                    placeholder = 'Last Name'
                />
                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
            </form>
        )
    }
}
export default Parent

//react forms part 2.; checkboxes

import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './parent'

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
)

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        //accessing properties from the event/element within DOM
        //with obj destructuring.
        const {name, value, type, checked} = event.target
        type === 'checked' ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                {/* checkbox forms */}
                <label>
                    <input 
                        type = 'checkbox'
                        name = 'isChecked'
                        checked = {this.state.isChecked}
                        onChange = {this.handleChange}
                    />
                    Is checked ?
                </label>
            </form>
        )
    }
}
export default Parent

//react.js forms; radio buttons
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            switch: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){

    }

    render(){
        return(
            <form>
                <input 
                    type = "radio"
                    name = 'switch'
                    value = 'on!'
                    checked = {this.state.switch === 'on!'}
                    onChange = {this.handleChange}
                />

                <input 
                    type = "radio"
                    name = 'switch'
                    value = 'off!'
                    checked = {this.state.switch === 'off!'}
                    onChange = {this.handleChange}
                />
                <h1>The lights are {this.state.switch}</h1>
            </form>
        )
    }
}
export default Root

//react forms part 2; <textArea/>
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checked' ? this.setState({[name]: checked})
        : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <textarea
                    value = {'Some Text'}
                    onChange = {this.handleChange}
                />
            </form>
        )
    }
}
export default Root

//react.js forms pt.2; select-option forms

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            favMusicGenre: 'Rap/Hip-Hop'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //method that allows the different types of forms to be modified.
    handleChange(event){

        //extracting certain properties from the elements that triggered the event.
        const {checked, name, type, value} = event.target
        type === "checked" ? this.setState({[name]: checked})
        : this.setState({[name]: value})
    }

    //lifecycle render() method
    render(){
        return(
            <form>
                <select
                    //initial value set to whatever is within state; could be empty string
                    value = {this.state.favMusicGenre}

                    //name is always set to string version of state
                    name = 'favMusicGenre'

                    //eventHandler contains the method.
                    onChange = {this.handleChange}
                >
                    <option value="Rap/Hip-Hop">Rap/Hip-Hop</option>
                    <option value="R and B">R and B</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Dance Hall">Dance hall</option>
                </select>

                <h1>Music Genre Selection: {this.state.favMusicGenre}</h1>
            </form>

        )
    }
}
export default Root


/*
practice creating forms with state in react.js 
react.js

    //input-text forms
    //input-checkbox forms
    //input-radio forms
    //text area forms
    //select/option forms
*/

//input-text forms
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){//function that creates objects/properties
        super()
        this.state = {
            someFirstText: '',
            someSecondText: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input 
                    type = "text"
                    name = 'someFirstText'
                    value = {this.state.someFirstText}
                    onChange = {this.handleChange}
                    placeholder = 'Placeholder Text'
                />
                <input 
                    type="text"
                    name = 'someSecondText'
                    value = {this.state.someSecondText}
                    onchange = {this.handleChange}
                    placeholder = 'Placeholder Text'
                />
                <h1>{this.state.someFirstText}</h1>
                <h1>{this.state.someSecondText}</h1>
            </form>
        )
    }
}
export default Root

//react.js checkbox form
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {checked, name, type, value} = event.target
        type === 'checked' ? this.setState({[name]: checked}) 
        : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <label>
                    <input 
                        type = "checkbox"

                        //currently false until clicked.
                        name = 'isChecked'
                        checked = {this.state.isChecked}
                        onChange = {this.handleChange}
                    />
                </label>Is clicked ?
                <h2>Is checked: {this.state.isChecked ? 'is checked' : 'is not checked'}</h2>
            </form>
        )
    }
}
export default Root

//react.js radio buttons
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            activated: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checked' ? this.setState({[name]: checked}) : 
        this.setState({[name]: value})
    }
    render(){
        return(
            <form>
                <input 
                    type = "radio"
                    name = 'activated'
                    value = 'active'
                    checked = {this.state.activated === 'active'}
                    onChange = {this.handleChange}
                />
                <input 
                    type = "radio"
                    name = 'activated'
                    value = 'inactive'
                    checked = {this.state.activated === 'inactive'}
                    onChange = {this.handleChange}
                />
                <h1>The server is {this.state.activated}</h1>
            </form>
        )
    }
}
export default Root

//react.js select/option forms
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            favDevLanguage: 'javaScript'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, type, value, checked} = event.target
        type === 'checked' ? this.setState({[name]: checked})
        : this.setState({[name]: value})
    }
    render(){
        return(
            <form>
                <select 
                    name = "favDevLanguage"
                    value = {this.state.favDevLanguage}
                    onChange = {this.handleChange}
                >
                    <option value="javaScript">JavaScript</option>
                    <option value="jsx">JSX</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="python">Python</option>
                </select>
            <h1>My favorite development language is {this.state.devLanguage}</h1>
            </form>
        )
    }
}
export default Root

//react.js controlled components; state, checkboxes
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'

class Root extends React.Component{
    constructor(){
        super()
        this.state = {
            isFrontEnd: false,
            isBackEnd: false,
            isSysAdmin: false,
            isNetworking: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) 
        : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <label>
                    <input 
                        type = "checkbox"
                        name = "isFrontEnd"
                        checked = {this.state.isFrontEnd}
                        onChange = {this.handleChange}
                    /> Front End Software Engineer
                </label>
                <br/>

                <label>
                    <input 
                        type = "checkbox"
                        name = 'isBackEnd'
                        checked = {this.state.isBackEnd}
                        onChange = {this.handleChange}
                    />
                </label>
                <br/>
                
                <label>
                    <input 
                        type = "checkbox"
                        name = 'isSysAdmin'
                        checked = {this.state.isSysAdmin}
                        onChange = {this.handleChange}
                    />
                </label>
                <br/>

                <label>
                    <input 
                        type = "checkbox"
                        name = 'isNetworking'
                        checked = {this.state.isNetworking}
                        onChange = {this.handleChange}
                    />
                </label>
                <br/>

                <h1>Engineering Data:</h1>
                <h2>
                    Front End Software Engineer: {this.state.isFrontEnd ? 'Front End Software Engineering' : ''}
                </h2>
                <h2>
                    Back End Software Engineer: {this.state.isBackEnd ? 'Back End Software Engineering' : ''}
                </h2>
                <h2>
                    Systems Administration/Software Engineer: {this.state.isSysAdmin ? 'Systems Administrator/Software Engineering' : ''}
                </h2>
                <h2>
                    Computer Networking/Software Engineer: {this.state.isNetworking ? 'Computer Networking/Software Engineering' : ''}
                </h2>
            </form>
        )
    }
}
export default Root


/*
practice react.js forms

text inputs
checkbox inputs
radio inputs
select/option forms
*/
import React from 'react'
import ReactDOM from 'react-dom'
import TextFormComponent from './textformcomponent'

ReactDOM.render(
    <TextFormComponent/>,
    document.getElementById('root')
)

import React, {Component} from './react'

class TextFormComponent extends Component{
    constructor(){
        super()
        this.state = {
            devAlias: '',
            devLanguage: ''
        }
        this.handelChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input 
                    type = "text"
                    //name = 'devAlias' is an attribute that represents certain state.
                    name = 'devAlias'
                    value = {this.state.devAlias}
                    onChange = {this.handleChange}
                />
                <br/>

                <input 
                    type = "text"
                    name = 'devLanguage'
                    value = {this.state.devLanguage}
                    onChange = {this.handleChange}
                />
            </form>
        )
    }
}
export default TextFormComponent

import React from 'react'
import ReactDOM from 'react-dom'
import CheckBoxForm from './checkboxform'

ReactDOM.render(
    <CheckBoxForm/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class CheckBoxForm extends Component{
    constructor(){
        super()
        this.state = {
            isFrontEndSoftwareEngineer: false,
            isBackEndSoftwareEngineer: false,
            isSystemsAdmin: false,
            isNetworking: false
        }
        this.handleChange = this.handleChange
    }

    handleChange(event){
        /*
            method makes use of
            essentially extracting properties 
            from the event being targeted within the virtual DOM.
        */
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked})
        : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <input 
                    type = "text"
                    name = 'isFrontEndSoftwareEngineer'
                    checked = {this.state.isFrontEndSoftwareEngineer}
                    onChange = {this.handleChange}
                />
                <br/>

                <input 
                    type = "checkBox"
                    name = 'isBackEndSoftwareEngineer'
                    checked = {this.state.isBackEndSoftwareEngineer}
                    onChange = {this.handleChange}
                />
                <br/>

                <input 
                    type = "text"
                    name = 'isSysAdmin'
                    checked = {this.state.isSystemsAdmin}
                    onChange = {this.handleChange}
                />
                <br/>

                <input 
                    type="text"
                    name = 'isNetworking'
                    checked = {this.state.isNetworking}
                    onChange = {this.handleChange}
                />
                <br/>

                <h2>
                    Front End Software Engineer: {this.state.isFrontEndSoftwareEngineer ? 'Front End Development' 
                    : ''}
                </h2>

                <h2>Back End Software Engineer: {this.state.isBackEndSoftwareEngineer ? 'Back End Development' 
                    : ''}
                </h2>

                <h2>
                    Systems Administrator: {this.state.isSystemsAdmin ? 'Systems Administrator' 
                    : ''}
                </h2>

                <h2>
                    Computer Networking: {this.state.isNetworking ? 'Computer Networking' 
                    : ''}
                </h2>
            </form>
        )
    }
}
export default CheckBoxForm

//radio
import React from 'react'
import ReactDOM from 'react-dom'
import RadioFormComponent from './RadioFormComponent'

ReactDOM.render(
    <RadioFormComponent/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class RadioFormComponent extends Component{
   constructor(){
       super()
       this.state = {
           appDevInProgress: 'in progress',
           developmentFramework: 'react.js'
       }
       this.handleChange = this.handleChange.bind(this)
   } 

   handleChange(event){
       const {name, value, type, checked} = event.target
       type === 'checkbox' ? this.setState({[name]: checked}) 
       : this.setState({[name]: value})
   }

   render(){
       return(
           <form>
               <input 
                    type = "radio"
                    name = 'appDevInProgress'
                    value = 'in progress'
                    checked = {this.state.appDevInProgress === 'in progress'}
                    onChange = {this.handleChange}
                />
                <input 
                    type = "radio"
                    name = 'developmentFramework'
                    value = 'react.js'
                    checked = {this.state.developmentFramework === 'react.js'}
                    onChange = {this.handleChange}
                />
                <h2>Application Development in Progress: {this.state.appDevInProgress}</h2>
                <h2>Application Development Tools: {this.state.developmentFramework}</h2>
           </form>
       )
   }
}
export default RadioFormComponent

//select/option forms
import React from 'react'
import ReactDOM from './react-dom'
import SelectOptionForm from './selectoptionform'

ReactDOM.render(
    <SelectOptionForm/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class SelectOptionForm extends Component{
    constructor(){
        super()
        this.state = {
            faveDevLanguage: 'javaScript'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        //extracting properties from DOM event that is being targeted.
        const {name, type, value, checked} = event.target
        type === 'checked' ? this.setState({[name]: checked})
        : this.setState({[name]: value})
    }

    render(){
        return(
            <form>
                <select 
                    name = "faveDevLanguage"
                    value = {this.state.faveDevLanguage}
                    onChange = {this.handleChange}
                >
                    <option value="javaScript">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="jsx">JSX</option>
                    <option value="python">Python</option>
                </select>
                <h2>
                    Favorite Development Language: {this.state.FavDevLanguage}
                </h2>
            </form>
        )
    }
}
export default SelectOptionForm

//textArea form
import React from 'react'
import ReactDOM from 'react-dom'
import TextAreaFormComponent from './textformcomponent'

import React, {Component} from 'react'

class TextAreaFormComponent extends Component{
    constructor(){
        super()
        this.state = {
            stateText: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(event){ 
    //     const {name, type, value, checked} = event.target
    //     type === 'checkbox' ? this.setState({[name]: checked})
    //     : this.setState({[name]: value})
    // }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        const stateTextStyle = {
            color: 'blue',
            fontSize: 20
        }
        return(
            <form>
                <textarea
                    name = 'stateText'
                    value = {this.state.stateText}
                    onChange = {this.handleChange}
                />
                <h2 style = {stateTextStyle}>{this.state.stateText}</h2>
            </form>
        )
    }
}
export default TextAreaFormComponent

//passing down state/props
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'
import ChildComponent from './childcomponent'
import ChildComponent_1 from './childcomponent_1'

class Root extends Component{
    constructor(){
        super()
        this.state = {
            devAlias: 'cyberman'
        }
    }

    render(){
        return(
            <div>
                <ChildComponent
                    propsItem = {this.state.devAlias}
                />
                <ChildComponent_1
                    propsObj = {{data: this.state.devAlias}}
                />
            </div>
        )
    }
}
export default Root

//'./childcomponent'

import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.propsItem}</h1>
            </div>
        )
    }
}
export default ChildComponent


//'./childcomponent_b'

import React, {Component} from 'react'

class ChildComponent_b extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.propsObj.data}</h1>
            </div>
        )
    }
}
export default ChildComponent_b


/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Primitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
let arrayInt = [1,2,3,4,5,6]

- arrayInt.reduce((acc, int)=>{
    if(int > 1){
        acc.concat(int)
    }
})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- request comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatible with databases


Hosting method
- size & level
- size of individual services
- type of caching is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Micro Services and Firewalls

not-micro services; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.

AJAX programming;
AJAX is a technique for accessing web servers from a web page.

intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json


*Error Handling*

best methods;
 promise chaining use; .catch(), to 'catch' any errors

 async/await use; try{}catch(){}, to try code and catch any errors

 automatically invoke (async function(){try{}catch(){}})()
 can be used to handle errors.

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

3 promise states;
resolve; return promise was successful

reject; returned promise was unsuccessful

pending; returning a promise is in unknown process 

Async Challenges: course outline;

- Train in ways to handle async calls
- Handle errors in asynchronous code
- understand promises
- promise workout


finally() can be used
when managing promise chaining,

or when managing async promises
within automatically invoked (async functions resolver (){try{}catch(){}})()

auto invoked (async functions (){try{}catch(){}})()
then runs the resolver function as a result.

//automatically invoked function
A self-invoking expression is invoked (started) automatically, without being called.
(function(){
})()

Function expressions can be made "self-invoking".



practice fetch() api, x
async/await fetch() api, x
fetch() api error handling techniques; .catch()/try{}catch(){} x
promise chaining with fetch() api, x
async/await functions; promise chaining with fetch() api, x

promises; 3 states; [pending, resolved, rejected], x
promises + auto invoked functions, x
promises + finally method(auto invoked functions, resolver()) x

promises + fulfill all promises; Promise.all([]) x
Promise.all([]); good for resolving all promises.

promises + fulfill the fastest promise; Promise.race([]); 
Promise.race([]); good for timing out an event then not
proceeding when it takes too long.

parallel execution; 

submitting form form data using fetch() api
uploading multiple files using fetch() api.

Fetch Advanced

*/

/*
react clean up

1. delete index.css, delete import index.css in index.js
2. delete logo svg, delete import logo in app.js
3. delete header in app.js
4. delete css in app.css, don't delete file.
*/

/*
React Basics

why use react? 

- its speed
- uses virtual DOM.
- reusability

React uses Js/ES6 syntax
React allows jsx to function.

render() keyword/method; lifecycle method
that invokes the jsx to the virtual DOM.


jsx is a js rendition of html

need to wrap jsx elements inside a div.

do not need to import child components through
the main rendering page.

Parent & Child Component;

- creates a complex tree/hierarchy of components
- The render page serves an entry point for our app
when we provide an instance of the parent component '<App/>'

Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

Instances 
can apply multiple instances of child components 
within parent

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component, has to be on two different components.

function Root(){
    return(
        <div>
            //1. can give individual attributes
            <Component data='some data'/>

            or 

            //2. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1. can give use dot notation with props and attribute
            <p>{props.data}</p>

            or

            //2. can use dot notation with props on object and attribute
            <p>{props.object.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

- can leave some props missing if needed.
- can apply style={{conditional styling/rendering ? to inline style}}

Array methods;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

Jsx to js and back;

- surround javaScript within jsx with open and 
closed curly braces.
- write pure js within the function, but outside of the
return statement.

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

React props;

Mapping/Rendering props;

- can use props dot notation within mapped props component
when passing down props.

e.g. 

//within app/root component

    let newArray = array.map(arrayItem=> <MappedComponent 

        key = {propsItem.id}
        propsObj = {arrayItem}

        // can apply object obj = {data} from child components
        //when rendering outside data.
    />)

return(
    <element>{propsArray}</element>
)

//within PropsComponent

function PropsComp(props){
    return(
        <div>
            <h1>{props.propsObj.name}</h1>
            <h1>{props.propsObj.type}</h1>
        </div>
    )
}
export default PropsComp

or can use

let newArray = arrayData.map(arrayItem => 
    <MappedComponent
        key = {arrayItem.id}
        name = {arrayItem.name}
        type = {arrayItem.type}
    />
)

return(
    <div>
        {newArray}
    </div>
)

function PropsComponent(props){
    return(
        <div>
            {props.name}
            {props.type}
        </div>
    )
}
export default PropsComponent

practice; class based components.
practice; class based components and passing down props.
practice; class based components and state.
practice; class based components and adding state
within props.

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
https://reactjs.org/docs/events.html#supported-events


Handling Events in React.js;

- letting the user interact with webpage and application.
- all events will be camelCased. 
can add 

- store function inside variable to be used inline.

- within js;
const functionVariable = function someAction(){
    //block of code to run
}

- within jsx; 
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

- inline jsx event handlers;
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

//React lifecycle methods pt. 1;
render(){}; will always run jsx before and after new lifecycle methods are used.

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

React lifecycle methods pt.2 

render(){}; will always run jsx before and after new lifecycle methods are used.

//getSnapshotBeforeUpdate(){};

//creates a backup of the current way things are.
// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props
// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.

//return false makes app more performant, 
//returning true can create bugs within code.

React lifecycle methods pt. 3

render(){}; will always run jsx before and after new lifecycle methods are used.

componentDidUpdate(prevProps, prevState){}; runs after state is allowed to be changed
and after the component is rendered() and component is mounted() successfully.

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            //can run some logic
            //then change state
            this.setState({state: stateData})
        }

        or

        if(prevProps !== this.props){
            //can run some logic
            //then change props is child component

            propsObj = {{data: this.state.someData}}

            propsItem = {this.state.otherData}
        }
    }

Conditional rendering.

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <h1>Run this instead</h1>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent/>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent
                    props = {this.state.something}
                />
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <Component
                    propsObj = {{propsData: this.state.something}}
                />
            }

        </div>
    )
}

conditional rendering can be applied to a components 
style.

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            verified: true
        }
    }

    render(){
        const verifiedStyle = {
            color: 'blue'
        }
        const unverifiedStyle = {
            color: 'red'
        }
        return(
            <div>
                {
                    this.state.verified ? 
                    <h1 style = {verifiedStyle}>
                        Data verified
                    </h1>
                    :
                    <h1 style = {unverifiedStyle}>
                        Data unverified
                    </h1>
                }
            </div>
        )
    }
}
export default Parent

fetching data from api in react.js

writing forms and their methods;

<form>
    text input form
    <input 
        type = 'text'
        name = 'stateValue'
        value = {this.state.stateValue}
        onChange = {this.method}
        placeholder = ''
    />

    checkbox input form
    <input
        type = 'checkbox'
        name = 'stateVal'
        checked = {this.state.stateVal}
        onChange = {this.method}
    />

    radio button input forms\

    <input
        type = 'radio'
        name = 'stateVal'
        value = 'value'
        checked = {this.state.stateValue === 'value'}
        onChange = {this.method}
    />

    can display state through forms.
        <h1>{this.state.stateVal}</h1>
    </form>

  COMPONENT & CONTAINER ARCHITECTURE; 
  technique that separates components based
  on app rendering, logic and display.


  import React from 'react'
  import ReactDOM from 'react-dom'
  import Root from './root'

  ReactDOM.render(
      <Root/>,
      document.getElementById('root)
  )

  import React from 'react'
  import Container from './container'
  import Component from './component'

  function Root(){
      return(
          <Container/>
          <Component/>
      )
  }
  export default Root

  import React, {Component} from 'react'
  import Component from './component'

  class Container extends Component{
      constructor(){
          super()
          this.state = {
            lang_1: '',
            lang_2: '',
            lang_3: '',
            frontEndDev: false,
            backEndDev: false,
            systemsAdmin: false,
            devInProgress: 'in progress',
            devNotInProgress: 'not in progress'
          }
          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
          //destructuring properties from a DOM object targeted user event.

          const {name, value, type, checked} = event.target
          type === 'checkbox' ? this.setState({[name]: value})
          : this.setState({[name]: checked})
      }
      render(){
          return(
              <div>
                <Component
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
              </div>
          )
      }
  }
  export default Root

  import React from 'react'

  function Component(props){
    return(
        <main>
            <form>
                <input
                    type = 'text'
                    name = 'lang_1'
                    value = {props.data.lang_1}
                    onChange = {props.handleChange}
                    placeholder = 'first development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_2'
                    value = {props.data.lang_2}
                    onChange = {props.handleChange}
                    placeholder = 'second development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_3'
                    value = {props.data.lang_3}
                    onChange = {props.handleChange}
                    placeholder = 'third development language'
                />
                <br/>

                <input
                    type = 'checkbox'
                    name = 'frontEndDev'
                    checked = {props.data.frontEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'backEndDev'
                    checked = {props.data.backEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'systemsAdmin'
                    checked = {props.data.systemsAdmin}
                    onChange = {props.handleChange}
                />
                <br/>

                <input
                    type = 'radio'
                    name = 'devInProgress'
                    value = 'in progress'
                    checked = {props.data.inProgress === 'in progress'}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'radio'
                    name = 'devNotInProgress'
                    value = 'not in progress'
                    checked = {props.data.devNotInProgress === 'not in progress'}
                    onChange = {props.handleChange}
                />
                <h1>{props.data.lang_1}</h1>
                <br/>

                <h1>{props.data.lang_2}</h1>
                <br/>

                <h1>{props.data.lang_3}</h1>
                <br/>

            </form>
        </main>
    )
}
export default Component

//practice componentDidMount(){} & conditional rendering

//react.js container and component architecture;

//practice creating forms challenge

* react.js container and component architecture;
used to separate component rendering, js logic
and layout.

* rebuild todo application and use 
conditional rendering with 
form input logic to display task
updates.

* practice fetching data from an api in 
react.js

Writing Modern React Apps

 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html


New Features to React.js

- can use an arrow function for our methods
no need to use binding, can get rid of constructor.

React Hooks pt1; 

- 'Hook into' state and lifecycle methods with functional 
based components. 

- improves readability and organization of components.

useState() patterns 1, 2, 3

import React, {useState} from 'react'
const [ state ] = usetate()

import React, {useState} from 'react'
const state = useState()

import React from 'react'
const [ state ] = React.useState()

React Hooks/useState() pt2; changing state

import React, {useState} from 'react'

- function Root(){
    const [state, changeState] = useState('state')

    function change(){
        changeState(prevState => prevState = 'state updated')
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={change}>Change State</button>
        </div>
    )
}
export default Root

UseEffect pt.1;

- hooks into components
lifecycle and state.

- replacement for componentDidMount,
componentDidUpdate, componentWillUnMount

- used ƒor; Side effects; 
// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState, useEffect} from 'react'

keeps track of what happens to declared state.
useEffect(()=>{

}, [state])

UseEffect pt.2;
useEffect twice, return function, empty array.

    //returned function represents componentWillUnmount()
   
    //useEffect changes count every 3 seconds on interval
    //returns a clean up function that prevents bug.
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)

        }, 3000)

        return ()=> {//provided as a clean up function.
            clearInterval(intervalId)
        }
    }, []) //empty array represents componentDidMount() sets up/renders once at a time.

    //represents componentDidUpdate(), watches for count state to change
    //then sets new color to count state.
    useEffect(()=>{
        setColor(randomcolor())
    }, [count])

- can use return function 
to act as componentWillUnmount()
to perform any clean up of 
side effects needed.

- empty array used as componentDidMount()

- can use useEffect twice to 
act as componentDidUpdate()
to to watch for changes to state.


Ideas for React Apps;
https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d


*/



import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import FormContainer from './formContainer'
import FormComponent from './formComponent'

function Root(){
    return(
        <div>
            <FormContainer/>
            <FormComponent/>
        </div>
    )
}
export default Root

import React, {Component} from 'react'
import FormContainer from './formcontainer'

class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            //text-input
            devAlias: 'cyberman',
            devLanguage: 'javascript',
            devLibrary: 'react.js',

            //select-option
            devOs: 'ios',

            //radio button
            devInProgress: '',

            //checkbox
            isFrontEnd: false,
            isBackEndDev: false,
            isSysAdmin: false,
            isNetworking: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        //destructuring DOM object targeted events & their properties.
        const {name, value, checked, type} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) 
        : this.setState({[name]: value})
    }

    render(){
        return(
            <div>
                <FormComponent
                    //passing down properties via props
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
            </div>
        )
    }
}
export default FormContainer

import React from 'react'

function FormComponent(props){
    return(
        <main>
            <div>
                <form>  
                    {/*text-input*/}
                    <input
                        type = "text"
                        name = 'devAlias'
                        value = {props.data.devAlias}
                        onChange = {props.handleChange}
                    />

                    <input 
                        type = "text"
                        name = 'devLanguage'
                        value = {props.data.devLanguage}
                        onChange = {props.handleChange}
                    />

                    <input 
                        type = "text"
                        name = 'devLibrary'
                        value = {props.data.devLibrary}
                        onChange = {props.handleChange}
                    />

                    {/*select-option*/}

                    <select 
                        name = "ios"
                        value = {props.data.devOs}
                        onChange = {props.handleChange}
                    >
                        <option value = "ios">iOS</option>
                        <option value = "windows">Windows</option>
                        <option value = "linux">Linux</option>
                        <option value = "BSD">BSD</option>
                    </select>
                </form>
            </div>
        </main>
    )
}
export default FormComponent

/*
React Hooks; 

- 'Hook into' state and lifecycle methods with functional 
based components. 

- improves readability and organization of components.

useState() part;
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//pattern 1
import React from 'react'

function Root(){

    const devLanguage = React.useState('javaScript')

    return (
        <div>
            <h1>favorite development language {devLanguage}</h1>
        </div>
    )
}
export default Root

//pattern 2
import React, {useState} from 'react'

function Root(){

    const value = useState('state value')

    return(
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default Root

//pattern 3
import React, {useState} from 'react'

function Root(){

    //destructuring data from useState() method.
    const [ devLanguage ] = useState('javaScript')

    return(
        <div>
            <h1>{devLanguage}</h1>
        </div>
    )
}
export default Root

/* 
    useState() pt2.; changing state 
        &
    why does useState() return an array 
*/

//useState patterns 1, 2, 3

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const [ value ] = useState('state value')

    return(
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default Root

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'

function Root(){
    const value = React.useState('state value')

    return(
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default Root

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const value = useState('state value')

    return(
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default Root

//create a counter app within a function component and useState()

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const [count] = useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <button>Change Count</button>
        </div>
    )
}
export default Root

//React Hooks useState() pt.2; adding methods

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    //adding state and methods.
    const [ count ] = useState(0)

    function increase(){
        setCount(prevCount => prevCount + 1)
    }

    function decrease(){
        setCount(prevCount => prevCount - 1)
    }

    function double(){
        setCount(prevCount => prevCoun * 2)
    }

    return(
        <div>
            <h1>{count}</h1>
            <hr/>
            <button onClick = {increase}>Increase</button>
            <hr/>
            <button onClick = {decrease}>Decrease</button>
            <hr/>
            <button onClick = {double}>Double</button>
            
        </div>
    )
}
export default Root


/*
useEffect pt.1 practice; 

replaces lifecycle method
for components when they need to 
update while handling outside operations.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

function Root(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    useEffect(()=>{
        setColor(randomcolor())
    }, [count])//useEffect watches for state variable to update,
    //then will apply necessary operations to component.
    const stateStyle = {
        color: color
    }
    return(
        <div>
            <h1 style={stateStyle}>{count}</h1>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </div>
    )
}
export default Root

//useEffect pt.2; clean up.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

function Root(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')

    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    
    //returned function represents componentWillUnmount()
   
    //useEffect changes count every 3 seconds on interval
    //returns a clean up function that prevents bug.
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)

        }, 3000)

        return ()=> {//provided as a clean up function; componentWillUnmount()
            clearInterval(intervalId)
        }
    }, []) //empty array represents componentDidMount() sets up/renders once at a time.

    //represents componentDidUpdate(), watches for count state to change
    //then sets new color to count state.
    useEffect(()=>{
        setColor(randomcolor())
    }, [count])

    return(
        <div>
            <h1 style = {{color: color}}>{count}</h1>
            {/* <button onclick = {increment}>Increment</button> */}
        </div>
    )
}
export default Root
/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Primitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
let arrayInt = [1,2,3,4,5,6]

- arrayInt.reduce((acc, int)=>{
    if(int > 1){
        acc.concat(int)
    }
})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- request comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatible with databases


Hosting method
- size & level
- size of individual services
- type of caching is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Micro Services and Firewalls

not-micro services; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.

AJAX programming;
AJAX is a technique for accessing web servers from a web page.

intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json


*Error Handling*

best methods;
 promise chaining use; .catch(), to 'catch' any errors

 async/await use; try{}catch(){}, to try code and catch any errors

 automatically invoke (async function(){try{}catch(){}})()
 can be used to handle errors.

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

3 promise states;
resolve; return promise was successful

reject; returned promise was unsuccessful

pending; returning a promise is in unknown process 

Async Challenges: course outline;

- Train in ways to handle async calls
- Handle errors in asynchronous code
- understand promises
- promise workout


finally() can be used
when managing promise chaining,

or when managing async promises
within automatically invoked (async functions resolver (){try{}catch(){}})()

auto invoked (async functions (){try{}catch(){}})()
then runs the resolver function as a result.

//automatically invoked function
A self-invoking expression is invoked (started) automatically, without being called.
(function(){
})()

Function expressions can be made "self-invoking".



practice fetch() api, x
async/await fetch() api, x
fetch() api error handling techniques; .catch()/try{}catch(){} x
promise chaining with fetch() api, x
async/await functions; promise chaining with fetch() api, x

promises; 3 states; [pending, resolved, rejected], x
promises + auto invoked functions, x
promises + finally method(auto invoked functions, resolver()) x

promises + fulfill all promises; Promise.all([]) x
Promise.all([]); good for resolving all promises.

promises + fulfill the fastest promise; Promise.race([]); 
Promise.race([]); good for timing out an event then not
proceeding when it takes too long.

parallel execution; 

submitting form form data using fetch() api
uploading multiple files using fetch() api.

Fetch Advanced

*/

/*
react clean up

1. delete index.css, delete import index.css in index.js
2. delete logo svg, delete import logo in app.js
3. delete header in app.js
4. delete css in app.css, don't delete file.
*/

/*
React Basics

why use react? 

- its speed
- uses virtual DOM.
- reusability

React uses Js/ES6 syntax
React allows jsx to function.

render() keyword/method; lifecycle method
that invokes the jsx to the virtual DOM.


jsx is a js rendition of html

need to wrap jsx elements inside a div.

do not need to import child components through
the main rendering page.

Parent & Child Component;

- creates a complex tree/hierarchy of components
- The render page serves an entry point for our app
when we provide an instance of the parent component '<App/>'

Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

Instances 
can apply multiple instances of child components 
within parent

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component, has to be on two different components.

function Root(){
    return(
        <div>
            //1. can give individual attributes
            <Component data='some data'/>

            or 

            //2. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1. can give use dot notation with props and attribute
            <p>{props.data}</p>

            or

            //2. can use dot notation with props on object and attribute
            <p>{props.object.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

- can leave some props missing if needed.
- can apply style={{conditional styling/rendering ? to inline style}}

Array methods;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

Jsx to js and back;

- surround javaScript within jsx with open and 
closed curly braces.
- write pure js within the function, but outside of the
return statement.

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

React props;

Mapping/Rendering props;

- can use props dot notation within mapped props component
when passing down props.

e.g. 

//within app/root component

    let newArray = array.map(arrayItem=> <MappedComponent 

        key = {propsItem.id}
        propsObj = {arrayItem}

        // can apply object obj = {data} from child components
        //when rendering outside data.
    />)

return(
    <element>{propsArray}</element>
)

//within PropsComponent

function PropsComp(props){
    return(
        <div>
            <h1>{props.propsObj.name}</h1>
            <h1>{props.propsObj.type}</h1>
        </div>
    )
}
export default PropsComp

or can use

let newArray = arrayData.map(arrayItem => 
    <MappedComponent
        key = {arrayItem.id}
        name = {arrayItem.name}
        type = {arrayItem.type}
    />
)

return(
    <div>
        {newArray}
    </div>
)

function PropsComponent(props){
    return(
        <div>
            {props.name}
            {props.type}
        </div>
    )
}
export default PropsComponent

practice; class based components.
practice; class based components and passing down props.
practice; class based components and state.
practice; class based components and adding state
within props.

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
https://reactjs.org/docs/events.html#supported-events


Handling Events in React.js;

- letting the user interact with webpage and application.
- all events will be camelCased. 
can add 

- store function inside variable to be used inline.

- within js;
const functionVariable = function someAction(){
    //block of code to run
}

- within jsx; 
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

- inline jsx event handlers;
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

//React lifecycle methods pt. 1;
render(){}; will always run jsx before and after new lifecycle methods are used.

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

React lifecycle methods pt.2 

render(){}; will always run jsx before and after new lifecycle methods are used.

//getSnapshotBeforeUpdate(){};

//creates a backup of the current way things are.
// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props
// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.

//return false makes app more performant, 
//returning true can create bugs within code.

React lifecycle methods pt. 3

render(){}; will always run jsx before and after new lifecycle methods are used.

componentDidUpdate(prevProps, prevState){}; runs after state is allowed to be changed
and after the component is rendered() and component is mounted() successfully.

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            //can run some logic
            //then change state
            this.setState({state: stateData})
        }

        or

        if(prevProps !== this.props){
            //can run some logic
            //then change props is child component

            propsObj = {{data: this.state.someData}}

            propsItem = {this.state.otherData}
        }
    }

Conditional rendering.

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <h1>Run this instead</h1>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent/>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent
                    props = {this.state.something}
                />
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <Component
                    propsObj = {{propsData: this.state.something}}
                />
            }

        </div>
    )
}

conditional rendering can be applied to a components 
style.

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            verified: true
        }
    }

    render(){
        const verifiedStyle = {
            color: 'blue'
        }
        const unverifiedStyle = {
            color: 'red'
        }
        return(
            <div>
                {
                    this.state.verified ? 
                    <h1 style = {verifiedStyle}>
                        Data verified
                    </h1>
                    :
                    <h1 style = {unverifiedStyle}>
                        Data unverified
                    </h1>
                }
            </div>
        )
    }
}
export default Parent

fetching data from api in react.js

writing forms and their methods;

<form>
    text input form
    <input 
        type = 'text'
        name = 'stateValue'
        value = {this.state.stateValue}
        onChange = {this.method}
        placeholder = ''
    />

    checkbox input form
    <input
        type = 'checkbox'
        name = 'stateVal'
        checked = {this.state.stateVal}
        onChange = {this.method}
    />

    radio button input forms\

    <input
        type = 'radio'
        name = 'stateVal'
        value = 'value'
        checked = {this.state.stateValue === 'value'}
        onChange = {this.method}
    />

    can display state through forms.
        <h1>{this.state.stateVal}</h1>
    </form>

  COMPONENT & CONTAINER ARCHITECTURE; 
  technique that separates components based
  on app rendering, logic and display.


  import React from 'react'
  import ReactDOM from 'react-dom'
  import Root from './root'

  ReactDOM.render(
      <Root/>,
      document.getElementById('root)
  )

  import React from 'react'
  import Container from './container'

  function Root(){
      return(
          <Container/>
      )
  }
  export default Root

  import React, {Component} from 'react'
  import Component from './component'

  class Container extends Component{
      constructor(){
          super()
          this.state = {
            lang_1: '',
            lang_2: '',
            lang_3: '',
            frontEndDev: false,
            backEndDev: false,
            systemsAdmin: false,
            devInProgress: 'in progress',
            devNotInProgress: 'not in progress'
          }
          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
          //destructuring properties from a DOM object targeted user event.

          const {name, value, type, checked} = event.target
          type === 'checkbox' ? this.setState({[name]: value})
          : this.setState({[name]: checked})
      }


      render(){
          return(
              <div>
                <Component
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
              </div>
          )
      }
  }
  export default Root

  import React from 'react'

  function Component(props){
    return(
        <main>
            <form>
                <input
                    type = 'text'
                    name = 'lang_1'
                    value = {props.data.lang_1}
                    onChange = {props.handleChange}
                    placeholder = 'first development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_2'
                    value = {props.data.lang_2}
                    onChange = {props.handleChange}
                    placeholder = 'second development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_3'
                    value = {props.data.lang_3}
                    onChange = {props.handleChange}
                    placeholder = 'third development language'
                />
                <br/>

                <input
                    type = 'checkbox'
                    name = 'frontEndDev'
                    checked = {props.data.frontEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'backEndDev'
                    checked = {props.data.backEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'systemsAdmin'
                    checked = {props.data.systemsAdmin}
                    onChange = {props.handleChange}
                />
                <br/>

                <input
                    type = 'radio'
                    name = 'devInProgress'
                    value = 'in progress'
                    checked = {props.data.inProgress === 'in progress'}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'radio'
                    name = 'devNotInProgress'
                    value = 'not in progress'
                    checked = {props.data.devNotInProgress === 'not in progress'}
                    onChange = {props.handleChange}
                />
                <h1>{props.data.lang_1}</h1>
                <br/>

                <h1>{props.data.lang_2}</h1>
                <br/>

                <h1>{props.data.lang_3}</h1>
                <br/>

            </form>
        </main>
    )
}
export default Component

//practice componentDidMount(){} & conditional rendering

//react.js container and component architecture;

//practice creating forms challenge

* react.js container and component architecture;
used to separate component rendering, js logic
and layout.

* rebuild todo application and use 
conditional rendering with 
form input logic to display task
updates.

* practice fetching data from an api in 
react.js

Writing Modern React Apps

 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html


New Features to React.js

- can use an arrow function for our methods
no need to use binding, can get rid of constructor.

React Hooks pt1; 

- 'Hook into' state and lifecycle methods with functional 
based components. 

- improves readability and organization of components.

useState() patterns 1, 2, 3

import React, {useState} from 'react'
const [ state ] = usetate()

import React, {useState} from 'react'
const state = useState()

import React from 'react'
const [ state ] = React.useState()

React Hooks/useState() pt2; changing state

import React, {useState} from 'react'

- function Root(){
    const [state, changeState] = useState('state')

    function change(){
        changeState(prevState => prevState = 'state updated')
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={change}>Change State</button>
        </div>
    )
}
export default Root

UseEffect pt.1;

- hooks into components
lifecycle and state.

- replacement for componentDidMount,
componentDidUpdate, componentWillUnMount

- used ƒor; Side effects; 
// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState, useEffect} from 'react'

keeps track of what happens to declared state.
useEffect(()=>{

}, [state])

UseEffect pt.2;
useEffect twice, return function, empty array.

    //returned function represents componentWillUnmount()
   
    //useEffect changes count every 3 seconds on interval
    //returns a clean up function that prevents bug.
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)

        }, 3000)

        return ()=> {//provided as a clean up function.
            clearInterval(intervalId)
        }
    }, []) //empty array represents componentDidMount() sets up/renders once at a time.

    //represents componentDidUpdate(), watches for count state to change
    //then sets new color to count state.
    useEffect(()=>{
        setColor(randomcolor())
    }, [count])

- can use return function 
to act as componentWillUnmount()
to perform any clean up of 
side effects needed.

- empty array used as componentDidMount()

- can use useEffect twice to 
act as componentDidUpdate()
to to watch for changes to state.


Ideas for React Apps;
https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

REACT.js BOOTCAMP

modern js features;

no constructor, no binding
no super, use arrow functions
to write methods. 

Inside render(){
    destrucure state object to avoid 
    writing this.state.stateValue
    within jsx.

    can rename state values to apply to jsx.
}

REACT.FRAGMENT;

- Helps us wrap our elements in 
something that does not create a new node in 
DOM tree.

React.Fragment; avoids poluting the DOM tree
with many elements/nodes.

not all components need to
be fragments because it 
may affect the css on elements.

child components are placed on
the same level as their parent components.


    DEFAULT PROPS; 
    automaticaly sets
    a style property to a component
    unless the component is directly styled
    differently.

    import React from 'react'
    import Comp from './comp

    function Root(){
        return(
            <div>
                <Comp
                    componentColor='red'
                    componentBorder='10px dashed black'
                    componentHeight={200}
                />
            </div>
        )
    }
    export default Root

    import React from 'react'

    function Comp(props){
    const style = {
        color: props.componentColor,
        border: props.componentBorder,
        height: props.componentHeight
    }

    return(
        <div>
            <Child/>
        </div>
    )
}

Comp.defaultProps = {
    componentColor: 'black',
    componentBorder: '5px solid white',
    componentHeight: 100
}

export default Comp





    PROP TYPES; 
    type check what kind of 
    props are being passed down.

    Component.propTypes = {
        cardColor: PropTypes.dataType.isRequired,
        cardWidth: PropTypes.oneOf([dataType, dataType]).isRequired,
        cardHeight: PropTypes.dataType
    }

    .isRequired can be chained to 
    propTypes and automatically specifies
    required data type.


    REUSABILITY; prevents code repetition,
    writing the same code over and over again.
    D.R.Y. dont repeat yourself

    inheritance; what drives oop (flawed pattern).
    composition; compose code structure, bits and pieces (best method).

    Techniques;
    1. component with props
    2. children
    3. HOC
    4. render props

    React children; allows component reusability 
    and props pass down with {props.children} pattern
    and regular props pass down style patterns.

    React.js HOC; a function that passes down
    reusable logoic from a parent component to 
    child components within an app. 
````HOC returns a function that returns a ui and 
    passed down props/state. The function takes a component
    as a parameter and argument then is invoked allowing the 
    children components special abilities.

React.js render props; 
key notes;
callbacks - A callback is a 
function passed as an argument to another function.
function will be activated when outter
function is called.

buit in js methods - can take in 
callbacks and other parameters.

Render Props;

"Is A component with a render={} prop that takes a
function and returns a React element and 
calls it instead of implementing its own render logic."
Functions are a valid argument for functions in Javascript 
and work because they are passed down as props. 






*/

//REACT.js BOOTCAMP

//react.js and modern js features.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {Component} from 'react'

class Root extends Component{
    state = {
        newAlias:'',
        frontEndDev: false

    }

    handleChange = (event) =>{
        const {name, value, type, checked} = event.target
        //initially checks if input type is a checkbox...
        type === 'checkbox' ? this.setState({[name]: checked}) 
        : this.setState({[name]: value})
    }

    render(){
        //can rename state.
        const {name: newAlias, frontEndDev} = this.state
        return(
            <div>
                <input 
                    type = "text"
                    name = 'newAlias'
                    value = {newAlias}
                    onChange = {this.handleChange}
                />
                <br/>
                <input 
                    type = "checkbox"
                    name = 'frontEndDev'
                    checked = {frontEndDev}
                    onChange = {this.handleChange}
                />
                <h1>My alias is; {newlias}</h1>
                <h2>I am a front end dev; {frontEndDev}</h2>
            </div>
        )
    }
}
export default Root

/* 
React.js practice;
useState, useEffect, new js features,
react.fragment({Fragment}, <> </>)
*/

/*
UseState practice;

useState; create an application
that invokes a method and re-renders/
changes state on its own.

useState; create an application
that uses a button to add text to screen
and uses a button to change state/text on
screen.

react.fragment
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const [stateVal, setState] = useState(true)

    function handleClick(){
        setTimeout(() => {
            setState(prevState => prevState = false)
        }, 3000);
    }

    function handleEndClick(){
        setTimeout(() => {
            setState(prevState => prevState = true)
        }, 3000);
    }



    const condition = stateVal ? 'system load in progress...'
    : 'system load successful...'
    return(
        <div>
            <h1>{condition}</h1>
            <br/>
            <button onClick={handleClick}>
                End System Load...
            </button>
            <br/>
            <button onClick={handleEndClick}>
                Start System Load...
            </button>
        </div>
    )
}
export default Root

import React from 'react'
import ReactDOM from 'react'
import Root from './root'

ReacDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const [stateVal, setState] = useState('')
    // true value; system load in progress

    function handleChange(){
        setTimeout(() => {
            setState(prevState=> prevState = 'system load in progress...')
            setTimeout(() => {
                setState(prevState => prevState = 'system load successful')
            }, 3000);
        }, 3000);
    }


    return(
        <div>
            <h1>{stateVal}</h1>
            <button onClick={handleChange}>
                Click to activate system load
            </button>
        </div>
    )
}
export default Root

/*
React.Fragment; avoids poluting the DOM tree
with many elements/nodes.

not all components need to
be fragments because it 
may affect the css on elements.

child components are placed on
the same level as their parent components.
*/

//react.fragment simple counter app
import React from 'react'
import ReactDOM from './react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>, document.getElementById('root')
)

import React, {useState} from 'react'

function Root(){
    const [state, setState] = useState(0)

    function handleCount(){
        setState(prevState => prevState ++)
    }

    return(
        <>
            <h1>{state}</h1>
            <button onClick={handleChange}>
                Click to change count
            </button>
        </>
    )
}
export default Root

/*
React.js default props; allows 
default styling for a component
when no inline style is applied.

assignment; build
div/box component and use default
props to style, pass down state with a button
that shows some text to screen.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Card from './card.js'

function Root(){
    return(
        <React.Fragment>
            {/* card colors conditionally set */}
            <Card 
                cardColor = 'yellow'
                cardTextColor = 'black'
                cardHeight = '200'
                cardWidth = '200'
            />
        </React.Fragment>
    )
}
export default Root

import React, {useState} from 'react'

function Card(props){
    const [state, setState] = useState(false)

    const showText = () =>{
        setState(prevState => prevState = true)
    }

    const showText = () =>{
        setState(prevState => prevState = false)
    }

    const text = state ? 'This is a message from state.' 
    : ''

    const styles = {
        backgroundColor: props.cardColor,
        color: props.cardTextColor,
        height: props.cardHeight,
        width: props.cardWidth
    }

    return(
        <>
            <div style={styles}>
                <h1>{text}</h1>
                <button onClick={showText}>
                    click for message!
                </button>
            </div>
        </>
    )
}

Card.defaultProps = {
    cardColor: 'black',
    cardTextColor: 'white',
    cardHeight: 100,
    cardWidth: 100
}

export default Card

/*
re-create todo application 
with various techniques.
*/

//Todo application

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'
import todoData from './tododata'
import TodoComponent from './todo'

function Root(props){
    const [todoDataState, setChange] = useState(todoData)

    // handleChange(id){
    //     this.setState(prevState =>{
    //         const updatedTodos = prevState.todos.map(todo =>{
    //             if(todo.id === id){
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed
    //                 }
    //             }
    //             return todo
    //         })
    //         return {todos: updatedTodos}
    //     })
    // }
    
    //method that allows state to change when todo is being typed.
    function handleChange(id){
        setChange(prevState =>{
            const updatedTodos = prevState.todoDataState.map(todo=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {todoDataState: updatedTodos}
        })
    }

    const newTodoArray = todoDataState.map(todoItem => 
        <TodoComponent 
            key = {todoItem.id}
            id = {todoItem.id}
            completed = {todoItem.completed}
            handleChange = {handleChange}
        />
    )

    return(
        <>
            <h1>{newTodoArray}</h1>
        </>
    )

    export default Root

    import React from 'react'
    function TodoComponent(props){

        //style to be rendered based on conditions.
        const completedStyle = {
            display: 'none'
        }

        const textStyle = {
            color: 'green'
        }
        return(
            <>
                {/* checkbox element */}
                <input 
                    type="checkbox"
                    completed={props.completed}
                    id={props.id}
                    onChange = {
                        () =>{
                            props.handleChange(props.id)
                        }
                    }
                />

                <input 
                    /*
                        verifies if completed checkbox is complete
                        if so, display:'none'
                    */
                    style={ props.completed ? completedStyle : textStyle }
                    type="text"
                />
            </>
        )
    }
}
export default Root

import React from 'react'

const todoData = [
    {
        id: 0,
        task:'',
        completed: false
    },
    {
        id: 1,
        task:'',
        completed: false
    },
    {
        id: 2,
        task:'',
        completed: false
    },
    {
        id: 3,
        task:'',
        completed: false
    }
]

export default todoData

//default props;
//pass down props and use default props to style component.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import DivComponent from './divcomponent.js'

function Root(){
    return(
        <div>
            {/* default style props being passed down and rendered divcomponent*/}
            <DivComponent   
                componentColor= 'red'
                componentWidth='200'
                componentHeight='200'
                componentBorder='10px solid silver'
            />
            <br/>
            <DivComponent   
                componentColor= 'blue'
                componentWidth='200'
                componentHeight='200'
                componentBorder='10px solid silver'
            />
        </div>
    )
}
export default Root

import React, {useState} from 'react'

function DivComponent(props){
    //react hook useState, array-object destructuring
    const [aliasState] = useState('cyberman')
    const [devTypeState] = useState('user interface web development')

    const componentStyles = {
        color: props.componentColor,
        height: props.componentHeight,
        width: props.componentWidth,
        border: props.componentBorder
    }
// props and state beong passed down to child component
    return(
        <div>
            <Child
                alias = {
                    aliasState
                }

                devType = {
                    devTypeState
                }
            />
        </div>
    )
}

DivComponent.defaultProps = {
    componentColor:'black',
    componentHeight:100,
    componentWidth: 100,
    componentBorder: '5px dashed gold'
}
export default DivComponent

import React from 'react'

function Child(props){
//props being received by child component
    return(
        <div>
            <h1>{props.alias}</h1>
            <h1>{props.devType}</h1>
        </div>
    )
}
export default Child

//default props; pass down style props and props data
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Container from './container'

function Root(){
    <>
        <Container
            containerBorder='5px solid pink'
            containerHeight='100'
            containerWidth='100'
            containerColor='green'
            containerBackgroundColor='white'
        />
    </>
}
export default Root

import React, {useState} from 'react'
import Child from './child'

function Container(props){
    const [stateValA] = useState('cyberman')
    const [stateVlB] = useState('react.js web development')

    const conatinerStyle = {
        border:props.containerBorder,
        height:props.containerHeight,
        width:props.containerWidth,
        color:props.containerColor,
        backgroundColor:props.containerBackgroundColor
    }

    return(
        <>
            <Child
                valA = {stateValA}
                valB = {stateValB}
            />
        </>
    )
}

Container.defaultProps = {
    containerBorder:'10px doubled neon',
    containerHeight: 200,
    containerWidth: 200,
    containerColor: 'white',
    containerBackgroundColor: 'black'
}
export default Root

import React from 'react'
function Child(props){
    return(
        <div>
            <h1>{props.valA}</h1>
            <h1>{props.valB}</h1>
        </div>
    )
}
export default Child

//JS practice;
//variables/restoring/arithOperators

var newVar;
newVar = 1

var newVar1 = 10
var sum = newVar + newVar1 * 2

//dividing
var sumQuotient = sum / 2


//incrementing
sumQuotient++
sumQuotient += 2

//decrementing
sumQuotient--

//creating a decimal number in js
var myDecimalVar = 0.1
myDecimalVar++

//multiplying decimal numbers
myDecimalVar * 2.5

//dividing two decimal numbers
var newQuotient = myDecimalVar / 2.5
newQuotient

//finding a reminder of two numbers
var remainder = 10 % 3
remainder

//compound assignments
var a = 1
a += 1

var b = 2
b += a

var c = 3
c += c

/*
    PROP TYPES; type checks
    what kind of props are being passed down.

    Component.propTypes = {
        cardColor: PropTypes.dataType.isRequired,
        cardWidth: PropTypes.dataType,
        cardHeight: PropTypes.dataType
    }

    .isRequired can be chained to 
    propTypes and automatically specifies
    required data type.
*/

//propTypes practice;   
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Comp from './comp'

function Root(){
    return(
        <div>
            <Comp
                compBGC='red'
                compColor='black'
                compHeight={200}
                compWidth={200}
                compPadding='20'
                compMargin='5'
            />
        </div>
    )
}
export default Root

import React from 'react'
import Child from './child'
import PropTypes from 'prop-types'

class Comp extends React.Component{
    //pass down state to child component.
    constructor(props){
        super(props)
        this.state = {
            devAlias:'cyberman',
            devLanguage:'javaScript'
        }
    }
    //js
    render(){
        //js
        const defaultPropsStyles = {
            backgroundColor: this.props.compBGC,
            color: this.props.compColor,
            height: this.props.compHeight,
            width: this.props.compWeight,
            padding: this.props.compPadding,
            margin: this.props.compMargin
        }
        return(
            <div>
                {/*passing down state to child component */}
                <Child
                    alias={
                        this.state.devAlias
                    }
                />
                <br/>
                <Child
                    language={
                        this.state.devLanguage
                    }
                />
            </div>
        )
    }
}

Comp.propTypes = {
    compBGC: PropTypes.string,
    //assigning multiple choices in an array using oneOf() method.
    compColor: PropTypes.oneOf(['red', 'green', 'black', 'gold']),
    compHeight: PropTypes.number.isRequired,
    compWidth: PropTypes.number.isRequired,
    compPadding: PropTypes.string,
    compMargin:PropTypes.string
}
// default.props set if PropTypes are not set
Comp.defaultProps = {
    compBGC:'black',
    compColor:'white',
    compHeight:100,
    compWidth:100,
    compPadding:'10px, 20px',
    compMargin:'0'
}
export default Comp

//child component
import React from 'react'

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>{this.props.alias}</h1>
                <br/>
                <h1>{this.props.language}</h1>
            </div>
        )
    }
}
export default Child

/*
    propTypes challenge/default props; 
    functional component & class component based
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Comp from './comp'

function Root(){
    return(
        <div>
            <Comp
                compBGC='black'
                compHeight={200}
                compWidth={200}
            />
        </div>
    )
}
export default Root

import React from 'react'
import Child from './child'
import PropTypes from 'prop-types'

function Comp(props){
    const propStyle = {
        backgroundColor: props.compBGC,
        width: props.compWidth,
        height: props.compHeight
    }
    return(
        <>
            <div style={propStyle}>
                <Child
                    alias = 'cyberman'
                />
            </div>
            <br/>
            <div style={propStyle}>
                <Child
                    language = 'cyberman'
                />
            </div>
        </>
    )
}

Comp.propTypes = {
    compBGC: PropTypes.string,
    compWidth:PropTypes.number.isRequired,
    compHeight:PropTypes.number.isRequired
}

Comp.defaultProps = {
    compBGC:'white',
    compWidth:100,
    compHeight: 100
}
export default Comp

import React from 'react'

function Child(props){
    return(
        <>
            <h1>{props.alias}</h1>
            <h1>{props.language}</h1>
        </>
    )
}
export default Child

/*
    default props and proptypes practice
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)


import React from 'react'
import PropTypes from 'prop-types'
import Child from './child'


function Root(){
    return(
        <div>
            <Child
                compColor=''
                compBorder=''
                compBGC=''
            />
        </div>
    )
}
export default Root

import React from 'react'
import PropTypes from 'prop-types'

function Comp(){
    //no block level const style = {}
    return(
        <div>
            <div // inline jsx css style
                style={{
                color: props.compColor,
                border: props.compBorder,
                backgroundColor: props.compBGC,
            }}>
                <Child
                    alias = {{aliasData: 'cyberman'}}
                    language = {{languageData: 'javaScript'}}
                />
            </div>
        </div>
    )
}

//propTypes 
Comp.propTypes = {
    compColor: PropTypes.oneOf(['black', 'gold', 'red']),
    compBorder: PropTypes.string.isRequired,
    compBGC: PropTypes.oneOf(['black', 'red', 'green', 'gold'])
}

Comp.defaultProps = {
    compColor: 'white',
    compBorder: '5px solid white',
    compBGC: 'white'
}
export default Comp

import React from 'react'

function Child(props){
    return(
        <div>
            <h1>{props.alias.aliasData}</h1>
            <h1>{props.language.languageData}</h1>
        </div>
    )
}
export default Child

/*
    Reusability; prevents repetition,
    writing the same code over and over again.
    D.R.Y. dont repeat yourself

    inheritance; what drives oop (flawed pattern).
    composition; compose code structure, bits and pieces (best method).

    1. component with props
    2. children
    3. HOC
    4. render props

    react.js children;

*/

//react.js children
import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import DefaultDiv from './defaultdiv'

function Root(){
    return(
        <>
            <DefaultDiv 
            //style/props is applied here.
            // text content/props can also be applied.
                defaultBorder = 'inset 10px lightBlue'
                defaultColor='red'
                defaultHeight='150px'
                defaultWidth='150px'
            >
                <h1>Inserted Content Accepted</h1>
                <h1>Largest Heading</h1>
                <br/>
                <p>This is paragraph data</p>
            </DefaultDiv>
        </>
    )
}
export default Root

import React from 'react'
import PropTypes from 'prop-types'

function DefaultDiv(props){
    const defaultStyle = {
        border: props.defaultBorder,
        color: props.defaultColor,
        height: props.defaultHeight,
        width: props.defaultWidth
    }


    return(
        <div style={defaultStyle}>
            <h1>{props.children}</h1>
        </div>
    )
}

DefaultDiv.propTypes = {
    defaultBorder: PropTypes.string.isRequired,
    defaultColor: PropTypes.oneOf(['black', 'red', 'green', 'gold']),
    defaultHeight: PropTypes.number,
    defaultWidth: PropTypes.number
}

DefaultDiv.defaultProps = {
    defaultBorder: '5px solid black',
    defaultColor: 'white',
    defaultHeight: 100,
    defaultWidth: 100
}
export default DefaultDiv

//react.js children; passing down text content/props
//patterns; a.1, a.2, b
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import DivComp from './divcomp'

function Root(){
    return(
        <main>
            <DivComp>
                <h1>React Chilren Practice</h1>
                <p>
                    React.js children is a good technique used for writing D.R.Y. code/reusability.
                </p>
            </DivComp>
        </main>
    )
}
export default Root

import React from 'react'

function DivComp(props){
    return(
        <div style = {{
            border: '5px solid red',
            backgroundColor:'pink',
            height: 300,
            width: 300,
            color: 'black'
        }}>
            {/*props being passed down*/}
            {props.children}
        </div>
    )
}
export default DivComp

//js practice; compound division operator

var mathDivVar = 24
mathDivVar /= 3

//js string variables; escape string, single and double quotes.
var myStringVar = 'new string'
myStringVar

var escapedString = 'this is an escaped \"string variable\".'
escapedString

var singleQuotes = 'This string uses "\single quotes\".'
singleQuotes

var aposterpheVar = "it\'s an aposterphe string."
aposterpheVar

var leveledEscape = "FirstLine\n\t\SecondLine\n\ThirdLine"
leveledEscape = "FirstLine\n\SecondLine\n\ThirdLine"

//js string concatenation with + operator.
var myConCatString = 'First half. ' + 'Second half.'
myConCatString += ' This is the third string.'

//js constructing/concatenating strings with a variable.
var myLang = 'javaScript'
var myLangLib = 'React.js is built with '
myLangLib += myLang

//can find the length of a string; .length property.
var stringLength = 'this string has a certain length'
stringLength.length

//find a zero-indexed character in a string using bracket notation.
stringLength[4]
stringLength[0]

/*
find the first indexed letter of newStringLength 
and assign it to stringLength
*/
stringLength = ''
var newStringLength = 'new string sentence'
stringLength = newStringLength[0]

/*
string literals are immutable and cannot 
be changed once created. But can assign
variable a new string.
*/
var myGreeting = 'jyberman; react front developer'
var trueDevAlias = 'cyberman; '
var devLib = 'react.js'
var devTyped = ' end '
myGreeting = trueDevAlias + devLib + ' front' + devTyped + 'developer'


/*
finding the nth letter of a string;
bracket notation.
*/

var aNewStringedName = 'alias name'
var assignedLetter = aNewStringedName[3]
assignedLetter

/*
    React.js reusability HOC pt.1;
    derived from higher order functions,
    functions taking functions as an argument.

    function that takes a component as an argument
    that is given new abilities.

    A function that takes a component as its 
    first argument and returns a new component 
    that wraps the given component, 
    providing extra capabilities to it.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//component will receive props
import React from 'react'
import {higherOrderComp_a} from './higherOrderComp_a'
import {higherOrderComp_b} from './higherOrderComp_b'

function Root(props){
    return(
        <div>
            {props.passedDown_a}
            {props.passedDown_b}
        </div>
    )
}
const AddedPropsComp_a = higherOrderComp_a(Root)
export default AddedPropsComp_a

//or

// const AddedPropsComp_b = higherOrderComp_b(Root)
// export default AddedPropsComp_b


import React from 'react'
//function that takes in a component as an argument
//returns a new component with new abilities, can be used anywhere.
export default function higherOrderComp_a(Component){
    //new component returned that passes down props
    return function(props){
        return(
            <div>
                <Component 
                    passedDown_a = 'props data'
                    {...props}
                />
            </div>
        )
    }
}

import React from 'react'
//function that takes in a component as an argument
//returns a new component with new abilities, can be used anywhere.
export default function higherOrderComp_b(Component){
    //new component returned that passes down props
    return function (props){
        return(
            <div>
                <Component
                    passedDown_b = 'additional props data'
                    {...props}
                />
            </div>
        )
    }
}



//js review; returning the last letter, Nth letter in a string.
var stringedName = 'cyberman'
var lastLetter = stringedName[stringedName.length - 1]
lastLetter

stringedName = 'cyberman dev'
var indexedLetter = stringedName[stringedName.length - 4]
//stringedName.length = 12; 12 - 4 = 8
indexedLetter//returns 8th indexed string character.

//js mad libs word game; filling in the blank spaces with variables
var noun = 'programmer'
var verb = 'typed'
var adjective = 'front end'
var adVerb = 'urgently'
var myString = 'The ' + adjective + ' ' + noun + ' ' + adVerb + ' ' + verb + ' a new string.'

//js arrays
var myArray = [1, 'javaScript']
/*
    js nested arrays/multi dimensional array;
    an array of arrays.
*/
var nestedArray = [
    ['html5', 'css3'], 
    ['javaScript', 'react.js']
]
//access array data with bracket notation.
var nestedData = nestedArray[0]
//modify array data with indexes
nestedArray[0] = ['jsx', 'css objects']

//accessing multi-dimensional arrays with indexes.
var nestedIndices = nestedArray[1][1]

//modify arrays with .push() method
nestedArray.push(['redux', 'node.js'])
//finding the length of an array.
nestedArray.length

/*
    remove the last element 
    from an array with .pop() method; 
    returns the last removed item from an array.
*/

var newNestedArray = [
    ['front end development', 'javaScript runtime'],
    ['react.js', 'node.js']
]
var lastItemRemoved = newNestedArray.pop()

/*
    remove the first element 
    from an array with .shift() method; 
    returns the first removed item from an array.
*/
var firstItemRemoved = newNestedArray.shift()

/*
    add the first element 
    to an array with .unshift() method; 
    adds the first item from an array.
*/

newNestedArray.unshift([
    'user interface development', 
    'run js apps outside a browser'
])

//nested-array shopping list
var technologyListArray = [
    ['html version;', 5],
    ['css version;', 3],
    ['javaScript version;', 7],
    ['react.js version;', 17]
]

//functions; create and invoke/call a function with functionName()
function aNewFunction(){
    console.log('a new finction has been invoked.')
}
aNewFunction()

//passing values to functions as arguments.
function addTwoNums(numA, numB){
    return numA + numB
}
addTwoNums(1, 2)

/*
    global vs local variables;
    global: can be seen by the whole
    program, local; can only be see from within 
    a function.
*/

var globalVar = 6
function programFunction(localVar){
    globalVar > localVar ? console.log(true) 
    : console.log(false)
}
programFunction(5)

//local scope & functions
function localFunction(){
    var localVar = true
    console.log('inside of global function: ' + localVar)
}
localFunction()

/*
    global vs local inside functions; variables with same names
    local scope will be priority over global scoped functions.
*/
var scopedVar = 'global scoped'
function scopedFunction(){
    var scopedVar = 'local scoped'
    return scopedVar
}
scopedFunction()

//arrays are 0-indexed
const constArray = [0, 1, 2, 3]
constArray[3]//returns 3


/*
    react.js HOC continued; build an app that uses 
    HOC logic throughout its components.
*/
import React from 'react'

class Toggler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            on: false
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState(prevState=>{
            return {
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return (
             <Component
                on={this.state.on}
                toggle={this.toggle}
                {...this.props}
             />
        )
    }
}

export function higherOrderFun(component){
    return function(props){
        return(
            <Toggler
                component={component}
                {...props}
            />
        )
    }
}

import React from 'react'
import {higherOrderFun} from './higherorderfun'
// component toggles ui data.
class Menu extends React.Component{
    render(){
        <div>
            <button onClick={this.props.toggle}>
                {/*conditional rendering */}
                {this.props.on ? 'Hide Menu' : 'Show Menu'}
            </button>
            <nav style={{display: this.props.on ? 'block' : 'none'}}>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React.JS</li>
                    <li>Redux</li>
                </ol>
            </nav>
        </div>
    }
}
const superChargedMenu = higherOrderFun(Menu)
export default superChargedMenu

import React from 'react'
import {higherOrderFun} from './higherorderfun'

class Favorite extends React.Component{
    render(){
        return(
            <div>
                <h3>Click to favorite</h3>
                <span onClick={this.props.toggle}>
                    {this.props.on ? '*' : ''}
                </span>
            </div>
        )
    }
}
const superChargedFavorite = higherOrderFun(Favorite)
export default superChargedFavorite

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Menu from './menu'
import Incrementer from './incrementer'

function Root(){
    return(
        <div>
            <Menu/>
            <Incrementer/>
        </div>
    )
}
export default Root

import React, {Component} from 'react'

class ExtendedLogic extends Component{
    state = {
        int:0,
        on: false
    }

    increment = () => {
        this.setState(prevState =>{
            return {
                int: prevState.int ++
            }
        })
    }

    toggle = () => {
        this.setState(prevState=>{
            return{
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return(
            <Component
                //comes from state object/property.
                on = {this.state.on}
                int = {this.state.int}
                increament = {this.increment}
                toggle = {this.toggle}
                //props applied to be passed down.
                {...this.props}
            />
        )
    }
}

export function extendedFun(component){
    return function (props){
        return (
            <div>
                <ExtendedLogic
                    //component passed down as props
                    component={component}
                    //all props are passed down
                    {...props}
                />
            </div>
        )
    }
}


import React, {Component} from 'react'
import {extendedFun} from './extendedFun'

class Menu extends Component{
    render(){
        return(
            <div>
                {/*method passed down from props is applied*/}
                <button onClick={this.props.toggle}>

                {/*state/props passed down is evaluated*/}
                    {this.props.on ? 'Hide Menu' : 'Show Menu'}
                </button>
                {/*state/props passed down is evaluated*/}
                <nav style={{display: this.props.on ? 'block' : 'none'}}>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
const superCharedMenu = extendedFun(Menu)
export default superCharedMenu


import React from 'react'

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.int}</h1>
                <button onClick={this.props.increment}>
                    Click to increment
                </button>
            </div>
        )
    }
}
const superChargedCounter = extendedFun(Counter)
export default superChargedCounter

/*
React.js HOCs; create an application that 
changes ui color based on a click of a button
with different text on the page.
*/


import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)
import {extendedTransformer} from './extendedTransformer'
import MetamorphicComp from './metamorphiccomp'
function Root(){
    return (
        <>
            <MetamorphicComp/>
        </>
    )
}
export default Root

import React, {Component} from 'react'
class Transformer extends Component{
    state = {
        conversion:false,
        uiData_0: 'cyberman',
        uiData_1: 'aaron bevans'
    }


        handleConversion =()=>{
            this.setState(prevState =>{
                return {
                    conversion: !prevState.conversion
                }
            })
        }

    // method that allows input forms to be changed.
    // handleChange(){
    //     const {name, type, value, checked} = event.target
    //     type === 'checkbox' ? {[name]: value} : {[name]:checked}
    // }

    render(){
        const ComponentProps = this.props.componentProps
        return (
            <>
                {/*component passing down props*/}
                <ComponentProps
                    conversion={this.state.conversion}
                    uiData_0 = {this.state.uiData_0}
                    uiData_1 = {this.state.uiData_1}
                    handleConversion={this.handleConversion}
                    {...this.props}
                />
            </>
        )
    }
}

export default function extendedTransformer(componentProps){
    return function(props){
        return (
            <>
                <Transformer
                    componentProps={componentProps}
                    {...props}
                />
            </>
        )
    }
}


import React,{Component} from 'react'
import {extendedTransformer} from './extendedtransformer'
class MetamorphicComp extends Component{
    render(){
        const styleA = {
            border: '5px solid blue',
            backgroundColor: 'lightBlue',
            color: 'white'
        }
        const styleB = {
            border: '5px solid red',
            backgroundColor: 'pink',
            color: 'white'
        }
        return(
            <div>
                <button onClick={this.props.handleConversion}>
                    Click to convert display.
                </button>
                {/* conditional rendering based on state */}
                {
                    // style each ui.
                    this.props.conversion ? 
                    <div style={styleA}>
                        <h1>
                            Blue User Interface 
                        </h1>
                        <main>
                            <h2>{this.props.uiData_0}</h2>
                        </main>
                    </div>
                    :
                    <div style={styleB}>
                        <h1>
                            Red User Interface 
                        </h1>
                        <main>
                            <h2>{this.props.uiData_1}</h2>
                        </main>
                    </div>
                }
            </div>
        )
    }
}
const superCharedUi = extendedTransformer(MetamorphicComp)
export default superCharedUi

/*
React.js Render Props; 

function gets passed down and 
invoked within a functional component.
Acts as outside render logic instead of using
its own render logic.

render props technique is like call back functions.

can pass various data types as props.
custom functions can be passed down and rendered
elsewhere.
*/

//render props basics; pattern a
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React,{Component} from 'react'
import Root from 'root'
import Example_a from './example_a'
import Example_b from './examle_b'

class Root extends Component{
    render(){
        return(
            <div>
               <Example_a
                    alias={
                        'cyberman'
                    }
                    //method returns 5
                    method={
                        function(){
                            return(
                                5
                            )
                        }
                    }

                    //method returns a string
                    render={
                        ()=> 'method invoked through props'
                    }
               />
                <hr/>
                <Example_b
                    devType={'user interface development'}
                    devLanguage={{devData: 'javaScript'}}
                    devLibrary={'react.js'}
                />
            </div>
        )
    }
}
export default Root


import React from 'react'
function Example_a(props){
    return(
        <div>
            <h1>
                {props.alias}
                {props.method()}
                {props.render()}
            </h1>
        </div>
    )
}
export default Example_a

//passed down regular props both patterns.
import React from 'react'
function Example_b(props){
    return (
        <div>
            <h1>{props.devType}</h1>
            <h1>{props.devLanguage.devData}</h1>
            <h2>{props.devLibrary}</h2>
        </div>
    )
}
export default Example_b

//react.js; render.props use js logic to display a ui.
//pattern_a; render/props from within render(<Root/>) component.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Example_c from './example_c'
function Root(){
    return(
        <div>
            <Example_c
                render={
                    function(number){
                        return(
                            <>
                                {
                                    number < 10 && number > 20 
                                    ? <h1>Out of range</h1> 
                                        : <h1>Within Range</h1>
                                }
                            </>
                        )
                    }
                }
            />
        </div>
    )
}
export default Example_c

import React from 'react'
function Example_c(props){
    return(
        <div>
            <>
                {props.render(15)}
            </>
        </div>
    )
}
export default Exaple_c


/*
react.js pattern_a render props logic 
from within menu and favorite ui
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
function Root(){
    return (
        <Example_d/>
    )
}
export default Root

import React from 'react'
class DisplayLogic extends React.Component{
    state = {
        alias:'cyberman',
        on:this.props.defaultOnValue
    }

    //applying default props on state as a "default value".
    static defaultProps = {
        defaultOnValue: false
    }

    //method that toggles the value of state.
    toggle =()=>{
        this.setState(prevState=>{
            return{
                on:!prevState.on
            }
        })
    }

    render(){
        return(
            <div>
                {this.props.render(
                    this.state.on, 
                    this.state.alias, 
                    this.toggle)
                }
            </div>
        )
    }
}
export default DisplayLogic

import React from 'react'
class Example_d extends React.Component{
    render(){
        return(
            <div>
                <DisplayLogic
                    defaultOnValue={false}
                    render={
                        (on, alias, toggle)=>{
                            return(
                                <div>
                                    <button onClick={toggle}>
                                        {on ? 'Hide Alias':'Show Alias'}
                                    </button>
                                    <hr/>
                                    <div style={{display: on ? 'block':'none'}}>
                                        <h1>{alias}</h1>
                                    </div>
                                </div>
                            )
                        }
                    }
                />
            </div>
        )
    }
}
export default Example_d

/*
react.js; render props.
pattern_b; render props - wrap logic component 
around ui component and pass down props
*/
import React from 'react'
import ReactDOM from 'react-dom'
import root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, { Component } from 'react'
import Logic from './logic'
import DataComponent from './datacomponent'

class Root extends Component {
    render() {
        return (
            <div>
                <Logic
                    render={
                        ({on, alias, toggle})=>{
                            return (
                                <div>
                                    <DataComponent
                                        on={on}
                                        alias={alias}
                                        toggle={toggle}
                                    />
                                </div>
                            )
                        }
                    }
                />
            </div>
        )
    }
}
export default Root

import React, { Component } from 'react'

class Logic extends Component {
    state = {
        on:false,
        alias:'cyberman'
    }

    toggle=()=>{
        this.setState(prevState=>{
            return {
                on:!prevState.on
            }
        })
    }


    render() {
        return (
            <div>
                {this.props.render({
                    on:this.state.on,
                    alias:this.state.alias,
                    toggle:this.toggle
                })}
            </div>
        )
    }
}
export default Logic

import React from 'react'
import Logic from './logic'
export default function DataComponent(props) {
    return (
        <div>
            <button onClick={props.toggle}>
                {props.on ? 'Hide Alias':'Show Alias'}
            </button>
            <hr/>
            <div style={{display: on ? 'block':'none'}}>
                <h1>{props.alias}</h1>
            </div>
        </div>
    )
}



/*
react.js; render props.
pattern_c; react.children
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

import React from 'react'
import Logic from './logic'
import DataComponent from './datacomponent'

export default function Root() {
    return (
        <div>
            <Logic defaulOnValue={true}>
                
                {
                    ({on, alias, toggle})=>{
                        return(
                            <>
                                <DataComponent 
                                    on={on}
                                    alias={alias}
                                    toggle={toggle}
                                />
                            </>
                        )
                    }
                }
            </Logic>
        </div>
    )
}
import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        on:this.props.defaultOnValue,
        alias:'cyberman'
    }
    static defaultProps = {
        defaulOnValue: true
    }

    toggle=()=>{
        this.setState(prevState=>{
            return{
                on:!prevState.on
            }
        })
    }


    render() {
        return (
            <div>
                {this.props.children({
                    on:this.state.on,
                    alias:this.state.alias,
                    toggle:this.toggle
             })}
            </div>
        )
    }
}

/*
react.js; datacomponent
*/
import React from 'react'
import Logic from './logic'
export default function DataComponent(props) {
    return (
        <div>
            <button onClick={props.toggle}>
                {props.on ? 'Hide Alias':'Show Alias'}
            </button>
            <hr/>
            <div style={{display:props.on ? 'block':'none'}}>
                <h1>{props.alias}</h1>
            </div>
        </div>
    )
}

//react.js rende props patterns a, b, c
//pattern a 
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>, document.getElementById('root'))

import React from 'react'
import Child from './child'
export default function Root() {
    return (
        <div>
            <Child/>
        </div>
    )
}

import React from 'react'
import Data from './data'
export default function Child() {
    return (
        <div>
            {/*container component wrapped within child/ui component*/}
            <Data
                render={
                    (alias, devLanguage, devLibrary)=>(
                        <>
                            <ul>
                                <li>
                                    <h1>{alias}</h1>
                                </li>
                                <li>
                                    <h1>{devLanguage}</h1>
                                </li>
                                <li>
                                    <h1>{devLibrary}</h1>
                                </li>
                            </ul>
                        </>
                    )
                }
            />
        </div>
    )
}


import React, { Component } from 'react'

export default class Data extends Component {
    state = {
        alias:'cyberman',
        devLanguage:'javaScript',
        devLibrary:'react.js'
    }
    render() {
        const {alias, devLanguage, devLibrary} = this.state
        return (
            <div>
                {this.props.render(
                    alias, devLanguage, devLibrary
                )}
            </div>
        )
    }
}

//pattern b
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>,document.getElementById('root'))

import React from 'react'
import Logic from './logic'
import Child from './child'
export default function Root() {
    return (
        <div>
            <Logic
                render={
                    ({alias, devLanguage, devLibrary})=>(
                        <>
                            <Child
                                alias={alias}
                                devLanguage={devLanguage}
                                devLibrary={devLibrary}
                            />
                        </>
                    )
                }
            />
        </div>
    )
}

import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        alias:'cyberman',
        devLanguage:'javaScript',
        devLibrary:'react.js'
    }

    render() {
        return (
            <div>
                {
                    this.props.render({
                        alias:this.state.alias,
                        devLanguage:this.state.devLanguage,
                        devLibrary:this.state.devLibrary
                    })
                }
            </div>
        )
    }
}

import React from 'react'

export default function Child(props) {
    return (
        <div>
            <ul>
                <li>{props.alias}</li>
                <li>{props.devLanguage}</li>
                <li>{props.devLibrary}</li>
            </ul>
        </div>
    )
}


//pattern c; apply react.children
import React from 'react'
import Logic from './logic'
import Child from './child'
export default function Root() {
    return (
        <div>
            <logic>
                {(alias, devLanguage, devLibrary)=>(
                    <Child
                        alias={alias}
                        devLanguage={devLanguage}
                        devLibrary={devLibrary}
                    />
                )}
            </logic>
        </div>
    )
}

import React from 'react'

import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        alias:'cyberman',
        devLanguage:'javaScript',
        devLibrary:'react.js'
    }
    render() {
        return (
            <div>
                {
                    this.props.children(
                        this.state.alias,
                        this.state.devLanguage,
                        this.state.devLibrary
                    )
                }
            </div>
        )
    }
}


export default function Child() {
    return (
        <div>
            <ul>
                <li>{props.alias}</li>
                <li>{props.devlanguage}</li>
                <li>{props.devLibrary}</li>
            </ul>
        </div>
    )
}


/*
challenge;
react.js; fetch data from api with render props.
patterns; a, b, c
"https://swapi.dev/api/people/1/"
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'
ReactDOM.render(<Root/>, document.getElementById('root'))

import React from 'react'
import UiComponent from './uicomponent'
export default function Root() {
    return (
        <div>
            <UiComponent/>
        </div>
    )
}

import React from 'react'
import ApiData from './apidata'
export default function UiComponent() {
    return (
        <div>
            <ApiData
                url="https://swapi.dev/api/people/1/"
                render={
                    ({data, loading, apiFetchError})=>(
                        <>
                            {
                                loading ? <h1>{apiFetchError}</h1> 
                                    : <h2>{JSON.stringify(data)}</h2>
                            }
                        </>
                    )
                }
            />
        </div>
    )
}

import React, { Component } from 'react'

export default class ApiFetch extends Component {
    state = {
        data:null,
        loading:false,
        apiFetchError:'api fetch error'
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch(this.props.url)
            .then(response => response.json())
            .then(data=> this.setState({data:data, loading:false}))
            .catch(err => console.log(apiFetchError))
    }

    render() {
        return (
            <div>
                {
                    this.props.render(
                        {
                            data:this.state.data,
                            loading:this.state.loading,
                            apiFetchError:this.state.apiFetchError
                        }
                    )
                }
            </div>
        )
    }
}

/*
react.js; render props patter_b
fetch api.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>,getElementById('root'))

import React from 'react'
import ApiFetch from './apifetch'
import UiComponent from './uicomponent'
export default function Root(){
    return (
        <div>
            {/*
                apifetch component wrapped around ui display component
                where is passes down props.
            */}
            <ApiFetch
                url="https://swapi.dev/api/people/1/"
                render={
                    //render value is an arrow function
                    ({data, loading, apiFetchError})=>(
                        <>
                            <UiComponent
                                data={data}
                                loading={loading}
                                apiFetchError={apiFetchError}
                            />
                        </>
                    )
                }
            />
        </div>
    )
}

import React, { Component } from 'react'

export default class ApiFetch extends Component {
    state = {
        data:null,
        loading:false,
        apiFetchError:'api fetch error'
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch(this.props.url)
            .then(response=> response.json())
            .then(data=> this.setState({data:data, loading:false}))
            .catch(data=> this.setState({apiFetchError:apiFetchError}))
    }
    render() {
        return (
            <div>
                {
                    //props.arrow function is invoked within jsx.
                    this.props.render(
                        {
                            data:this.state.data,
                            loading:this.state.loading,
                            apiFetchError:this.state.apiFetchError
                        }
                    )
                }
            </div>
        )
    }
}

import React from 'react'
import ApiFetch from './apifetch'
export default function UiComponent(props) {
    return (
        <div>
            {
                props.loading ? <h1>{props.apiFetchError}</h1>
                    : <h1>{JSON.stringify(props.data)}</h1>
            }
        </div>
    )
}

//react.js; render props pattern c/react.children
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>, document.getElementById('root'))

import React from 'react'
import ApiFetch from './apifetch'
import UiComponent from './uicomponent'
export default function Root() {
    return (
        <div>
            <ApiFetch url="https://swapi.dev/api/people/1/">
                {
                    ({data, loading, apiFetchError})=>(
                        <UiComponent
                            data={data}
                            loading={loading}
                            apiFetchError={apiFetchError}
                        />
                    )
                }
            </ApiFetch>
        </div>
    )
}

import React, { Component } from 'react'

export default class ApiFetch extends Component {
    state = {
        data:null,
        loading:false,
        apiFetchError:'api data fetch error'
    }
    //used to make sure components rendered properly to the browser.
    componentDidMount(){
        this.setState({loading: true})
        fetch(this.props.url)
            .then(response=> response.json())
            .then(data=> this.setState({data:data, loading:false}))
            .catch(data=> this.setState({apiFetchError:apiFetchError}))
    }
    render() {
        return (
            <div>
                {
                    this.props.children({
                        data:this.state.data,
                        loading:this.state.loading,
                        apiFetchError:this.state.apiFetchError
                    })
                }
            </div>
        )
    }
}

import React from 'react'
import ApiFetch from './apifetch'
export default function UiComponent(props) {
    return (
        <div>
            {
                props.loading ? <>{console.error(props.apiFetchError)}</>
                    && <h2>Loading...</h2> : <h2>{JSON.stringify(props.data)}</h2>
            }
        </div>
    )
}

//react.js;render props patterns a, b, c
//task; create a styled component that renders data with a click of a button.
//pattern a
import React from 'react'
import ReactDOM from 'react-dom'
import root from 'root'
ReactDOM.render(<Root/>, document.getElementById('root'))

import React from 'react'
import Component from './component'
export default function Root() {
    return (
        <div>
            <Component/>
        </div>
    )
}

//logic component
import React, { Component } from 'react'

 export default class Logic extends Component {
    state = {
        devType:'front end web development',
        devOs:'macOs',
        devLanguage:'javaScript',
        devLibrary:'react.js',
        systemsManagement:'linux systems administration',
        systemsAutomation:['bash', 'python'],
        on:false
    }

    toggle=()=>{
        this.setState(prevState=>{
            return {
                on:!prevState.on
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.render({
                        devType:this.state.devType,
                        devOs:this.state.devOs,
                        devLanguage:this.state.devOs,
                        devLibrary:this.state.devLibrary,
                        systemsManagement:this.state.systemsManagement,
                        systemsAutomation:this.state.systemsAutomation,
                        on:this.state.on,
                        toggle:this.toggle
                    })
                }
            </div>
        )
    }
}

//user interface component
import React from 'react'
import Logic from './logic'
export default function Component(){
    
    return (
        <div>
            <Logic
                render={
                    ({on, devOs, devType, devLibrary, devLanguage, systemsManagement, toggle})=>(
                        // create user interface here.
                        <>
                            <button onClick={toggle}>
                                {on ? 'Show Data':'Hide Data'}
                            </button>
                            <div style={{display: on ? 'none':'block'}}>
                                <ul>
                                    <li>{devType}</li>
                                    <li>{devOs}</li>
                                    <li>{devLanguage}</li>
                                    <li>{devLibrary}</li>
                                    <li>{systemsManagement}</li>
                                </ul>
                            </div>
                        </>
                    )
                }
            />
        </div>
    )
}

//react.js; render props pattern b
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>,document.getElementById('root'))

import React from 'react'
import Logic from './logic'
import Component from './component'
export default function Root() {
    return (
        <div>
            <Logic
                render={
                    ({on, toggle, systems, systemsVersionA, systemsVersionB, virtual})=>(
                        <Component
                            on={on}
                            toggle={toggle}
                            systems={systems}
                            systemsVersionA={systemsVersionA}
                            systemsVersionB={systemsVersionB}
                            virtual={virtual}
                        />
                    )
                }
            />
        </div>
    )
}

import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        on:false,
        systems:'linux Systems Admin',
        systemsVersionA:'red hat linux os',
        systemsVersionB:'centOs stream',
        virtual:'virtualBox'
    }

    toggle=()=>{

    }

    render() {
        return (
            <div>
                {
                    this.props.render(
                        {
                            on:this.state.on,
                            toggle:this.toggle,
                            systems:this.state.systems,
                            systemsVersionA:this.state.systemsVersionA,
                            systemsVersionB:this.state.systemsVersionB,
                            virtual:this.state.virtual
                        }
                    )
                }
            </div>
        )
    }
}

//ui component receiving props
import React from 'react'

export default function Component(props) {
    return (
        <div>
            <>
                <button onClick={props.toggle}>
                    {props.on ? 'Hide Data':'Show Data'}
                </button>
                <br/>
                <div style={{display:props.on ? 'block':'none'}}>
                    <ul>
                        <li>{props.systems}</li>
                        <li>{props.systemsVersionA}</li>
                        <li>{props.systemsVersionB}</li>
                        <li>{props.virtual}</li>
                    </ul>
                </div>
            </>
        </div>
    )
}

//react.js; render props pattern_c/react.children
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

ReactDOM.render(<Root/>,document.getElementById('root'))

import React from 'react'
import Logic from './logic'
import Component from './component'
export default function reactNotesIndex(){
    return (
        <div>
            <Logic>
                {
                    ({frontEndData, sysAdminData})=>(
                        <Component
                            frontEndData={frontEndData}
                            sysAdminData={sysAdminData}
                        />
                    )
                }
            </Logic>
            
        </div>
    )
}

import React, { Component } from 'react'

export default class Logic extends Component {
    constructor(){
        super()
        this.state = {
            frontEndData:['html','css', 'js', 'react.js', 'redux'],
            sysAdminData:'linux'
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.children(
                        {
                            frontEndData:this.state.frontEndData,
                            sysAdmin:this.state.sysAdminData
                        }
                    )
                }
            </div>
        )
    }
}

//ui component
import React from 'react'
import Logic from './logic'
export default function reactNotesIndex(props){
    return (
        <div>
            <ul>
                <li>{props.frontEndData}</li>
                <hr/>
                <li>{props.sysAdminData}</li>
            </ul>
        </div>
    )
}

// react.jS; render props component reuseability, pattern b.
// create two components; component_a; increments props/state, 
// component_b; displays props/state with click of button.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(<Root/>,document.getElementById('root'))

import React from 'react'
import Logic from './logic'
import Component_a from './component_a'
import Component_b from './component_b'
export default function Root(){
    return (
        <div>
            <logic
                render={
                    ({int, increment})=>(
                        <Component_a
                            int={int}
                            increment={increment}
                        />
                    )
                }
            />
            <br/>
            <logic
                defaultOnValue={true}
                render={
                    ({on, alias, toggle})=>(
                        <Component_b
                            on={on}
                            alias={alias}
                            toggle={toggle}
                            //defaultOnValue={true}
                        />
                    )
                }
            />
        </div>
    )
}

//logical component
import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        on:this.props.defaultOnValue,
        alias:'cyberman',
        int:0
    }

    static defaultProps = {
        defaultOnValue:true
    }

    //method that increments int state by one everytime the button is clicked.
    increment=()=>{
        this.setState(prevState=>{
            return {
                int:prevState.int++
            }
        })
    }

    //method that toggles data to be hidden and shown when button is clicked.
    toggle=()=>{
        this.setState(prevState=>{
            return this.state = {
                on:!prevState.on
            }
        })
    }   

    render() {
        return (
            <div>
                {
                    this.props.render({
                        on:this.state.on,
                        alias:this.state.alias,
                        int:this.state.int,
                        increment:this.increment,
                        toggle:this.toggle
                    })
                }
            </div>
        )
    }
}

//ui component_a
import React from 'react'
import Logic from './logic'
export default function Component_a(props){
    return (
        <div>
            <h2>{props.int}</h2>
            <button onClick={props.increment}>
                Click to Increment
            </button>
        </div>
    )
}

//ui component_b
import React from 'react'
import Logic from './logic'
export default function Component_b(props){
    return (
        <div>
            <button onClick={props.toggle}>
                {props.on ? 'Hide Alias':'Show Alias'}
            </button>
            <hr/>
            <div style={{display:props.on ? 'block':'none'}}>
                <h2>{props.alias}</h2>
            </div>
        </div>
    )
}

//react.js; render props reusability react.children
// <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
</head>
<body>
    <div id='root'></div>
    <script src='index.js'></script>
</body>
</html>

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'
ReactDOM.render(<h1>This is jsx, not html</h1>, 
    document.getElementById('root'))

//react functional component
import React from 'react'

export default function FunctionalComp(){
    return (
        <div>
            <h1>Functional Component</h1>
        </div>
    )
}

//moving components into their own files
import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './parent'

import React from 'react'
import Child_0 from './child_0'
import Child_1 from './child_1'

export default function Parent() {
    return (
        <div>
            <Child_0/>
            <Child_1/>
        </div>
    )
}

//'./child_0'
import React from 'react'

export default function Child_0() {
    return (
        <div>
            <h1>First Child Component</h1>
        </div>
    )
}

//'./child_1'
import React from 'react'

export default function Child_1() {
    return (
        <div>
            <h1>Second Child Component</h1>
        </div>
    )
}

//react.js; parent & child component
import React from 'react'
import ReactDOM from './react-dom'
import Parent from './parent'
ReactDOM.render(<Parent/>, document.getElementById('root'))

import React from 'react'
import ChildComp from './childcomp'
export default function Parent(){
    return (
        <div>
            <ChildComp/>
        </div>
    )
}

//'./childcomp'
import React from 'react'

export default function ChildComp() {
    return (
        <div>
            <h1>Child component rendered</h1>
        </div>
    )
}

//react.js styling with css classes.
import React from 'react'
import ReactDOM from './react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

function Root(){
    const style = {
        border:'solid 5px black',
        margin:'auto',
        padding:20
    }
    return(
        <div>
            <div style={style}>
                <h1>Component has inline class styling.</h1>
            </div>
        </div>
    )
}
export default Root


//jsx to js and back
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
//js
function Root(){
    // jsx styling objects
    const divStyle = {
        border:'solid 5px black'
    }
    return(
        //jsx to js
        <div style={divStyle}>
            {/*apply js objects to jsx css/styling.*/}
            <h1 style={{
                color:'red',
                fontFamily:'fantasy'
            }}>
            JSX to JS and Back
            </h1>
        </div>
    )
}
export default Root

//react.js; passing down props pattern a, pattern b.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Child from './child'
import NewChild from './newchild'
function Root(){
    return(
        <>
            <Child
                pattern= 'passing static down props'
            />
            <NewChild
                pattern={{
                    newData:'passing down static object props'
                }}
            />
        </>
    )
}
export default Root

import React from 'react'
function Child(props){
    return(
        <>
            <h1>{props.pattern}</h1>
        </>
    )
}
export default Child

import React from 'react'
function NewChild(props){
    return(
        <>
            <h1>{props.pattern.newData}</h1>
        </>
    )
}
export default NewChild

//react.js; class based components
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//class based component
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React,{Component} from 'react'
class Root extends Component{
    //state = {}; use arrow functions to create component methods.
    constructor(){
        super()
        this.state = {
            stateA:'any data type',
            stateB:'any data type',
            onState:false
        }
        //bind built in methods here.
        this.handleClick = this.handleClick.bind(this)
    }

    //methods here 
    //method pattern a
    handleClick(){
        this.setState(prevState=>{
            return this.state = {
                onState:!prevState.onState
            }
        })
    }

    //method pattern b
    // handleClick=()=>{
    //     return this.state = {
    //         onState:!prevState.onState
    //     }
    // }

    render(){
        //jsx styling & objects placed here.
        return(
            <>
                {/*jsx ui layouts here */}
            </>
        )
    }
}
export default Root

//react.js; state
import React,{Component} from 'react'
class StateFul extends Component{
    constructor(){
        super()
        //initialize state data here
        this.state = {
            a:'software engineer',
            //can apply nested objects/arrays within state.
            b:{
                frontEnd:'html',
                sysAdmin:'bash',
                backEnd:'python'
            }
        }
    }

    render(){
        // use obj destructuring to access state data
        const {b} = this.state

        return (
            <>
                <h1>{this.state.a}</h1>
                <h1>{b.frontEnd}</h1>
                <h1>{b.sysAdmin}</h1>
            </>
        )
    }
}
export default StateFul

//react.js; handling events in react.js
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, { Component } from 'react'

export default class Root extends Component {
    state = {
        //integer to be incremented
        int:0
    }

    //method that increments an integer
    handleIncrement=()=>{
        this.setState(prevState=>{
            return {
                int:prevState.int+= 1
            }
        })
    }

    render() {
        const {int} = this.state
        return (
            <div>
                <h1>{int}</h1>
                {/*applying method to event handler */}
                <button onClick={this.handleIncrement}>
                    Click to increment
                </button>
            </div>
        )
    }
}
export default Root

//react.js;lifecyle methods
import React from 'react'
function Clock(props){
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function tick(){//callback that renders component and its UI
    ReactDOM.render(
        <Clock data={new Date()}/>,
        document.getElementById('root')
    )
}
/*
instead of the data being managed outside, component
should manage its own data.
*/
setInterval(tick, 1000)

//react.js Clock component re-write
import React, {Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    //functionality is set up for first time when component rendered to DOM.

    /*
    this.timerId; allows freedom to add 
    additional fields to the class manually 
    if you need to store something that does not 
    participate in the data flow.
    */
    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.tick(), 1000
        )
    }
    //DOM/functionality created by component is removed.
    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    //method that Clock will run every second
    tick(){
        this.setState({
            data:new Date()
        })
    }

    //render(){} will be called everytime an update happens
    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

/*
as long as we render Clock within the DOM node,
only one instance of the Clock component will be
used, allowing us to use local state and other 
lifecycle methods.

lifecycle methods are used 
to free sup resources when components
are destroyed.

mounting; setting up functionality
to a component for the first time.

a. componentDidMount(); used when initial functionality
is rendered for the first time; 'mounting' in react.js

a. The componentDidMount() method runs after the component output 
has been rendered to the DOM. 
This is a good place to set up a timer:

componentWillUnmount(); used when the DOM/functionality created by
the component is removed; 'unmounting' in react.js

*/
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)

//react.js; conditional render props passdown patterns a, b.
//application that renders a ui when loaded properly.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Logic from './logic'
import ChildComponent from './childcomponent'
function Root(){
    return(
        <>
        <Logic/>
        <ChildComponent/>
        </>
    )
}
export default Root

import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        loading:true
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState(prevState=>{
                return {
                    loading:prevState.Loading = false
                }
            })
        }, 3000)
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?
                    <h1>Loading...</h1>
                    :
                    //component pass down pattern b.
                    <ChildComponent
                        loadState = {{loadMessage:'System Load Successful'}}
                    />
                }
            </div>
        )
    }
}
export default ChildComponent

import React from 'react'

export default function ChildComponent(props){
    return (
        <div>
            <h1>{props.loadState.loadMessage}</h1>
        </div>
    )
}

//react.js practice;


/*
react.js; render props pattern c/react.js.children
create a component that uses input logic & state/props
to print out a message, along with conditional rendering.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)
import React from 'react'
import Logic from './logic'
import Child from './child'
export default function Root() {
    return (
        <div>
            <Logic>
                {
                    ({loading, textInput})=>(
                        <Child
                            loading={loading}
                            textInput={textInput}
                        />
                    )
                }
            </Logic>
        </div>
    )
}


import React, { Component } from 'react'
import Child from './child'
export default class Logic extends Component {
    state = {
        loading:true,
        textInput:''
    }
    //if loading is true, page will continue to load, else u.i. will appear.
    componentDidMount(){
        setTimeout(()=>{
            this.setState(prevState=>{
                return {
                    loading: prevState.loading = false
                }
            })
        }, 3000)
    }

    //method that allows input-types to be interactive.
    handleInputChange=(event)=>{
        const {name, type, value, checked} = event.target
        //initially checks if input type is a checkbox...
        //then validates input-type was/to be checked, or validates it was a text value.
        type === 'checkbox' ? this.setState({[name]:checked})
        : this.setState({[name]:value})
    }

    render() {
        const {loading, textInput} = this.state
        return (
            <>
                    <>{
                        this.props.children({
                            loading:this.state.loading,
                            textInput:this.state.textInput
                        })      
                    }</>
                    <br/>
                    <>{
                        this.state.loading ? <h3>Loading...</h3> : <Child/>
                    }</>
            </>
        )
    }
}

import React from 'react'
import Logic from './logic'
export default function Child(props){
    return (
        <div>
            <h1>The Next Generation of Television</h1>
            <form>
                    <input 
                        type='text'
                        name='textInput'
                        value={props.textInput}
                        onChange={props.handleInputChange}
                    />
                    {/*apply button functionality*/}
                    <button onClick={}>
                        Get Started
                    </button>
            </form>
        </div>
    )
}

/*
conditional render components 
pattens; a, b, c.
that displays fetch-api data
within a u.i.
*/



/*
Performance & how React renders its components
react.js; SHALLOW COMPARISON

shouldComponentUpdate(){}; method that determines
if a component should be updated if there are changes between
passed down state/props compared to current state/props.

!no changes between current state/props & passed down state/props
will not re-render components.


comparing two objects created in memory(face value) are not
strictly equal. (objA !== objB)

comparing two objects created in memory with 
the same 'first level' properties/shallow properties
will have a shallow comparison.
(objA = {data:true}) === (objB = {data:true})


comparing two objects created in memory with nested
objects within eachother will not have a shallow comparison
because two more objects are created within memory and
are compared in reference and not value.
(objA = {
    data:true, 
    objIn:{
        data:true
    }
})

!==

(objB = {
    data:true,
    objIn:{
        data:true
    }
})

*/

//objects created in memory are not equal
const obj000 = {}
const obj001 = {}
console.log(obj000 === obj001)

//the same first level object.properties are considered equal
const obj002 = {data:true} 
const obj003 = {data:true}
console.log(obj002.data === obj003.data)

//objects.properties that are nested objects are not equal
const obj004 = {
    data:true,
    nestedObj:{
        nestedData:1
    }
}

const obj005 = {
    data:true,
    nestedObj:{
        nestedData:1
    }
}
//two objects are not equal/shallowly equal.
console.log(obj004 === obj005)
//two objects with nested objects are not equal/shallowly equal.
console.log(obj004.nestedObj  === obj005.nestedObj)
//two object.properties are equal/shallowly equal.
console.log(obj004.data === obj005.data)



/*
react.js tree rendering; how it affects performance.

React.js automatically recursively re-renders each component(inefficient),
down tree branches until there are no more components to render.

changes to state or props in any component will
recursively re-render down the remaining tree wether
those component have changed or not. This can 
affect the performance of the react.app.
*/

//excercise
/*
react.js; SHALLOW COMPARISON, shouldComponentUpdate(){}
with HOcs, use shallow comparisson 
TO create an application that toggles 
data based on state.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
//import UiComponent from './uicomponent
export default function Root() {
    return (
        <div>
            {/* <UiComponent/> */}
        </div>
    )
}

//extendedLogic.js
import React, { Component } from 'react'
class Logic extends Component {
    state = {
        on:false
    }

    handleClick=()=>{
        this.setState(prevState=>{
            return this.state = {
                on:!prevState.on
            }
        })
    }



    render() {
        const ComponentTemplate = this.props.componentProps
        return (
            <div>
                <ComponentTemplate
                    on={this.state.on}
                    handleClick={this.handleClick}
                    {...this.props}
                />
            </div>
        )
    }
}

export function extendedLogic(componentProps){
    return function(props){
        return (
            <>
                <Logic
                    componentProps={componentProps}
                    {...props}
                />
            </>
        )
    }
}

import React, { Component } from 'react'
import {extendedLogic} from './extendedlogic'

export default class  UiComponent extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.on === this.props.on){
            //if no change in props or state = false; no need to update or re-render
            return false
        }
        //if change in props or state = true; component will update and re-render
        return true
    }
    render() {
        return (
            <>
                <button onClick={this.props.handleClick}>
                    {this.props.on ? 'Show Data':'Hide Data'}
                </button>
                <hr/>
                <div style={{display:this.props.on ? 'none':'block'}}>
                    <ul>
                        <li>Front End Wed Development</li>
                        <li>User Interface Development</li>
                        <li>Linux Systems Administration</li>
                    </ul>
                </div>
            </>
        )
    }
}









/*
react.js; SHALLOW COMPARISON, shouldComponentUpdate(){}
with renderProps, use shallow comparisson, render props 
to create an application that toggles 
screen color and different text based on change in
old props/state & new props/state, determine if component
needs to be re-rendered.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>, document.getElementById('root')
)

import React from 'react'
import UiComponent from './uicomponent'
function Root(){
    return (
        <>
            <UiComponent/>
        </>
    )
}
export default Root


//logic component
import React,{Component} from 'react'
class Logic extends Component{
    state = {
        onRed:true,
        onGreen:true
    }

    //method that toggle a red ui
    toggleRed=()=>{
        this.setState(prevState=>{
            return {
                onRed:!prevState.onRed
            }
        })
    }
    
    //method that toggles a green ui
    toggleGreen=()=>{
        this.setState(prevState=>{
            onGreen:!prevState.onGreen
        })
    }

    render(){
        const {onRed, onGreen} = this.state
        return(
            <>
                {
                    this.props.render({
                        onGreen:this.state.onGreen,
                        onRed:this.state.onRed,
                        toggleRed:this.toggleRed,
                        toggleGreen:this.toggleGreen
                    })
                }
            </>
        )
    }
}
export default Logic

//uicomponent, shouldComponentUpdate(){}
import React, {Component} from 'react'
import Logic from './logic'

class UiComponent extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.onRed === onRed && nextProps.onGreen === onGreen){
            return false
        }
        return true
    }

    render(){
        return(
            <>
                <Logic
                    //rendering props
                    render={
                        ({onGreen, onRed, toggleRed, toggleGreen})=>(
                            <>
                                <button onClick={toggleRed}>
                                    {on ? 'Show Red Ui':'Hide Red Ui'}
                                </button>
                                <hr/>
                                <div>
                                    <ul>
                                        <li>Front End Web Development</li>
                                        <li>React.js; Red Ui</li>
                                    </ul>
                                </div>
                                <br/>
                                <button onClick={toggleGreen}>
                                    {on ? 'Show Green Ui':'Hide Green Ui'}
                                </button>
                                <hr/>
                                <div>
                                    <ul>
                                        <li>Front End Web Development</li>
                                        <li>React.js; Green Ui</li>
                                    </ul>
                                </div>
                            </>
                        )
                    }
                />
            </>
        )
    }
}
export default UiComponent




















































































































 























//developerdatacomponent

/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Primitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
let arrayInt = [1,2,3,4,5,6]

- arrayInt.reduce((acc, int)=>{
    if(int > 1){
        acc.concat(int)
    }
})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- request comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatible with databases


Hosting method
- size & level
- size of individual services
- type of caching is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Micro Services and Firewalls

not-micro services; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.

AJAX programming;
AJAX is a technique for accessing web servers from a web page.

intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json


*Error Handling*

best methods;
 promise chaining use; .catch(), to 'catch' any errors

 async/await use; try{}catch(){}, to try code and catch any errors

 automatically invoke (async function(){try{}catch(){}})()
 can be used to handle errors.

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

3 promise states;
resolve; return promise was successful

reject; returned promise was unsuccessful

pending; returning a promise is in unknown process 

Async Challenges: course outline;

- Train in ways to handle async calls
- Handle errors in asynchronous code
- understand promises
- promise workout


finally() can be used
when managing promise chaining,

or when managing async promises
within automatically invoked (async functions resolver (){try{}catch(){}})()

auto invoked (async functions (){try{}catch(){}})()
then runs the resolver function as a result.

//automatically invoked function
A self-invoking expression is invoked (started) automatically, without being called.
(function(){
})()

Function expressions can be made "self-invoking".



practice fetch() api, x
async/await fetch() api, x
fetch() api error handling techniques; .catch()/try{}catch(){} x
promise chaining with fetch() api, x
async/await functions; promise chaining with fetch() api, x

promises; 3 states; [pending, resolved, rejected], x
promises + auto invoked functions, x
promises + finally method(auto invoked functions, resolver()) x

promises + fulfill all promises; Promise.all([]) x
Promise.all([]); good for resolving all promises.

promises + fulfill the fastest promise; Promise.race([]); 
Promise.race([]); good for timing out an event then not
proceeding when it takes too long.

parallel execution; 

submitting form form data using fetch() api
uploading multiple files using fetch() api.

Fetch Advanced

*/

/*
react clean up

1. delete index.css, delete import index.css in index.js
2. delete logo svg, delete import logo in app.js
3. delete header in app.js
4. delete css in app.css, don't delete file.
*/

/*
React Basics

why use react? 

- its speed
- uses virtual DOM.
- reusability

React uses Js/ES6 syntax
React allows jsx to function.

render() keyword/method; lifecycle method
that invokes the jsx to the virtual DOM.


jsx is a js rendition of html

need to wrap jsx elements inside a div.

do not need to import child components through
the main rendering page.

Parent & Child Component;

- creates a complex tree/hierarchy of components
- The render page serves an entry point for our app
when we provide an instance of the parent component '<App/>'

Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

Instances 
can apply multiple instances of child components 
within parent

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component, has to be on two different components.

function Root(){
    return(
        <div>
            //1. can give individual attributes
            <Component data='some data'/>

            or 

            //2. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1. can give use dot notation with props and attribute
            <p>{props.data}</p>

            or

            //2. can use dot notation with props on object and attribute
            <p>{props.object.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

- can leave some props missing if needed.
- can apply style={{conditional styling/rendering ? to inline style}}

Array methods;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

Jsx to js and back;

- surround javaScript within jsx with open and 
closed curly braces.
- write pure js within the function, but outside of the
return statement.

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

React props;

Mapping/Rendering props;

- can use props dot notation within mapped props component
when passing down props.

e.g. 

//within app/root component

    let newArray = array.map(arrayItem=> <MappedComponent 

        key = {propsItem.id}
        propsObj = {arrayItem}

        // can apply object obj = {data} from child components
        //when rendering outside data.
    />)

return(
    <element>{propsArray}</element>
)

//within PropsComponent

function PropsComp(props){
    return(
        <div>
            <h1>{props.propsObj.name}</h1>
            <h1>{props.propsObj.type}</h1>
        </div>
    )
}
export default PropsComp

or can use

let newArray = arrayData.map(arrayItem => 
    <MappedComponent
        key = {arrayItem.id}
        name = {arrayItem.name}
        type = {arrayItem.type}
    />
)

return(
    <div>
        {newArray}
    </div>
)

function PropsComponent(props){
    return(
        <div>
            {props.name}
            {props.type}
        </div>
    )
}
export default PropsComponent

practice; class based components.
practice; class based components and passing down props.
practice; class based components and state.
practice; class based components and adding state
within props.

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
https://reactjs.org/docs/events.html#supported-events


Handling Events in React.js;

- letting the user interact with webpage and application.
- all events will be camelCased. 
can add 

- store function inside variable to be used inline.

- within js;
const functionVariable = function someAction(){
    //block of code to run
}

- within jsx; 
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

- inline jsx event handlers;
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

//React lifecycle methods pt. 1;
render(){}; will always run jsx before and after new lifecycle methods are used.

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

React lifecycle methods pt.2 

render(){}; will always run jsx before and after new lifecycle methods are used.

//getSnapshotBeforeUpdate(){};

//creates a backup of the current way things are.
// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props
// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.

//return false makes app more performant, 
//returning true can create bugs within code.

React lifecycle methods pt. 3

render(){}; will always run jsx before and after new lifecycle methods are used.

componentDidUpdate(prevProps, prevState){}; runs after state is allowed to be changed
and after the component is rendered() and component is mounted() successfully.

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            //can run some logic
            //then change state
            this.setState({state: stateData})
        }

        or

        if(prevProps !== this.props){
            //can run some logic
            //then change props is child component

            propsObj = {{data: this.state.someData}}

            propsItem = {this.state.otherData}
        }
    }

Conditional rendering.

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <h1>Run this instead</h1>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent/>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent
                    props = {this.state.something}
                />
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <Component
                    propsObj = {{propsData: this.state.something}}
                />
            }

        </div>
    )
}

conditional rendering can be applied to a components 
style.

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            verified: true
        }
    }

    render(){
        const verifiedStyle = {
            color: 'blue'
        }
        const unverifiedStyle = {
            color: 'red'
        }
        return(
            <div>
                {
                    this.state.verified ? 
                    <h1 style = {verifiedStyle}>
                        Data verified
                    </h1>
                    :
                    <h1 style = {unverifiedStyle}>
                        Data unverified
                    </h1>
                }
            </div>
        )
    }
}
export default Parent

fetching data from api in react.js

writing forms and their methods;

<form>
    text input form
    <input 
        type = 'text'
        name = 'stateValue'
        value = {this.state.stateValue}
        onChange = {this.method}
        placeholder = ''
    />

    checkbox input form
    <input
        type = 'checkbox'
        name = 'stateVal'
        checked = {this.state.stateVal}
        onChange = {this.method}
    />

    radio button input forms\

    <input
        type = 'radio'
        name = 'stateVal'
        value = 'value'
        checked = {this.state.stateValue === 'value'}
        onChange = {this.method}
    />

    can display state through forms.
        <h1>{this.state.stateVal}</h1>
    </form>

  COMPONENT & CONTAINER ARCHITECTURE; 
  technique that separates components based
  on app rendering, logic and display.


  import React from 'react'
  import ReactDOM from 'react-dom'
  import Root from './root'

  ReactDOM.render(
      <Root/>,
      document.getElementById('root)
  )

  import React from 'react'
  import Container from './container'

  function Root(){
      return(
          <Container/>
      )
  }
  export default Root

  import React, {Component} from 'react'
  import Component from './component'

  class Container extends Component{
      constructor(){
          super()
          this.state = {
            lang_1: '',
            lang_2: '',
            lang_3: '',
            frontEndDev: false,
            backEndDev: false,
            systemsAdmin: false,
            devInProgress: 'in progress',
            devNotInProgress: 'not in progress'
          }
          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
          //destructuring properties from a DOM object targeted user event.

          const {name, value, type, checked} = event.target
          type === 'checkbox' ? this.setState({[name]: value})
          : this.setState({[name]: checked})
      }


      render(){
          return(
              <div>
                <Component
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
              </div>
          )
      }
  }
  export default Root

  import React from 'react'

  function Component(props){
    return(
        <main>
            <form>
                <input
                    type = 'text'
                    name = 'lang_1'
                    value = {props.data.lang_1}
                    onChange = {props.handleChange}
                    placeholder = 'first development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_2'
                    value = {props.data.lang_2}
                    onChange = {props.handleChange}
                    placeholder = 'second development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_3'
                    value = {props.data.lang_3}
                    onChange = {props.handleChange}
                    placeholder = 'third development language'
                />
                <br/>

                <input
                    type = 'checkbox'
                    name = 'frontEndDev'
                    checked = {props.data.frontEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'backEndDev'
                    checked = {props.data.backEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'systemsAdmin'
                    checked = {props.data.systemsAdmin}
                    onChange = {props.handleChange}
                />
                <br/>

                <input
                    type = 'radio'
                    name = 'devInProgress'
                    value = 'in progress'
                    checked = {props.data.inProgress === 'in progress'}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'radio'
                    name = 'devNotInProgress'
                    value = 'not in progress'
                    checked = {props.data.devNotInProgress === 'not in progress'}
                    onChange = {props.handleChange}
                />
                <h1>{props.data.lang_1}</h1>
                <br/>

                <h1>{props.data.lang_2}</h1>
                <br/>

                <h1>{props.data.lang_3}</h1>
                <br/>

            </form>
        </main>
    )
}
export default Component

//practice componentDidMount(){} & conditional rendering

//react.js container and component architecture;

//practice creating forms challenge

* react.js container and component architecture;
used to separate component rendering, js logic
and layout.

* rebuild todo application and use 
conditional rendering with 
form input logic to display task
updates.

* practice fetching data from an api in 
react.js

Writing Modern React Apps

 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html


New Features to React.js

- can use an arrow function for our methods
no need to use binding, can get rid of constructor.

React Hooks pt1; 

- 'Hook into' state and lifecycle methods with functional 
based components. 

- improves readability and organization of components.

useState() patterns 1, 2, 3

import React, {useState} from 'react'
const [ state ] = usetate()

import React, {useState} from 'react'
const state = useState()

import React from 'react'
const [ state ] = React.useState()

React Hooks/useState() pt2; changing state

import React, {useState} from 'react'

- function Root(){
    const [state, changeState] = useState('state')

    function change(){
        changeState(prevState => prevState = 'state updated')
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={change}>Change State</button>
        </div>
    )
}
export default Root

UseEffect pt.1;

- hooks into components
lifecycle and state.

- replacement for componentDidMount,
componentDidUpdate, componentWillUnMount

- used ƒor; Side effects; 
// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState, useEffect} from 'react'

keeps track of what happens to declared state.
useEffect(()=>{

}, [state])

UseEffect pt.2;
useEffect twice, return function, empty array.

    //returned function represents componentWillUnmount()
   
    //useEffect changes count every 3 seconds on interval
    //returns a clean up function that prevents bug.
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)

        }, 3000)

        return ()=> {//provided as a clean up function.
            clearInterval(intervalId)
        }
    }, []) //empty array represents componentDidMount() sets up/renders once at a time.

    //represents componentDidUpdate(), watches for count state to change
    //then sets new color to count state.
    useEffect(()=>{
        setColor(randomcolor())
    }, [count])

- can use return function 
to act as componentWillUnmount()
to perform any clean up of 
side effects needed.

- empty array used as componentDidMount()

- can use useEffect twice to 
act as componentDidUpdate()
to to watch for changes to state.


Ideas for React Apps;
https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

REACT.js BOOTCAMP

modern js features;

no constructor, no binding
no super, use arrow functions
to write methods. 

Inside render(){
    destrucure state object to avoid 
    writing this.state.stateValue
    within jsx.

    can rename state values to apply to jsx.
}

REACT.FRAGMENT;

- Helps us wrap our elements in 
something that does not create a new node in 
DOM tree.

React.Fragment; avoids poluting the DOM tree
with many elements/nodes.

not all components need to
be fragments because it 
may affect the css on elements.

child components are placed on
the same level as their parent components.


    DEFAULT PROPS; 
    automaticaly sets
    a style property to a component
    unless the component is directly styled
    differently.

    import React from 'react'
    import Comp from './comp

    function Root(){
        return(
            <div>
                <Comp
                    componentColor='red'
                    componentBorder='10px dashed black'
                    componentHeight={200}
                />
            </div>
        )
    }
    export default Root

    import React from 'react'

    function Comp(props){
    const style = {
        color: props.componentColor,
        border: props.componentBorder,
        height: props.componentHeight
    }

    return(
        <div>
            <Child/>
        </div>
    )
}

Comp.defaultProps = {
    componentColor: 'black',
    componentBorder: '5px solid white',
    componentHeight: 100
}

export default Comp





    PROP TYPES; 
    type check what kind of 
    props are being passed down.

    Component.propTypes = {
        cardColor: PropTypes.dataType.isRequired,
        cardWidth: PropTypes.oneOf([dataType, dataType]).isRequired,
        cardHeight: PropTypes.dataType
    }

    .isRequired can be chained to 
    propTypes and automatically specifies
    required data type.


    REUSABILITY; prevents code repetition,
    writing the same code over and over again.
    D.R.Y. dont repeat yourself

    inheritance; what drives oop (flawed pattern).
    composition; compose code structure, bits and pieces (best method).

    Techniques;
    1. component with props
    2. children
    3. HOC
    4. render props

    React children; allows component reusability 
    and props pass down with {props.children} pattern
    and regular props pass down style patterns.

    React.js HOC; a function that passes down
    reusable logoic from a parent component to 
    child components within an app. 
````HOC returns a function that returns a ui and 
    passed down props/state. The function takes a component
    as a parameter and argument then is invoked allowing the 
    children components special abilities.

React.js render props; 
key notes;
callbacks - A callback is a 
function passed as an argument to another function.
function will be activated when outter
function is called.

buit in js methods - can take in 
callbacks and other parameters.

Render Props;

"Is A component with a render={ ({})=>() } prop 
that takes a function and returns a React element and 
calls it instead of implementing its own render logic."
'functions' are a valid argument for functions in Javascript 
and work because they are passed down as props(react.js)/paremeters/arguments.




///////////////
React.js Tree Rendering; how it affects performance.

to increase performance of a react app,
react.js recursively renders components down a branch
until there are no more components to render.

changes to state or props in any component will
recursively re-render down the remaining tree wether
those component have changed or not. This can 
affect the performance of the react.app.

remedies to poor app performance; 
1. shouldComponentUpdate()
2. React.PureComponent
3. React.memo()


React.js; Performance

Performance & how React renders its components
react.js; SHALLOW COMPARISON

shouldComponentUpdate(){}

comparing two objects created in memory are not
strictly equal. (objA !== objB)

comparing two objects created in memory with 
the same 'first level' properties/shallow properties
will have a shallow comparison.
(objA = {data:true}) === (objB = {data:true})

comparing two objects created in memory with nested
objects within eachother will not have a shallow comparison
because two more objects are created within memory and
are compared in reference and not value.
(objA = {
    data:true, 
    objIn:{
        data:true
    }
})

!==

(objB = {
    data:true,
    objIn:{
        data:true
    }
})

shouldComponentUpdate(nextProps, nextState){
    if(nextProps.props === this.state.props){
        return true
    }
    return false
}

//////////////////////////////////////////
import React, {PureComponent} from 'react'
class App extends PureComponent{};

operates like shouldComponentUpdate(){}
and checks if a component(s) need to be 
re-rendered based on change in current state/props
from previous state/props.

react.memo;
*/

/*
react.js; React.memo
Higher Order Component built by React.
React.memo() === PureComponent(), but for functional 
components.

It only compares prevProps and newProps (no state checking).
can implement own checking functions to determins if it should
use the memoized result.

shouldComponentUpdate(); true, component should re-render/update,
props/state are different. false, component should not re-render
props/state are the same.


React.memo(); HOC for functional components.
React.memo(); true, component should not re-render if props are equal.

false, component should re-render if props are different.

React.memo() caches original props, then compares to 
new props and determines if component should re-render
based on if any changes are made.

true; cache, use original/same props, no re-render.
false; no cache, use new/changed props, re-render.

React.js; REACT CONTEXT

Provides a way to pass data
through the component tree
without having to pass down manually
at every level('props-drilling').

provider and consumer
pair wrap similar components
that create a link between
that parent, and every child component
that needs to consume that data
or method.

method within a child component
ca be fired which will modify state
within the 'parent' which will be passed
down to every 'child' component.

e.g.
Parent.Provider(parentComponent)
Parent.Comsumer(childComponent)
*/

//react.js; React.memo(), HOC function takes a component and returns a component.
//counter app.
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

import React, { Component } from 'react'
import Child from './child'
export default class App extends Component {
    state = {
        count = 0
    }

    //method that allows count to increment by 1 each time invoked().
    increment=()=>{
        this.setState(prevState=>{
            return {
                count:prevState.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                {/*can pass down props/state here */}
                <Child count={this.state.count}/>
            </div>
        )
    }
}

//false; component will be re-rendered based on change in props.
import React,{memo} from 'react'
import App from './app'
import NewChild from './newchild'

export default memo(
    function Child(props) {
        return (
            <div>
                <h1>Child Component Rendered.</h1>
                <h1>{props.count}</h1>
                <NewChild/>
            </div>
        )
    }
)

import React from 'react'
export default React.memo(
    function NewCild(){
        return (
            <div>
                <h1>True; Chached; No re-render</h1>
            </div>
        )
    }
)

/*
React.memo() with HOCs
counter application.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import UiComponent from './uicomponent'
export default function Root() {
    return (
        <div>
            <UiComponent/>
        </div>
    )
}

//logic component/HOC.
import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        count: 0
    }
    //method that increments state.
    incremenet=()=>{
        this.setState(prevState=>{
            return {
                count:prevState.count + 1
            }
        })
    }

    render() {
        const ComponentContainer = this.props.containerProps
        return (
            <div>
                <ComponentContainer
                    count={this.state.count}
                    increment={this.increment}
                    {...this.props}
                />
            </div>
        )
    }
}

//HOC that allows reuse of Logical component.
export function extendedLogic(containerProps){
    return function(props){
        return (
            <>
                <Logic
                    componentProps={containerProps}
                    {...props}
                />
            </>
        )
    }
}

//UiComponent that reuses logic from {extendedLogic}
import React from 'react'
import {extendedLogic} from './extendedlogic'
export default function UiComponent(props){
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.increament}>
                Increment
            </button>
        </div>
    )
}


/*
React.js; React Context

Provides a way to pass data
through the component tree
without having to pass down manually
at every level('props-drilling').

provider and consumer
pair wrap similar components
that create a link between
that parent, and every child component
that needs to consume that data
or method.

method within a child component
ca be fired which will modify state
within the 'parent' which will be passed
down to every 'child' component.

e.g.
Parent.Provider(parentComponent)
Parent.Comsumer(childComponent)

note: use REACT CONTEXT to
build on previous concepts.



React Context; pattern a1, a2
assigning provider context to 
a parent component,
need to provide 
*/

//pattern a1; declare/initialize variable to create compound componen/context
//ThemeContext is now an object that contains components as properties
//need to provide value={} prop to be passed down.

//ThemeContext file; './themecontext/
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext


import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'

//place ThemeContext in its own file './themecontext
//const ThemeContext = React.createContext()
ReactDOM.render(
    <ThemeContext.Provider value={'data'}>
        <Root/>
    </ThemeContext.Provider>,
    document.getElementById('root')
)

//pattern a2; use object destructuring to create compound component/context
//ThemeContext is now an object that contains components as properties
//need to provide value={} prop to be passed down.

//themecontext.js file
import React from 'react'
const ThemeContext = React.createContext()
const {Provider, Consumer} = ThemeContext

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'
ReactDOM.render(
    <Provider value={'data'}>
        <Root/>
    </Provider>,
    document.getElementById('root')
)

//to avoid bug; place ThemeContext into its own file then export default ThemeContext
//'./themecontext' file

//React Context practice; pattern a

//ThemeContext object file
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext


import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'
ReactDOM.render(
    <ThemeContext.Provider>
        <Root/>
    </ThemeContext.Provider>,
    document.getElementById('root')
)


//React Context practice; pattern b

//ThemeContext file.
import React from 'react'
var ThemeContext = React.createContext()
const {Provider, Consumer} = ThemeContext


import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'
ReactDOM.render(
    <Provider>
        <Root/>
    </Provider>,
    document.getElementById('root')
)



//css style is applied to <Root/>
//React.js; React Context; contextType

//ThemeContext file './themecontext'
import React from 'react'
const ThemeContext = React.createContext()
//obj-dest; const {Provider, Consumer} = ThemeContext
export default ThemeContext

//render file
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'

ReactDOM.render(
    <ThemeContext.Provider value={'css style passdown'}>
        <Root/>
    </ThemeContext.Provider>,
    document.getElementById('root')
    /*

        import React from 'react'
        const ThemeContext = React.createContext()
        const {Provider, Consumer} = ThemeContext
        export default ThemeContext

        <Provider>
            <Root/>
        </Provider>,
        document.getElementById('root')
    */
)


import React from 'react'
import Header from './header'
import Section from './section'

export default function Root() {
    return (
        <div>
            <Header/>
            <Section/>
        </div>
    )
}

//header component
import React, { Component } from 'react'
import ThemeContext from './themecontext'

export default class Header extends Component {
    render() {
        const headerTheme = this.context
        return (
            <>
                {/*<header className={`${this.context}-theme`}>*/}
                <header className={`${headerTheme}-theme`}>
                    Header Component
                </header>
            </>
        )
    }
}
Header.contextType = ThemeContext

import React, { PureComponent } from 'react'
import ThemeContext from './themecontext'

export default class Section extends PureComponent {
    render() {
        const sectionTheme = this.context
        return (
            <>
                {/*<section className={`${this.context}-theme`}>*/}
                <section className={`${sectionTheme}-theme`}>
                    Section Component
                </section>
            </>
        )
    }
}
Section.contextType = ThemeContext

//'./themecontext' file
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext

//React.context, contextType
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ThemeContext from './themecontext'
ReactDOM.render(
    <ThemeContext.Provider>
        <Root/>
    </ThemeContext.Provider>,
    document.getElementById('root')
)


//Root component
import React from 'react'
import ChildA from './childA'
import ChildB from './childB'
export default function Root(){
    return (
        <div>
            <ChildA/>
            <ChildB/>
        </div>
    )
}

//'./childA' file
import React, { Component } from 'react'
import ThemeContext from './themecontext'
export default class ChildA extends Component {
    render() {
        const theme = this.context
        return (
            <div>
                <h1>{theme}</h1>
            </div>
        )
    }
}
ChildA.contextType = ThemeContext

//'./childB' file
import React, { Component } from 'react'
import ThemeContext from './themecontext'
export default class ChildB extends Component {
    render() {
        const theme = this.context
        return (
            <div>
                <h1>{theme}</h1>
            </div>
        )
    }
}
ChildB.contextType = ThemeContext

//multi rendering/toggling user interface.
//apply react.context
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'
import ThemeContext from './themecontext'

ReactDOM.render(
    <ThemeContext.Provider>
        <Root/>
    </ThemeContext.Provider>,
    document.getElementById('root')
)



import React from 'react'
import ChildUi from './childui'
//rendering component
export default function Root(){
    return (
        <div>
            <ChildUi/>
        </div>
    )
}

//logic component that toggles two different colored UIs.
import React, { Component } from 'react'

export default class Logic extends Component {
    state = {
        onGreen:false,
        onRed:false
    }

    //method that toggles green colored UI.
    toggleGreen=()=>{
        this.setState(prevState=>{
            return {
                onGreen:!prevState.onGreen
            }
        })
    }

    //method that toggles red colored UI.
    toggleGreen=()=>{
        this.setState(prevState=>{
            return {
                onRed:!prevState.onRed
            }
        })
    }

    render() {
        const CompContain = this.props.componentProps
        return (
            <div>
                <Logic
                    onGreen={this.state.onGreen}
                    onRed={this.state.onRed}
                    toggleRed={this.toggleRed}
                    toggleGreen={this.toggleGreen}
                />
            </div>
        )
    }
}

export function extendedLogic(componentProps){
    return function(props){
        return (
            <>
                <Logic 
                    componentProps={componentProps}
                    {...props}
                />
            </>
        )
    }
}


//child ui component
import React, { Component } from 'react'
import ThemeContext from './themecontext'
import {extendedLogic} from './extendedlogic'

class ChildUi extends Component{
    static contentType = ThemeContext
    //state, methods
    render() {
        //variables, logic
        const theme = this.context
        return (
            <>
                <button onClick={this.props.toggleRed}>
                    {this.props.onRed ? 'Toggle Red':'Hide Red'}
                </button>
                {/* theme is brought in from css file. */}
                <div className={`${theme}-theme`} style={{display: this.props.onRed ? 'none':'block'}}>
                    <ul>
                        <li>Red Ui</li>
                        <li>Red State</li>
                        <li>Red Passed Through Props</li>
                    </ul>
                </div>
                <br/>
                <hr/>
                <button onClick={this.props.toggleGreen}>
                    {this.props.onGreen ? 'Toggle Green':'Hide green'}
                </button>
                <div className={`${theme}-theme`} style={{display: this.props.onGreen ? 'none':'block'}}>
                    <ul>
                        <li>Green Ui</li>
                        <li>Green State</li>
                        <li>Green Passed Down Through Props</li>
                    </ul>
                </div>
            </>
        )
    }
}
const SuperClassLogic = extendedLogic(ChildUi)
export default SuperClassLogic


/*
use static.contextType = Context render props pattern, as a 'static-prop' 
to pass down context value={''}
create a ui that will display a user name, via react.context use static-contextType.
*/

//'./context' file
import React from 'react'
const Context = React.createContext()
export default Context

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import Context from './context'
ReactDOM.render(
    <Context.Provider value={'cyberman'}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)


//'./root'
import React from 'react'
import UserNameUi from './usernameui'
export default function Root(){
    return (
        <div>
            <UserNameUi/>
        </div>
    )
}

//'./extendedlogic'/logic component
import React, { PureComponent } from 'react'
import Context from './context'
export default class Logic extends PureComponent {
    state = {
        on:false
    }

    //method that toggles a ui on and off.
    toggle=()=>{
        this.setState(prevState=>{
            return {
                on:!prevState.on
            }
        })
    }
    
    render() {
        return (
            <div>
                <>{
                    this.props.render({
                        on:this.state.on,
                        toggle:this.toggle
                    })
                }</>
            </div>
        )
    }
}

export default Logic

//'.usernameui' component
import React, { Component } from 'react'
import Context from './context'
import Logic from './logic'

export default class UserNameUi extends Component{
    //using static contextType as a static-prop to be passed down.
    static contextType = Context
    render() {
        const userName = this.context
        return (
            <>
                <Logic
                    render={
                        ({on, toggle})=>(
                            <>
                                <button onClick={toggle}>
                                    {on ? 'Hide Username':'Show Username'}
                                </button>
                                <hr/>
                                <br/>
                                <div style={{display: on ? 'block':'none'}}>
                                    <h2>Welcome: {userName}!</h2>
                                </div>
                            </>
                        )
                    }
                />
            </>
        )
    }
}

/*
React Context; Context.Consumer
use React Context Consumer only on function based components

Context provides a way to share values between components 
without having to explicitly pass a prop through every level of the tree.

1. use in place of class components static contextType = Context & Component.contexttype = Context
1a. const contextVar = this.context

2. returns an embedded function that returns an element/ui.

3. only use on components that need props from a specific parent component.

4. can apply theme directly into a single component; (pattern a; every instance)

5. can apply Consumer render prop pattern, if outside component and if we have multiple 
instances of the component. (pattern b; single instance)

6. can apply default props or prop.types to secure ui display if incorrect data is passed down.
*/

//React Context.Consumer. & default-props
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import Context from './context'
ReactDOM.render(
    <Context.Provider value={'cyberman'}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)

//Context file './context'
import React from 'react'
const Context = React.createContext()
export default Context

//create single and duplicate instances of passed down data.
//Root file './root'
import React from 'react'
import Uichild from './uichild'

export default function Root(){
    return (
        <>
            <Uichild/>
        </>
    )
}

import React from 'react'
import Context from './context'

export default function UiChild(props){
    return (
        <>
            <Context.Consumer>
                {
                    (username)=>(
                        <h1>Greetings {username}</h1>
                    )
                }
            </Context.Consumer>
        </>
    )
}

//////////////////////////////////////////////////////////////
//create instance of Context.Consumer of passed down data.
import React from 'react'
const Context = React.createContext()
export default Context

import React from 'react'
import ReactDOM from 'react-dom'
import Context from './context'
ReactDOM.render(
    <Context.Provider value={'cyberman'}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)


import React from 'react'
import Context from './context'
import UserHeader from './userheader'
import UserData from './userdata'

export default function Root() {
    return (
        <div>
            <UserHeader/>
            <UserData/>
        </div>
    )
}

//passing down data from provider to child consumer.
import React from 'react'
import Context from './context'
export default function UserHeader(props){
    return (
        <div>
            <Consumer.Consumer>
                {
                    (username)=>(
                        <h1>Greetings, {username}</h1>
                    )
                }
            </Consumer.Consumer>
        </div>
    )
}

//no context.consumer, stactic contextType
//passing down context data to child class-based component
import React, { Component } from 'react'
import Context from './context'

export default class UserData extends Component {
    static defaultProps = {
        softwareSkillA:'front end web development',
        softwareSkillB:'linux systems administration'
    }
    render() {
        const username = this.context
        return (
            <div>
                <h1>{username}</h1>
                <h2>{this.props.softwareSkillA}</h2>
                <h2>{this.props.softwareSkillB}</h2>
            </div>
        )
    }
}
UserData.contextType = Context


//moving context.provider into its own file; functional-component based.
//'./contextprovider' file; contains ContextProvider component.
import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    render() {
        return (
            <Provider value={'context data'}>
                <div>
                    <>{this.props.children}</>
                </div>
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextprovider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//'./root' file
import React from 'react'
import ComponentA from './componentA'
import ComponentB from './componentB'

function Root() {
    return (
        <div>
            <ComponentA/>
            <ComponentB/>
        </div>
    )
}
export default Root

//'./componentA' file, class-based component
import React, {Component} from 'react'
import {ContextConsumer} from './contextprovider'

export default class ComponentA extends Component{
    render(){
        return (
            <ContextConsumer>
                {
                    (contextData)=>(
                        <div>
                            <h1>{contextData}</h1>
                        </div>
                    )
                }
            </ContextConsumer>
        )
    }
}

//'./componentB' function-based component.
import React from 'react'
import {ContextConsumer} from './contextprovider'
export default function ComponentB(){
    return (
        <ContextConsumer>
            {
                (contextData)=>(
                    <div>
                        <h1>{contextData}</h1>
                    </div>
                )
            }
        </ContextConsumer>
    )
}

/*
    react.context patterns a, b, c.
    best practice to use react.context
    within functional components.
*/
import React from 'react'
const Context = React.createContext()
export default Context

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'
import Context from './context'
ReactDOM.render(
    <Context.Provider value={'unique context data'}>
        <Root/>
    </Context.Provider>
)

import React from 'react'
import ChildComponentA from './childcomponentA'
import ChildComponentB from './childcomponentB'
export default function Root(){
    return(
        <>
            <ChildComponentA/>
            <ChildComponentB/>
        </>
    )
}

//'./childcomponentA' file; pattern a; class based.
import React,{Component} from 'react'
import Context from './context'

export default class ChildComponentA extends Component{
    static contextType = Context
    render(){
        const data = this.context
        return(
            <>
                <h1>{data}</h1>
            </>
        )
    }
}
//ChildComponentA.contextType = Context

//'./childcomponentB' file; pattern b; function based.
import React from 'react'
import Context from './context'
export default function ChildComponentB(){
    return(
        <Context.Consumer>
            {
                (data)=>(
                    <>
                        <h1>{data}</h1>
                    </>
                )
            }
        </Context.Consumer>
    )
}

/*
    react.context placing context within its own file.
    we need to use class-based component to add state.
*/
import React,{Component} from 'react'

/*
can create several instances of context 
const Context = React.createContext()

individual context-provider file.
*/
const {Provider, Consumer} = React.createContext()
class ContextProvider extends ContextProvider{
    render(){
        return(
            <Provider value={'context data provided'}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//render file.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextprovider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//root files
import React from 'react'
import ComponentA from './componentA'
import ComponentB from './componentB'
export default function Root(){
    return(
        <>
            <ComponentA/>
            <ComponentB/>
        </>
    )
}

//'./componenta' file
import React from 'react'
import {ContextConsumer} from './contextprovider'
export default function ComponentA(){
    return(
        <ContextConsumer>
            {
                function(providedData){
                    return(
                        <h1>{providedData}</h1>
                    )
                }
            }
        </ContextConsumer>
    )
}

//'./componentb file
import React from 'react'
import {ContextConsumer} from './contextprovider'
export default function ComponentB(){
    return (
        <ContextConsumer>
            {
                (providedData)=>(
                    <>
                        <h1>{providedData}</h1>
                    </>
                )
            }
        </ContextConsumer>
    )
}

///////////////////////////////////////////////////
import React from 'react'
const {Provider, Consumer} = React.createContext()
class ContextProvider extends Component{
    state = {
        count:1
    }

    handleCount=()=>{
        this.setState(prevState=>{
            return this.state = {
                count: prevState.count += 1
            }
        })
    }

    render(){
        return(
            <>
                <Provider value={{
                    count:this.state.count, 
                    handleCount:this.handleCount
                }}>
                    {this.props.children}
                </Provider>
            </>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//excercise; changing/updating react.js context with state.
//counter application
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from ',/contextprovider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)


//'./root' file
import React from 'react'
import CountComponent from './countcomponent'
export default function Root(){
    return (
        <>
            <CountComponent/>
        </>
    )
}

import React from 'react'
import {ContextConsumer} from './contextprovider'
export default function reactNotesIndex() {
    return (
        <ContextConsumer>
            {
                (context)=>(
                    <>
                        <h1>{context.count}</h1>
                        <button onClick={context.handleCount}>
                            Click to increment
                        </button>
                    </>
                )
            }
        </ContextConsumer>
    )
}

/*
    adding state to components
    using context from an individual file.
*/









//developerdatacomponent

/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Primitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
let arrayInt = [1,2,3,4,5,6]

- arrayInt.reduce((acc, int)=>{
    if(int > 1){
        acc.concat(int)
    }
})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- request comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatible with databases


Hosting method
- size & level
- size of individual services
- type of caching is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Micro Services and Firewalls

not-micro services; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.

AJAX programming;
AJAX is a technique for accessing web servers from a web page.

intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json


*Error Handling*

best methods;
 promise chaining use; .catch(), to 'catch' any errors

 async/await use; try{}catch(){}, to try code and catch any errors

 automatically invoke (async function(){try{}catch(){}})()
 can be used to handle errors.

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

3 promise states;
resolve; return promise was successful

reject; returned promise was unsuccessful

pending; returning a promise is in unknown process 

Async Challenges: course outline;

- Train in ways to handle async calls
- Handle errors in asynchronous code
- understand promises
- promise workout


finally() can be used
when managing promise chaining,

or when managing async promises
within automatically invoked (async functions resolver (){try{}catch(){}})()

auto invoked (async functions (){try{}catch(){}})()
then runs the resolver function as a result.

//automatically invoked function
A self-invoking expression is invoked (started) automatically, without being called.
(function(){
})()

Function expressions can be made "self-invoking".



practice fetch() api, x
async/await fetch() api, x
fetch() api error handling techniques; .catch()/try{}catch(){} x
promise chaining with fetch() api, x
async/await functions; promise chaining with fetch() api, x

promises; 3 states; [pending, resolved, rejected], x
promises + auto invoked functions, x
promises + finally method(auto invoked functions, resolver()) x

promises + fulfill all promises; Promise.all([]) x
Promise.all([]); good for resolving all promises.

promises + fulfill the fastest promise; Promise.race([]); 
Promise.race([]); good for timing out an event then not
proceeding when it takes too long.

parallel execution; 

submitting form form data using fetch() api
uploading multiple files using fetch() api.

Fetch Advanced

*/

/*
react clean up

1. delete index.css, delete import index.css in index.js
2. delete logo svg, delete import logo in app.js
3. delete header in app.js
4. delete css in app.css, don't delete file.
*/

/*
React Basics

why use react? 

- its speed
- uses virtual DOM.
- reusability

React uses Js/ES6 syntax
React allows jsx to function.

render() keyword/method; lifecycle method
that invokes the jsx to the virtual DOM.


jsx is a js rendition of html

need to wrap jsx elements inside a div.

do not need to import child components through
the main rendering page.

Parent & Child Component;

- creates a complex tree/hierarchy of components
- The render page serves an entry point for our app
when we provide an instance of the parent component '<App/>'

Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

Instances 
can apply multiple instances of child components 
within parent

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component, has to be on two different components.

function Root(){
    return(
        <div>
            //1. can give individual attributes
            <Component data='some data'/>

            or 

            //2. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1. can give use dot notation with props and attribute
            <p>{props.data}</p>

            or

            //2. can use dot notation with props on object and attribute
            <p>{props.object.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

- can leave some props missing if needed.
- can apply style={{conditional styling/rendering ? to inline style}}

Array methods;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


Styling React elements with css classes;

- use 'className' when styling jsx classes/elements
- accesses js className property.
- in css file; .nameOfClass{ add style }
- can only apply to react elements/jsx, not react instances of 
elements

Jsx to js and back;

- surround javaScript within jsx with open and 
closed curly braces.
- write pure js within the function, but outside of the
return statement.

//
React Inline Styles with the style property

- style property is a js object wrapped in curly braces.
e.g. style = {{color: 'red}}.

- style-object value pairs need to be camelCased if they are 
two worded. 
e.g. backgroundColor: 'red'.

- create separate variable if inline style code
gets too long. Must be an object.

- can just use numbers to set default pixel styles.

- can use strings to set style units.
e.g. '24px', '24em', '24%'.

React props;

Mapping/Rendering props;

- can use props dot notation within mapped props component
when passing down props.

e.g. 

//within app/root component

    let newArray = array.map(arrayItem=> <MappedComponent 

        key = {propsItem.id}
        propsObj = {arrayItem}

        // can apply object obj = {data} from child components
        //when rendering outside data.
    />)

return(
    <element>{propsArray}</element>
)

//within PropsComponent

function PropsComp(props){
    return(
        <div>
            <h1>{props.propsObj.name}</h1>
            <h1>{props.propsObj.type}</h1>
        </div>
    )
}
export default PropsComp

or can use

let newArray = arrayData.map(arrayItem => 
    <MappedComponent
        key = {arrayItem.id}
        name = {arrayItem.name}
        type = {arrayItem.type}
    />
)

return(
    <div>
        {newArray}
    </div>
)

function PropsComponent(props){
    return(
        <div>
            {props.name}
            {props.type}
        </div>
    )
}
export default PropsComponent

practice; class based components.
practice; class based components and passing down props.
practice; class based components and state.
practice; class based components and adding state
within props.

React Props pt 1

- can apply attributes/props to components
to pass data.

- props are an object with built in properties.
and a parameter within component function.
e.g.

- cannot use props.property & props.propObj.property notation
on the same component/same time, has to be on two different components.

function Root(){
    return(
        <div>
            //1a. can give props inline
            <Component data='some data'/>

            or 

            //2a. can store an object with key values pairs
            <Component object={{data: 'some data'}}/>
        </div>
    )
}
function Component(props){
    return(
        <div>
            //1a. can use single dot notation with props and attribute

            <p>{props.data}</p>

            or

            //2a. can use props double dot notation when 
            receiving props

            <p>{props.propsObj.data}</p>
        </div>
    )
}
export default Component

- can use an object to store props within instance of components.

React.js Class based components

import React from 'react

class ClassBasedComponentExp extends React.Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp

or 

import React, {Component} from 'react

class ClassBasedComponentExp extends Component{
    constructor(){
        super()
        this.state = {
            stateKeyVal: stateKeyVal: 'data string'/dataArray/dataObj/bool/int etc.
        }
    }

    //other methods() written here
    render(){
        //js logic written here
        //styling variables written here
        return(
            <div>
            </div>
        )
    }
}
export default ClassBasedComponentExp


State; data that only class based components can manage 

- need/can use a constructor(){ super() } to initialize state
- this.state = {
    stateObj: 'data'/dataArray/dataObj etc.
}
https://reactjs.org/docs/events.html#supported-events


Handling Events in React.js;

- letting the user interact with webpage and application.
- all events will be camelCased. 
can add 

- store function inside variable to be used inline.

- within js;
const functionVariable = function someAction(){
    //block of code to run
}

- within jsx; 
<jsxElement camelCasedReactEvent = {functionVariable}> 
    Click Button fo action
</jsxElement>

- inline jsx event handlers;
< jsxElement camelCasedReactEvent = {
    ()=>{
        console.log('some data')
    }
}>

< /jsxElement >,

< jsxElement camelCasedReactEvent = {
        function(){
            console.log('some data')
    }
}>

</jsxElement>

//React lifecycle methods pt. 1;
render(){}; will always run jsx before and after new lifecycle methods are used.

//In applications with many components, it’s very important to
//free up resources taken by the components when they are destroyed.

//We can declare special methods on the class
//component to run some code when a component mounts and unmounts.

//componentDidMount(); 

//method runs after 
//the component output has been rendered to the DOM.

React lifecycle methods pt.2 

render(){}; will always run jsx before and after new lifecycle methods are used.

//getSnapshotBeforeUpdate(){};

//creates a backup of the current way things are.
// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

//static getDerivedStateFromProps(){}; 

//returns the new, updated state based upon the props
// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


//shouldComponentUpdate(nextProps, nextState){}; 

//determines if component needs to 
//re-render and update props or state.

//return false makes app more performant, 
//returning true can create bugs within code.

React lifecycle methods pt. 3

render(){}; will always run jsx before and after new lifecycle methods are used.

componentDidUpdate(prevProps, prevState){}; runs after state is allowed to be changed
and after the component is rendered() and component is mounted() successfully.

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            //can run some logic
            //then change state
            this.setState({state: stateData})
        }

        or

        if(prevProps !== this.props){
            //can run some logic
            //then change props is child component

            propsObj = {{data: this.state.someData}}

            propsItem = {this.state.otherData}
        }
    }

Conditional rendering.

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <h1>Run this instead</h1>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent/>
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <RenderThisComponent
                    props = {this.state.something}
                />
            }

        </div>
    )
}

//parent component
render(){
    return(
        <div>
            {
                this.state.someThing ?
                <h1>Run some code</h1>
                :
                <Component
                    propsObj = {{propsData: this.state.something}}
                />
            }

        </div>
    )
}

conditional rendering can be applied to a components 
style.

import React, {Component} from 'react'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            verified: true
        }
    }

    render(){
        const verifiedStyle = {
            color: 'blue'
        }
        const unverifiedStyle = {
            color: 'red'
        }
        return(
            <div>
                {
                    this.state.verified ? 
                    <h1 style = {verifiedStyle}>
                        Data verified
                    </h1>
                    :
                    <h1 style = {unverifiedStyle}>
                        Data unverified
                    </h1>
                }
            </div>
        )
    }
}
export default Parent

fetching data from api in react.js

writing forms and their methods;

<form>
    text input form
    <input 
        type = 'text'
        name = 'stateValue'
        value = {this.state.stateValue}
        onChange = {this.method}
        placeholder = ''
    />

    checkbox input form
    <input
        type = 'checkbox'
        name = 'stateVal'
        checked = {this.state.stateVal}
        onChange = {this.method}
    />

    radio button input forms\

    <input
        type = 'radio'
        name = 'stateVal'
        value = 'value'
        checked = {this.state.stateValue === 'value'}
        onChange = {this.method}
    />

    can display state through forms.
        <h1>{this.state.stateVal}</h1>
    </form>

  COMPONENT & CONTAINER ARCHITECTURE; 
  technique that separates components based
  on app rendering, logic and display.


  import React from 'react'
  import ReactDOM from 'react-dom'
  import Root from './root'

  ReactDOM.render(
      <Root/>,
      document.getElementById('root)
  )

  import React from 'react'
  import Container from './container'

  function Root(){
      return(
          <Container/>
      )
  }
  export default Root

  import React, {Component} from 'react'
  import Component from './component'

  class Container extends Component{
      constructor(){
          super()
          this.state = {
            lang_1: '',
            lang_2: '',
            lang_3: '',
            frontEndDev: false,
            backEndDev: false,
            systemsAdmin: false,
            devInProgress: 'in progress',
            devNotInProgress: 'not in progress'
          }
          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
          //destructuring properties from a DOM object targeted user event.

          const {name, value, type, checked} = event.target
          type === 'checkbox' ? this.setState({[name]: value})
          : this.setState({[name]: checked})
      }


      render(){
          return(
              <div>
                <Component
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
              </div>
          )
      }
  }
  export default Root

  import React from 'react'

  function Component(props){
    return(
        <main>
            <form>
                <input
                    type = 'text'
                    name = 'lang_1'
                    value = {props.data.lang_1}
                    onChange = {props.handleChange}
                    placeholder = 'first development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_2'
                    value = {props.data.lang_2}
                    onChange = {props.handleChange}
                    placeholder = 'second development language'
                />
                <br/>

                <input
                    type = 'text'
                    name = 'lang_3'
                    value = {props.data.lang_3}
                    onChange = {props.handleChange}
                    placeholder = 'third development language'
                />
                <br/>

                <input
                    type = 'checkbox'
                    name = 'frontEndDev'
                    checked = {props.data.frontEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'backEndDev'
                    checked = {props.data.backEndDev}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'checkbox'
                    name = 'systemsAdmin'
                    checked = {props.data.systemsAdmin}
                    onChange = {props.handleChange}
                />
                <br/>

                <input
                    type = 'radio'
                    name = 'devInProgress'
                    value = 'in progress'
                    checked = {props.data.inProgress === 'in progress'}
                    onChange = {props.handleChange}
                />

                <input
                    type = 'radio'
                    name = 'devNotInProgress'
                    value = 'not in progress'
                    checked = {props.data.devNotInProgress === 'not in progress'}
                    onChange = {props.handleChange}
                />
                <h1>{props.data.lang_1}</h1>
                <br/>

                <h1>{props.data.lang_2}</h1>
                <br/>

                <h1>{props.data.lang_3}</h1>
                <br/>

            </form>
        </main>
    )
}
export default Component

//practice componentDidMount(){} & conditional rendering

//react.js container and component architecture;

//practice creating forms challenge

* react.js container and component architecture;
used to separate component rendering, js logic
and layout.

* rebuild todo application and use 
conditional rendering with 
form input logic to display task
updates.

* practice fetching data from an api in 
react.js

Writing Modern React Apps

 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html


New Features to React.js

- can use an arrow function for our methods
no need to use binding, can get rid of constructor.

React Hooks pt1; 

- 'Hook into' state and lifecycle methods with functional 
based components. 

- improves readability and organization of components.

useState() patterns 1, 2, 3

import React, {useState} from 'react'
const [ state ] = usetate()

import React, {useState} from 'react'
const state = useState()

import React from 'react'
const [ state ] = React.useState()

React Hooks/useState() pt2; changing state

import React, {useState} from 'react'

- function Root(){
    const [state, changeState] = useState('state')

    function change(){
        changeState(prevState => prevState = 'state updated')
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={change}>Change State</button>
        </div>
    )
}
export default Root

UseEffect pt.1;

- hooks into components
lifecycle and state.

- replacement for componentDidMount,
componentDidUpdate, componentWillUnMount

- used ƒor; Side effects; 
// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState, useEffect} from 'react'

keeps track of what happens to declared state.
useEffect(()=>{

}, [state])

UseEffect pt.2;
useEffect twice, return function, empty array.

    //returned function represents componentWillUnmount()
   
    //useEffect changes count every 3 seconds on interval
    //returns a clean up function that prevents bug.
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)

        }, 3000)

        return ()=> {//provided as a clean up function.
            clearInterval(intervalId)
        }
    }, []) //empty array represents componentDidMount() sets up/renders once at a time.

    //represents componentDidUpdate(), watches for count state to change
    //then sets new color to count state.
    useEffect(()=>{
        setColor(randomcolor())
    }, [count])

- can use return function 
to act as componentWillUnmount()
to perform any clean up of 
side effects needed.

- empty array used as componentDidMount()

- can use useEffect twice to 
act as componentDidUpdate()
to to watch for changes to state.


Ideas for React Apps;
https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

REACT.js BOOTCAMP

modern js features;

no constructor, no binding
no super, use arrow functions
to write methods. 

Inside render(){
    destrucure state object to avoid 
    writing this.state.stateValue
    within jsx.

    can rename state values to apply to jsx.
}

REACT.FRAGMENT;

- Helps us wrap our elements in 
something that does not create a new node in 
DOM tree.

React.Fragment; avoids poluting the DOM tree
with many elements/nodes.

not all components need to
be fragments because it 
may affect the css on elements.

child components are placed on
the same level as their parent components.


    DEFAULT PROPS; 
    automaticaly sets
    a style property to a component
    unless the component is directly styled
    differently.

    import React from 'react'
    import Comp from './comp

    function Root(){
        return(
            <div>
                <Comp
                    componentColor='red'
                    componentBorder='10px dashed black'
                    componentHeight={200}
                />
            </div>
        )
    }
    export default Root

    import React from 'react'

    function Comp(props){
    const style = {
        color: props.componentColor,
        border: props.componentBorder,
        height: props.componentHeight
    }

    return(
        <div>
            <Child/>
        </div>
    )
}

Comp.defaultProps = {
    componentColor: 'black',
    componentBorder: '5px solid white',
    componentHeight: 100
}

export default Comp





    PROP TYPES; 
    type check what kind of 
    props are being passed down.

    Component.propTypes = {
        cardColor: PropTypes.dataType.isRequired,
        cardWidth: PropTypes.oneOf([dataType, dataType]).isRequired,
        cardHeight: PropTypes.dataType
    }

    .isRequired can be chained to 
    propTypes and automatically specifies
    required data type.


    REUSABILITY; prevents code repetition,
    writing the same code over and over again.
    D.R.Y. dont repeat yourself

    inheritance; what drives oop (flawed pattern).
    composition; compose code structure, bits and pieces (best method).

    Techniques;
    1. component with props
    2. children
    3. HOC
    4. render props

    React children; allows component reusability 
    and props pass down with {props.children} pattern
    and regular props pass down style patterns.

    React.js HOC; a function that passes down
    reusable logoic from a parent component to 
    child components within an app. 
````HOC returns a function that returns a ui and 
    passed down props/state. The function takes a component
    as a parameter and argument then is invoked allowing the 
    children components special abilities.

React.js render props; 
key notes;
callbacks - A callback is a 
function passed as an argument to another function.
function will be activated when outter
function is called.

buit in js methods - can take in 
callbacks and other parameters.

Render Props;

"Is A component with a render={ ({})=>() } prop 
that takes a function and returns a React element and 
calls it instead of implementing its own render logic."
'functions' are a valid argument for functions in Javascript 
and work because they are passed down as props(react.js)/paremeters/arguments.




///////////////
React.js Tree Rendering; how it affects performance.

to increase performance of a react app,
react.js recursively renders components down a branch
until there are no more components to render.

changes to state or props in any component will
recursively re-render down the remaining tree wether
those component have changed or not. This can 
affect the performance of the react.app.

remedies to poor app performance; 
1. shouldComponentUpdate()
2. React.PureComponent
3. React.memo()


React.js; Performance

Performance & how React renders its components
react.js; SHALLOW COMPARISON

shouldComponentUpdate(){}

comparing two objects created in memory are not
strictly equal. (objA !== objB)

comparing two objects created in memory with 
the same 'first level' properties/shallow properties
will have a shallow comparison.
(objA = {data:true}) === (objB = {data:true})

comparing two objects created in memory with nested
objects within eachother will not have a shallow comparison
because two more objects are created within memory and
are compared in reference and not value.
(objA = {
    data:true, 
    objIn:{
        data:true
    }
})

!==

(objB = {
    data:true,
    objIn:{
        data:true
    }
})

shouldComponentUpdate(nextProps, nextState){
    if(nextProps.props === this.state.props){
        return true
    }
    return false
}

//////////////////////////////////////////
import React, {PureComponent} from 'react'
class App extends PureComponent{};

operates like shouldComponentUpdate(){}
and checks if a component(s) need to be 
re-rendered based on change in current state/props
from previous state/props.

react.memo;

react.js; React.memo
Higher Order Component built by React.
React.memo() === PureComponent(), but for functional 
components.

It only compares prevProps and newProps (no state checking).
can implement own checking functions to determins if it should
use the memoized result.

shouldComponentUpdate(); true, component should re-render/update,
props/state are different. false, component should not re-render
props/state are the same.


React.memo(); HOC for functional components.
React.memo(); true, component should not re-render if props are equal.

false, component should re-render if props are different.

React.memo() caches original props, then compares to 
new props and determines if component should re-render
based on if any changes are made.

true; cache, use original/same props, no re-render.
false; no cache, use new/changed props, re-render.

React.js; REACT CONTEXT

Provides a way to pass data
through the component tree
without having to pass down manually
at every level('props-drilling').

provider and consumer
pair wrap similar components
that create a link between
that parent, and every child component
that needs to consume that data
or method.

method within a child component
ca be fired which will modify state
within the 'parent' which will be passed
down to every 'child' component.

e.g.
Parent.Provider(parentComponent)
Parent.Comsumer(childComponent)

////
React.js; React Context

Provides a way to pass data
through the component tree
without having to pass down manually
at every level('props-drilling').

provider and consumer
pair wrap similar components
that create a link between
that parent, and every child component
that needs to consume that data
or method.

method within a child component
ca be fired which will modify state
within the 'parent' which will be passed
down to every 'child' component.

e.g.
Parent.Provider(parentComponent)
Parent.Comsumer(childComponent)

note: use REACT CONTEXT to
build on previous concepts.



React Context; pattern a1, a2
assigning provider context to 
a parent component,
need to provide 


use static.contextType = Context render props pattern, as a 'static-prop' 
to pass down context value={''}
create a ui that will display a user name, via react.context use static-contextType.


React Context; Context.Consumer
use React Context Consumer only on function based components

Context provides a way to share values between components 
without having to explicitly pass a prop through every level of the tree.

1. use in place of class components static contextType = Context & Component.contexttype = Context
1a. const contextVar = this.context

2. returns an embedded function that returns an element/ui.

3. only use on components that need props from a specific parent component.

4. can apply theme directly into a single component; (pattern a; every instance)

5. can apply Consumer render prop pattern, if outside component and if we have multiple 
instances of the component. (pattern b; single instance)

6. can apply default props or prop.types to secure ui display if incorrect data is passed down.

to avoid bugs, place context iside of its own file to 
pass down data as needed.

The state is an instance of React Component Class can be defined as 
an object of a set of observable properties that control the behavior of the component. 
In other words, the State of a component is an object that 
holds some information that may change over the lifetime of the component.

Key!
    * Do not use context to avoid prop drilling in certain cercumstances (e.g. a layer, or two down).
    * Do not use context for state that is kept locally (e.g. forms).
    * wrap the provider around the lowest parent in the tree.
    * passing object as value={{obj:this.state.obj}} watch performance, and refactor as necessary.
    * 
    * 
    * React.Context patterns; Context.State pass down
    * Context.Notation/Render Props pass down.
    * 
    * useState()
    * 
    * useEffect() replaces; 
    * 
    

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

useEffect() main use;
Side effects?;

// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

//main use of class components is for state and lifecycle methods

useEffect() 
functionality;
every time the component renders, useEffect() is called to perform
an action brought in from outside the application or virtual dom.

useEffect takes in a callback function and an array as parameters.
variables that may change are stored within the array and are watched so 
useeffect(()=>{}, []) can perform actions on them.
if there is no array variable argument, useEffect(()=>{},[]) and internal code
will only run once.


// React Hooks; hook into lifecycle of component using functional components,
// no need to use class based components or lcm
// improves readability and organization of components.
//can create custom hooks to use on components.
useState() pattern a,
returns array = function that contains an array.
must use array destrcucturing to access useState() value
to dismiss console error.

sideEfects with useEffect() do not need clean up LCM.

do need clean up LCM;
    // document.addEventListener(...)
    // use of setInterval(()=>{}, 1000) function
    // subscription

solution 1;
can call useEffect(()=>{}, [variable]) twice using an empty array 
and adding the function()/action within first instance of useEffect(()=>{}, [])

solution 2; 
within first instance of useEffect()
return a function that takes in an Id from 
the outside action to clean it up.
*/
//'./contexprovider'
import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()
class ContextProvider extends Component{
    //state that allows data change management.
    state = {
        theme:'dark'
    }

    toggleTheme=()=>{
        this.setState(prevState=>{
            return this.state = {
                theme:prevState.theme === 'dark' ? 'Light':'Dark'
            }
        })
    }

    render(){
        return (
            <Provider value={{
                //color theme assigned 
                theme:this.state.theme, 
                //method can active or deactivate a theme.
                toggleTheme:this.toggleTheme
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//render file.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextprovider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//'./root/'
import React from 'react'
import ComponentUi from './componentui'
export default function Root(){
    return(
        <>
            <ComponentUi/>
        </>
    )
}



//'./componentui file'
import React from 'react'
import {ContextConsumer} from './componentprovider'

export default function ComponentUi(){
    return (
        <ContextConsumer>
            {
                (contextLogic)=>(
                    <>
                        {/*theme color
                        received from 
                        css file.
                         */}
                        <div>
                            {contextLogic.theme}
                        </div>
                        <button onClick={contextLogic.toggleTheme}>
                            switch theme
                        </button>
                    </>
                )   
            }
        </ContextConsumer>
    )
}

/*
    excercise; create toggle application 
    using context and state within its own file,
    pass down context logic down to consumer components.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextprovider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//'./root'
import React from 'react'
import ComponentA from './componentA'
import ComponentB from './componentB'
export default function Root(){
    return (
        <>
            <ComponentA/>
            <ComponentB/>
        </>
    )
}

//'./contextprovider'
import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            on:false
        }
        this.toggle = this.toggle.bind(this)
    }
    //new component methods are stored here.
    toggle=()=>{
        return this.setState(prevState=>{
            on:!prevState.on
        })  
    }

    render(){
        //js logic may be placed here.
        return (
            <Provider value={{
                on:this.state.on, 
                toggle:this.toggle
            }}>
                <>
                    {this.props.children}
                </>
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//'./componentA file'
import React from 'react'
import {ContextProvider} from './contextprovider'

export default function ComponentA(){
    return (
        <>
            <ContextProvider>
                {
                    (context)=>(
                        <>
                            <div style={{
                                display: context.on ? 'none':'block'
                            }}>
                            {/*add content here */}
                            </div>
                            {/*create button below that will toggle ui on and off. */}
                            <button onClick={context.toggle}>
                                {context.on ? 'Show Information':'Hide Infomation'}
                            </button>
                        </>
                    )
                }
            </ContextProvider>
        </>
    )
}

/////
/*
 react.context basics 
*/

//context file
import React from 'react'
const Context = React.createContext()
export default Context

//render file
import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'root'
import Context from './contextProvider'
ReactDOM.render(
    <Context.Provider value={'cyberman'}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)

//'./root' file
import React from 'react'
import ComponentA from './componentA'
export default function Root(){
    return (
        <>
            <ComponentA/>
        </>
    )
}

//'./componentA' file
import React, {Component} from 'react'
import Context from './contextProvider'

export default class ComponentA extends Component{
    static contextType = Context
    render(){
        const userName = this.context
        return(
            <>
                <h1>{userName}</h1>
            </>
        )
    }
}

/*
    react.context functional components/
    render props pattern.
*/
import React from 'react'
const Context = React.createContext()
export default Context

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import Context from './context'
ReactDOM.render(
    <Context.Provider value={'cyberman'}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)

//'./root' file
import React from 'react'
import ChildComponent from './childcomponent'
export default function Root(){
    return(
        <>
            <ChildComponent/>
        </>
    )
}

//'./childcompnent'
import React from 'react'
import {Context} from './context'
export default function ChildComponent(){
    return(
        <>
            <Context.Consumer>
                {
                    (username)=>(
                        <div>
                            <h1>{username}</h1>
                        </div>
                    )
                }
            </Context.Consumer>
        </>
    )
}

/*
    react.context;
    placing context within
    its own file to be acessed
    down rendering tree.
*/
//'./context' file
import React from 'react'
const {Provider, Consumer} = React.createContext()
class ContextProvider extends Component{
    render(){
        return(
            <Provider value={'cyberman'}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//'index.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextProvider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//'./root' file
import React from 'react'
import ChildComponent from './childComponent'
export default function Root(){
    return(
        <>
            <ChildComponent/>
        </>
    )
}

//'./childComponent'
import React from 'react'
import {ContextConsumer} from './contextConsumer'
export default function ChildComponent(){
    return(
        <ContextConsumer>
            {
                (username)=>(
                    <div>
                        <h1>{username}</h1>
                    </div>
                )
            }
        </ContextConsumer>
    )
}

/**
 * Challenge: Add the ability for the user to choose a new username
 * 
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 * 
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 * 
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
 */

//state and method provided by CONTEXT.STATE
//state within context file affects the state provided within another component.
//'./index.js'

//'./contextprovider' component with state
import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state = {
        userName:'cyberman'
    }

    //method that allows button click to change data.
    handleUserContext=(userName)=>{
        this.setState({userName})
    }

    //passing down state and method to other components through context.
    render(){
        // const {userName} = this.state
         return(
            <Provider value={{
                userName:this.state.userName,
                handleUser:this.handleUser
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextProvider'

ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

import React from 'react'
import ChildComponent from './childComponent'

export default function Root(props) {
    return (
        <div>
            <ChildComponent/>
        </div>
    )
}


//'./childComponent'
import React from 'react'
import {ContextConsumer} from './contextProvider'

export default class ChildComponent extends Component{
    state = {
        newUserName:''
    }

    handleUpdate=(newUsername)=>{
        this.setState({newUsername})
    }

    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <ContextConsumer>
                {
                    //state and method provided by context
                    //state within context file affects the state provided within another component.
                    ({userName, handleUserContext})=>(
                        <>
                            <p>
                                Welcome {userName}!
                            </p>
                                <hr/>
                            <div>
                                {/*text input form.*/}
                                <input 
                                    type="text"
                                    name='newUserName'
                                    value={this.state.newUserName}
                                    onChange={this.handleChangeText}
                                />
                            </div>
                            <button onClick={
                                ()=> handleUserContext(this.state.newUserName)
                            }>
                                Click to update username
                            </button>
                        </>
                    )
                }
            </ContextConsumer>
        )
    }
}

/*
    react.context; RENDER PROPS/CONTEXT.NOTATION
    create an application that 
    passes down state from the context provider
    component to the contextConsumer component.
    That also toggles data off and on.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextProvider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)

//'./root'
import React from 'react'
import UiComponent from './uicomponent'
export default function Root(){
    return (
        <UiComponent/>
    )
}

//'./contextProvider' file.
import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state = {
        // on:false,
        userName:'cyberman',
        newUserName:'user'
    }

    //method that allows userName to be updated.
    handleUpdate=(userName)=>{
        this.setState({userName})
    }

    //method that allows text to be changed.
    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState(
            {
                [name]: value
            }
        )
    }

    render(){
        const {userName, newUserName} = this.state
        return(
            <Provider value={{
                userName,
                newUserName,
                handleUpdate:this.handleUpdate,
                handleChangeText:this.handleChangeText
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Consumer as ContextConsumer}

//'./uicomponent' using contextprovider; use .
//we dont always have to pass down props
import React from 'react'
import {ContextConsumer} from './contextConsumer'
export default function UiComponent(){
    return(
        <ContextConsumer>
            {
                //context brings in anything it has created.
                (context)=>(
                    
                    <main>
                        <div style={{
                            border:'solid black 5px',
                            textAlign:'center',
                            color:'white',
                            backgroundColor:'blue'
                        }}>
                            <h1>Greetings {context.userName}</h1>
                        </div>
                        <input
                            type='text'
                            name='newUserName'
                            value={context.newUserName}
                            placeholder='enter username here'
                            onChange={context.handelChangeText}
                        />
                        <button onClick={()=> context.handleUpdate(context.newUserName)}>
                            Click to Submit
                        </button>
                    </main>
                )
            }
        </ContextConsumer>
    )
}

/*
HOC, Render.Props, Context; Review
*/

//HOC; username update application that uses HOC logic and data.
//render file.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//root file.
import React from 'react'
import UiComponent from './uicomponent'
export default function Root(){
    return(
        <>
            <UiComponent/>
        </>
    )
}

//logic file
import React, {Component} from 'react'
class Logic extends Component{
    state = {
        userName:'cyberman',
        newUserName:''
    }

    //method that allows button click to update username
    handleUpdateUser=(userName)=>{
        this.setState({userName})
    }

    //method that allows form text to change
    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        const {userName, newUserName} = this.state
        const Component = this.props.componentProps
        return(
            <Component
                userName={userName}
                newUserName={newUserName}
                handleUpdateUser={this.handleUpdateUser}
                handelChangeText={this.handleChangeText}
                {...this.props}
            />
        )
    }
}

export function extendedLogic(componentProps){
    return function(props){
        return(
            <>
                <Logic
                    componentProps={componentProps}
                    {...props}
                />
            </>
        )
    }
}

//'./uiComponent' ui that allows username to be updated, allows text field to be changed.
import React from './react'
import HeaderUi from './headerui'
import {extendedLogic} from './extendedlogic'
class UiComponent extends Component{
    render(){
        return function(props){
            return(
                <>
                    <HeaderUi/>
                    <input
                        type='text'
                        name='newUserName'
                        value={this.props.newUserName}
                        placeholder='enter text here'
                        onChange={this.props.handleChangeText}
                    />
                    <button onClick={this.props.handleUpdateUser}>
                        click to submit username
                    </button>
                </>
            )
        }
    }
}
const uiExtendedLogic = extendedLogic(UiComponent)
export default uiExtendedLogic

//'./headerui' file
import React from 'react'
import {extendedLogic} from './extendedlogic'
class HeaderUi extends Component{
    render(){
        return(
            <header>
                <h1>Greetings, {this.props.userName}!</h1>
            </header>
        )
    }
}
const ExtendedHeaderUiLogic = extendedLogic(HeaderUi)
export default ExtendedHeaderUiLogic

/*
    react.js; render props patterns a, b, c
    pattern a; render props from within root file.
    pattern b; render props from within uifile.
    pattern c; render props/uiccomponent from within root+logic component
    pattern c; render props using react.children.

    task; create an application that updates 
    a username and allows input field text to
    change.
*/

//pattern a; render props from within root file.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)


//root.js file
import React from 'react'
import Child from './child'
export default function Root(){
    return (
        <>
            <Child
                render={
                    (int1, int2)=>(
                        <>
                        `${int1 + int2}`
                        </>
                    )
                }   
            />
        </>
    )
}

import React from 'react'
export default function Child(props){
    return (
        <>
            <h1>
                {
                    props.render(1, 2)
                }
            </h1>
        </>
    )
}



//pattern b; render props from within ui component.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//'./root' file
import React from 'react'
import UiComponent from './uicomponent'

export default function Root(){
    return(
        <UiComponent/>
    )
}

//'./logic' file
import React, {Component} from 'react'
export default class Logic extends Component{
    state = {
        userName:'cyberman',
        newUserName:'user'
    }

    //method that updates userName
    handleUpdate=(userName)=>{
        this.setState({userName})
    }

    //method that allows input text to change.
    handleUpdateText=(event)=>{
        /*
            The 'target' property of the 'event' interface is a
        reference to the object(state and DOM objects) onto which the event was dispatched.
        */
        //js object/&data will live on a jsx/html element
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    render(){
        const {userName, newUserName} = this.state
        return(
            this.props.render({
                userName,
                newUserName,
                handleUpdate:this.handleUpdate,
                handleUpdateText:this.handleUpdateText
            })
        )
    }
}

//'./uicomponent' file
import React from 'react'
import Logic from './logic'
export default function UiComponent(){
    return(
        <Logic
            render={
                ({userName, newUserName})=>(
                    <>
                        <header>
                            Welcome {userName}!
                        </header>
                        <hr/>
                        <h2>Updates for; {newUserName}</h2>
                        <input
                            type='text'
                            name='newUserName'
                            placeholder='enter text here'
                            onChange={handleChangeText}
                        />
                        <button onClick={()=> handleUpdateUser(newUserName)}>
                            Click to enter
                        </button>
                    </>
                )
            }
        />
    )
}


//pattern c; render props, create uicomponent from within roor using imported-logic component
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//logic component
import React, {Component} from 'react'
export default class Logic extends Component{
    state = {
        username:'cyberman'
    }
    render(){
        const {username} = this.state
        return(
            this.props.render({
                username
            })
        )
    }
}

import React from 'react'
import Logic from './logic'
export default function Root(){
    return(
        <>
            <Logic
                render={
                    ({username})=>(
                        <div>
                            <h1>{username}</h1>
                        </div>
                    )
                }
            />
        </>
    )
}




//pattern d; render props/ui from within root import logic component
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Logic from './logic'
import UiComponent from './uicomponent'
export default function Root(){
    return(
        <Logic
            render={
                ({username, newUsername, handleDisplay, handleChangeText})=>(
                    <UiComponent
                        username={username}
                        newUsername={newUsername}
                        handleDisplay={handleDisplay}
                        handleChangeText={handleChangeText}
                    />
                )
            }
        />
    )
}


//'./logic' component
import React, {Component} from 'react'
export default class Logic extends Component{
    state = {
        username:'cyberman',
        newUserName:'user',
    }

    handleDisplay =(username)=>{
        this.setSate({
            username
        })
    }

    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    render(){
        const {username, newUsername} = this.state
        return(
            this.props.render({
                username, 
                newUsername,
                handleDisplay: this.handleDisplay,
                handleChangeText: this.handleChangeText
            })
        )
    }
}

import React from 'react'
import Logic from './logic'
export default function UiComponent(props){
    return(
        <main>
            <div>
                <h1>Greetings, {props.username}</h1>
                <hr/>
                <h2>No updates for; {props.newUsername}</h2>
            </div>
            <div>
                <input
                    type='text'
                    name='newUserName'
                    value={props.newUsername}
                    placeholder='enter username here'
                    onChange={props.handleChangeText}
                />
                <button onClick={()=> props.handleDisplay(props.newUsername)}>
                    Click to submit
                </button>
            </div>
        </main>
    )
}

//pattern e; render props using react.children.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

//root file
import React from 'react'
import Logic from './logic'
export default function Root(){
    return(
        <Logic>
            {
                ({username, newUsername, handleDisplayUpdate, handleChangeText})=>(
                    <UiComponent
                        username={username}
                        newUsername={newUsername}
                        handleDisplayUpdate={handleDisplayUpdate}
                        handleChangeText={handleChangeText}
                    />
                )
            }
        </Logic>
    )
}

//logic file.
import React, {Component} from 'react'
class Logic extends Component{
    state = {
        username:'user',
        newUsername:''
    }

    //method that diplays updated username when button is clicked
    handleDisplayUpdate=(username)=>{
        //state-object property is destructured and accessed.
        this.setState( {username} )
    }

    //method that allows input text to be live updated.
    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    render(){
        const {username, newUsername} = this.state
        return(
            this.props.children({
                username,
                newUsername,
                handleDisplayUpdate:this.handleDisplayUpdate,
                handleChangeText:this.handleChangeText
            })
        )
    }
}

//'./uicomponent' file
import React from 'react'
export default function UiComponent(props){
    return(
        <>
            <div>
                <h1>Welcome, {props.username}!</h1>
                <br/>
                <h2>Updates for; {props.newUsername}</h2>
                <hr/>
            </div>
            <div>
                <input 
                    type="text"
                    name='newUsername'
                    value={props.newUsername}
                    placeholder='enter text here'
                    onChange={props.handleChangeText}
                />
                <button onClick={()=> props.handleDisplayUpdate(props.newUsername)}>
                    click to submit
                </button>
            </div>
        </>
    )
}

/*
    react.js.context;

    pattern a; class based, x
    pattern b; function based, 
    pattern c; context within its own file. 
    pattern d; context from within its own file passing down state.
*/
//context file
import React from 'react'
const Context = React.createContext()
export default Context

//'./index.js' file
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {Context} from './contextfile'
ReactDOM.render(
    <Context.Provider value={'context user interface development'}>
        <Root/>
    </Context.Provider>,
    document.getElementById.getElementById('root')
)

//'./root' file
import React from 'react'
import UiComponent from './uicomponent'
export default function Root(){
    return(
        <UiComponent/>
    )
}

//'./uicomponent' file
export default class UiComponent extends Component{
    static contextType = Context
    render(){
        const {contextData} = this.context
        return(
            <>
                <h1>
                    development type; {contextData}
                </h1>
            </>
        )
    }
}

//context pattern b; function based context.
import React from 'react'
const Context = React.createContext()
export default Context

import React from 'react'
import ReactDOM from 'react-dom'
import {Context} from './context'
ReactDOM.render(
    <Context.Provider value={1}>
        <Root/>
    </Context.Provider>,
    document.getElementById('root')
)

import React from 'react'
import {Context} from './context'
export default function Root() {
    let contextNumber = Context
    return (
        <div>
            <h1>{contextNumber}</h1>
        </div>
    )
}



/*
// React Hooks; hook into lifecycle of component using functional components,
// no need to use class based components or lcm
// improves readability and organization of components.
//can create custom hooks to use on components.
useState() pattern a,
returns array = function that contains an array.
must use array destrcucturing to access useState() value
to dismiss console error.

sideEfects with useEffect() do not need clean up LCM.

do need clean up LCM;
    // document.addEventListener(...)
    // use of setInterval(()=>{}, 1000) function
    // subscription

solution 1;
can call useEffect(()=>{}, [variable]) twice using an empty array 
and adding the function()/action within first instance of useEffect(()=>{}, [])

solution 2; 
within first instance of useEffect()
return a function that takes in an Id from 
the outside action to clean it up.


*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElemenyById('root')
)

import React, {useState} from 'react'
export default function Root(){
    const [userInterface, /* apply function here */] = useState('user interface development')
    return(
        <>
            <h1>
                Software Engineering Type; <span style={{color: 'red'}}> {userInterface}</span>
            </h1>
        </>
    )
}

//functional component using useState() hook.
import React, {useState} from 'react'

export default function Counter(){
    const [count] = useState(0)

    //function that invokes hook method and manages the count state variable.
    function handleIncrement(){
        setCount(
            prevCount => prevCount + 1
        )
    }

    return (
        <div>
            <h1>{count}</h1>
            {/*button click invokes incrementing function/method. */}
            <button onClick={handleIncrement}>
                Click to increment
            </button>
        </div>
    )
}

/*
    react functional component; managing state with hook.
    simple counter application.
*/
import React, {useState} from 'react'

export default function Count() {
    //array -> [element/value, function] = hook(argument)
    const [count, setCount] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <hr/>
            <button onClick={increment}>
                Increment
            </button>
            <br/>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}


import React, {useState} from 'react'

export default function Root() {
    //array -> [element/value, function] = hook(argument)
    const [answer, setAnswer] = useState('No')
    
    //can set new state for different data

    //methods that toggle strings.
    function advance(){
        setAnswer(prevAnswer => prevAnswer = 'Yes')
    }

    function revert(){
        setAnswer(prevAnswer => prevAnswer = 'No')
    }

    return (
        <div>
            {/* starts as 'No' */}
            <h1>{answer}</h1>
            <br/>
            <button onClick={advance}>
                Click for 'Yes'
            </button>
            <br/>
            <button onClick={revert}>
                Click for 'No'
            </button>
        </div>
    )
}




/*
    useState() changing more complex state.
    react.js ui that stores a name and display it to 
    browser.
*/
//render files needed.

import React, {useState} from 'react'

export default function ManageUsers(){
    //useState contains a built in array and returns data from within the array with array destructuring.
    const [inputData, setInputData] = useState({
        firstName:'',
        lastName:''
    })
 
    const [contactsData, setContactsData] = useState([])

    //method that changes form field text
    function handleChange(event){
        const {name, value} = event.target
        setInputData(
            prevInputData => (

                {...prevInputData, [name]: value}

            )
        )
    }

    //method that submits form field text
    function handleSubmit(event){
        event.preventDefault()
        setContactsData(
            prevContacts => (

                //
                [...prevContacts, inputData]
            )
        )
    }
    

    const contacts = contactsData.map(
        contact =>
            <h2 key={contact.firstName + contact.lastName}>
                {contact.firstName} {contact.lastName}
            </h2>
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='first name'
                    type="text"
                    name='firstName'
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder='last name'
                    type="text"
                    name='lastName'
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            {contacts}
        </div>
    )
}


//react.js useState() pattern c
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'
export default function Root(){
    const [inputData, setInputData] = useState({
        // state will change/update when text is entered.
        devType:'',
        devLanguage:''
    })
    const [contactsData, setContactsData] = useState([])

    //method that allows form field text to change
    function handleInputData(event){
        const {name, value} = event.target
        setInputData(
            prevInputData => (
                {...prevInputData, [name]: value}
            )
        )
    }

    //method that stores inputData
    function handleContactsData(event){
        event.preventDefault()
        setContactsData(
            prevContactsData =>(
                [...prevContactsData, inputData]
            )
        )
    }

    const contacts = contactsData.map(
        contact=>
            <h1 key={contact.devType + contact.devLanguage}>
                {contact.devType} {contact.devLanguage}
            </h1>
    )

    return(
        <div>
            <form onSubmit={handleContactsData}>
                <input 
                    type="text"
                    name='devType'
                    value={inputData.devType}
                    placeholder='enter text here'
                    onChange={handleInputData}
                />
                <br/>
                <input 
                    type="text"
                    name='devLanguage'
                    value={inputData.devLanguage}
                    placeholder='enter text here'
                    onChange={handleInputData}
                />
                <button>
                    Submit
                </button>
            </form>
            {contacts}
        </div>
    )
}

/*
useEffect() replaces; 

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

useEffect() main use;
Side effects?;

// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

//main use of class components is for state and lifecycle methods

useEffect() 
functionality;
every time the component renders, useEffect() is called to perform
an action brought in from outside the application or virtual dom.

useEffect takes in a callback function and an array as parameters.
variables that may change are stored within the array and are watched so 
useeffect(()=>{}, []) can perform actions on them.
if there is no array variable argument, useEffect(()=>{},[]) and internal code
will only run once.

*/

//counter application that uses useEffect(()=>{}, [variable])
import React, {useState, useEffect} from 'react'
// import randomcolor from 'randomcolor'

export default function Counter(){
    const [count, setCount] = useState(0)
    // const [color, setColor] = useState('')

    // function increment(){
    //     setCount(
    //         prevCount =>(
    //             prevCount + 1
    //         )
    //     )
    // }

    // function decrement(){
    //     setCount(
    //         prevCount =>(
    //             prevCount - 1
    //         )
    //     )
    // }

    useEffect(()=>{
        const sideEffect = setInterval(() => {
            setCount(prevCount=> prevCount + 1)
        }, 1000);

        return ()=> clearInterval(sideEffect)
    }, [])

    // useEffect(()=>{
    //     setColor(randomcolor())
    // },[color])

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

/*
    useState();
    counter application 
    that increments a color every interval.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import Counter from './counter'
export default function Root(){
    return(
        <>
            <Counter/>
        </>
    )
}

import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(
            prevCount => (
                prevCount + 1
            )
        )
    }

    function decrement(){
        setCount(
            prevCount => (
                prevCount - 1
            )
        )
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                Increment
            </button>
            <br/>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}

//useState
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import ComponentA from './componentA'
import ComponentB from './componentB'
export default function Root(){
    return (
        <div>
            <ComponentA/>
            <br/>
            <ComponentB/>
        </div>
    )
}

import React, {useState} from 'react'
export default function UiComponent(){
    const [answer, setAnswer] = useState('Yes')

    function handleAnswer(){
        setAnswer(
            prevAnswer => prevAnswer = 'No'
        )
    }

    return (
        <div>
            <h1>{answer}</h1>
            <button onClick={handleAnswer}>
                Toggle Answer
            </button>
        </div>
    )
}

import React, {useState} from 'react'
export default function ComponentB(){
    const [inputData, setInputData] = useState({
        devType:'',
        language:''
    })

    const [devData, setDevData] = useState([])

    //method that allows text to change
    function handleInputData(event){
        const {name, value} = event.target
        setInputData(
            prevInput => (
                {...prevInput, [name]:value}
            )
        )
    }

    //method that allows button to submit data
    function handleDevData(event){
        event.preventDefault()
        setDevData(
            prevDevData => (
                [...prevDevData, inputData]
            )
        )
    }

    const developer = devData.map(
        data => (
            //key={} notifies react when a list element has been changed/updated/removed.
            //data will be wrapped within an h1 jsx element
            <h1 key={data.devType + data.language}>
                {data.devType} {data.language}
            </h1>
        )
    )

    return (
        <div>
            {/* method on form submits data to browser */}
            <form onSubmit={handleDevData}>
                <input 
                    type="text" //type of input
                    name='devType' //uses the name saved within state
                    value={inputData.devType} //value to be saved in memory is from within state array.obj prop.
                    placeholder='enter text here'
                    onChange={handleInputData}//method used to id all data and allow it to be displayed.
                />
                <input 
                    type="text"
                    name='language'
                    value={inputData.language}
                    placeholder='enter text here'
                    onChange={handleInputData}
                />
                {/*placing array data into the browser from being mapped/mutated*/}
                {developer} {/*modified data stored within memory and browser.*/}
            </form>
        </div>
    )
}

//counter application; using inline functions.
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState} from 'react'

export default function Root() {
    const [count, setCount] = useSate(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(prevCount=> prevCount + 1)}>
                Increment
            </button>
            <button onClick={()=> setCount(prevCount=> prevCount - 1)}>
                Decrement
            </button>
        </div>
    )
}

//useState; managing more complex state(forms).
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React,{useState} from 'react'
export default function Root(){
    const [inputData, setInput] = useState({
        firstName:'',
        lastName:''
    })

    const [contactsData, setContacts] = useState([])


    //function that saves data and displays it to browser.
    function handleSubmitData(event){
        event.preventDefault()
        setContacts(
            prevContactsData=> (
                [...prevContactsData, inputData]
            )
        )
    }

    //function that live updates state text.
    function handleChangeData(event){
        const {name, value} = event.target
        /*
        works similar to 
        this.state = {
            on: true
        }
        handleToggle=()=>{
            this.setState(prevState=>{
                return this.state = {
                    prevState: !prevState.on
                }
            })
        }*/
        setInput(
            prevInput=> (
                {...prevInput, [name]: value}
            )
        )
    }


    const contacts = contactsData.map(
        contact=> (
            <h1 key={contact.firstName + contact.lastName}>
                {contact.firstName} {contact.lastName}
            </h1>
        )
    )

    return(
        <>
            <form onSubmit={handleSubmitData}>
                <input 
                    type="text" 
                    name='firsName'
                    value={inputData.firstName}
                    placeholder='first name'
                    onChange={handleChangeData}
                />
                <input 
                    type="text" 
                    name='lastName'
                    value={inputData.lastName}
                    placeholder='last name'
                    onChange={handleInputData}
                />
            </form>
            {/*actual data being to display.*/}
            {contacts}
        </>
    )
}




//useEffect
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React from 'react'
import ComponentA from './componentA'
export default function Root(){
    return (
        <div>
            <ComponentA/>
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

export default function ComponentA(){
    const [count, setCount] = useState(0)


    //can call useEffect twice with empty array to prevent new multiple intervals and re-renders.
    //needed to run only once.
    useEffect(() => {
        const effectId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)
        }, 1000)
        //ends interval; returned function acts as componentDidUnmount(){}/cleans up side-effect when component unmounts.
        return () => clearInterval(effectId)
    }, []) 

    
    useEffect(() => {
        setColor(randomColor())
    }, [count])

    return (
        <div>
            <h1 style={{color: color}}>
                {count}
            </h1>
        </div>
    )
}



/*
    useRef();
    The useRef() hook gives us a way 
    to retain values for the entire 
    lifespan of the component.

    useRef returns a mutable ref object 
    whose .current property is initialized 
    to the passed argument (initialValue). 
    The returned object will persist 
    for the full lifetime of the component.

    Essentially, useRef is like a “box” that 
    can hold a mutable value in its .current 
    property.
*/
//useRef example
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)

import React, {useState, useRef} from 'react'
import React from 'react'

export default function Root() {
    //initializing a todo as an indvidiual empty string state value.
    //method that activates/set the a new nexTodoValue state.
    const [nexTodoValue, setNewTodoValue] = useState('')

    //a state array that hold data with every render.
    //method that actiavates/sets the array on every render.
    const [todoList, setTodoList] = useState([])

    //reference hook to a DOM node in .current state containing mutable data/value.
    const inputRef = useRef(null)

    //method that allows mutable values to change when typing.
    function handleChange(event){

        /*
            to update name and value texts
            const {name, value} = event.target
            setNewTodoValue(prevTodo =>(
                [...prevTodo, [name]: value]
            )
        )
        */
        setNewTodoValue(event.target.value)
    }

    //function that posts todos to state array upon click.
    function addTodo(event){
        //prevent DOM event reload.
        event.preventDefault()
        //the method that manages state array todo list manages previous state.
        setTodoList(prevTodoList => [...prevTodoList, nexTodoValue])
        //reseting newTodoValue to an empty string.
        setNewTodoValue('')
        //allowing DOM node to maintain mutable value when in .current focus.
        inputRef.current.focus()
    }

    //creating a new/cloned array of todos array within state array and jsx element.
    const todos = todoList.map(todo=> 
        <p key={todo}>
            {todo}
        </p>
    )

    return (
        <div>
            <form>
                <input
                    ref={inputRef}
                    type="text"
                    name='todo' 
                    value={NewTodoValue}
                    onChage={handleChange}
                />
                <button onClick={addTodo}> 
                    Add Todo Item
                </button>
            </form>
            {todos}
        </div>
    )
}

/*
    useContext;
    useContext hook to refactor application logic.
*/
//'./themeContextProvider'/ logic file.
import React, { Component } from 'react'
const ThemeContext = React.createContext()
const {Provider, Consumer} = ThemeContext

export default class ThemeContextProvider extends Component {
    state = {
        theme:'dark'
    }

    toggleTheme=()=>{
        this.setState(prevState=>{
            return {
                prevState: theme === 'dark'?'light':'dark'
            }
        })
    }

    render() {
        const {theme} = this.state
        return (
            <div>
                <Provider
                        value={{
                            theme,
                            toggleTheme:this.toggleTheme
                        }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}
export {ThemeContextProvider, ThemeContext}


import React from 'react'
import ReactDOM from 'react-dom'
//named import
import {ThemeContextProvider} from './themeContextProvider'
ReactDOM.render(
    <ThemeContextProvider>
        <Root/>
    </ThemeContextProvider>,
        document.getElemenyById('root')
)

import React from 'react'
import Header from './header'
import Button from './button'
export default function Root() {
    return (
        <div>
            <Header/>
            <Button/>
        </div>
    )
}


//'./header'
import React, {useContext} from 'react'
import {ThemeContext} from './themeContextProvider'

export default function Header(){
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <header 
                className={`${theme}-theme`}>
                {theme === 'light' ? 'Light':'Dark'} Theme
            </header>
        </div>
    )
}

//'./button'
import React, {useContext} from 'react'
import {ThemeContext} from './themeContextProvider'

export default function Button(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button 
                //imported className theme prop
                className={`${theme}-theme`} 
                //imported eventListener toggle method prop that switches the theme.
                onClick={toggleTheme}>
                    Switch Theme
            </button>
        </div>
    )
}

/*
    context, no hook;
    create an application that toggles a theme.
*/

//'./themeContextProvider
import React,{Component} from 'react'
const {Provider, Consumer} = React.createContext()

export default class ThemeContextProvider extends Component{
    state = {
        theme:'dark'
    }

    toggleTheme =()=>{
        this.setState(prevTheme=>{
            return this.state = {
                theme: prevTheme.theme === 'dark'?'light':'dark'
            }
        })
    }

    render(){
        const {theme} = this.state
        return(
            <>
                <Provider value={{
                    theme,
                    toggleTheme:this.toggleTheme
                }}>
                    {this.props.children}
                </Provider>
            </>
        )
    }

}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}

//render file
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
//named exports go inside curly brackets
import {ThemeContextProvider} from './themeContextProvider'
ReactDOM.render(
    <ThemeContextProvider>
        <Root/>
    </ThemeContextProvider>,
    document.getElementById('root')
)


//'./header'
import React from 'react'
import {ThemeContextConsumer} from './themeContextProvider'

//render props pattern
export default function Header(props){
    return (
        <ThemeContextConsumer>
            {
                context=>(
                    <header className={`${context.theme}-theme`}>
                        <h1>
                            {context.theme === 'light'?'Light':'Dark'}
                            Theme
                        </h1>
                    </header>
                )
            }
        </ThemeContextConsumer>
    )
}

//complete without looking at notes.
//'./button' component
import React from 'react'
import {ThemeContextConsumer} from './themeContextProvider'

export default function Button(props){
    return (
        <ThemeContextConsumer>
            {
                context=>(
                    <button 
                        onClick={context.toggleTheme} 
                        className={`${context.theme}-theme`}>
                        Switch Theme
                    </button>
                )
            }
        </ThemeContextConsumer>
    )
}


/*
    create an application that updates and submits user information 
    to the browser.
*/
import React,{Component} from 'react'
const {Provider, Consumer} = React.createContext()

export default class ContextProvider extends Component{
    state = {
        userName:'',
        newUserName:'user'
    }

    //method that displays userName to browser
    handleUserName=(userName)=>{
        this.setState({userName})
    }

    //method that changes text
    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState(
            {[name]:value}
        )
    }

    render() {
        const {userName, newUserName} = this.state
        return (
            <div>
                <Provider value={{
                    userName,
                    newUserName,
                    handleUserName:this.handleUserName,
                    handleChangeText:this.handleChangeText
                }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}

//'render file.'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextProvider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
        document.getElementById('root')
)

//'./root file'
import React from 'react'
import {ContextConsumer} from './contextProvider'

export default function Root(){

    return(
        <ContextConsumer>
            {
                (context) =>(
                    <main>
                        <h1>Greetings, {context.userName}</h1>
                        <input
                            type='text'
                            name='newUserName'
                            value={context.newUserName}
                            placeholder='enter username'
                            onChange={context.handleChangeText}
                        />
                        <button onClick={()=> context.handleUserName(context.newUserName)}>
                            Click to submit
                        </button>
                    </main>
                )
            }
        </ContextConsumer>
    )
}



/*
    useContext use hook;
    create an application that submits user information 
    to the browser.
*/

//'./contextProvider'
import React, {Component} from 'react'
const Context = React.createContext()
const {Provider, Consumer} = Context

export default class ContextProvider extends Component{
    state = {
        name:'',
        input:''
    }

    handleUpdate=(name)=>{
        this.setState({
            name
        })
    }

    handleChangeText=(event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    render(){
        const {name, input} = this.state
        return(
            <Provider value={{
                name,
                input,
                handleUpdate: this.handleUpdate,
                handleChange: this.handleChangeText
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ContextProvider, Context}

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import {ContextProvider} from './contextProvider'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
        document.getElementById('root')
)

import React, {useContext} from 'react'
import {Context} from './contextProvider'

export default function Root(){
    const {name, input, handleUpdate, handleChangeText} = useContext(Context)
    return (
        <div>
            <h1>Greetings, {name}</h1>
            <input
                type='text'
                name='input'
                value={input}
                placeholder='enter text here'
                onChange={handleChangeText}
            />
            <button onClick={()=> handleUpdate(input)}>
                Click to submit
            </button>
        </div>
    )
}




/*
    test;
    parent; contextProvider
    child; useContext() hook;
    create an application that toggles a name.
*/
import React,{Component} from 'react'
const Context = React.createContext()
const {Provider, Consumer} = Context

export default class ContextProvider extends Conponent{
    state = {
        username: '',
        input:''
    }

    handleUpdate=(username)=>{
        this.setState(prevState=>{
            return {
                username
            }
        })
    }

    handleChangeText = (event)=> {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        const {username, input} = this.state
        return(
            <Provider value={{
                username, 
                input,
                handleUpdate: this.handleUpdate,
                handleChangeText: this.handleChangeText
            }}>
            </Provider>
        )
    }
}
export {ContextProvider, Context}

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
ReactDOM.render(
    <ContextProvider>
        <Root/>
    </ContextProvider>,
    document.getElementById('root')
)


import React, {useContext} from 'react'
import {Context} from './contextPrivider'

export default function Root(){
    const {username, input, handleUpdate, handleChangeText} = useContext(Context)
    return(
        <>
            {/**/}
            <header>
                <h1>Greetings, {username}</h1>
            </header>
            <input
                type= 'text'
                name='input'
                value={input}
                onChange={handleChangeText}
            />
            <button onClick={()=> handleUpdate(input)}>
                Click to sumit
            </button>
        </>
    )
}


/*
    useState()
    single component application that toggles username 
    refactored ContextProvider component to use useState() hook.
*/
import React, {useState} from 'react'

























































































































































































































































