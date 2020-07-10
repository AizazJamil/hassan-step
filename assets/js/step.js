// see https://css-tricks.com/forums/topic/back-button-on-multistep-form/
$(function() {
  var step = 0;
  var stepItem = $('.step_navHeader .headerItem');

  $('.form-inner-step .step-button button[name="prev"]').addClass('out');

  // Step Next
  $('.form-inner-step .step-button button[name="next"]').on('click', function() {
    var instance = $(this);
    if (stepItem.length - 1 < step) {
      return;
    }
    $('.form-inner-step .step-button button[name="prev"]').removeClass('out');
    if (step == (stepItem.length - 2)) {
      instance.addClass('out');
      instance.siblings('button[name="finish"]').removeClass('out');
    }
    $(stepItem[step]).addClass('active');
    $('.step-content').addClass('out');
    step++;
    $('#' + stepItem[step].dataset.id).removeClass('out');
  });

  // Step Last
  $('.form-inner-step .step-button button[name="finish"]').on('click', function() {
    if (step == stepItem.length) {
      return;
    }
    $(stepItem[stepItem.length - 1]).addClass('active');
    $('.step-content').addClass('out');
    $('#stepLast').removeClass('out');
    step++;
  });

  // Step Previous
  $('.step-content .step-button button[name="prev"]').on('click', function() {
    if (step - 1 < 0) {
      return;
    }
    step--;
    var instance = $(this);
    if (step <= (stepItem.length - 1)) {
      instance.siblings('button[name="next"]').removeClass('out');
      instance.siblings('button[name="finish"]').addClass('out');
    }
    $('.step-content').addClass('out');
    $('#' + stepItem[step].dataset.id).removeClass('out');
    if (step === 0) {
      stepItem.removeClass('active');
    } else {
      stepItem.filter(':gt(' + (step - 1) + ')').removeClass('active');
    }
    if (step - 1 < 0) {
      $('.step-content .step-content-foot button[name="prev"]').addClass('out');
    }
  });
});


// Experience Form Show and Hide Code here.
const experienceForm = document.querySelector('.experience-field-form');
const experienceFormButton = document.querySelector('.add-experience');
const dividerBar = document.querySelector('.divider-border-dotted');

experienceFormButton.addEventListener('click', () => {
  experienceForm.classList.add('experienceForm-field-block');
  experienceFormButton.classList.add('add-experience-none');
  dividerBar.style.display = 'none';
})
