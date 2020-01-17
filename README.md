# Salary committee

This is a lottery system to define people for the salary committee on the basis of the defined criterias.

## What's that exactly?

We at [farbenmeer](https://farbenmeer.de/) decided to use a random picked committee to calculate the possible salarys for each colleague and to decide if the desired salary of one person is fair.

This tool is responsible for the random pick of those persons. To guarantee the diversity of the committee, we implemented a criteria system. You can decide the minimum amount of male and female persons also as the minimum amount of people who worked longer than a year in the company.

## Criteria


| Name              | Type          | Default | Description                           |
| ----------------- | ------------- | -----   | ------------------------------------| 
| male              | number        | 1       | Minimum male people in the committee |
| female            | number        | 1       | Minimum female people in the committee |
| longTermColleague | number        | 1       | Minimum long term people in the committee (more than 1 year) |

## Data / colleagues

Rename `colleagues.sample.json` to `colleagues.js` and replace the example data with your colleagues. 

## Start

To start the lottery and get the colleagues for the committee, type following in the console:

```
npm start
```

## Test 

The lottery is well tested with jest. To start the tests type:

```
npm test
```
