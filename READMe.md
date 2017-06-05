A betting host
========================
A small command line utility for generating betting data from input data.

Running the Program
-------------------

Running the Automated Tests
---------------------------
```
1. `npm install` install 'Tabcorp' dependent package
2. `npm test` make sure tesing pass
3. `npm start` see the result output in the console
```

Assumptions Made When Developing the Solution
---------------------------------------------

- All input should be The format of bets is Bet:<product>:<selections>:<stake>. as per the sample files.
- No error handle
- No exception catch

Anatomy
---------------------------------------------

W:  12 punters bet. There're 3 punters who bet on No.2 horse, with amount of 4, 8 and 98 respectively.
    The whole bet amount of all 12 punters is 338. After commision drawn by Tabcorp(15%), there're 287 left. 
    So the 3 punters will split the bonus as per their propportion by 287/(4+8+98) =2.61

P:  12 punters bet. There're 9 punters who bet correctly on the top 3. These are :
    ```
        1. 31+40+18=89
        2. 89+16+17=179
        3. 28+82+39=149
    ```
    The whole bet amount of all 12 punters is 646. After commision drawn by Tabcorp(12%), 
    There're 568.48 left. That bonus will be split into 3, each will have 189.5 
	
Punters bet on place 2: 189.50/179 = 1.06	
Punters bet on place 3: 189.50/149 = 1.27
Punters bet on place 1: 189.50/89 = 2.13

E: 12 punters bet.
	```
        1. 98+61+47=206
        2. 98+82+27+5+61+28+25+81+47+93+51=611
        3. 611 * 0.18 = 110 
		4. 611 - 110 = 501
		5. 501/206 = 2.43
    ```
	 The whole bet amount of all 12 punters is 611. After commision drawn by Tabcorp(18%), 
    There're 501 left. Result will be 2.43
	


Sample Input Format
----------------

Bet:W:1:3
Bet:W:2:4
Bet:W:3:5
Bet:W:4:5
Bet:W:1:16
Bet:W:2:8
Bet:W:3:22
Bet:W:4:57
Bet:W:1:42
Bet:W:2:98
Bet:W:3:63
Bet:W:4:15
Bet:P:1:31
Bet:P:2:89
Bet:P:3:28
Bet:P:4:72
Bet:P:1:40
Bet:P:2:16
Bet:P:3:82
Bet:P:4:52
Bet:P:1:18
Bet:P:2:74
Bet:P:3:39
Bet:P:4:105
Bet:E:1,2:13
Bet:E:2,3:98
Bet:E:1,3:82
Bet:E:3,2:27
Bet:E:1,2:5
Bet:E:2,3:61
Bet:E:1,3:28
Bet:E:3,2:25
Bet:E:1,2:81
Bet:E:2,3:47
Bet:E:1,3:93
Bet:E:3,2:51
Result:2:3:1 

Sample Output Format
-----------------

Win:2:$2.61
Place:2:$1.06
Place:3:$1.27
Place:1:$2.13 