function calculateGrowth() {
    var years = document.getElementById("yearsInput").value;
    var months = document.getElementById("monthsInput").value;
    var totalMonths = (years * 12) + Number(months);
    var days = totalMonths * 1.25;
    document.getElementById("result").innerText = days + " cm";
}
