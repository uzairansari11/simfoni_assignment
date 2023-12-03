export interface IAppState {
	loading: boolean;
	error: boolean;
	data: [];
}
const initialState :IAppState= {
  loading: false,
  error: false,
  data: []
}
export const productReducer = (state = initialState) => {
  
}