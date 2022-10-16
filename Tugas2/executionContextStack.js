function first(){
    console.log("ini fungsi first")

    function second(){
        console.log("ini fungsi second")
        
        function third(){
            console.log("ini fungsi third")
        }
        third()
    }
    second()
}
first()
