d = new Date(Date(0));
day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurstday", "Friday", "Saturday"];
date = d.getMonth() + 1 + "/" + d.getDate()+ "/" + d.getFullYear();
day[d.getDay()] + ", " + date
