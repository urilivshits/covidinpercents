// import React from "react";
// import { flags } from "./flags/flags";
// import zaandam from "./flags/zaandam.png";

// const Flag = ({countries}) => {
//     const flagsArray = Object.entries(flags);
//     return (
//         <div>
//             {
//                 countries.map((val, i) => {
//                     let thisFlag = [];
//                     let thisFlagBanner = [];
//                     flagsArray.find(value => {
//                         if(value[1] === countries[i].country) {
//                             thisFlag.push(value[0])
//                             thisFlagBanner = <img alt="country flag" src={`https://www.countryflags.io/${thisFlag}/flat/64.png`}></img>
//                             if (value[0] === "un") {
//                                 thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/320px-Flag_of_the_United_Nations.svg.png`}></img>
//                             }
//                             else if (value[0] === "zaan") {
//                                 thisFlagBanner = <img alt="country flag" width="64" height="64" src={zaandam}></img>
//                             }
//                             else if (value[0] === "diamond") {
//                                 thisFlagBanner = <img alt="country flag" width="64" height="64" src={`https://upload.wikimedia.org/wikipedia/en/1/14/Princess_Cruises_logo.svg`}></img>
//                             }
//                         }
//                     });
                
                
//                 return (
//                     <p>{thisFlagBanner}</p>
//                 )
//                 })
//             }
//         </div>
//     )
// }

// export default Flag;