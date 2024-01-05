<!DOCTYPE html>
<html>
    <head>
        <title>Calculator</title>
        <meta lang="en-us">

        <style>
            #mainCalc {
                background-color: rgb(128, 128, 128);
                width: 124px;
                height: 376px;
                padding: 10px;
            }

            #top {
                background: rgb(104, 104, 104);
                width: 120px;
                height: 50px;
            }
            
            #main {
                background: rgb(104, 104, 104);
                width: 120px;
                height: 300px;
            }

            .button {
                background-color: rgb(104, 104, 104);
                margin: 6.5px;
                font-family:'Courier New', Courier, monospace;
                cursor: pointer;
            }

            #ans {font-family:'Courier New', Courier, monospace;}

            .b {
                border-style: solid;
                border-color: black;
                border-radius: 10px;
                border-width: 2px;
            }
        </style>
    </head>

    <body>
        <div id="mainCalc" class="b">
            <div id="top" class="b">
                <p id="ans"></p>
            </div>

            <br>

            <div id="main" class="b">
                <div id = "buttons">
                    <button class="button b" onclick="AddInputs(1)">1</button>
                    <button class="button b" onclick="AddInputs(2)">2</button>
                    <button class="button b" onclick="AddInputs(3)">3</button>
                    <button class="button b" onclick="AddInputs(4)">4</button>
                    <button class="button b" onclick="AddInputs(5)">5</button>
                    <button class="button b" onclick="AddInputs(6)">6</button>
                    <button class="button b" onclick="AddInputs(7)">7</button>
                    <button class="button b" onclick="AddInputs(8)">8</button>
                    <button class="button b" onclick="AddInputs(9)">9</button>
                    <button class="button b" onclick="AnalyzeArray()">=</button>
                    <button class="button b" onclick="AddInputs(0)">0</button>
                    <button class="button b" onclick="Reset()">R</button>
                    <button class="button b" onclick="AddInputs('+')">+</button>
                    <button class="button b" onclick="AddInputs('-')">-</button>
                    <button class="button b" onclick="AddInputs('*')">*</button>
                    <button class="button b" onclick="AddInputs('/')">/</button>
                    <button class="button b" onclick="AddInputs('.')">.</button>
                </div>
            </div>
        </div>

        <script>
            var HasOperator = false
            const InputsArray = [];
            var AnalyzedString = " "

            function Reset() {
                HasOperator = false
                InputsArray.length = 0
                AnalyzedString = " "
                document.getElementById("ans").innerHTML = " "
            }
            function AddInputs(value) {
                if (value == "-" && InputsArray.length >= 1) {
                    InputsArray.push(value)
                    document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + value;
                    HasOperator = true
                } else {
                    if (!(value == "+" || value == "*" || value == "/")) {
                        InputsArray.push(value)
                        document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + value;
                    } else if ((value == "+" || value == "*" || value == "/") && !(HasOperator)) {
                        InputsArray.push(value)
                        document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + value;
                        HasOperator = true
                    }
                }
            }

            function AnalyzeArray() {
                var Operator = false
                InputsArray.forEach(element => {
                    if (element == "+" || element == "-" ||element == "*" || element == "/") {
                        Operator = element
                    }
                });
                if (HasOperator == false) {return}
                HasOperator = false
                AnalyzedString = " "
                var ArrayLength = InputsArray.length
                for (let i = 0; i < ArrayLength; i++) {
                    AnalyzedString = AnalyzedString + InputsArray[i]
                    if (AnalyzedString.length == ArrayLength + 1) {

                        var OperatorPosition = AnalyzedString.lastIndexOf(Operator)
                        var Number1 = AnalyzedString.slice(0, OperatorPosition)
                        var Number2 = AnalyzedString.slice(OperatorPosition + 1)
                        var Answer = " "
                        if (Operator == "+") {
                            Answer = Number(Number1) + Number(Number2)
                        } else if (Operator == "-") {
                            console.log(Number1 + "-" + Number2)
                            Answer = Number(Number1) - Number(Number2)
                        } else if (Operator == "*") {
                            console.log(Number1 + "*" + Number2)
                            Answer = Number(Number1) * Number(Number2)
                        } else if (Operator == "/") {
                            console.log(Number1 + "/" + Number2)
                            Answer = Number(Number1) / Number(Number2)
                        } else {return}
                        var AnswerString = Answer.toString()
                        document.getElementById("ans").innerHTML = Answer
                        Operator = false
                        InputsArray.length = 0
                        for (i = 0; i <= AnswerString.length - 1;) {
                            InputsArray.push(AnswerString[i])
                            i = i + 1
                        }
                    }
                }
            }
        </script>
    </body>
</html>
