import { epochMap } from "../interfaces";

export const timeStampToDate = (value: string) => {
  const date = new Date((value as unknown as number) * 1000);
  // console.log("date "+ isNaN(date))
  if (date.toString() !== "Invalid Date") {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();

    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    const year = date.getFullYear();
    console.log("yes ", date, day, monthIndex, monthName);

    var hours = date.getHours();

    // Check whether AM or PM
    var newformat = hours >= 12 ? "PM" : "AM";

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;

    return `${day} ${monthName} ${year}, ${hours} ${newformat}`;
  } else {
    return "--";
  }
};

export const covertTimeperiodToEpoch = (timePeriod: string) => {
  const epochMap = JSON.parse(JSON.stringify({
    all: "all",
    last30: Math.round((Date.now() / 1000) - 2592000),
    last60: Math.round((Date.now() / 1000) - 5184000),
    last180: Math.round((Date.now() / 1000) - 15552000),
    last365: Math.round((Date.now() / 1000) - 31536000),
  }));
  return epochMap[timePeriod];
};
