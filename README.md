# calculator
2 operand calculator for arithmetic

Test driven development. Add features and handle edge cases one
  at a time. The program is expected to fail for most tests
  outside the range of the most recently passed test.

1. Display buttons, including clear, backspace, all 10 digits,
     4 arithmetic operators, equals, and decimal. Passed
2. Show 0 in the display bar at start. Passed
3. All buttons should have a unique response to "click." Passed.
     Note: Output for this test was the button name only.
4. Numeric input (not including decimal) should display up
     to 16 characters (may reduce for final). Starting zero stays
     zero for input of zero. Starting zero is replaced by other
     digits. Additional digits are added to end. Display of
     commas or numbers with decimal not yet added. Passed
5. Program includes method to convert string to number. Fail
6. Program includes method to convert number to string. Passed (toString())
7. Program includes method (for backspace) to delete last digit. Passed
       (text.slice(0,-1))
7a. Backspace key deletes last digit. No change if 0 is displayed. Passed
8. Entry of "1 + 1 =" results in output of 2. Fail
9. Entry of "2 - 1 =" results in output of 1. Fail
10. Entry of "1 - 2 =" results in output of -1. Fail
11. Addition of very large numbers results in "overflow" in display. Fail
12. Entry of "2 x 3" results in output of 6. Fail
13. Multiplication of very large numbers results in "overflow." Fail
14. Entry of "6 / 2" results in 3. Fail
15. Entry of "6 / 0" results in "Error" (short message that fits). Fail
16. Program includes method to truncate display for screen
       (for division). Fail
17. Entry of "7 / 3" results in 1.33333333333 fitting in display. Fail
18. Checks without entering first number, starting from initial 0:
18a. "+ 1" displays 1. Fail
18b. "- 1" displays -1. Fail
18c. "x 2" displays 0. Fail
18d. "/ 2" displays 0. Fail
19. Add functionality of operators to act on last result. Starting from
     display of 2.
19a. "+ 1" displays 3. Fail
19b. "- 1" displays 1. Fail
19c. "x 2" display 4. Fail
19d. "/ 2" displays 1. Fail
20. Program includes method to display numbers over 999 with comma. Fail
21. Entry of "1234" displays 1,234. Fail
22. Entry of "1234567" displays 1,234,567. Fail
23. Entry of decimal displays in output area. Fail
24. Second entry of decimal is ignored. Fail
25. Entry of operators second time in a row is ignored. Fail
26. Entry of equals without two operands and operator is ignored. Fail