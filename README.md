
---

# React Image Fetcher

This simple React application allows you to fetch and display random images from the Picsum Photos API when you click the "Get Images" button.

## How it Works

1. The app uses the Axios library to make an asynchronous GET request to the "https://picsum.photos/v2/list" API endpoint.

2. When the "Get Images" button is clicked, the `getImages` function is called, which sends the GET request to the API.

3. Upon a successful response, the images' data is stored in the `Images` state variable using the `setImages` function.

4. The images are then displayed on the page using the `map` method, with each image's URL being set as the source for an `<img>` element.

## Usage

1. Clone this repository to your local machine.

2. Run `npm install` to install the necessary dependencies.

3. Start the development server with `npm start`.

4. Open your browser and visit `http://localhost:3000/` to see the app in action.

---


