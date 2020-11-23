import React, { useState } from "react";
import Card from "./Card.js";
import zaandam from "./flags/zaandam.png";
import {flags} from "./flags/flags.js";
import {newPop} from "./population.js";
import "./CardList.css";
// import Flag from "./Flag.js";

const CardList = ({countries}) => {
    const flagsArray = Object.entries(flags);
    const [sortConfig, setSortConfig] = useState(null);
    
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
    }

    const requestSort = key => {
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({key, direction});
    }

    return (
            <table>
                <thead>
                    <tr className="f6 link">
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue">
                                Flag
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("country")}>
                                Country
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("population")}>
                            Population
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("cases")}>
                                Cases
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("populationInfected")}>
                                Cases / Population
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("deaths")}>
                                Deaths
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("deathsToPopulation")}>
                                Deaths / Population
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("todayCases")}>
                                Today's Cases
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("todayDeaths")}>
                                Today's Deaths
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("active")}>
                                Active
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("activeToPopulation")}>
                                Active / Population
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("recovered")}>
                                Recovered
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv3 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("critical")}>
                                Critical
                            </p>
                        </th>
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("casesPerOneMillion")}>
                                Cases / Million
                            </p>
                        </th>
                        {/* <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("deathsPerOneMillion")}>
                                Deaths Per One Million
                            </p>
                        </th> */}
                        <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("totalTests")}>
                                Total Tests
                            </p>
                        </th>
                        {/* <th>
                            <p className="f6 link ph2 pv2 br2 white bg-light-blue hover-bg-dark-blue" onClick={() => requestSort("testsPerOneMillion")}>
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
                                    thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/320px-Flag_of_the_United_Nations.svg.png`}></img>
                                }
                                else if (value[0] === "zaan") {
                                    thisFlagBanner = <img alt="country flag" width="64" height="64" src={zaandam}></img>
                                }
                                else if (value[0] === "diamond") {
                                    thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/en/1/14/Princess_Cruises_logo.svg`}></img>
                                }
                            }
                        });

                        //adding population
                        let thisPop = [];
                        newPop.find(countryPop => {
                            if (countryPop["Country Name"] === countries[i].country) {
                                thisPop = countryPop.Value;
                                countries[i].population = thisPop;
                            }
                        });
                        
                        //adding null checks
                        if (countries[i].recovered === null) {
                            countries[i].recovered = 0;
                        }
                        
                        if (countries[i].active === null) {
                            countries[i].active = 0;
                        }

                        //adding cases/pop
                        countries[i].populationInfected = parseFloat((countries[i].cases / countries[i].population)*100).toFixed(2)+"%";

                        //adding deaths/pop
                        countries[i].deathsToPopulation = parseFloat((countries[i].deaths / countries[i].population)*100).toFixed(2)+"%";

                        //adding active/pop
                        countries[i].activeToPopulation = parseFloat((countries[i].active / countries[i].population)*100).toFixed(2)+"%";
                        
                        // if (Object.values(countries[i] === null)) {
                        //     Object.values(countries[i] = 0);
                        // }
                        
                        return (
                            <Card 
                                key={i}
                                flag={thisFlagBanner}
                                country={countries[i].country}
                                population={countries[i].population}
                                cases={countries[i].cases}
                                populationInfected={countries[i].populationInfected}
                                deaths={countries[i].deaths}
                                deathsToPop={countries[i].deathsToPopulation}
                                todaysCases={countries[i].todayCases}
                                todaysDeaths={countries[i].todayDeaths}
                                active={countries[i].active}
                                activeToPop={countries[i].activeToPopulation}
                                recovered={countries[i].recovered}
                                critical={countries[i].critical}
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