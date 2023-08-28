import React from "react";

const formatter = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableBody = (props) => {
  return (
    <tbody>
      {props.data.map((yearData, key) => (
        <tr key={key}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.savingsEndOfYear)}</td>
          <td>{formatter.format(yearData.yearlyInterest)}</td>
          <td>
            {formatter.format(yearData.savingsEndOfYear -
              props.initialInvestment -
              yearData.yearlyContribution * yearData.year)}
          </td>
          <td>
            {formatter.format(props.initialInvestment +
              yearData.yearlyContribution * yearData.year)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
