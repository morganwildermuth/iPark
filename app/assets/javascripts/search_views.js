var SearchView = function(neighborhoodName, listings) {
  this.neighborhoodName = neighborhoodName;
  this.listings = listings;
}

SearchView.prototype.render = function() {
  var neighborhoodView = new NeighborhoodView(this.neighborhoodName);
  neighborhoodView.render();
  var listingsView = new ListingsView(this.listings);
  listingsView.render();
}


var NeighborhoodView = function(name) {
  this.$elem = $("#neighborhood");
  this.name = name;
}

NeighborhoodView.prototype.render = function() {
  this.$elem.html(this.name)
}


var ListingsView = function(listings) {
  this.$elem = $('.listings');
  this.$elem.empty()
}


ListingsView.prototype.addListing = function(number, listing){
  var listingView = new ListingView(number, listing);
  this.$elem.append(listingView.render());
  return listingView
}


var ListingView = function(index, listing) {
  this.$elem = $('.hidden .listing').clone();
  this.index = index;
  this.listing = listing;
}

ListingView.prototype.select = function() {
  this.$elem.addClass("selected")
}

ListingView.prototype.render = function() {
  this.$elem.find('.index').text(this.index);
  this.$elem.find('.street').text(this.listing.street);
  this.$elem.find('.price').text("$" + this.listing.price);
  this.$elem.find('a.spot_id').attr("href", "/spots/" + this.listing.id);
  return this.$elem;
}
