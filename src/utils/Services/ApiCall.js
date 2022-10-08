import axios from "axios"
import { setLoading, setPosts } from "../../helper/postSlice";

export const getPosts = async (searchKeyword, dispatch) => {
    const BASE__URL = `https://api.stackexchange.com/`;
    const URL = `${BASE__URL}2.3/search/advanced?page=1&order=desc&sort=creation&title=${searchKeyword}&site=stackoverflow`;

    const response = await axios.get(URL);
    dispatch(setPosts(response.data.items));
    dispatch(setLoading(false));
}