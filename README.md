# Softdev hw unit test

	Softdev 2016 in NCTU hw : unit test for calculator 

# Install library

- Install NodeJS
	- ``Linux : apt-get install node``
	- ``Mac : brew install node``
- Install
	- ``npm install``

# What it test?
	Divide source code into several files
	
- Source code : calc.js
	- prototype : ``Array.prototype.back`` in test/cal/prototype  
		
		3 types of array
		- ordinary array : ``[0, 1, 2, 3]``.  
		array.back() : 3
		- holes array : ``[0, undefined, 2, undefined]``.  
		array.back() : undefined
		- null array : ``[]``.  
		array.back() : undefined

	- function : ``evaluate`` in test/cal/evaluate  
		
		Since class Calc just store base 10 in the class, just need to test base 10.
		- without negative number
			- basic plus test : ``2 + 3 = 5``
			- basic sub test : ``8 - 3 = 5``
			- basic mul test : ``2 * 3 = 6``
			- basic div test : ``15 / 3 = 5``
			- basic mod test : ``8 % 3 = 2``
			- advanced test1 : ``8 + 3 - 6 = 5``
			- advanced test2 : ``8 * 3 + 4 = 28``
			- advanced test3 : ``6 - 8 / 4 = 4``
			- advanced test4 : ``15 % 4 * 3 = 9``
			- advanced test5 : ``2 + 3 * 4 - 8 / 2 + 7 % 2 = 11``
		- with negative number
			- basic plus test : ``2 + -3 = -1``
			- basic sub test : ``8 - -3 = 11``
			- basic mul test : ``2 * -3 = -6``
			- basic div test : ``15 / -3 = -5``
			- basic mod test : ``8 % -3 = 2``
			- advanced test1 : ``8 + -3 - -6 = 11``
			- advanced test2 : ``-8 * -3 + -4 = 20``
			- advanced test3 : ``6 - -8 / 4 = 8``
			- advanced test4 : ``15 % -4 * -3 = -9``
			- advanced test5 : ``2 + 3 * -4 - -8 / 2 + -7 % -2 = -7``

	- function : ``isVal & isOper`` in test/cal/checkType  
		
		2 parameter : val = ``['val', 1]``, oper = ``['oper', 'add']``
		- ``isVal(val) = true``
		- ``isVal(oper) = false``
		- ``isOper(val) = false``
		- ``isOper(oper) = true``

	- class : ``Calc`` in test/cal/calc
		- function : ``reset``  
		execute ``reset(base)`` & ``reset()`` for each base.  
		After each execution, check  
			- ``base = base || this.base``
			- ``value = 0``
			- ``buffer = ['val', 0]``
			- ``calc = false``
		- function : ``toString``  
		Since class Calc just store base 10 in the class, just need to test base 10 changing to other bases.
			- ``17``
				- dec : ``17``
				- bin : ``10001``
				- oct : ``21``
				- hex : ``11``
			- ``-17``
				- dec : ``-17``
				- bin : ``1111111111101111``
				- oct : ``177757``
				- hex : ``ffef``
		- function : ``exec``  
		Since class Calc just store base 10 in the class, just need to test base 10.
			- command
				- c  
				execute exec('c') then check
					- ``value = 0``
					- ``buffer = ['val', 0]``
					- ``calc = false``
				- ce
					- ``17 + 18`` and ``exec('ce')`` then ``17 + 0``
					- ``17 +`` and ``exec('ce')`` then ``0``
				- bs
					- ``17`` and ``exec('bs')`` then ``1``
					- ``17 +`` and ``exec('bs')`` then ``17 + 1`` since 17 => 1
				- neg
					- ``17`` and ``exec('neg')`` then ``-17``
					- ``17 +`` and ``exec('neg')`` then ``17 + -17``
				- calc
					- ``17 + 18`` and ``exec('calc')`` then ``35`` and ``calc = true``
					- ``17 +`` and ``exec('calc')`` then ``34`` and ``calc = true``
			- val
				- ``1`` and click ``exec('val-7')`` then ``17``
				- ``17 +`` and click ``exec('val-1')`` then ``17 + 1``
			- oper
				- ``17`` and click ``exec('oper-add')`` then ``17 +``
				- ``17 +`` and click ``exec('oper-sub')`` then ``17 -``

- Source code : main.js
	- function : ``render`` in test/main/render  
	For each base, there are 3 states : ``initial``, ``during input``, ``calculated``.
	For each state, check
		- ``$('.calc').hasClass('???')``, ``???`` is according to ``base``
		- ``$('.???.button').hasClass('disabled')``, ``???`` is according to ``base``
		- ``$('.display .value').html()``
		- ``$('.base.hex').html()``
		- ``$('.base.dec').html()``
		- ``$('.base.oct').html()``
		- ``$('.base.bin').html()``
		
	- DOM & button trigger : ``DOM`` in test/main/dom  
	Check the help information dom
		- Opend by help button, closed by help button
			- $('.help-btn').trigger('click')
			- check ``$('.help-wrapper').css('display').indexOf('none') <= -1``
			- $('.help-btn').trigger('click')
			- check ``$('.help-wrapper').css('display').indexOf('none') > -1``
		- Opend by help button, closed by help wrapper
			- $('.help-btn').trigger('click')
			- check ``$('.help-wrapper').css('display').indexOf('none') <= -1``
			- $('.help-wrapper').trigger('click')
			- check ``$('.help-wrapper').css('display').indexOf('none') > -1``

# The portion can be runned on NodeJS
- CheckType

# Coverage  

	Even I have setted the blanket, I can't resolve the error of blanket loading the data-cover file timeout.
	So I can't check the coverage. But I think this test has almost 70~80% coverage on the whole source code.

# The bug unit test found

- the sourece code implement 1's complement, not 2's complement.
- while ``17 +`` and click ``ce`` should be ``0``. But it become ``17 0``.  
it doesn't clear the buffer correctly.
