import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import zaandam from "./flags/zaandam.png";
import worldFlag from "./flags/worldFlag.png";
import {flags} from "./flags/flags.js";
import {newPop} from "./population.js";
import "./CardList.css";
// import Flag from "./Flag.js";
// import Map from "./Map";
import CovidMap from "./CovidMap";

const CardList = ({countries, covid_world_timeline, covid_total_timeline}) => {
    const flagsArray = Object.entries(flags);
    const [sortConfig, setSortConfig] = useState(null);
    const [showGeneralMap, setShowGeneralMap] = useState(true);
    const [sticky, setSticky] = useState(false);

    // console.log(covid_total_timeline);
    // console.log(covid_world_timeline);

    // React.useMemo(() => {
    //     let sortableCountries = [...countries];

    //     return sortableCountries;

    // }, [countries, sortConfig]);

    if (sortConfig !== null) {
        countries.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? 1 : - 1;
            }
            return 0;
        });
    };

    const requestSort = key => {
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({key, direction});
    };

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    // const test = (e) => {
    //     console.log(e.target.className);
    //     e.target.className -= " this";
    //     e.target.className += " this";
    //     document.querySelector(".this").style.background = "red";
    // };

    // console.log(countries);
    // console.log(Map());
    // console.log(showGeneralMap);

    useEffect(() => {
        const header = document.getElementById("header");

        const scrollCallBack = window.addEventListener("scroll", () => {
            console.log(window.pageYOffset, header.offsetTop);

            if (window.pageYOffset > header.offsetTop + 600) {
                header.classList.add("sticky");
                if (sticky !== true) {
                    setSticky(true);
                }
            }
            else {
                header.classList.remove("sticky");
                if (sticky !== false) {
                    setSticky(false);
                }
            }
        });

        return () => {
            window.removeEventListener("scroll", scrollCallBack)
        };

    }, []);

    
    return (
            <div>
                {/* <div style={showGeneralMap ? {display: "none"} : {display: "block"}}> */}
                    {/* <Map /> */}
                {/* </div> */}
                {/* <div style={showGeneralMap ? {display: "block"} : {display: "none"}}> */}
                    <CovidMap covid_total_timeline={covid_total_timeline} covid_world_timeline={covid_world_timeline}/>
                {/* </div> */}
                <table>
                    <thead id="header">
                        <tr className="f6 link">
                            <th>
                                {/* <p className={`f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue`} onClick={test}> */}
                                <p onClick={() => setShowGeneralMap(!showGeneralMap)} className={`f6 link ph2 pv2 br2 white`}>
                                    #
                                </p>
                            </th>
                            <th>
                                <p className={`f6 link ph2 pv2 br2 white`}>
                                    Flag
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("country")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("country")}>
                                    Country
                                </p>
                                {/* </p><i className={getClassNamesFor("country")}></i> */}
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("population")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("population")}>
                                Population
                                </p>
                            </th>
                            <th>
                                <p className={`${sortConfig === null ? "descending" : getClassNamesFor("cases")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("cases")}>
                                {/* <p className={`${getClassNamesFor("cases")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("cases")}> */}
                                    Cases
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("populationInfected")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("populationInfected")}>
                                    Cases %
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("deaths")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("deaths")}>
                                    Deaths
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("deathsToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("deathsToPopulation")}>
                                    Deaths %
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("todayCases")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("todayCases")}>
                                    Today's Cases
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("todaysToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("todaysToPopulation")}>
                                    Today's %
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("todayDeaths")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("todayDeaths")}>
                                    Today's Deaths
                                </p>
                            </th>
                            {/* <th>
                                <p className={`${getClassNamesFor("todaysDeathsToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("todaysDeathsToPopulation")}>
                                    Today's %
                                </p>
                            </th> */}
                            <th>
                                <p className={`${getClassNamesFor("active")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("active")}>
                                    Active
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("activeToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("activeToPopulation")}>
                                    Active %
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("recovered")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("recovered")}>
                                    Recovered
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("recoveredToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("recoveredToPopulation")}>
                                    Recovered %
                                </p>
                            </th>
                            <th>
                                <p className={`${getClassNamesFor("critical")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("critical")}>
                                    Critical
                                </p>
                            </th>
                            {/* <th>
                                <p className={`${getClassNamesFor("criticalToPopulation")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("criticalToPopulation")}>
                                    Critical %
                                </p>
                            </th> */}
                            <th>
                                <p className={`${getClassNamesFor("totalTests")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("totalTests")}>
                                    Total Tests
                                </p>
                            </th>
                            {/* <th>
                                <p className={`${getClassNamesFor("casesPerOneMillion")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("casesPerOneMillion")}>
                                    Cases / Million
                                </p>
                            </th> */}
                            {/* <th>
                                <p className={`${getClassNamesFor("deathsPerOneMillion")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("deathsPerOneMillion")}>
                                    Deaths Per One Million
                                </p>
                            </th> */}
                            {/* <th>
                                <p className={`${getClassNamesFor("testsPerOneMillion")} f6 link ph2 pv2 br2 white`} onClick={() => requestSort("testsPerOneMillion")}>
                                    Tests Per One Million
                                </p>
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                        countries.map((val, i) => {
                            
                            //adding flags
                            let thisFlag = [];
                            let thisFlagBanner = [];
                            flagsArray.find(value => {
                                if(value[1] === countries[i].country) {
                                    thisFlag.push(value[0])
                                    thisFlagBanner = <img alt="country flag" src={`https://www.countryflags.io/${thisFlag}/flat/64.png`}></img>
                                    if (value[0] === "un") {
                                        // thisFlagBanner = <img alt="country flag" width="64" height="44" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/320px-Flag_of_the_United_Nations.svg.png`}></img>
                                        thisFlagBanner = <img style={{paddingTop: "10px"}} alt="country flag" width="64" height="44" src={worldFlag}></img>
                                    }
                                    else if (value[0] === "zaan") {
                                        thisFlagBanner = <img alt="country flag" width="64" height="64" src={zaandam}></img>
                                    }
                                    else if (value[0] === "diamond") {
                                        thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/en/1/14/Princess_Cruises_logo.svg`}></img>
                                    }
                                }
                            });

                            //adding index
                            countries[i].index = i+1;

                            //adding population
                            let thisPop = [];
                            newPop.find(countryPop => {
                                if (countryPop["Country Name"] === countries[i].country) {
                                    thisPop = countryPop.Value;
                                    countries[i].population = thisPop;
                                }
                                // else {
                                //     thisPop = 0;
                                //     countries[i].population = thisPop;
                                // }
                            });
                            
                            //adding null checks
                            if (countries[i].recovered === null) {
                                countries[i].recovered = 0;
                            }
                            
                            if (countries[i].active === null) {
                                countries[i].active = 0;
                            }

                            //adding cases/pop
                            countries[i].populationInfected = parseFloat((countries[i].cases / countries[i].population)*100);
                            //adding deaths/pop
                            countries[i].deathsToPopulation = parseFloat((countries[i].deaths / countries[i].population)*100);

                            //adding active/pop
                            countries[i].activeToPopulation = parseFloat((countries[i].active / countries[i].population)*100);
                            
                            //adding todays/pop
                            countries[i].todaysToPopulation = parseFloat((countries[i].todayCases / countries[i].population)*100);
                            
                            //adding todaysDeaths/pop
                            countries[i].todaysDeathsToPopulation = parseFloat((countries[i].todayDeaths / countries[i].population)*100);
                            
                            //adding recovered/pop
                            countries[i].recoveredToPopulation = parseFloat((countries[i].recovered / countries[i].population)*100);
                            
                            //adding critical/pop
                            countries[i].criticalToPopulation = parseFloat((countries[i].critical / countries[i].population)*100);

                            // if (Object.values(countries[i] === null)) {
                            //     Object.values(countries[i] = 0);
                            // }
                            
                            return (
                                <Card 
                                    key={i}
                                    index={countries[i].index}
                                    flag={thisFlagBanner}
                                    country={countries[i].country}
                                    population={countries[i].population}
                                    cases={countries[i].cases}
                                    populationInfected={countries[i].populationInfected}
                                    deaths={countries[i].deaths}
                                    deathsToPop={countries[i].deathsToPopulation}
                                    todaysCases={countries[i].todayCases}
                                    todaysToPop={countries[i].todaysToPopulation}
                                    todaysDeaths={countries[i].todayDeaths}
                                    todaysDeathsToPop={countries[i].todaysDeathsToPopulation}
                                    active={countries[i].active}
                                    activeToPop={countries[i].activeToPopulation}
                                    recovered={countries[i].recovered}
                                    recoveredToPop={countries[i].recoveredToPopulation}
                                    critical={countries[i].critical}
                                    criticalToPop={countries[i].criticalToPopulation}
                                    casesPerOneMillion={countries[i].casesPerOneMillion}
                                    deathsPerOneMillion={countries[i].deathsPerOneMillion}
                                    totalTests={countries[i].totalTests}
                                    testsPerOneMillion={countries[i].testsPerOneMillion}
                                />
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default CardList;

// const CardList = ({countries}) => {
//     const flagsArray = Object.entries(flags);
//     // let [sortArray, setCount] = useState(0);
//     // let [count, setCount] = useState(0);
//     // let saved = [];
//     let sortArray;
//     const sort = (e) => {
//         let selected = e.target.innerText.toLowerCase();
//         console.log("sorted");
//         sortArray = countries.map(val => {
//             return val;
//         });
//         sortArray.sort((a, b) => {
//             if (a[selected] < b[selected]) {
//                 return -1;
//             }
//             if (a[selected] > b[selected]) {
//                 return 1;
//             }
//             return 0;
//         });
//         // return sortArray;
//         // sortArray.sort((a, b) => {return a - b});
//         // console.log(`${e.target.innerHTML.toLowerCase().toString()}`);
//         // console.log(sortArray);
//         // console.log(sortArray);
//     }
//     // console.log(sortArray);
//     // console.log(count);
//     return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Flag</th>
//                         <th onClick={sort}>Country</th>
//                         {/* <th onClick={() => setCount(sortArray)}>Country</th> */}
//                         {/* <th onClick={() => setCount(count+1)}>Country</th> */}
//                         <th>Population</th>
//                         <th onClick={sort}>Cases</th>
//                         <th>Today's Cases</th>
//                         <th>Deaths</th>
//                         <th>Today's Deaths</th>
//                         <th>Recovered</th>
//                         <th>Active</th>
//                         <th>Critical</th>
//                         <th>Cases Per One Million</th>
//                         <th>Deaths Per One Million</th>
//                         <th>Total Tests</th>
//                         <th>Tests Per One Million</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                     countries.map((val, i) => {
//                         let thisFlag = [];
//                         let thisFlagBanner = [];
//                         flagsArray.find(value => {
//                             if(value[1] === countries[i].country) {
//                                 thisFlag.push(value[0])
//                                 thisFlagBanner = <img alt="country flag" src={`https://www.countryflags.io/${thisFlag}/flat/64.png`}></img>
//                                 if (value[0] === "un") {
//                                     thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/320px-Flag_of_the_United_Nations.svg.png`}></img>
//                                 }
//                                 else if (value[0] === "zaan") {
//                                     thisFlagBanner = <img alt="country flag" width="64" height="64" src={zaandam}></img>
//                                 }
//                                 else if (value[0] === "diamond") {
//                                     thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/en/1/14/Princess_Cruises_logo.svg`}></img>
//                                 }
//                             }
//                         });

//                         let thisPop = [];
//                         newPop.find(countryPop => {
//                             if (countryPop["Country Name"] === countries[i].country) {
//                                 thisPop = countryPop.Value;
//                             }
//                         });

//                         // saved.push(countries[i].country);
//                         // saved.push(countries[i].cases);
//                         // console.log(saved);

//                         return (
//                             <Card 
//                                 key={i}
//                                 flag={thisFlagBanner}
//                                 population={thisPop}
//                                 country={countries[i].country}
//                                 cases={countries[i].cases}
//                                 todaysCases={countries[i].todayCases}
//                                 deaths={countries[i].deaths}
//                                 todaysDeaths={countries[i].todayDeaths}
//                                 recovered={countries[i].recovered}
//                                 active={countries[i].active}
//                                 critical={countries[i].critical}
//                                 casesPerOneMillion={countries[i].casesPerOneMillion}
//                                 deathsPerOneMillion={countries[i].deathsPerOneMillion}
//                                 totalTests={countries[i].totalTests}
//                                 testsPerOneMillion={countries[i].testsPerOneMillion}
//                             />
//                         )
//                     })
//                     }
//                 </tbody>
//             </table>
//     )
// }

// export default CardList;