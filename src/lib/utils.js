export const formatDate = (stringDate) => {
  const parts = stringDate.split("-");
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-MX", options);
};

export const formatHour = (hourString) => {
  let [hours, minutes] = hourString.split(":");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
