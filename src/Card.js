import React from "react";
import "./Card.css";

const Card = ({flag, population, country, cases, populationInfected, todaysCases, deaths, deathsToPop, todaysDeaths, recovered, active, activeToPop, critical, casesPerOneMillion, deathsPerOneMillion, totalTests, testsPerOneMillion}) => {
    // console.log(flag);
    return (
        <tr className="f6 hoverRow">
        <td className="flag">{flag}</td>
        <td>{country}</td> 
        <td>{population.toLocaleString("en")}</td>
        <td>{cases.toLocaleString("en")}</td>
        <td>{populationInfected}</td>
        <td>{deaths.toLocaleString("en")}</td>
        <td>{deathsToPop}</td>
        <td>{todaysCases.toLocaleString("en")}</td>
        <td>{todaysDeaths.toLocaleString("en")}</td>
        <td>{active.toLocaleString("en")}</td>
        <td>{activeToPop.toLocaleString("en")}</td>
        <td>{recovered.toLocaleString("en")}</td>
        <td>{critical.toLocaleString("en")}</td>
        <td>{casesPerOneMillion.toLocaleString("en")}</td>
        {/* <td>{deathsPerOneMillion.toLocaleString("en")}</td> */}
        <td>{totalTests.toLocaleString("en")}</td>
        {/* <td>{testsPerOneMillion.toLocaleString("en")}</td> */}
        </tr>
    )
}

export default Card;