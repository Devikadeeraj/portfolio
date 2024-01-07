

  // Function to display existing recommendations
  function displayRecommendations() {
    const recommendationContainer = document.getElementById("all_recommendations");
    // You can replace this with your actual data source
    const recommendationsData = [
      "Devika is a very quick learner and quickly grasps key concepts of Web development. She has a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.",
      "Working with Devika has been an awesome experience. She is highly knowledgeable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.",
      "I had worked along with Devika during the initial phase of our venture which needed Web development. She is a committed resource who has in-depth knowledge about the domain. She will be an asset for any organization!",
      "Working with Devika has been a very good experience. She is brilliant. I would definitely want to work with her again."
    ];

    // Clear existing recommendations
    recommendationContainer.innerHTML = "";

    // Display each recommendation
    recommendationsData.forEach((recommendation) => {
      const recommendationDiv = document.createElement("div");
      recommendationDiv.classList.add("recommendation");
      recommendationDiv.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;
      recommendationContainer.appendChild(recommendationDiv);
    });
  }

  // Function to add a new recommendation
  function addRecommendation() {
    const nameInput = document.querySelector("#contact input[type='text']");
    const messageInput = document.querySelector("#contact textarea");

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Check if both name and message are provided
    if (name !== "" && message !== "") {
      const recommendationContainer = document.getElementById("all_recommendations");
      const recommendationDiv = document.createElement("div");
      recommendationDiv.classList.add("recommendation");
      recommendationDiv.innerHTML = `<span>&#8220;</span>${message}<span>&#8221;</span>`;
      recommendationContainer.appendChild(recommendationDiv);

      // Clear input fields
      nameInput.value = "";
      messageInput.value = "";

      // You can add logic here to send the recommendation data to a server/database
    } else {
      alert("Please provide both your name and recommendation.");
    }
  }

  // Function to show/hide the popup
  function showPopup(show) {
    const popup = document.getElementById("popup");
    popup.style.display = show ? "flex" : "none";
  }

  // Initial display of recommendations
  displayRecommendations();
