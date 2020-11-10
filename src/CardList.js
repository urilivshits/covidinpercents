import React from "react";
import Card from "./Card.js";
import {flags} from "./flags/flags.js";
import zaandam from "./flags/zaandam.png";
import {newPop} from "./population.js";
// import Flag from "./Flag.js";

const CardList = ({countries}) => {
    const flagsArray = Object.entries(flags);
    
    const sort = (e) => {
        let selected = e.target.innerText.toLowerCase();
        console.log("sorted");
        let sortArray = countries.map(val => {
            return val;
        });
        sortArray.sort((a, b) => {
            if (a[selected] < b[selected]) {
                return -1;
            }
            if (a[selected] > b[selected]) {
                return 1;
            }
            return 0;
        });
        // sortArray.sort((a, b) => {return a - b});
        console.log(`${e.target.innerHTML.toLowerCase().toString()}`);
        console.log(sortArray);
    }
    
    return (
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th onClick={sort}>Country</th>
                        <th>Population</th>
                        <th onClick={sort}>Cases</th>
                        <th>Today's Cases</th>
                        <th>Deaths</th>
                        <th>Today's Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>Critical</th>
                        <th>Cases Per One Million</th>
                        <th>Deaths Per One Million</th>
                        <th>Total Tests</th>
                        <th>Tests Per One Million</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    countries.map((val, i) => {
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

                        let thisPop = [];
                        newPop.find(countryPop => {
                            if (countryPop["Country Name"] === countries[i].country) {
                                thisPop = countryPop.Value;
                            }
                        });
                        // console.log(thisPop);

                        return (
                            <Card 
                                key={i}
                                flag={thisFlagBanner}
                                population={thisPop}
                                country={countries[i].country}
                                cases={countries[i].cases}
                                todaysCases={countries[i].todayCases}
                                deaths={countries[i].deaths}
                                todaysDeaths={countries[i].todayDeaths}
                                recovered={countries[i].recovered}
                                active={countries[i].active}
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