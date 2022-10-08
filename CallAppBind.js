let name1 = {
    first : "Prasanta",
    last : "Acharyya",
    printName : function(){
        console.log(this.first+ ' '+this.last);
    }
}

let name2 = {
    first : "Virat",
    last : "Kohli",
}

name1.printName.apply(name2)