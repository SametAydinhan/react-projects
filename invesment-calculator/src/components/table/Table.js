import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import classes from './Table.module.css'

const Table = (props) => {
  return (
    <table className={classes.result}>
      <TableHeader />
      <TableBody data={props.data} initialInvestment={props.initialInvestment}/>
    </table>
  );
};

export default Table;
