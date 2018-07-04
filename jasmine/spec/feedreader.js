/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds is defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds items have URL', () => {
            allFeeds.map((item, indx, arr) => {
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe(null);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeeds items have name', () => {
            allFeeds.map((item, indx, arr) => {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe(null);
            });
        });
    });

    /*
     * The menue - Test suite
     * Check if the menue is hidden by default - Spec 1
     * Check if menue toggles on click - Spec 2
     */
    describe('The menu', () => {

        // Jquery Objects for body and menu icon
        const $BODY_ELEMENT = $('body');
        const $HAMBURGER_ICON = $('.menu-icon-link');

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('Menu is hidden by default', () => {
            expect($BODY_ELEMENT.hasClass('menu-hidden')).toBeTruthy();
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu is toggled on click', () => {

            $HAMBURGER_ICON.click();
            expect($BODY_ELEMENT.hasClass('menu-hidden')).toBe(false);

            $HAMBURGER_ICON.click();
            expect($BODY_ELEMENT.hasClass('menu-hidden')).toBeTruthy();
        });

    });

    /*
     * Initial Entries - Test suite
     * Check if loadfeed is called and completed and 
     * there is atleast one entry within .feed container - Spec 1
     */
    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
    });

    /*
     * New Feed Selection - Test suite
     * Check if new feed is loaded by loadFeed function and the content is updated - Spec 1
     */
    describe('New Feed Selection', () => {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });


}());
