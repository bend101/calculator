/**
 * Created by Ben on 14/09/2014.
 */
checkCalculate("", "nothing to do");

checkCalculate(" ", "nothing to do");
checkCalculate("2", 2);
checkCalculate(" 2 ", 2);
checkCalculate("2+", "missing value at 2");
checkCalculate(" 2 + 2 ", 4);
checkCalculate("2*2", 4);
checkCalculate("2-1", 1);
checkCalculate("8/2", 4);
checkCalculate("2)", "invalid operator at 1");
checkCalculate("8/2", 4);
checkCalculate("2+2-  3", 1);
checkLongNumbers("123+456",4,"456");
checkCalculate("12", 12);
checkCalculate("12+12", 24);
checkCalculate("12/2", 6);
checkCalculate("2345)", "invalid operator at 4");
checkCalculate("88/2", 44);


function checkCalculate (expression, expected)
{
	var result= calculate(expression);
	var check=(expected===result);
	if (check===false)
	{
		console.log("evualated expression "+expression+ " expected "+expected+ " but was "+ result);
	}
}

function checkLongNumbers(expression, position, expected)
{
	var result= longNumbers (expression, position);
	var check=(expected===result);
	if (check===false)
	{
		console.log("longNumbers for "+expression+ " at "+position+ " returned "+ result+ " expected "+ expected);
	}
}
