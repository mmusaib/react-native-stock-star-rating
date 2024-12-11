declare module "react-native-stock-star-rating" {
  import { FC } from "react";
  import { ViewStyle } from "react-native";

  // The existing RatingProps interface
  export interface RatingProps {
    /**
     * State variable that will store the rating
     */
    rating: number;

    /**
     * Function to set the rating which will be stored in your local state
     */
    setRating: React.Dispatch<React.SetStateAction<number | null>>;

    /**
     * Max number of stars to show (Default 5)
     */
    maxStars?: number;

    /**
     * Rating stars to show (Default 0)
     */
    stars?: number;

    /**
     * Size of the stars
     */
    size?: number;

    /**
     * Color of the stars
     */
    color?: string;

    /**
     * If bordered stars are to be shown
     */
    bordered?: boolean;

    /**
     * Callback Function to call after the rating is given
     */
    onRating?: () => void;
  }

  // Declare both components
  export const Rating: FC<
    Omit<RatingProps, "rating" | "setRating" | "onRating">
  >;
  export const RatingInput: FC<RatingProps>;

  // If there are any other exports from the library, declare them here
  export const FilledStar: FC<{ size: number; color: string }>;
  export const EmptyStar: FC<{ size: number; color: string }>;
}
