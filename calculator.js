function Calculator(element)
{
	this.table = document.createElement("table"); //<table>
	this.table.className="background";
	element.appendChild(this.table);

	var tr = document.createElement("tr");
	this.table.appendChild(tr);

	var td = document.createElement("td");
	td.colSpan = 4;

	tr.appendChild(td);

	this.input = document.createElement("input");
	this.input.type = "text";
	this.input.className="inputClass";
	td.appendChild(this.input);

	var tr = document.createElement("tr"); // first row
	this.table.appendChild(tr);

	var td = document.createElement("td");
	td.colSpan = 3;
	td.innerHTML="Bens calculator";
	td.className="bensCalculatorText";
	tr.appendChild(td);
	this.createDiv(tr, "clr");

	var tr = document.createElement("tr"); //second row
	this.table.appendChild(tr);
	this.createDiv(tr, "7");
	this.createDiv(tr, "8");
	this.createDiv(tr, "9");
	this.createDiv(tr, "/");

	var tr = document.createElement("tr"); //third row
	this.table.appendChild(tr);
	this.createDiv(tr, "4");
	this.createDiv(tr, "5");
	this.createDiv(tr, "6");
	this.createDiv(tr, "*");

	var tr = document.createElement("tr"); //fourth row
	this.table.appendChild(tr);
	this.createDiv(tr, "1");
	this.createDiv(tr, "2");
	this.createDiv(tr, "3");
	this.createDiv(tr, "-");

	var tr = document.createElement("tr");
	this.table.appendChild(tr);
	this.createDiv(tr, ".");
	this.createDiv(tr, "0");
	this.createDiv(tr, "=");
	this.createDiv(tr, "+");
}

Calculator.prototype.createDiv = function (tr, text)
{
	var td = document.createElement("td");
	tr.appendChild(td);

	var div = document.createElement("div");
	div.innerHTML = text;
	div.value = text;
	div.className= "divDesign";
	div.addEventListener("click", this.onClick.bind(this));
	td.appendChild(div);
}

Calculator.prototype.onClick = function (event)
{
	debugger;
	var chTyped = (event.target.value);
	if (chTyped === "clr")
	{
		this.input.value = "";
	}
	else if (chTyped === "=")
	{

		this.input.value = this.calculate(this.input.value);
	}
	else
	{
		this.input.value = this.input.value + chTyped;
	}
}

Calculator.prototype.isDigit = function (ch)
{
	if (ch === "0" || ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" || ch === "6" || ch === "7" || ch === "8" || ch === "9")
		return true;
	else
		return false;
}

Calculator.prototype.longNumbers = function (input, position)
{
	var tempString = "";
	while (this.isDigit(input[position]))
	{
		tempString = tempString + input[position];
		position++;
	}
	return tempString;
}

Calculator.prototype.skipSpaces = function (position, input)
{
	while (input[position] === " ")
	{
		position = position + 1;
	}
	return position;
}

Calculator.prototype.calculate = function (expression)
{
	var i = this.skipSpaces(0, expression);
	if (i === expression.length)
	{
		return "nothing to do";
	}

	// get all the digits
	var numberString = this.longNumbers(expression, i);
	var result = parseInt(numberString);
	i = i + numberString.length; // skip past the digits

	// while theres more check for operator value operator value ...
	while (i < expression.length)
	{
		i = this.skipSpaces(i, expression);
		if (i === expression.length)
		{
			return result;
		}
		var operator = expression[i];
		if (operator === "+" || operator === "-" || operator === "*" || operator === "/")
		{
			// its ok
		}
		else
		{
			result = "invalid operator at " + i;
			break;
		}
		i++;
		i = this.skipSpaces(i, expression);
		if (i === expression.length)
		{
			return "missing value at " + i;
		}

		var numberString = this.longNumbers(expression, i);
		var secondNumber = parseInt(numberString);
		i = i + numberString.length;

		if (operator === "+")
		{
			result = result + secondNumber;
		}
		else if (operator === "-")
		{
			result = result - secondNumber;
		}
		else if (operator === "/")
		{
			result = result / secondNumber;
		}
		else if (operator === "*")
		{
			result = result * secondNumber;
		}
	}

	return result;


}
