document.addEventListener("DOMContentLoaded", function () {
      createSnowflakes();
    });

    function createSnowflakes() {
      const numberOfSnowflakes = 3;
      const container = document.body;

      for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake(container);
      }
    }

    function createSnowflake(container) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      container.appendChild(snowflake);

      const size = Math.random() * 1 + 1;
      const duration = Math.random() * 3 + 0.4;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${duration}s`;

      setTimeout(() => {
        container.removeChild(snowflake);
        createSnowflake(container);
      }, duration * 1000);
    }