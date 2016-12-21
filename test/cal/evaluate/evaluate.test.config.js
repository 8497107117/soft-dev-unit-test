const basicPlusTest = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3]], expect: 5}; 
const basicSubTest = {actualParameter: [['val', 8], ['oper', 'sub'], ['val', 3]], expect: 5}; 
const basicMulTest = {actualParameter: [['val', 2], ['oper', 'mul'], ['val', 3]], expect: 6}; 
const basicDivTest = {actualParameter: [['val', 15], ['oper', 'div'], ['val', 3]], expect: 5}; 
const basicModTest = {actualParameter: [['val', 8], ['oper', 'mod'], ['val', 3]], expect: 2}; 

const advancedTest1 = {actualParameter: [['val', 8], ['oper', 'add'], ['val', 3], ['oper', 'sub'], ['val', 6]], expect: 5}; 
const advancedTest2 = {actualParameter: [['val', 8], ['oper', 'mul'], ['val', 3], ['oper', 'add'], ['val', 4]], expect: 28}; 
const advancedTest3 = {actualParameter: [['val', 6], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 4]], expect: 4}; 
const advancedTest4 = {actualParameter: [['val', 15], ['oper', 'mod'], ['val', 4], ['oper', 'mul'], ['val', 3]], expect: 9}; 
const advancedTest5 = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', 4], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', 7], ['oper', 'mod'], ['val', 2]], expect: 11}; 

const basicPlusTestNeg = {actualParameter: [['val', 2], ['oper', 'add'], ['val', -3]], expect: -1}; 
const basicSubTestNeg = {actualParameter: [['val', 8], ['oper', 'sub'], ['val', -3]], expect: 11}; 
const basicMulTestNeg = {actualParameter: [['val', 2], ['oper', 'mul'], ['val', -3]], expect: -6}; 
const basicDivTestNeg = {actualParameter: [['val', 15], ['oper', 'div'], ['val', -3]], expect: -5}; 
const basicModTestNeg = {actualParameter: [['val', 8], ['oper', 'mod'], ['val', -3]], expect: 2}; 

const advancedTest1Neg = {actualParameter: [['val', 8], ['oper', 'add'], ['val', -3], ['oper', 'sub'], ['val', -6]], expect: 11}; 
const advancedTest2Neg = {actualParameter: [['val', -8], ['oper', 'mul'], ['val', -3], ['oper', 'add'], ['val', -4]], expect: 20}; 
const advancedTest3Neg = {actualParameter: [['val', 6], ['oper', 'sub'], ['val', -8], ['oper', 'div'], ['val', 4]], expect: 8}; 
const advancedTest4Neg = {actualParameter: [['val', 15], ['oper', 'mod'], ['val', -4], ['oper', 'mul'], ['val', -3]], expect: -9}; 
const advancedTest5Neg = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', -4], ['oper', 'sub'], ['val', -8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', -7], ['oper', 'mod'], ['val', -2]], expect: -7}; 
