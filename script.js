
let calculateBtn = document.getElementById("calculateAge");

calculateBtn.addEventListener("click", function() {
    let getYearVal = parseInt(document.getElementById("yearInput").value);
    let getMonthVal = parseInt(document.getElementById("monthInput").value);
    let getDayVal = parseInt(document.getElementById("dayInput").value);

    let dayError = document.getElementById("day-error");
    let monError = document.getElementById("month-error");
    let yearError = document.getElementById("year-error");

    // Error alert show when some invalid details in the input fields.
    if (isNaN(getDayVal) || isNaN(getMonthVal) || isNaN(getYearVal)) {
        dayError.style.display = "block";
        monError.style.display = "block";
        yearError.style.display = "block";
    }
    else if (getDayVal < 1 || getDayVal > 31) {
        dayError.style.display = "block";
    }
    else if (getMonthVal < 1 || getMonthVal > 12) {
        monError.style.display = "block";
    }
    else if (getYearVal < 1900 || getYearVal > 2024) {
        yearError.style.display = "block";
    }
    else{
        dayError.style.display = "none";
        monError.style.display = "none";
        yearError.style.display = "none";
    

    let getBirthDate = new Date(getYearVal, getMonthVal - 1, getDayVal);
    let getCurrentDate = new Date();

    // Calculate difference in years, months, and days correctly
    let ageInYear = getCurrentDate.getFullYear() - getBirthDate.getFullYear();
    let ageInMonth = getCurrentDate.getMonth() - getBirthDate.getMonth();
    let ageInDay = getCurrentDate.getDate() - getBirthDate.getDate();

    // Adjust for negative month difference
    if (ageInMonth < 0) {
        ageInYear--;
        ageInMonth += 12;
    }

    // Adjust for negative day difference (if current date is before birthday)
    if (ageInDay < 0) {
        ageInMonth--;
        ageInDay += getDaysInMonth(getBirthDate.getMonth(), getBirthDate.getFullYear());
    }

    // Function to calculate days in a month, considering leap years
    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    let yearResult = document.getElementById("yearResult");
    let monthResult = document.getElementById("monthResult");
    let dayResult = document.getElementById("dayResult");
        
    yearResult.innerHTML = ageInYear;
    monthResult.innerHTML = ageInMonth;
    dayResult.innerHTML = ageInDay;
}
})