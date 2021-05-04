$(document).ready(function(){
    $('#activeRole').val('true'); 
});


function editRole(param){    
    var idRole = $('#idRoleText'+param).text();
    var nameRole = $('#nameRoleText'+param).text();
    $('.idRoleEdit').val(idRole);
    $('.nameRoleEdit').val(nameRole);
    $('.activeRoleEdit').val('true');
    $('#edit-row-form').attr("action", "/roles/edit/"+idRole);
    $('#editRole').modal('toggle'); 
}

function removeRole(param){
    console.log(param);
    var idRole = $('#idRoleText'+param).val();
    var nameRole = $('#nameRoleText'+param).text();
    $('.idRoleRemove').val(idRole);
    $('.nameRoleRemove').text(nameRole);



    $('#removeRole').modal('toggle');
}