/*
DATA STRUCTURES;

- coding & software engineering; manipulating data to accomplish a task.

- what are data structures?; a way to structure, organize and manage data.

- data structures; collections of data values, relationships amongst them
functions or operations that can be applied to the data.

- we use ds everyday; ex1 - emails, receive and send emails usually in a vertical
directions, can filter certain emails. Concept of data structures.

- ds types; arrays, trees, link-lists, graph, hash tables etc; 
collection of data values.


COMPLEXITY ANALYSIS;

- The process of determining how efficient an algorithm is. Complexity 
analysis usually involves finding both the time and space complexity 
of an algorithm.

- Foundational knowledge of understanding ds & algorithms.

- problems can have multiple solutions; each solutions are not equal,
some solutions are better than others.

- WHAT IS A BETTER SOLUTION?; Better complexity makes a better solution.

- COMPLEXITY; space-time complexity

- time complexity; measure of how fast a solution runs
space; how much memory or space a solutions takes up.

- faster a solution runs, better time complexity.
less memory/space a solutions takes, better the space complexity.

- compare s&t complexity to find the best solution.

- complexity analysis - find complexity of a solution.

- functions/operations/relationships on a ds have different s&t complexity ramifications.

- different ds have different s&t complexities for the functions and 
operations that they support.

- some ds are better to use to find a solution compared to 
others.




MEMORY(how to measure space/memory complexity)

- The amount of memory stored in a computer is bounded/limited, 
memory slots are limited making it important to limit the 
amount of memory an algorithm takes up.

- ds are bedrock for completing code interview problems.

- space & time complexity measure efficiency of algorithms.

- Memory; a way to store data in a bound(finite numbered memory slot canvas)

- fewer slots taken up, the better space complexity a solution has.

- memory made up of bits; 0s and 1s are bits, 8(0s and 1s) bits are bytes.

- binary representations are set in memory slots

- not many combos with just 1 byte, we need higher number of bits to 
represent a higher data value. ex; 32 bit or 64 bit.

- 32 bit integer is represented by 4 bytes,
64 bit integer is represented by 8 bytes.

- Fixed width integers;

0 = 00000000 00000000 00000000 00000000 = 32 bit integers/4 bytes
1 = 00000000 00000000 00000000 0000000 00000000 00000000 00000000 00000001 = 64 bit integers/ 8 bytes

- memory is the foundational layer of computing 

- regardless of how large an integer is, its fixed-width-integer 
representation is formed by a constant number of bits.

- regardless of how large a integer is, an operation 
performed on its fixed-width-integer representation 
consists of a constant number of bit manipulations
since the integer is made up of a constant number of
bits.

- The larger the bits/bytes to represent a number, 
the larger the data type will be.

- bytes in memory can point to other bytes in memory,
so as to store references to other data.

- The amount of memory stored in a computer is bounded, 
making it important to limit the amount of memory an algorithm
takes up.

BIG O NOTATION;

- Notation used to describe the time and space/memory complexity and 
efficiency of an algorithm in the worst case scenario; being that we are always 
trying to improve strategy and solution.

- worst case; we need an optimal solution to when things go bad

- time complexity; 
measure of algorithm's speed as size of input increases.

- space complexity; 
measure of algorithm's auxiliary memory usage as size of input increases.

- O(1); CONSTANT time complexity; variable (n) name given to the size of the input.
as input (n)length increases, time remains the same. Not very affected.

- O(n); LINEAR time complexity; as size (n) input grows speed increases linearly 
when traversing through all (n)length values that exist or are added. need to complete 
as many iterations needed as there are (n)length values.

- O(n^2); QUADRATIC time complexity; represents an algorithm whose 
performance is directly proportional to the squared size of the (n)input data set.
arrayNLength = [1, 2, 3, 4, 5]; perform as many iterations on each element 
as there are elements; total of 25 iterations.






Mathematical Expression; Asymptotic Analysis; 

- Where Big O values come from;
study behavior of function(arrayN) as arrayN 
input length grows towards infinity.


O(1) time complexity expressed as; 

Based on time performance, # of operations;
(Based on space performance, amount of memory)

speed behavior of algorithm performs 
in CONSTANT time as input increases towards to infinity.

[ can use set amount of elementary operations on the input of the array
but will remain at constant time O(1) ];

function1(arrayNLength) => int + a[0]; looping and adding an integer to each 
indexed value in an array.



O(n) time complexity expressed as;

Based on time performance, # of operations;
(Based on space performance, amount of memory)

speed behavior of algorithm performs
in LINEAR time as input(n) grows closer to
or increases towards infinity. 

function2(arrayNLength) => sum(arrayNLength);
 Needing to traverse through all
(arrayNLength)length input values that exist or are added. Iterating
through an array as many times as there are (n)length input values.


O(n^2) time complexity expressed as;

Based on time performance, # of operations;
(Based on space performance, amount of memory)

speed behavior of algorithm performs
in QUADRATIC time as input(n) increases towards infinity.
Fc(arrayLength) => pair(arrayLength) [1, 2, 3]; 
inner loop completing n iterations for every n iteration outer loop makes
inner loop makes arraylength iterations for every single n outer loop
iteration.

time complexity, depending on the # of algorithms built into 
a hybrid algorithm. 
when dealing with constants, constant factors do not matter
so the time complexity will remain constant.

fd(arrayLength) = [
    fa(arrayLength) => 1 + arrayLength[0]; # of elementary operations,
    fb(arrayLength) => sum(arrayLength); traversing/iterating through all/added values,
    fc(arrayLength) => pair(arrayLength); # of steps it takes to complete
    a task is square of n. 
]

O(n^2) + O(n) + O(1) = fd(arrayLength) can become some sort of combo of all three algorithms.
O(n^2 + n + 1) = constants O(n), O(1) become insignificant; no need to add.
O(n^2) = simplification.

- ex; O(m + n); keep m and n because they are both 
different arrays/variables.


LOGARITHM complexity analysis; O(log(n))

- Mathematics of log(n); 

log-base2 (x) = y, iif 2^y = x
log(n) = y, iif 2^n = x
as (n) input length increases, log(n) exponent/operations
only increases by a small amount.
ex; sorting through an array with (n)input length.


Data Structure; Arrays

//how os memory views individual integer data.
0 = 00000000 00000000 00000000 00000000 = 32 bit integers/4 bytes
1 = 00000000 00000000 00000000 0000000 00000000 00000000 00000000 00000001 = 64 bit integers/ 8 bytes

- The most fundamental ds in algorithms
and data structures.

- how arrays are stored in memory;
within memory slots; bit data is held 
in specific number of slots.

- Types of arrays; 
Static & Dynamic arrays.

Static array; fixed number of memory slots, specified length.

specify length of an array and allocated memory 
slots & do not change; common languages; python, js

a. common operations; access elements in an array at a given index.
array = [1, 2, 3]
array[1] = 3; finding an indexed element = O(1)constant time/instant,
O(1) constant space/instant, not using up any more space slots.

a. operation; OS finds beginning of array memory address, 
counts bytes, ids indexed element, multiplies the 0-indexed
element and the amount of bytes needed.
array = [1, 2, 3] operation => array[2]; 2 x 8  = finds indexed element 
at 16th consecutive memory slot = 3 in array.


b. common operation; overwrite/set an element at an index;
array = [1, 2, 3]
array[0] = 5; 
O(1) constant time; operation is independent of array length.
O(1) constant space instant; operation not using up any more 
memory slots, remains fixed as n increases.

c. common operation; init/initialize an array, first stores it in memory.
initial length; array.length() = n. 
O(8 x n)/O(n) linear time/operation on elements grow linearly as n grows.
O(8 x n)/O(n) linear space/operation allocates memory linearly as n grows.


d. common operation; simple traversing/loop through an array.
O(n) linear time/looping over every element operation, 
as n grows towards infinity.
O(1) space/not using any other memory.

e. common operation; copy/map an array.
O(n) time/operation loops over every array element.
O(n) space/operation allocates the same amount of memory.

f. common operation; inserting a value in an array, beginning, middle, end.
array = [1, 2, 3] insert 5 any place in the array.
copies array then allocates a new set of memory slots plus 1.

within static arrays fixed;
O(n) linear time/operation is performed on all elements as n increases to infinity.
O(1) constant space/operation allocates a new set of memory slots which is independent
of the length/instant.

within dynamic arrays;
change in size, allows faster insertions at end of array.
may allocate double the amount of space needed.

static array; array = [1, 2, 3]
dynamic array; array = [1, 2, 3,_ , _, _]
O(1) time/operation perform many constant time insertions; amortized analysis.
O(1) space/operation automatically allocates 
linear operations become insignificant.

g. common operations; pop()/remove an element at the end of array.
O(1) time/instant/operation happened once on an element.
O(1) space/instant/operation frees up space in memory.
O(n) time/space to pop()/remove and element from the middle of an array.
array == queue; when trying to remove an element from the beginning of an array.
O(n) time/space to add an element in the middle of an array.


















dynamic array; 


- common array operation;

time & space complexity; 
get an indexed element from an array; instant => O(1) constant space time.
fixed width integer; never changes; never changes.

set/overwrite an element in an array; instant => O(1) constant space time.
fixed width integer; never changes; never changes.
not changing the amount of data we take up.

initializing/first storing an array;
initial length(n) memory slots 8xn, O(8 x n) or O(n) space time
memory is being built up linearly.

traverse/loop through an array;
moves linearly with possible operations O(n) time, 
O(1) constant space because not using additional memory.

copy an array;
traversing an array O(n) 
then creating a new array which is 
an additional operation.

inserting/adding a value in an array.
O(n) time; adding a value which is 1 operation, 
O(1) space; os frees up space then creates a new array
which is linear.

insertion/adding a value to an array
exception; dynamic array; array that can change
in size. 
allows faster data/value insertions

OS allocates more space which takes O(n)
then when numbers are added it will
take O(1) constant since space is already available.

pop array index from the end of array;
O(1) space & time complexity.

Linked Lists; similar to arrays
read from left to right.

Implemented by connection of numbers 
stored at any slot in memory that
use nexts. 

nexts; point to other memory slots
by referring memory address.

node + next/memory address => node in memory slot.
used because node slots may be taken by another element.

space/time complexity; linked lists

common operations; getting/setting an element in memory.
head/node - beginning of list.

get;
traverse through the whole linked-list/O(i) => time;
traversing through all elements to find ith element.
set;
traverse through the whole linked-list & swapping out an element/O(i) => time;
no more space is being allocated/O(1) => space.

common operations; initializing a linked list
allocating memory & next operation speed grows 
as n grows O(2 * n)/O(n) linearly in time.
allocating memory grows linear as n grows/O(n) linearly in memory.

common operations; copying a linked list
traverse then allocating memory; O(2 * n)/O(n) linear
time of operation grows linearly as n grows towards infinity.
allocation of memory continues to grows O(n) linearly as n grows
towards infinity.

common operations; insertion/deleting an element from 
a linked list.
add element to beginning of the link-list operation/O(1) time
one operation independent of linked-list(n) length.

add element to end/tail of the linked-list with reference to tail O(1) time.
add element to end/tail of the linked-list with no reference to tail O(n)linear time,
need to traverse through the whole linked-list and add more space. O(i) time/O(n)space grows linearly.

common operations; traverse through a linked list
operation grows linearly in time as linked-list(n) grows/O(n) linear.
traverse through an array remains constant, no added 
memory to linked-list(n) length/O(1) constant memory.


singly linked-list; one link between two values.
[head/3] => next => [1] => next => [4] => next => [2] => [null/tail node]
[head/3] => next => [1] => next => [4] => next => [2] (no tail node)

doubly linked-list; every node has two next/pointer(s).
[null] <= [3] prev, next =>(null, 1), [1]  prev, next =>(3, 4), [4] prev, next =>(1, 2), [2]  prev, next => =>(4, null) => [null]


Hash Table; ds where we can store keys and value.
key value store.
js - object literal. 
can access a value given a key.

var hashTable = {
    value:'key',
    foo: 1,
    bar: 2,
    baz: 3
}

- constant time operations O(1)
inserting
deleting
search

- hash table keys can be strings.
- hash tables are built on arrays.
- 


































*/

/*
Coding Interview Prep Webinar 3/8/21

- Minimum viable coding interview prep/approach for #FAANG + M offers

- 1 Free Mock interview at end of course.

- best coding language for interview?; 
 
 Do I know multiple languages well enough?
 No? Use language I know; JS/ES6

"You dont wear new shoes on race day."

Yes? Use the one I am most comfortable with.
Focus on that one language.

- Take interview prep to the next level.

- Learning to prepare for coding interviews
strategically.

- Mistakes; 

studying everything,
relaying on natural ability, 
studying too much.

- Minimum Viable Interview Prep;

what is interviewer looking for?

- clearly explain thinking on technical problem
- Has good overall problem-solving skills
- capable of discussing technical detail of past projects
- succeeds at finding a solutions to technical problem
- knows one or more programming languages
- * ultimately, they want to make sure you can do the job *

Common Mistakes; 

1. try and study everything/trying to be too perfect
2. they just focus on memorizing solutions
3. trying to cram everything in marathon sessions

Solutions to mistakes; 

1. do not need to be fluent in a language
just need to communicate problem solving that leads 
to solution

2. focus on the right things/ narrow down 
to the right things. 

strategic understanding and problem solving,
not memorizing solutions.

study consistently; study less everyday
to retain more information.

* spaced repetition *
- study 1 to 2hrs a day.




- goal; study strategically
- goal; minimum work to pass interview
- goal; land a job









 */

