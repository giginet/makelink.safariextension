$ ->
  $form = $('.form').clone()
  $('.form').remove()

  $container = $ '.form-container'
  $('.add-button').on 'click', (e) ->
    $newForm = $form.clone()
    $container.append $newForm
    $newForm.hide()
    $newForm.toggle('middle')

    $('.delete-button').on 'click', (e) ->
      $(@).closest('li').toggle 'middle', ->
        $(@).remove()
