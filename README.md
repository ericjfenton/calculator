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
5. Program includes method to convert string to number. Passed
     (preceed with +, doesn't work with commas, works with
       negatives and decimals)
6. Program includes method to convert number to string. Passed (toString())
7. Program includes method (for backspace) to delete last digit. Passed
       (text.slice(0,-1))
7a. Backspace key deletes last digit. No change if 0 is displayed. Passed
8. Entry of "1 + 1 =" results in output of 2. Passed
9. Entry of "2 - 1 =" results in output of 1. Passed
10. Entry of "1 - 2 =" results in output of -1. Passed
11. Addition of very large numbers results in "overflow" in display. Passed
12. Entry of "2 x 3" results in output of 6. Fail
13. Multiplication of very large numbers results in "overflow." Passed
14. Entry of "6 / 2" results in 3. Passed
15. Entry of "6 / 0" results in "Error" (short message that fits). Passed
16. Program includes method to truncate display for screen
       (for division). Passed (answer.slice(0,16))
17. Entry of "7 / 3" results in 2.33333333333 fitting in display. Passed
18. Checks without entering first number, starting from initial 0:
18a. "+ 1" displays 1. Pass
18b. "- 1" displays -1. Pass
18c. "x 2" displays 0. Pass
18d. "/ 2" displays 0. Pass
Note for 19: check status of basic variables after = or second number
19. Add functionality of operators to act on last result. Starting from
     display of 2. Tests work for string of operations and after "="
19a. "+ 1" displays 3. Pass
19b. "- 1" displays 1. Pass
19c. "x 2" display 4. Pass
19d. "/ 2" displays 1. Pass
20. Program includes method to display numbers over 999 with comma. Omitted
      (toLocaleString() works somewhat but side effects were tricky)
21. Entry of "1234" displays 1,234. Fail
22. Entry of "1234567" displays 1,234,567. Fail
23. Entry of decimal displays in output area. Pass
24. Second entry of decimal is ignored. Pass
25. Entry of operators second time in a row is ignored. Passed
26. Entry of equals without two operands and operator is ignored. Pass
27. Retain trailing zeroes after decimal when converting to comma format. Fail