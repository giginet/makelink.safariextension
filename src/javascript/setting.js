// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var $container, $form;
    $form = $('.form').clone();
    $('.form').remove();
    $container = $('.form-container');
    return $('.add-button').on('click', function(e) {
      var $newForm;
      $newForm = $form.clone();
      $container.append($newForm);
      $newForm.hide();
      $newForm.toggle('middle');
      return $('.delete-button').on('click', function(e) {
        return $(this).closest('li').toggle('middle', function() {
          return $(this).remove();
        });
      });
    });
  });

}).call(this);
