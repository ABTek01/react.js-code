/*
  Data Structures & Algorithms
  node; ds that contains data and that may use
  a 'pointer' to link to the next node(s)
*/


//orphaned node; node with no links/pointers
class Node{
    constructor(data){
      this.data = data,
      this.next = null
    }
  }
  
  let firstNode = new Node('orphaned node')
  console.log(firstNode.data)
  console.log(firstNode.next)
  //always export node.
  module.export = Node
  
  /*
    Node Methods: 'Set Next Node';
    we want to allow the 'next node' to be 
    updated so it can be traversed and used 
    in more complex data structures. For this, 
    we will use a setter to modify this.next node property.
  */
  
  class NewNode{
    constructor(data){
      this.data = data,
      this.next = null
    }
    setNextNode(node){
      this.next = node
    }
  }
  firstNode = new NewNode('first node')//original data returned
  
  //updated data returned using built in method
  let secondNode = new NewNode('second node')

  firstNode.setNextNode(secondNode)
  console.log(firstNode)
  
  let thirdNode = new NewNode('third node')

  secondNode.setNextNode(thirdNode)
  console.log(secondNode)
  
  let fourthNode = new NewNode('fourth node')

  thirdNode.setNextNode(fourthNode)
  console.log(thirdNode)
  
  //establishing the next node.
  let fifthNode = new NewNode('fifth node')

  //setting the next node.
  fourthNode.setNextNode(fifthNode)
  console.log(fourthNode)
  
  /*
    Set Next Node Validation
  
    We arbitrarily set our next node to any argument that gets passed in. 
    This can be problematic. Imagine if the next node accidentally gets set to 
    a different data type, like a string. We run the risk of mistakenly confusing the string for a node, 
    and we would have to build out special support to avoid traversing anything that is not a node.
  
    To prevent these unnecessary complications, let’s add in a check 
    that only allows arguments that are instanceof nodes or null. We want 
    to allow null values as an argument 
    in the event that we want to break the link between a node and its next node.
  */
  
  class NodeValidation{
    constructor(data){
      this.data = data,
      this.next = null
    }
    setNextNode(node){
      if(node instanceof NodeValidation || node === null){
        this.next = node
      }else{
        console.log('404 error, node needs to evaluate to null')
      }
    }
  }
  
  firstNode = new NodeValidation('next node validation')
  firstNode.setNextNode(5)
  console.log(firstNode)
  
  firstNode.setNextNode(null)
  console.log(firstNode)
  
  
  /*
    Getting next node;
  
    We could continue accessing the next node 
    property directly, like how we have been 
    doing so far. However, if we ever 
    want it to be given in a special way, 
    we would want to use a getter to handle 
    the preprocessing.
  */
  
  class AccessNextNode{
    constructor(data){
      this.data = data,
      this.next = null
    }
  
    setNextNode(node){
      if(node instanceof Node || node === null){
        this.next = node
      }else{
        console.log('error; node evaluates to set value.')
      }
    }
  
    getNextNode(){
      return this.next
    }
  }
  
let node0 = new AccessNextNode('next node accessed')



