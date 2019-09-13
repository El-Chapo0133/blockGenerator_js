const NBWEB = 5
const NBGEN = 47865
const FIRSTID = 0
const FIRSTDATA = 0

class WebGeneration {
    constructor() {
        this.listBlock = []
        this.generateWebsWithGenesis()
    }
    generateWebsWithGenesis() {
        for (var index = 0; index < NBWEB; index++) {
            this.generateWebs(index)
            this.initalizeGenesis(index)
        }
    }
    generateWebs(index) {
        this.listBlock[index] = []
    }
    initalizeGenesis(index) {
        this.listBlock[index][0] = this.generateGenesisBlock()
    }
    generateGenesisBlock() {
        var r_block = new Block(null)
        r_block.data = FIRSTDATA
        r_block.id = FIRSTID
        return r_block
    }
    generateNextGen() {
        for (var i = 0; i < NBGEN; i++) {
            for (var index = 0; index < NBWEB; index++) {
                this.listBlock[index][this.listBlock[index].length] = this.generateBlock(index)
            }
        }
        console.log((NBWEB * NBGEN) + " blocks generated")
    }
    getLastBlock(indexX) {
        return this.listBlock[indexX][this.listBlock[indexX].length - 1]
    }
    generateBlock(indexX) {
        return new Block(this.getLastBlock(indexX))
    }
}

var mainDiv = document.getElementById("mainContent")
var first_date = new Date()
var webGeneration = new WebGeneration()
webGeneration.generateNextGen()
var finished_date = new Date()
console.log("time :" + -(first_date - finished_date))
/*
for (var indexX = 0; indexX < webGeneration.listBlock[0].length; indexX++) {
    for (var indexY = 0; indexY < NBWEB; indexY++) {
        mainDiv.innerHTML += "<div class=\"block\">" + webGeneration.listBlock[indexY][indexX].data + "</div>"
    }
}*/
for (var indexX = 0; indexX < 2; indexX++) {
    for (var indexY = 0; indexY < NBWEB; indexY++) {
        mainDiv.innerHTML += "<div class=\"block\">" + webGeneration.listBlock[indexY][indexX].data + "</div>"
    }
}