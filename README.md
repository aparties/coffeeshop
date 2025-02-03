<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido de Café</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #4b4b4b;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #6f4f37;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #6f4f37;
        }

        label {
            font-weight: bold;
        }

        .button {
            background-color: #6f4f37;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
        }

        .button:hover {
            background-color: #5a3e26;
        }

        .summary {
            margin-top: 20px;
            background-color: #f1e1c6;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #d3c09c;
        }
    </style>
</head>
<body>
    <header>
        <h1>Pedido de Café</h1>
    </header>

    <div class="container">
        <form id="orderForm">
            <label for="coffeeType">Selecciona tu tipo de café:</label>
            <select id="coffeeType" name="coffeeType" required>
                <option value="espresso">Espresso</option>
                <option value="americano">Americano</option>
                <option value="latte">Latte</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="mocha">Mocha</option>
            </select>
            <br><br>

            <label for="extras">¿Extras?</label>
            <br>
            <input type="checkbox" id="milk" name="extras" value="leche">
            <label for="milk">Leche</label>
            <br>
            <input type="checkbox" id="syrup" name="extras" value="jarabe">
            <label for="syrup">Jarabe de vainilla</label>
            <br>
            <input type="checkbox" id="whippedCream" name="extras" value="crema">
            <label for="whippedCream">Crema batida</label>
            <br><br>

            <button type="submit" class="button">Generar Pedido</button>
        </form>

        <div id="orderSummary" class="summary" style="display: none;">
            <h3>Resumen del Pedido</h3>
            <p id="coffeeDetails"></p>
            <p id="extraDetails"></p>
        </div>
    </div>

    <script>
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault();

            // Obtiene los valores del formulario
            let coffeeType = document.getElementById("coffeeType").value;
            let extras = [];
            if (document.getElementById("milk").checked) {
                extras.push("Leche");
            }
            if (document.getElementById("syrup").checked) {
                extras.push("Jarabe de vainilla");
            }
            if (document.getElementById("whippedCream").checked) {
                extras.push("Crema batida");
            }

            // Muestra el resumen del pedido
            let coffeeDetails = `Tipo de café: ${coffeeType.charAt(0).toUpperCase() + coffeeType.slice(1)}`;
            let extraDetails = extras.length > 0 ? `Extras: ${extras.join(", ")}` : "Sin extras";

            document.getElementById("coffeeDetails").textContent = coffeeDetails;
            document.getElementById("extraDetails").textContent = extraDetails;

            document.getElementById("orderSummary").style.display = "block";
        });
    </script>
</body>
</html>
