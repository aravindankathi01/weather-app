export function formatUnixTimestampTo12Hour(timeEpoch) {
  // Convert the epoch timestamp to a JavaScript Date object
  const timestamp = new Date(timeEpoch * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  // Format the timestamp in 12-hour format with 'am' or 'pm'
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return timestamp.toLocaleTimeString("en-US", options);
}
export function formatDateToCustomFormat(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const weekday = date.toLocaleString("en-US", { weekday: "short" });

  return { day, month, weekday };
}

export function formatTimeTo12Hour(timeString) {
  const [hour, minute] = timeString.split(" ")[1].split(":");
  const time = new Date(`2000-01-01T${hour}:${minute}:00`);
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
}
