import React, { useState } from "react";
import "./Card.css";

const Card = ({index, flag, population, country, cases, populationInfected, todaysCases, todaysToPop, deaths, deathsToPop, todaysDeaths, todaysDeathsToPop, recovered, recoveredToPop, active, activeToPop, critical, criticalToPop, casesPerOneMillion, deathsPerOneMillion, totalTests, testsPerOneMillion}) => {
    // console.log(flag);
    // const [rowRef, setrowRef] = useState(React.createRef());
    const [activeRow, setActiveRow] = useState(false);
    // console.log(getComputedStyle(document.querySelector(".hoverRow")).width);
    // console.log(getComputedStyle(document.querySelector(".hoverRow")).height);

    // const setStyle = () => {
    //     // console.log(getComputedStyle(document.querySelector(".hoverRow")).height);
    //     return {background: "blue"}
    // }

    // useEffect (() => {
    //     const styles = getComputedStyle(rowRef.current)
    //     console.log(styles.width);
    //     console.log(styles.height);
    //     console.log(rowRef);
    // })


    const cutNumber = (number) => {
        if (number < 1000) {
            return "< 1k";
        }
        else if (number < 10000) {
            return number.toString().slice(0, 1) + "k"
        }
        else if (number < 100000) {
            return number.toString().slice(0, 2) + "k"
        }
        else if (number < 1000000) {
            return number.toString().slice(0, 3) + "k"
        }
        else if (number < 10000000) {
            return number.toString().slice(0, 1) + " mil"
        }
        else if (number < 100000000) {
            return number.toString().slice(0, 2) + " mil"
        }
        else if (number < 1000000000) {
            return number.toString().slice(0, 3) + " mil"
        }
    };

    // console.log(population, country);

    return (
        <tr className="f6 hoverRow" onClick={() => setActiveRow(!activeRow)}>
        {/* <tr className="f6 hoverRow" onClick={() => setActiveRow(!activeRow)} ref={rowRef}> */}
            <td>{index}</td>
            <td className="flag" style={!activeRow ? null : {position: "relative", transition: "all 300ms", transform: "scale(2.0) translateY(30px)"}}>{flag}</td>
            <td style={{paddingTop: "25px", lineHeight: "1"}}>{country}</td> 
            <td>{population.toLocaleString("en")}</td>
            <td>{cases.toLocaleString("en")}</td>
            <td>{populationInfected.toFixed(2)+"%"}</td>
            <td>{deaths.toLocaleString("en")}</td>
            <td>{deathsToPop.toFixed(2)+"%"}</td>
            <td>{todaysCases.toLocaleString("en")}</td>
            <td>{todaysToPop.toFixed(2)+"%"}</td>
            <td>{todaysDeaths.toLocaleString("en")}</td>
            {/* <td>{todaysDeathsToPop}</td> */}
            <td>{active.toLocaleString("en")}</td>
            <td>{activeToPop.toFixed(2)+"%"}</td>
            <td>{recovered.toLocaleString("en")}</td>
            <td>{recoveredToPop.toFixed(2)+"%"}</td>
            <td>{critical.toLocaleString("en")}</td>
            {/* <td>{criticalToPop}</td> */}
            {/* <td>{totalTests.toLocaleString("en")}</td> */}
            {/* <td>{totalTests}</td> */}
            <td>{cutNumber(totalTests)}</td>
            {/* <td>{parseInt(totalTests).toString().slice(0, 3) + "kk"}</td> */}
            <td className={!activeRow ? "hide-row" : "expanded-row-content"}>
                {/* Cases / Million: {casesPerOneMillion.toLocaleString("en")}
                <br></br>
                Deaths / Million: {deathsPerOneMillion.toLocaleString("en")} 
                <br></br>
                Tests / Million: {testsPerOneMillion.toLocaleString("en")} 
                <br></br>
                Total Tests: {totalTests.toLocaleString("en")}  */}
                Work In Progress
                {/* <iframe title="iFrame" src="https://www.google.com/search?q=apple+recipe" /> */}
                
            </td>
            {/* {activeRow && (
                <td style={setStyle()} className="detailsRow">{index}</td>
            )} */}
            {/* <td>{totalTests.toLocaleString("en")}</td> */}
            {/* <td>{casesPerOneMillion.toLocaleString("en")}</td> */}
            {/* <td>{deathsPerOneMillion.toLocaleString("en")}</td> */}
            {/* <td>{testsPerOneMillion.toLocaleString("en")}</td> */}
        </tr>
    )
}

export default Card;