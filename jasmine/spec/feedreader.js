
$(function() {

  describe('RSS Feeds', function() {

    // Test if allFeeds are defined
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //Test if allFeeds are a url informed, and it's not empty
    it('URL is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toEqual('');
      });
    });

    //Test if allFeeds are a url informed, and it's not empty
    it('name is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toEqual('');
      });
    });
  });

  describe('The menu', function() {

    it('menu element start hidden', function () {
      var body = document.querySelector('body');
      expect(body.classList.contains('menu-hidden')).toBe(true); //verify if body was class responsible to hidden the menu
    })

    it('open and close menu', function () {
      var body = document.querySelector('body');

      $('.menu-icon-link').click();
      expect(body.classList.contains('menu-hidden')).toBe(false);

      $('.menu-icon-link').click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, done); //Load feeds from API
    })

    it('are entries on feed', function() {
      const entries = $('.feed .entry');

      expect(entries.length).not.toBe(0);
    });
  });

  describe('New Feed Selection', function() {

    let entries, updatedEntries;

    beforeEach(function(done) {
      loadFeed(0, function() {
        entries = $('.feed .entry h2').html();

        loadFeed(1, function() {
          updatedEntries = $('.feed .entry h2').html();
          done();
        });

      });
    })

    it('are new feed loaded', function() {
        expect(entries).not.toEqual(updatedEntries);
    });
  });

}());
