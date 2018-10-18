$( document ).ready(function() {
    var wins = $("#wins");
    var losses = $("#losses");
    var userTotal = $("#userTotal")
    var randomNumberValue = $("#randomNumberValue"); 
    
    var game = {
        wins: 0,
        losses: 0,
        userTotal: 0,
        get randomNumber(){
            return this._randomNumber;
        },
        set randomNumber(randomNumber){
            this._randomNumber =  randomNumber;
        },
        getRandomNumber: function(){
             return Math.floor(Math.random()*101+19);
         },
        setupGame: function(){
            wins.text(this.wins);
            losses.text(this.losses);
            this.userTotal = 0;
            userTotal.text(this.userTotal);
            this.init();
            randomNumberValue.text(this.randomNumber);
            crystal.init();
        },
        init: function(){
            this.randomNumber = this.getRandomNumber();
        },
        winner: function(){
             this.wins++;
             wins.text(this.wins);
             this.setupGame();
        },
        loser: function(){
            this.losses++;
            losses.text(this.losses);
            this.setupGame();
        }
    };
    var crystal = {
        get redCrystal(){
            return this._redCrystal;
        },
        set redCrystal(randomNumber){
            this._redCrystal =  randomNumber;
        },
        get blueCrystal(){
            return this._blueCrystal;
        },
        set blueCrystal(randomNumber){
            this._blueCrystal = randomNumber;
        },
        get yellowCrystal(){
            return this._yellowCrystal;
        },
        set yellowCrystal(randomNumber){
            return this._yellowCrystal = randomNumber;
        },
        get greenCrystal(){
            return this._greenCrystal;
        },
        set greenCrystal(randomNumber){
            return this._greenCrystal = randomNumber;
        },
        randomNumber: function(){
             return  Math.floor(Math.random()*12+1);
         },
         init: function(){
             this.redCrystal = this.randomNumber();
             this.blueCrystal = this.randomNumber();
             this.yellowCrystal = this.randomNumber();
             this.greenCrystal = this.randomNumber();
         }
    };
    game.init();
    crystal.init();
    game.setupGame();
    $("#redCrystal").click(function(){
        game.userTotal += crystal.redCrystal;
        userTotal.text(game.userTotal);
        if(game.userTotal == game.randomNumber){
            game.winner();
        }
        else if(game.userTotal > game.randomNumber){
            game.loser();
        }
    });
    $("#blueCrystal").click(function(){
        game.userTotal += crystal.blueCrystal;
        userTotal.text(game.userTotal);
        if(game.userTotal == game.randomNumber){
            game.winner();
        }
        else if(game.userTotal > game.randomNumber){
            game.loser();
        }
    });
    $("#yellowCrystal").click(function(){
        game.userTotal += crystal.yellowCrystal;
        userTotal.text(game.userTotal);
        if(game.userTotal == game.randomNumber){
            game.winner();
        }
        else if(game.userTotal > game.randomNumber){
            game.loser();
        }
    });
    $("#greenCrystal").click(function(){
        game.userTotal += crystal.greenCrystal;
        userTotal.text(game.userTotal);
        if(game.userTotal == game.randomNumber){
            game.winner();
        }
        else if(game.userTotal > game.randomNumber){
            game.loser();
        }
    });
});