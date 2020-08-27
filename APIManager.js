//This is the class that will manage all your APIs
const randomNumber = Math.floor((Math.random() * 250))


class APIManager {
    constructor(data) {
        this.data = {}
    }

    loadData() {
        //you should make all your API requests here
        //each request should update the `data` object accordingly
        
        $.ajax({
            url: 'https://randomuser.me/api/?results=1',
            method: "GET",
            dataType: 'json',
            success: (name, image) => {
                let userName = name.results[0].name.first + " " + name.results[0].name.last
                this.data.Name = userName
                
                this.data.Image = name.results[0].picture.large
            }
        });

        $.ajax({
            url: 'https://randomuser.me/api/?results=6',
            method: "GET",
            dataType: 'json',
            success: friends => {
                let friendList = [];
                for (let friend of friends.results) {
                    let friendName = friend.name.first + " " + friend.name.last
                    friendList.push(friendName)
                    this.data.Friends = friendList
                }
            }
        });

        $.ajax({
            url: 'https://api.kanye.rest/',
            method: "GET",
            dataType: 'json',
            success: quote => {
                let favouriteQuote = quote.quote
                this.data.Quote = favouriteQuote
            }
        })


        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
            dataType: "json",
            method: "GET",
            success: pokemon => {
                let pokemonName = pokemon.name
                let pokemonImage = pokemon.sprites.front_shiny
                this.data.Pokemon = {"Pokemon name": pokemonName, "Pokemon Image": pokemonImage}
            }
        })

        $.ajax({
            url: "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1",
            dataType: "json",
            method: "GET",
            success: about => {
                this.data["About Me"] = about[0]
            }
        })
    }
    
}

