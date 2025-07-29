/*========================
    map js
==========================*/
function initMap() {
    const mapCenter = { lat: 25.229721, lng: 55.338229 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: mapCenter,
        styles: [{
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }
        ]
    });

    // JSON-like array of marker data
    const locations = [
        {
            position: { lat: 25.206426, lng: 55.346465 },
            title: "one",
            map_image_url: 'assets/images/property/featured/1.jpg',
            name_point: 'Vintage House',
            price: '$$2,94,000',
            rating: 'five-star',
            icon: "assets/svg/property/theme-marker.svg",
            url_point: 'property-sidebar-layout.html'
        },
        {
            position: { lat: 25.222578, lng: 55.319011 },
            title: "two",
            map_image_url: 'assets/images/property/featured/2.jpg',
            name_point: 'Modern Building',
            price: '$1,40,000',
            rating: 'five-star',
            icon: "assets/svg/property/theme-marker.svg",
            url_point: 'property-sidebar-layout.html'
        },
        {
            position: { lat: 25.209843, lng: 55.293616 },
            title: "three",
            map_image_url: 'assets/images/property/featured/3.jpg',
            name_point: 'Unveiling Home',
            price: '$6000',
            rating: 'five-star',
            icon: "assets/svg/property/theme-marker.svg",
            url_point: 'property-sidebar-layout.html'
        },
        {
            position: { lat: 25.229721, lng: 55.328229 },
            title: "four",
            map_image_url: 'assets/images/property/featured/4.jpg',
            name_point: 'Forest Cottage',
            price: '$$2,69,900',
            rating: 'five-star',
            icon: "assets/svg/property/theme-marker.svg",
            url_point: 'property-sidebar-layout.html'
        }
        // Add more locations as needed
    ];

    // Create InfoWindow object
    const infowindow = new google.maps.InfoWindow();

    // Define HTML template with placeholders
    const template = `
        <div class="marker-detail">
            <img src="{{map_image_url}}" alt="Image" />
            <div class="detail-part">
                <h6>{{name_point}}</h6>
                <div class="rating {{rating}}">
                 <i class="ri-star-line"></i>
                 <i class="ri-star-line"></i>
                 <i class="ri-star-line"></i>
                 <i class="ri-star-line"></i>
                 <i class="ri-star-line"></i>
                </div>
                <span>{{price}}</span>
                <a href="{{url_point}}">Details</a>
            </div>
        </div>`;

    // Function to replace placeholders with actual data
    function getContent(data) {
        return template
            .replace('{{map_image_url}}', data.map_image_url)
            .replace('{{name_point}}', data.name_point)
            .replace('{{price}}', data.price)
            .replace('{{rating}}', data.rating)
            .replace('{{url_point}}', data.url_point);
    }

    // Store markers for easy access
    const markers = [];

    // Loop through locations array to create markers and info windows
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map,
            title: location.title,
            icon: location.icon, // Set custom icon
        });

        // Store the marker for hover reference
        markers.push({ marker, location });

        // Add click event listener to the marker
        marker.addListener("click", () => {
            infowindow.setContent(getContent(location));
            infowindow.open(map, marker);
        });
    });

    // Handle hover interactions
    document.addEventListener("DOMContentLoaded", function () {
        const featuredBoxes = document.querySelectorAll(".featured-box");
        const defaultIcon = "assets/svg/property/theme-marker.svg"; // Replace with your default icon path
        const hoverIcon = "assets/svg/property/black-marker.svg"; // Replace with your hover icon path

        // Add hover event listeners to each featured-box
        featuredBoxes.forEach((box) => {
            box.addEventListener("mouseenter", function () {
                const boxTitle = box.getAttribute("title");

                // Find the matching marker and update its icon
                markers.forEach(({ marker, location }) => {
                    if (location.title === boxTitle) {
                        marker.setIcon(hoverIcon);
                    }
                });
            });

            box.addEventListener("mouseleave", function () {
                const boxTitle = box.getAttribute("title");

                // Revert the marker icon to the default if it was changed
                markers.forEach(({ marker, location }) => {
                    if (location.title === boxTitle) {
                        marker.setIcon(defaultIcon);
                    }
                });
            });
        });

        // Add hover event listeners to divs inside gm-style with a title attribute
        document.querySelectorAll(".gm-style div[title]").forEach((div) => {
            div.addEventListener("mouseenter", function () {
                const divTitle = div.getAttribute("title");

                // Find the featured-box that matches the title and apply hover effect
                const matchingBox = document.querySelector(`.featured-box[title="${divTitle}"]`);
                if (matchingBox) {

                    // Change the marker icon
                    markers.forEach(({ marker, location }) => {
                        if (location.title === divTitle) {
                            marker.setIcon(hoverIcon);
                        }
                    });
                }
            });

            div.addEventListener("mouseleave", function () {
                const divTitle = div.getAttribute("title");

                // Remove the hover effect from the featured-box
                const matchingBox = document.querySelector(`.featured-box[title="${divTitle}"]`);
                if (matchingBox) {

                    // Revert the marker icon to the default
                    markers.forEach(({ marker, location }) => {
                        if (location.title === divTitle) {
                            marker.setIcon(defaultIcon);
                        }
                    });
                }
            });
        });
    });
}

window.initMap = initMap;
