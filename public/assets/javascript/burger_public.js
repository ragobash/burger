    $(function () {
        $("#submit-button").on("click", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var newBurger = {
                burger_name: $("#new_burger").val().trim()
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".devour-button").on("click", function (event) {
            var id = $(this).data("id");
            var devoured = $(this).data("devoured") == 0 ? true: false;
            
            var devouredState = {
                devoured: devoured
            };
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: devouredState
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        // $(".delete-burger").on("click", function(event) {
        //   var id = $(this).data("id");

        //   // Send the DELETE request.
        //   $.ajax("/api/burgers/" + id, {
        //     type: "DELETE"
        //   }).then(
        //     function() {
        //       // Reload the page to get the updated list
        //       location.reload();
        //     }
        //   );
        //});
    });