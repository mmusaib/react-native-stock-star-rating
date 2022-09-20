import {ViewStyle} from 'react-native';

export interface RatingProps {
        /**
    * State variable that will store the rating
    */
        rating: number,

        /**
    * Function to set the rating which will be stored in your local state
    */
        setRating: React.Dispatch<React.SetStateAction<undefined>>,

    /**
    * Max number of stars to show (Default 5)
    */
        maxStars?: number,

    /**
    * Rating stars to show (Default 0)
    */
        stars?: number,

    /**
    * Size of the stars
    */
        size?: number,

    /**
    * Color of the stars
    */
        color?: string,
    
    /**
    * If bordered stars are to be shown
    */
        bordered?: boolean,
    
    /**
    * Callback Function to call after the rating is given
    */
        onRating?: () => void,
}