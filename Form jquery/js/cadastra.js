$(document).ready(function(){
    $("#button-cadastrar").click(function(){
        let form = $("#frm");
        form.attr("action", "proc.php");
        form.attr("method", "get");
        form.submit();
    });
});
