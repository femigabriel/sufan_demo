/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import moment from "moment";
import {
  showToast
} from "../redux/store.hook";


// handle async error on api
export const handleError = error => {
  if (error?.status === "FETCH_ERROR") {
    showToast("Something went wrong, please try again...", "error");
    console.error("Something went wrong, please try again...");
  } else {
    showToast(error?.data.message, "error");
    console.log(error);
  }
};

export const truncateString = (str = "", num = 100) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};


// get user basic details from user object
export const getUserDetails = (user) => ({
  name: user?.first_name ? user?.first_name + " " + user?.last_name : "N/A",
  username: user?.username || "_",
  img: user?.profile_image,
  email: user?.email || "_",
  kyc_verified: user?.kyc_verified,
});

export const formatDateTime = (inputDate) => {
  const dateObj = new Date(inputDate);
  const currentDate = new Date();

  const isToday = dateObj.toDateString() === currentDate.toDateString();
  const isYesterday = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 1).toDateString() === currentDate.toDateString();

  if (isToday) {
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `Today ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  } else if (isYesterday) {
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `Yesterday ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  } else {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    return `${monthNames[monthIndex]} ${day}, ${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
};


//Format value with comma and add Naira sign
export const toCurrency = (number, country = "en-NG") => {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency: country === "en-NG" ? "NGN" : "GBP",
  });

  return formatter.format(number).split(".00")[0];
};

export const removeEmpty = (obj) => {
  // console.log(obj)
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      if (typeof v === "number") return true;
      else if (typeof v === "object" && Object.keys(v).length > 0) return true;
      else return v !== "" && v && v?.length > 0;
    })
  );
};

export const moneyFormatter = (val) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(val)) >= 1.0e9 ?
    (Math.abs(Number(val)) / 1.0e9).toFixed(2) + "B" : // Six Zeroes for Millions
    Math.abs(Number(val)) >= 1.0e6 ?
    (Math.abs(Number(val)) / 1.0e6).toFixed(2) + "M" : // Three Zeroes for Thousands
    Math.abs(Number(val)) >= 1.0e3 ?
    (Math.abs(Number(val)) / 1.0e3).toFixed(2) + "K" :
    Math.abs(Number(val)) ?
    Math.abs(Number(val) / 1.0) :
    Math.abs(Number(val)) >= 1.0 ?
    isNaN(val) :
    "";
};

// capitalize first letter of each word in a sentence
export function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const formatCurrency = (amount, currency) => {
  return toCurrency(amount, currency).split(".00")[0];
};

// formats currency to k, m, b
export const formatMoneyValue = (currency, amount) => {
  let res = toCurrency(currency, amount).split(".00")[0];
  return `${res.charAt(0)} ${moneyFormatter(
		parseFloat(res.slice(1).split(",").join(""))
	)}`;
};

export const formatDate = (inputDate) => {
  const dateObj = new Date(inputDate);

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

  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

export const getNameInitials = (name) => {
  return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
};

export const convertObjToParams = (data) => {
  return Object.entries({
      ...removeEmpty(data)
    })
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
};

// code for count down
export const countDownTimer = function (time) {
  let formattedTime = time.length === 8 ? `${time}T23:59:59Z` : time;
  let deadline = new Date(formattedTime).getTime();

  // Get the current time in UTC
  let currTime = new Date().toISOString();
  let currentInUTC = new Date(currTime).getTime();

  let difference = deadline - currentInUTC;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  let timeLeft = {
    days: ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
    hours: (
      "0" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2),
    minutes: (
      "0" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2),
    seconds: ("0" + Math.floor((difference % (1000 * 60)) / 1000)).slice(-2),
  };

  return timeLeft;
};

// split camel cased word
export function SplitCamelCaseWithAbbreviations(s) {
  return s
    .split(/([A-Z][a-z]+)/)
    .filter(function (e) {
      return e;
    })
    .join(" ");
}

// sorting array of objects logic
export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc" ?
    (a, b) => descendingComparator(a, b, orderBy) :
    (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


export const getUserName = (user) => user.name;

export function getDayRange(date) {
  if (!moment.isMoment(date)) {
    date = moment(date); // ok for js date, milliseconds or string in ISO format
  }

  if (date.isSame(moment(), "day")) {
    return "";
  } else if (date.isSame(moment().subtract(1, "d"), "day")) {
    return "Yesterday - ";
  } else if (date.isSame(moment(), "week")) {
    return date.format("dddd") + " - ";
  } else {
    return date.format("DD/MM/YYYY") + " - ";
  }
}

// function to remove duplicates from array
export function removeDuplicates(array = [], key) {
  const seen = new Set();
  return array.filter((obj) => {
    const value = obj[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

export function getFileSize(bytes, si = true, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si ?
    ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] :
    ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes ? bytes.toFixed(dp) + " " + units[u] : "N/A";
}
export function getFileNameFromUrl(url = "") {
  if (!url) return "Download File";
  else {
    // new URL(url).pathname.split("/").pop()
    let pathArray = url.split("/");
    let filename = pathArray[pathArray.length - 1];
    return filename;
  }
}

export function convertToSlug(str = "") {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing whitespace
  str = str.toLowerCase(); // convert to lowercase
  str = str.replace(/[^\w\s-]/g, ""); // remove non-word characters
  str = str.replace(/[\s_-]+/g, "-"); // convert spaces and underscores to hyphens
  return str;
}

// determine is a file is an image or not
export function isImage(file) {
  if (!file || !file.type) {
    return false;
  }

  const imageTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/bmp",
  ];

  return imageTypes.includes(file.type);
}
export function debounce(func, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
export const removeLastLetter = (str) => {
  return str.slice(0, str.length - 1);
};
export const chipStatusColor = {
  pending: "default",
  accepted: "successInverse",
  withdrawn: "errorInverse",
  declined: "errorInverse",
  ongoing: "primaryInverse",
  active: "success",
  suspended: "greyDark",
  terminated: "errorInverse",
  cancelled: "errorInverse",
  closed: "error",
  drafted: "greyBorder",
  open: "greyBorder",
  completed: "successInverse",
  refunded: "secondaryInverse",
};