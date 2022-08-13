## React Gradients API

Welcome to the `react-gradients-api` repository. This repository houses an API built for the [React Gradients play](https://reactplay.io/plays/ammaaraslam/react-gradients) at [ReactPlay.io](https://reactplay.io/).
>**Note:-** Although it was built for use in the React Gradients play, the API does not contain any play specific properties. So feel free to use in your own application!


## API Endpoints

These are the currently available endpoints:
- `/gradients`
  - `GET` - This method is used retrieve all gradients from the API.
  - `POST` - This method is used to add a new gradient to the database.
    Required properties for the `POST` method:
     ```json
    {
        "name": "Name of the Gradient",
        "css": "CSS code for the gradient.",
        "tailwind": "TailwindCSS code for the gradient",
        "colors": ["A list containing all the colors used in the gradient"]
    },
    ```
    **Example**:
    ```json
    {
        "name": "Flamingo",
        "css": "linear-gradient(to right, #f472b6, #db2777)",
        "tailwind": "bg-gradient-to-r from-pink-400 to-pink-600",
        "colors": ["#f472b6", "#db2777"]
    },
    ```
    > **Note:-** Please make sure to add all your colors in the form of HEX. Please use [this converter](https://www.w3schools.com/colors/colors_converter.asp) if you have used any other format.

## Contributing

If you face any issues or have feature requests, don't hesitate to create issue on this repository.

## Support me!

If you find this project to be useful, consider [buying me a coffee](https://www.buymeacoffee.com/ammaaraslam) and following me on [Twitter](https://twitter.com/itsammaar_7), [GitHub](https://github.com/ammaaraslam), [Hashnode](https://twitter.com/itsammaar_7) and [Showwcase](https://www.showwcase.com/ammaaraslam7).

## Thank You!

Thank you so much for taking the time to read this. If you liked and find this API to be useful, please do share about it and tag me [@itsammaar_7](https://twitter.com/itsammaar_7). 

And also, make sure to star [this repository](https://github.com/ammaaraslam/react-gradients-api), check out [my play](https://reactplay.io/plays/ammaaraslam/react-gradients) and contribute and become a part of the [ReactPlay](https://github.com/reactplay) community.
