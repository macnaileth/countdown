//returns full formatted date string from a valid date
export const fullformattedDate = (date, locale = "default", divider = ".", oclock = "") => {

    return date.toLocaleString(locale, {day: "2-digit"})
            + divider + date.toLocaleString(locale, {month: "2-digit"})
            + divider + date.toLocaleString(locale, {year: "numeric"})
            + " - " + date.toLocaleString(locale, {hour: "2-digit", minute: "2-digit"})
            + " " + oclock;
};




