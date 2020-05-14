const moonPath = "M18 27C18 42.464 28.9348 56.5 28.9348 56.5C13.4709 56.5 0.934845 43.964 0.934845 28.5C0.934845 13.036 13.4709 0.5 28.9348 0.5C28.9348 0.5 18 11.536 18 27Z";
const suntPath = "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z";
const darkMode = document.querySelector('#darkMode');


let toggle = false;

///We need to click on the sun

darkMode.addEventListener('click', () => {
    //We need to use anima.js
    //Here we set up the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //Add different animation to the timeline
    timeline.add({
        targets: ".sun",
        d: [{ value: toggle ? suntPath : moonPath }]

    })

        .add({
            targets: '#darkMode',
            rotate: 320
        },
            '-=350'
        )

        .add({
            targets: "section",
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
            color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
        }, '-=700'
        );

    //Everytime we click on the sun i want that toggle to switch
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});
