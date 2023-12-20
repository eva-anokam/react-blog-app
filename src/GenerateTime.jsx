
export function getTime() {
      const d = new Date();
      const day = d.getDate();
      const mnthIndex = d.getMonth();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const mnth = monthNames[mnthIndex];
      const year = d.getFullYear();
      const date = `${day} ${mnth},${year}`;
      const hour = d.getHours();
      let min = d.getMinutes();
      let suffix = "AM";
      if (hour > 12) {
        suffix = "PM";
      }
      if (min < 10) {
        min = `0${min}`;
      }
    const time = `${hour}:${min} ${suffix}`;
    return `${date} at ${time}`
}

