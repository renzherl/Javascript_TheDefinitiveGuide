
function showDate() {
    document.getElementById('demo').innerHTML = "<h2>" + Date() + "</h2>";
}

function getradioButtonByName() {
    var x = document.getElementsByName("gender");
    alert(x.length);
}

function get_p() {
	document.write(Date());
	/*
    var d1 = document.getElementById('demo');
    d1.insertAdjacentHTML('afterend', '<div id="two">Zhangjie two</div>');

    var ps = document.getElementsByTagName('p');
    alert("We have " + ps.length + " p element");*/
}