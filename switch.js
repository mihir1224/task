// function getSuggestionForIndustries(industries) {
//   let plainQuickReplies = [];
//   switch (industries) {
//     case "Logistics and Supply Chain":
//       plainQuickReplies.push({
//         text: `Trax`,
//         value: `Case study on Trax Technologies`,
//       });
//       plainQuickReplies.push({
//         text: `Sealink`,
//         value: `Case study on Sealink Travel Group`,
//       });
//       break;
//     case "Manufacturing":
//       plainQuickReplies.push({
//         text: `Data Governance `,
//         value: `Case study on  Data Governance for Security Compliance`,
//       });
//       plainQuickReplies.push({
//         text: `AgroManufacturer`,
//         value: `Case study on  Leading Agro Manufacturer`,
//       });
//       break;
//     case "Retail and FMCG":
//       plainQuickReplies.push({
//         text: `Retail Chain`,
//         value: `Case study on Leading Retail Chain`,
//       });
//       break;
//     case "Telecom":
//       plainQuickReplies.push({
//         text: `IPTV Network`,
//         value: `Case study on IPTV Network Provider`,
//       });
//     //   break;
//     case "Healthcare and Pharma":
//       plainQuickReplies.push({
//         text: "Dr. Reddy's",
//         value: "Case study on Dr.Reddy's",
//       });
//       plainQuickReplies.push({
//         text: `Healthcare Provider`,
//         value: `Case study on Global Healthcare Provider`,
//       });
//       plainQuickReplies.push({
//         text: `Digital Healthcare`,
//         value: `Case study on Global Digital Healthcare Leader`,
//       });
//     //   break;
//     default:
//       plainQuickReplies.push({ text: "Reach us", value: "Reach us" });
//   }
//   return plainQuickReplies;
// }
// console.log(getSuggestionForIndustries("Telecom"));

function abc(count) {
  let days = [];
  switch (count) {
    case 0:
      days.push({
        day: "Sunday",
      });
      break;
    case 1:
      days.push({
        day: "Monday",
      });
      break;
    case 2:
      days.push({
        day: "Tuesday",
      });
      break;
    case 3:
      days.push({
        day: "Wednesday",
      });
      break;
    case 4:
      days.push({
        day: "Thursday",
      });
      break;
    case 5:
      days.push({
        day: "Friday",
      });
      break;
    case 6:
      days.push({
        day: "Saturday",
      });
      break;
    default:
      days.push({
        day: "eatday",
      });
  }
  return days;
}
console.log(abc(6));
