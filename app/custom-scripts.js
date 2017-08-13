define(["dojo/topic"], function(topic) {
    /*
     * Custom Javascript to be executed while the application is initializing goes here
     */

    var next_page_event = 0;
    var original_points = {};
    
    function wait_and_change_page() {
	return setTimeout(() => {
	    var next_page = (app.data.getCurrentSectionIndex() + 1) % app.data.getStoryLength();
	    topic.publish("story-navigate-section", next_page);
	}, 5000);
    }
    
    // The application is ready
    topic.subscribe("tpl-ready", () => {
	// set the first timeout for the next page
	next_page_event = wait_and_change_page();

	/*
	data =  app.data.getWebAppData().get().values.story.sections;
	for(var i = 1; i < data.length; i++) {
	    original_points[i] = data[i].zoom.center.spatialReference;
	}*/
    });

    // reset the timeout for the new page; this also prevents the page from changing too fast after someone has manually changed to another page
    topic.subscribe('story-load-section', () => {
	clearTimeout(next_page_event);
	next_page_event = wait_and_change_page();

	/*
	app.map.onClick(() => {
	    clearTimeout(next_page_event);
	});*/
    });

    topic.subscribe('story-perform-action-media', () => {
	console.log('hey, i did something!');
    });
});
