function calculatePercentage(marksObtained, totalMarks) {
            let percentage = (marksObtained / totalMarks) * 100;
            return percentage.toFixed(2);
        }

        function showPercentage() {
            let obtained = document.getElementById("marksObtained").value;
            let total = document.getElementById("totalMarks").value;

            if (obtained === "" || total === "" || total == 0) {
                document.getElementById("result").innerHTML = "Please enter valid numbers!";
                return;
            }

            let result = calculatePercentage(obtained, total);
            document.getElementById("result").innerHTML = "Percentage: " + result + "%";
        }