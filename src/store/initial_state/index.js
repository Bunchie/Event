import  {header} from "../consts/consts_header";
import {footer} from "../consts/consts_footer";
import {main} from "../consts/consts_main";
import {error} from "../data_that_may_change/data_api_giphy/let_error_api_giphy";
import {data_api_giphy} from "../data_that_may_change/data_api_giphy/let_data_api_giphy";

export const initialState = {
    header: header,
    footer: footer,
    main: main,
    data_api_giphy: data_api_giphy,
    error: error
};
