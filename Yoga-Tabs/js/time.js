setInterval (
    function ()
    {
    function add0 (x) {return ((x < 10) ? '0' : '') + x}

    let time = new Date (); with (time)

    document.getElementById ('clock').innerHTML = 'Сейчас ' + [add0 (getHours ()), add0 (getMinutes ()), add0 (getSeconds ())].join (':');
    },
 1000);