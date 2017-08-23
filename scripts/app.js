$(function() {
    var places = [{
        location: 'London, United Kingdom',
        city: 'London',
        hotelsCount: 898,
        hotels: [{
            name: 'The May Fair',
            mrp: 232,
            price: 192,
            star: 4
        }, {
            name: 'Grand Plaza Serviced Apartments',
            price: 78,
            star: 3
        }, {
            name: 'Lancaster Gate Hotel',
            mrp: 64,
            price: 61,
            star: 5
        }, {
            name: 'Radisson Edwardian Grafton Hotel',
            price: 102,
            star: 2
        }, {
            name: 'The Rembrandt',
            mrp: 122,
            price: 112,
            star: 3
        }]

    }, {
        location: 'New York, New York, United States',
        city: 'New York',
        hotelsCount: 575,
        hotels: [{
            name: 'The Waldorf Astoria',
            price: 154,
            star: 2
        }, {
            name: 'Park Central New York Hotel',
            mrp: 121,
            price: 89,
            star: 5
        }, {
            name: 'Hilton Garden Inn New York/West 35th Street',
            price: 74,
            star: 4
        }, {
            name: 'Hilton New York',
            price: 147,
            star: 3
        }, {
            name: 'Hotel Pennsylvania',
            price: 60,
            star: 4
        }]

    }, {
        location: 'Paris, France',
        city: 'Paris',
        hotelsCount: 1721,
        hotels: [{
            name: 'Sofitel Paris Le Faubourg',
            price: 285,
            star: 5
        }, {
            name: 'Pullman Paris Tour Eiffel',
            price: 168,
            star: 4
        }, {
            name: 'Champs Elysees Mac Mahon',
            price: 192,
            star: 3
        }, {
            name: 'Hotel Regina',
            price: 159,
            star: 2
        }, {
            name: 'Hotel Pershing Hall Paris',
            price: 283,
            star: 4
        }]
    }];
    // $.getJSON('assets/data.json', function(data) {
    $.each(places, function(i, place) {
        var panel = $('<div class="panel panel-default"></div>');
        var header = $(`<div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse` + i + `">
                            <i class="glyphicon chevron glyphicon-chevron-right"></i>
                            <span class="header-text">` + place.location + `</span>
                            <div class="hotel-count">over ` + place.hotelsCount + ` hotels</div>
                        </a>
                    </h4>
                </div>`);
        $(panel).append(header);
        var panelMain = $(`<div id="collapse` + i + `" class="panel-collapse collapse in">
                        </div>`);
        if (i > 0) {
            $(panelMain).removeClass('in');
        }
        var panelBody = $(`<div class="panel-body">
                        </div>`);
        $.each(place.hotels, function(j, hotel) {
            var content = $(`<div class="row hotel-name-row"></div>`);
            $(content).append(`<span class="col-lg-6 col-md-6 col-sm-12 hotel-name">` + hotel.name + `</span>`);
            var starsDiv = $(`<div class="col-lg-3 col-md-3 col-sm-6"></div>`);
            for (var x = 0; x < hotel.star; x++) {
                $(starsDiv).append(`<span class="glyphicon glyphicon-star stars"></span>`);
            }
            var priceDiv = $(`<div class="col-lg-3 col-md-3 col-sm-6"></div>`);

            $(priceDiv).append(`From`);
            if (hotel.mrp) {
                $(priceDiv).append(`<strike > &pound;` + hotel.mrp + ` </strike>`);
            }
            $(priceDiv).append(`<span class = "price" > &pound;
            ` + hotel.price + ` </span>`);
            $(content).append(starsDiv);
            $(content).append(priceDiv);
            $(panelBody).append(content);
        });
        $(panelBody).append(`<div class="hotel-name see-all-hotels-row">See all ` + place.hotelsCount + ` hotels in ` + place.city +
            `<i class="glyphicon glyphicon-arrow-right"></i>
                        </div>`);
        $(panelMain).append(panelBody);
        $(panel).append(panelMain);
        $('#accordion').append(panel);
    });
});