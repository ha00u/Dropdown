const countryStateCityData = {
    pakistan: {
        punjab: ["Lahore", "Islamabad", "Rawalpindi"],
        sindh: ["Karachi", "Hyderabad", "Sukkur"],
        kpk: ["Peshawar", "Abbottabad", "Mardan"],
        balochistan: ["Quetta", "Gwadar", "Turbat"],
    },
    india: {
        delhi: ["New Delhi", "Noida", "Gurgaon"],
        maharashtra: ["Mumbai", "Pune", "Nagpur"],
        tamilnadu: ["Chennai", "Coimbatore", "Madurai"],
        karnataka: ["Bangalore", "Mysore", "Hubli"],
        rajasthan: ["Jaipur", "Jodhpur", "Udaipur"]
    },
    china: {
        beijing: ["Beijing City", "Chaoyang", "Haidian"],
        shanghai: ["Shanghai City", "Pudong", "Hongkou"],
        guangdong: ["Guangzhou", "Shenzhen", "Dongguan"],
        sichuan: ["Chengdu", "Chongqing", "Leshan"],
        zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"]
    }
};
function populateStates() {
    const countryDropdown = document.getElementById("country");
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");

    const selectedCountry = countryDropdown.value;

    // Clear previous options
    stateDropdown.innerHTML = "<option value='' selected disabled>Select State</option>";
    cityDropdown.innerHTML = "<option value='' selected disabled>Select City</option>";

    if (selectedCountry in countryStateCityData) {
        const states = Object.keys(countryStateCityData[selectedCountry]);
        states.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });

        // Enable the state dropdown
        stateDropdown.disabled = false;
    } else {
        // Disable the state and city dropdowns if no states are available
        stateDropdown.disabled = true;
        cityDropdown.disabled = true;
    }
}

function populateCities() {
    const countryDropdown = document.getElementById("country");
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");

    const selectedCountry = countryDropdown.value;
    const selectedState = stateDropdown.value;

    // Clear previous options
    cityDropdown.innerHTML = "<option value='' selected disabled>Select City</option>";

    if (selectedCountry in countryStateCityData && selectedState in countryStateCityData[selectedCountry]) {
        const cities = countryStateCityData[selectedCountry][selectedState];
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });

        // Enable the city dropdown
        cityDropdown.disabled = false;
    } else {
        // Disable the city dropdown if no cities are available
        cityDropdown.disabled = true;
    }
}
