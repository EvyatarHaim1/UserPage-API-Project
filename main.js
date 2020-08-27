// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
let apiManager = new APIManager()
let renderer = new Renderer()

$(".load-user-data").on("click", function () {
    apiManager.loadData()
    $(".load-user-data").on("click", function(){
        $(".user-container").empty()
        $(".quote-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        $(".friends-container").empty()
    })
   
})

$(".display-user").on("click", function () {
    renderer.render(apiManager.data)
    
})

