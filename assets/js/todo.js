    // Click off specific todos by clicking
    $("ul").on("click", "li", function() {
    $(this).toggleClass("completed");

    });

    // click on X to delete todo
    $("ul").on("click", "span", function(){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
    //adding new todos callback function just so i remember
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            // grabbing new todo
            var todoText = $(this).val();
            $(this).val(" ");
            // creating an li and add to ul for todo
            $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }

    });

    $(".fa-plus").click(function(){
       $("input[type='text']").fadeToggle();
    })