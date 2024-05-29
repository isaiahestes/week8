// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.
// "App Of The Dads" my son said that that is what the app should be about.

// this creates the dad class so I can create a dad object
class Dad {
    constructor(name, coolness){
        this.name = name;
        this.coolness =coolness;
    }
    
    describe(){
        return `${this.name} has ${this.kids.length} kids and is ${this.coolness} percent cool.`;
    }  
}
// This is a class for the menu so we can display all the menu items
class Menu{
    constructor(){
        this.dads = [];
        this.selectedDad = null;
    }

    start() {
        let selection = this.showMenuOptions();
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.addDad();
                    break;
                case '2':
                    this.deleteDad();
                    break;
                case '3':
                    this.showDads();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert('Goodbye Sianora')
    }
    // this is what is displayed in the menu
    showMenuOptions(){
        return prompt(`
        1. Add a dad
        2. Send dad to get milk(delete)
        3. Show all dads
        0. Give up
        `);
    }
    // this is what is displayed when you select 3 in the menu
    // This is a method to show all the dads
    showDads(){
        let output = 'Dads:\n';
        for (let i = 0; i < this.dads.length; i++) {
            output += `${i + 1}. ${this.dads[i].name} coolness of ${this.dads[i].coolness}%\n`
        }
        alert(output);
    }
    // this is what is displayed when you select 1 in the menu
    // This is a method to add a dad
    addDad(){
        let name = prompt('Add a cool dads Name');
        let coolness = prompt('What is the dads coolness factor');
        this.dads.push(new Dad(name,coolness));
    }
     // this is what is displayed when you select 2 in the menu
    // This is a method to delete a dad
    deleteDad(){
        let index = prompt('Enter the number of the Dad you wish to send away!')-1
        if(index > -1 && index < this.dads.length){
            this.dads.splice(index,1);
        }
    }
        
}

// Here is where we substantiate the menu class
let menu = new Menu();
menu.start();