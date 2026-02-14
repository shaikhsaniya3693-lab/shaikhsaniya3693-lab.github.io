function validateStudentLogin(username, password) {
            const validUsername = "student123";
            const validPassword = "pass123";

            if (username === validUsername && password === validPassword) {
                return "Login successful!";
            } else {
                return "Invalid username or password.";
            }
        }


        
        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const result = validateStudentLogin(username, password);
            document.getElementById("message").innerText = result;

            if (result === "Login successful!") {
                document.getElementById("message").style.color = "green";
            } else {
                document.getElementById("message").style.color = "red";
            }
        }