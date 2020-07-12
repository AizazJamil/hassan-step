// Step Form Multiple
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
    $(stepItem[step]).addClass('activeItem');
    $('.step-content').addClass('out');
    step++;
    $('#' + stepItem[step].dataset.id).removeClass('out');
  });

  // Step Last
  $('.form-inner-step .step-button button[name="finish"]').on('click', function() {
    if (step == stepItem.length) {
      return;
    }
    $(stepItem[stepItem.length - 1]).addClass('activeItem');
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
      stepItem.removeClass('activeItem');
    } else {
      stepItem.filter(':gt(' + (step - 1) + ')').removeClass('activeItem');
    }
    if (step - 1 < 0) {
      $('.step-content .step-button button[name="prev"]').addClass('out');
    }
  });
});


// Experience Form Show and Hide Code here.
const experienceForm = document.querySelector('.experience-field-form');
const experienceFormButton = document.querySelector('.add-experience');
const dividerBar = document.querySelector('.divider-border-dotted');

experienceFormButton.addEventListener('click', () => {
  experienceForm.classList.add('experienceForm-field-block');
  // experienceFormButton.classList.add('add-experience-none');
  // dividerBar.style.display = 'none';
  // dividerBar.classList.add('divider-border-dotted-none');
})


// Education Form Show and Hide Code here.
const educationForm = document.querySelector('.education-field-form');
const educationFormButton = document.querySelector('.add-education');
// const dividerEducationBar = document.querySelector('.divider-border-dotted');

educationFormButton.addEventListener('click', () => {
  educationForm.classList.add('educationForm-field-block');
  // educationFormButton.classList.add('add-education-none');
  // dividerBar.style.display = 'none';
  // dividerBar.classList.add('divider-border-dotted-none');
})

// Skill Form Show and Hide Code here.
const skillForm = document.querySelector('.skill-field-form');
const skillFormButton = document.querySelector('.add-skill');
// const dividerEducationBar = document.querySelector('.divider-border-dotted');

skillFormButton.addEventListener('click', () => {
  skillForm.classList.add('skillForm-field-block');
  // skillFormButton.classList.add('add-skill-none');
  // dividerBar.style.display = 'none';
  // dividerBar.classList.add('divider-border-dotted-none');
})

// Skill Form Show and Hide Code here.
const employementFinalizeForm = document.querySelector('.employmentFinalize-field-form');
const employementFinalizeFormButton = document.querySelector('.add-employment-finalize');

employementFinalizeFormButton.addEventListener('click', () => {
  employementFinalizeForm.classList.add('skillForm-field-block');
})


// Upload Image Profile/Avatar
function imageProfilePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#previewProfileUpload').css('background-image', 'url('+e.target.result +')');
            $('#previewProfileUpload').hide();
            $('#previewProfileUpload').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    imageProfilePreview(this);
});


// Form Accordion step by step
$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-chevron-up fa-chevron-down");
});

// Nicescroll
// $(document).ready(function() {
//   // $("#wrapperColumns").niceScroll("#formContentBox",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});
//   $("#formContentBox").niceScroll({cursorborder:"",cursorcolor:"#00F",boxzoom:true});
//   // $("#formContentBox").niceScroll();
// })

// $(function() {
//   $("#rightInformation").niceScroll({
//     cursorborder:"",
//     cursorcolor:"#00F",
//     boxzoom:false,
//     autohidemode: false
//   });
// })

// PieChart Role
var data = [
    {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 25,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 25,
        color: "green",
        highlight: "#FFC870",
        label: "Yellow"
    },
];

var canvas = document.getElementById("pieChartRole");
var ctx = canvas.getContext("2d");
var midX = canvas.width/2;
var midY = canvas.height/2
var totalValue = getTotalValue(data);

// Create a pie chart
var myPieChart = new Chart(ctx).Pie(data, {
    showTooltips: false,
    onAnimationProgress: drawSegmentValues
});

var radius = myPieChart.outerRadius;

function drawSegmentValues()
{
    for(var i=0; i<myPieChart.segments.length; i++)
    {
        ctx.fillStyle="white";
        var textSize = canvas.width/30;
        ctx.font= textSize+"px Gilroy-Regular";
        // Get needed variables
        var value = myPieChart.segments[i].value/totalValue*100;
        if(Math.round(value) !== value)
        	value = (myPieChart.segments[i].value/totalValue*100).toFixed(1);
        value = value + '%';

        var startAngle = myPieChart.segments[i].startAngle;
        var endAngle = myPieChart.segments[i].endAngle;
        var middleAngle = startAngle + ((endAngle - startAngle)/2);

        // Compute text location
        var posX = (radius/2) * Math.cos(middleAngle) + midX;
        var posY = (radius/2) * Math.sin(middleAngle) + midY;

        // Text offside by middle
        var w_offset = ctx.measureText(value).width/2;
        var h_offset = textSize/4;

        ctx.fillText(value, posX - w_offset, posY + h_offset);
    }
}

function getTotalValue(arr) {
    var total = 0;
    for(var i=0; i<arr.length; i++)
        total += arr[i].value;
    return total;
}
