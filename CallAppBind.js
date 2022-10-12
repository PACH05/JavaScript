let name1 = {
    first : "Prasanta",
    last : "Acharyya",
    printName : function(country){
        console.log(this.first+ ' '+this.last+ ' '+ country);
    }
}
let name2 = {
    first : "Virat",
    last : "Kohli",
}

name1.printName.call(name2, "India")
name1.printName.apply(name2, ["India"])
let newprint = name1.printName.bind(name2);
newprint("India")

