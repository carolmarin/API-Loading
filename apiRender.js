async function getMembers() {
	let url = 'https://coding-assignment.g2crowd.com/'; //API
	let response = await fetch(url); //fetches data from API
	return await response.json(); //turns data into readable JSON
}

async function renderMembers() {
	let members = await getMembers(); //grabs JSON
	let html = '';
	members.forEach(member => { //creates HTML queries to dynamically create each member's own listing
		let htmlSegment = '<div class="team"> <div class="row"> <div class="col-sm-3"> <img src="' + member.image_url + '" alt="image"> </div> <div class="col-sm-9"> <h2>' + member.name + '</h2> <h3>' + member.title + '</h3> <p>' + member.bio + '</p> <p><b>Want to work with ' + member.name + '?</b> <button type="button" class="btn btn-link" onclick="Function()"><img src="thumbs-up.svg" alt="Yes!" style="height:12px; width: 12px;"> Yes!</button></p> <p id="answer"></p> </div> </div> <hr> </div>';
		html += htmlSegment;
	});
	
	let container = document.querySelector('.container');
	container.innerHTML = html;
}

var count = 1; //voting widget that returns amounts of votes per member
function Function() {
	document.getElementById("answer").innerHTML = count++ + " people have said Yes!"
}

renderMembers();

