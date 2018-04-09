# React intro workshop DV/IT 2018

This workshop was developed for a React intro-workshop and is inspired by a similar workshop done as part of Facebook's 2017 developer conference, F8.

By the end of the workshop, we will have a simple production-ready weather app.

![The final weather app](./images/final.png)

# Create your first app

To save some time, we'll not set up a local development environment but will instead rely on a hosted one.
Visit [Stackblitz](https://stackblitz.com/) which is an online IDE for web applications.

Here we'll choose React with ES6 and soon you will see that your new app has been loaded in a preview window next to an editor!
![Snapshot of Stackblitz with React](./images/stackblitz.png)

# Components and Props

Lets take a look at the basic app that was generated for us. In `index.js`. The app currently looks like this:

```js
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
    }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    )
  }
}
```

Our whole app starts with this file, and the render function is at the heart of it. Try modifying some text, save, and watch the app automatically show those changes!

You might also have noticed that we have a unknown element inside our div, another component called `<Hello>` was also generated for us but lets ignore that for now (you can even remove that line from the code if you want).

## Part 1 - New component

Now lets go ahead and make a new component, `WeatherDisplay`. Since this is an entirely new file we first have to import React and Component in the same way as in index.js, we also have to export the component in order to make it accessible from other files. The render function, that we mentioned earlier, is the heart of a component because it defines what will be displayed. For now, lets just display a `<h1>` HTML tag, with some text inside.

```js
import React, { Component } from 'react'
export default class WeatherDisplay extends Component {
  render() {
    return <h1>Displaying weather for some city</h1>
  }
}
```

Lets modify our App component (index.js) to use our new and shiny WeatherDisplay component.

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay cityId={'12345'} />
      </div>
    )
  }
}
```

As you can see, we are passing data into `WeatherDisplay`. This data is a prop, called "cityId". We can modify our component to display the data being passed in:

```js
export default class WeatherDisplay extends Component {
  render() {
    return <h1>Displaying weather for city with id {this.props.cityId}</h1>
  }
}
```

## Part 2 - Passing down props

Lets go back to our App component in index.js and near the top of the file, add some different places that we might want to display weather for:

```js
const PLACES = [
  { name: 'Uppsala', id: '2666218' },
  { name: 'Stockholm', id: '2673722' },
  { name: 'Göteborg', id: '2711533' },
  { name: 'Lund', id: '2693678' },
  { name: 'Linköping', id: '2694759' },
  { name: 'Umeå', id: '602149' },
]
```

Now, upgrade the render function to iterate over each place, and render a `<button>` tag for it.

```js
return (
  <div className="App">
    <WeatherDisplay cityId={'12345'} />
    {PLACES.map((place, index) => (
      <button
        key={index}
        onClick={() => {
          console.log('Clicked on index ' + index)
        }}
      >
        {place.name}
      </button>
    ))}
  </div>
)
```

We are creating an array of clickable button-elements in the component, and the `key` prop is used to tell React the order of the elements in the array.

There is also an `onClick` event handler, where we log the click to the console. You can see the log statements by opening the "Developer Tools" in your browser (or press "Console" in the bottom of the preview window). Your app should now look like this:

![Snapshot of the app with props](./images/with_props.png)

## Part 3 - Adding state

We want our app to be able to switch between places, so we can use state to keep that data in our App component.

When we created our app we already received a constructor but we have not actually used it to set a state yet. Lets give our app an initial state for `activePlace` in the constructor by adding this to `this.state`.

```js
constructor() {
  super();
  this.state = {
    activePlace: 0,
  };
}
```

When the app is first started, activePlace will now be set to 0. Our `render` function can use the data from `this.state` when declaring the UI. To change state, we can use the React component's `setState` method, which will change the state and re-run the render function to get the new UI.

Let's use the `this.state` and `this.setState` in our App component:

```js
class App extends Component {
  constructor() {
    super()
    this.state = {
      activePlace: 0,
    }
  }

  render() {
    const activePlace = this.state.activePlace
    return (
      <div>
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index })
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} cityId={PLACES[activePlace].id} />
      </div>
    )
  }
}
```

![Snapshot of the weather app with changing state](./images/with_state.png)
At this point, [your `App.js` file should look something like this](./snapshots/part3_state/index.js).

## Part 4 - Lifecycle Methods and Data Fetching

Sometimes we want to add code that gets called at certain times in our component's lifetime. This is where the _lifecycle_ methods comes in to play.

In this example, we want to make an API call when the component first shows up on screen, so we will add code to `componentDidMount`. Lets update the `WeatherDisplay` component to the following:

**INSERT LIFECYCLE CODE HERE**

At this point, [your `WeatherDisplay.js` file should look like this](./snapshots/part4_lifecycle_and_fetch/WeatherDisplay.js).

And this should be the result ![Snapshot of the weather app with weather data loading](./images/part4_lifecycle.png)

## Part 5 - Making it look better

Lets organize that data a bit to make it more readable and more like a proper website.

Edit the `render` function accordingly to make better use of that data.

**INSERT NEW RENDER CODE HERE**

![Snapshot of the weather app with weather data loading](./images/part5_json_data.png)

At this point, [your `WeatherDisplay.js` file should look like this](./snapshots/part5_json_data/WeatherDisplay.js).
