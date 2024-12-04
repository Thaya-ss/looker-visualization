const visObject = {
    // Configuration for visualisation
    options: {
        chart_title: {
            type: "string",
            label: "Chart Title",
            default: "Employee Data"
        }
    },

    // Calls visualisation
    create: function(element) {
        element.innerHTML = "<h1>Ready to render!</h1>";
        const script = document.createElement('script');
        script.src = 'https://d3js.org/d3.v4.min.js';
        script.async = true;
        document.body.appendChild(script);
    },

    // Calls function when data or configuration is changed
    updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
        if (!data || !data.length) return;
        console.log(data[0]);

        // Check if D3 library is loaded
        let intervalId = setInterval(() => {
            if (typeof d3 !== 'undefined') {
                clearInterval(intervalId);
                renderVisualisation(data, element, doneRendering);
            }
        }, 100);
    }
};
