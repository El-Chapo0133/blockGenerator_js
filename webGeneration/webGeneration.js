const NBWEB = 5
const NBGEN = 100

class WebGeneration {
    constructor() {
        this.listBlock = []
        this.generateWebsWithGenesis()
    }
    generateWebsWithGenesis() {
        for (var index = 0; index < NBWEB; index++) {
            this.listBlock[index] = []
            this.listBlock[index][0] = this.generateGenesisBlock()
        }
    }
    generateGenesisBlock() {
        var r_block = new Block(null)
        r_block.data = 100
        r_block.id = 0
        return r_block
    }
    generateNextGen() {
        for (var i = 0; i < NBGEN; i++) {
            for (var index = 0; index < NBWEB; index++) {
                this.listBlock[index][this.listBlock[index].length] = this.generateBlock(index)

                this.displayResult(this.listBlock[index][this.listBlock[index].length - 1])
            }
        }
    }
    getLastBlock(indexX) {
        return this.listBlock[indexX][this.listBlock[indexX].length - 1]
    }
    generateBlock(indexX) {
        return new Block(this.getLastBlock(indexX))
    }
    displayResult(data) {
        /** TODO :
         * Display result        
        var document = document.getElementById("mainContent")
        document.innerHTML += this.getLastBlock(index).data
        */
    }
}