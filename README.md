<h1 align="center">
  ☆ React Native Stock Star Rating 
</h1>

<div align="center">

🟢 React Native Stock Star Rating component with no dependencies

<a href="https://twitter.com/_mmusaib" target="_blank">
<img src="https://i.imgur.com/CAnbdwP.png" width="250" />
</a>
</div>



<h4>Light Weight <b>Easy</b> to use star rating.</h4>

-   Equivalent to React Native Stock Component
-   Use the color of your choice
-   Use bordered or filled star upon your choice
-   Works on all the platforms Android, Ios and Web in the same way
-   Zero dependencies



# Compatibility


|  iOS  | Android | Web | Expo |
--------|---------|-----|------|
|  ✅  |    ✅    | ✅ |  ✅  |




# 🔌 Installation

```sh
$ npm install react-native-stock-star-rating

```

OR

```sh
$ yarn add react-native-stock-star-rating
```


# 😎 Displaying the rating
```jsx
import { Rating } from 'react-native-stock-star-rating'

const App = () => {

  return(
    <Rating stars={4.7} maxStars={5} size={25} />
  )

};
```

<p align="center" >
  <kbd>
    <img
      src="https://i.imgur.com/8YIvDsN.gif"
      title="Star rating demo"
    >
  </kbd>
  <br>
  <em>Star Rating Demo</em>
</p>


For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-stock-star-rating)

# ⭐ Props  for  rating
| Name | Type | Description | Default |
| ---- | ---- | ----------- | ----------- |
| maxStars | Number | Number of stars to show (Optional) | 5
| stars | Number | Filled stars to show or value of rating | 0 
| size | Number | Size of the star (Optional) | 25 
| color | String | Use the color you want to give to the rating stars  (Optional) | #FFDF00
| bordered | boolean | Set to true if you want bordered stars (Optional) | false





# 😎 Star Rating Input 
<p>If you want to provide star rating input to capture the rating given by users, you can use this as below:</p>

```jsx
import { RatingInput } from 'react-native-stock-star-rating'

const App = () => {

  const [rating,setRating] = React.useState(0);
  

  return(
    <RatingInput 
        rating={rating} 
        setRating={setRating} 
        size={50}  
        maxStars={5} 
        bordered={false}  
    />
  )

};
```

<p align="center" >
  <kbd>
    <img
      src="https://i.imgur.com/SH24cVd.gif"
      title="Star rating input demo"
    >
  </kbd>
  <br>
  <em>Star Rating Input Demo</em>
</p>

# ⭐ Props  for  rating  input
| Name | Type | Description | Default |
| ---- | ---- | ----------- | ----------- |
| rating | Number | State variable to store the rating (Required) | 0
| setRating | Function | Function to update the rating state variable (Required) | -
| maxStars | Number | Number of stars to show (Optional) | 5
| stars | Number | Filled stars to show or value of rating | 0 
| size | Number | Size of the star (Optional) | 25 
| color | String | Use the color you want to give to the rating stars  (Optional) | #FFDF00
| bordered | boolean | Set to true if you want bordered stars (Optional) | false
| onRating | Function | Callback function to execute after rating input is given (Optional) | -

For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-stock-star-rating)









