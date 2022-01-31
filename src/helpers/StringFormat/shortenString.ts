/**
 * Function that takes two params : a string and an int.
 * The purpose of this function is to limit the length of the string by a number. If your string
 * is too big, it will cut at the right place (thanks to your int params) and will add "..." to it. *
 */
function shortenString(stringToFormat: string, maxCharToDisplay: number) {
  if (stringToFormat.length > maxCharToDisplay) {
    return (
      // Regex that remove spaces ex => Home Page ==== HomePage
      stringToFormat.replace(/\s/g, "").substring(0, maxCharToDisplay) + "..."
    );
  } else {
    return stringToFormat;
  }
}

export { shortenString };
