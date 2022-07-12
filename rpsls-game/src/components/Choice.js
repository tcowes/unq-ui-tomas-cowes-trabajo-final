class Choice {
    canWin(otherPlayerChoice) {
        return this.winsAgainst.includes(otherPlayerChoice.name);
    }

    equals(otherPlayerChoice) {
        return this.name === otherPlayerChoice.name;
    }

}

class Rock extends Choice {
    constructor() {
        super();
        this.name = "Rock";
        this.winsAgainst = ["Lizard", "Scissors"];
    }
}

class Paper extends Choice {
    constructor() {
        super();
        this.name = "Paper";
        this.winsAgainst = ["Rock", "Spock"];
    }
}

class Scissors extends Choice {
    constructor() {
        super();
        this.name = "Scissors";
        this.winsAgainst = ["Paper", "Lizard"];
    }
}

class Lizard extends Choice {
    constructor() {
        super();
        this.name = "Lizard";
        this.winsAgainst = ["Spock", "Paper"];
    }
}

class Spock extends Choice {
    constructor() {
        super();
        this.name = "Spock";
        this.winsAgainst = ["Scissors", "Rock"];
    }
}

export {
    Rock, Paper, Scissors, Lizard, Spock
};