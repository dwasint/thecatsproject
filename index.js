//command for discord rpc to work
var rpc = require("discord-rpc")
//Arrays to avoid switch and if statements

//Discord RPC asset name
var pic = new Array('cat','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9','cat10','cat11','cat12','cat13','cat14','cat15','cat16','cat17','cat18','cat19','cat20'
,'cat21','cat22','cat23','cat24','cat25','cat26','cat27','cat28','cat29','cat30','cat31','cat32','cat33','cat34','cat35','cat36','cat37','cat38','cat39'
,'cat40','cat41','cat42','cat43'
)
// Text to be displayed on Status

var app = new Array("A Working Cat Appears","An Ahegao Cat Appears","Yoghurt Cat Appears","Crying Cat Appears","Cowboy Cat Appears","Sock Cat Appears","Ramen Cat Appears","Prisoner Cat Appears","Depressed Cat Appears","Sushi Cat Appears"
,"Father and Son Appear ","Trash Cat Appears","Snake Cat Appears","Snickering Cat Appears","Existential Dread Cat Appears","Beer Cat Appears (Sad Variant)","Chef Cat Appears","Nun Cat Appears","Covid Cat Appears","Sleeping Cat Appears"
,"Hungry Cat Appears","Fridge Cats Appear","You hit the Driving Cat","Angry Cat Appears","Cat Maid Appears","Uber Cat Has Arrived","Ominous Cat Appears","Special Cat Appears","Croc Cat Appears","Burger Cat Appears"
,"Famous Meme Cat Appears","Magic Cat Appears","Mustard Cat Appears","REDACTED Cat Appears","Violent Cat Appears","Dummy Cat Appears","Banana Cat Appears","Motorcycle Cat Appears","Hovering Cat Appears","Beans The Cat Appears"
,"Passenger Cat Appears","Smooshed Cat Appears","Sleeping Cat Appears(Teddybear Variant)"
)
//First Button Text
var lab1 = new Array("Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It",
"Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It",
"Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It",
"Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It","Pet It",
"Pet It","Pet It","Pet It"
)
//Second Button Text
var lab2 = new Array("Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It",
"Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It",
"Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It",
"Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It","Ignore It",
"Ignore It","Ignore It","Ignore It"
)
//First Button URL
var url1 = new Array("https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png","https://cdn.discordapp.com/attachments/800400767030788116/831582315636981820/EtAHvGMXYAIdr9d.png"
)
//Second Button URL
var url2 = new Array("https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png",
"https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png","https://cdn.discordapp.com/attachments/800400767030788116/831583433851011102/tNIN-p1HoE8VRy1YQI_1NefpCw6Js5gmC8AtLM0irA0.png"
)
function run(){
	//random numbers for random wacky stuff
	var rand = Math.floor((Math.random() * 42)) //Random Number to pick from the Arrays
	var reboot = Math.floor((Math.random() * 50))+10; //Reboot timer in minutes from 10 to 60 minutes
	//Meat of the code with RPC connection
	const client = new rpc.Client({ transport: 'ipc' })
	client.on('ready', () => {
	client.request('SET_ACTIVITY', {
	pid: process.pid,
	activity : {
	details : app[rand],  //Var det labeling stuff
	assets : {
	large_image : pic[rand], //var app Image that is displayed in the RPC Status
	large_text : app[rand] // var pic Text that shows up next to the image
	},
	//buttons and url in button/url setup so you can redirect users to endpoints
	buttons : [{label : lab1[rand] , url : url1[rand]},{label : lab2[rand],url : url2[rand]}]
	}
	})
	})
	client.login({ clientId : "" }).catch(console.error);//put application data there
	console.log(app[rand]); //prints the cat that appears in the console
	console.log(reboot,'minutes until reroll'); //tells the time until reroll in console
	setTimeout(function(){
			client.destroy();//Find a way to not have to destroy the connection every X minutes
			run(); //recursion to avoid the node.js program ending
		}, (reboot *10000));
}
//run();