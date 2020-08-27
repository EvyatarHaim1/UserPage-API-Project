// Fill in the functions for your Renderer Class


class Renderer {
   
    _renderUsers(Name) {
        let source = $("#user-container-template").html()
        let template = Handlebars.compile(source)
        let userInfo = template(apiManager.data)
        $(".user-container").append(userInfo)
    }

    _renderFriends(users) {
        let source = $("#friends-container-template").html()
        let template = Handlebars.compile(source)
        let friendList = template(apiManager.data)
        $(".friends-container").append(friendList)
    }

    _renderQuote(Qoute) {
        let source = $("#quote-container-template").html()
        let template = Handlebars.compile(source)
        let favouriteQuote = template(apiManager.data)
        $(".quote-container").append(favouriteQuote)
    }

    _renderPokemon(pokemonInfo) {
        let source = $("#pokemon-container-template").html()
        let template = Handlebars.compile(source)
        let favouritePokemon = template(apiManager.data.Pokemon)
        $(".pokemon-container").append(favouritePokemon)

    }

    _renderMeat(meatText) {
        let source = $("#meat-container-template").html()
        let template = Handlebars.compile(source)
        let aboutMeMeat = template(apiManager.data)
        $(".meat-container").append(aboutMeMeat)
    }

    render(data) {
        
        this._renderUsers();
        this._renderFriends();
        this._renderQuote();
        this._renderPokemon();
        this._renderMeat();
        
    }
}

