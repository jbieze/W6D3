const FollowToggle = require('./follow_toggle');
const TweetCompose = require('./tweet_compose');
const UsersSearch = require('./users_search');

$(function () {
  $('form.tweet-compose').each( (i, form) => new TweetCompose(form) );
  $('nav.users-search').each( (i, search) => new UsersSearch(search) );
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn, {}) );
});
