// Content script for Hello World Extension

(function() {
    // Check if the popup already exists
    if (document.getElementById('hello-world-extension-popup')) {
        return;
    }

    // Layout containing styles and HTML template for the popup
    const layout = {
        styles: `
            .hello-world-popup {
                position: fixed;
                top: 10px;
                right: 20px;
                background-color: #ffffff;
                color: #333333;
                padding: 15px 25px;
                border-radius: 20px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                font-family: Arial, sans-serif;
                font-size: 16px;
                text-align: center;
                transition: opacity 0.3s ease-in-out;
            }

            .hello-world-popup h2 {
                margin: 0 0 10px;
                font-size: 22px;
                color: #4285f4;
            }

            .hello-world-popup p {
                margin: 0;
            }

            .hello-world-popup button {
                background-color: #4285f4;
                color: white;
                border: none;
                border-radius: 10px;
                padding: 8px 16px;
                margin-top: 15px;
                cursor: pointer;
                font-weight: bold;
            }
        `,

        template: `
            <div class="hello-world-popup" id="hello-world-extension-popup">
                <h2>Hello World!</h2>
                <p>This popup was created by the Chrome extension</p>
                <button id="close-popup">Close</button>
            </div>
        `
    };

    // Add styles to the document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = layout.styles;
    document.head.appendChild(styleSheet);

    // Add the popup HTML to the page
    document.body.insertAdjacentHTML('beforeend', layout.template); // Fixed: Changed htmlTemplate to layout.template

    // Add event listener to close button
    document.getElementById('close-popup').addEventListener('click', function() {
        const popup = document.getElementById('hello-world-extension-popup');
        popup.style.opacity = '0';
        
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(styleSheet);
        }, 300);
    });
})();