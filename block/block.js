class Block {
    constructor(p_lastBlock) {
        if (!this.firstBlock(p_lastBlock)) {
            this.lastBlock = p_lastBlock
            this.id = (this.lastBlock.id + 1)
            this.data = this.generateData()
        }
    }
    firstBlock(p_lastBlock) {
        if (p_lastBlock === null) {
            return true
        } else {
            return false
        }
    }
    generateData() {
        return ((parseInt(this.lastBlock.data, 10) * (this.lastBlock.data / 20)) / (Math.random(0, 10) * 10 + 1)) + 1
    }
    clone() {
        var r_block = new Block(this.lastBlock)
        r_block.id = this.id
        return r_block
    }
}