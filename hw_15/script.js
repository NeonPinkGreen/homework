const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
	constructor(user){
		Object.assign(this, user);
	}

	render(){
		return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this[`img`]}.png" alt="${this[`name`]}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this[`name`]}</b></p>
                        <p>Age: <b>${this[`age`]}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="images/roles/${this['role']}.png" alt="${this['role']}" height="25">
                    <p>${this['role']}</p>
                </div>` + this.renderCourses() +
	`</div>
        </div>`;

		//
		// const render = [];
		//
		// for (let key in this) {
		// 	switch (key){
		// 		case `img`: render.push(`<div class="user">
        //     								<div class="user__info">
        //     									<div class="user__info--data">
		// 											<img src="images/users/${this[key]}.png" alt="${this[key]}" height="50">`);
		// 			continue;
		//
		// 		case `name`: render.push(`<div class="user__naming">
		// 									<p>${key}: <b>${this[key]}</b>`);
		// 			continue;
		//
		// 		case `age`: render.push(`<p>${key}: <b>${this[key]}</b>
		// 									</div>
		// 								</div>`);
		// 			continue;
		//
		// 		case `role`: render.push(`<div class="user__info--role student">
		// 									<img src="images/roles/${this[key]}.png" alt="${this[key]}" height="25">
		// 										<p>${this[key]}</p>
		// 								</div>
		// 							</div>
		// 						</div>`);
		// 		return render.join(``);
		// 	}
		// }
		//
		// return render;
	}

	renderCourses(){
		let coursesResult = users.find(item => item.courses === courses); // {} : undefined

		return coursesResult ? `<div class="user__courses">
			<p class="user__courses--course student">${this['courses'][`title`]} <span class="satisfactory">satisfactory</span></p>
		<p class="user__courses--course student">Java Enterprise <span class="excellent">excellent</span></p>
		</div>` : ``;
	}
}

class Student extends User{
	constructor(){
		super();
	}
}

class Lector extends User{
	constructor(){
		super();
	}

	renderCourses(){}
}

class Admin extends User{
	constructor(){
		super();
	}

	renderCourses(){}
}

const USERS_ROLES = {
	student: user => new Student(user),
	admin: user => new Admin(user),
	lector: user => new Lector(user)
}

let usersClass = users
	.map(user => USERS_ROLES[users.role] ? USERS_ROLES[users.role](user) : new User(user))
	.map(user => user.render())
	.join(``);

console.log(usersClass);

document.write(usersClass);