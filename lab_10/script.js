const photos = document.querySelectorAll(".photo");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        const title = photo.getAttribute("data-title");
        const description = photo.getAttribute("data-description");

        // Формуємо вміст для нового вікна
        const content = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #4CAF50;
                        text-align: center;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.6;
                        text-align: justify;
                    }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                <p>${description}</p>
            </body>
            </html>
        `;

        // Відкриваємо нове вікно і записуємо контент
        const newWindow = window.open("", "_blank", "width=400,height=400");
        newWindow.document.write(content);
        newWindow.document.close();
    });
});
