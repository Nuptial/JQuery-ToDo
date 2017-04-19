// Check Off Specific Todos By Clicking

// click event uses for first elements but on event uses for current and added elements in a page

$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); // prevent event bubbling
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13 ){
        //grabbing new todo text from input after enter pressed
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});