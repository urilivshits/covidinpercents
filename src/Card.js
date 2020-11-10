import React from "react";

const Card = ({flag, population, country, cases, todaysCases, deaths, todaysDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, totalTests, testsPerOneMillion}) => {
    // console.log(flag);
    return (
        <tr>
        <td>{flag}</td>
        <td>{country}</td> 
        <td>{population}</td>
        <td>{cases}</td>
        <td>{todaysCases}</td>
        <td>{deaths}</td>
        <td>{todaysDeaths}</td>
        <td>{recovered}</td>
        <td>{active}</td>
        <td>{critical}</td>
        <td>{casesPerOneMillion}</td>
        <td>{deathsPerOneMillion}</td>
        <td>{totalTests}</td>
        <td>{testsPerOneMillion}</td>
        </tr>
    )
}

export default Card;