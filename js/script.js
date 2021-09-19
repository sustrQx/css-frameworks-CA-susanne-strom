// var triggerEl = document.querySelector('#nav-home-tab a[href="#nav-home"]');
// bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name

// var triggerEl = document.querySelector(
//   '#nav-profile-tab a[href="#nav-profile"]'
// );
// bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name

// var triggerEl = document.querySelector(
//   '#nav-contact a[href="#nav-contact-tab"]'
// );
// bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name

// var triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl);

//   triggerEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     tabTrigger.show();
//   });
// });



<script>
   $('#myTab a').click(function (e) {
     e.preventDefault()
     $(this).tab('show')
   })
</script>
