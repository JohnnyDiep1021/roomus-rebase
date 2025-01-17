import React ,{useRef,useState}from 'react';
import PropTypes from 'prop-types';
Search.propTypes = {
    handlerSearch: PropTypes.func
};

Search.defaultProps = {
    handlerSearch: null
}
export default function Search(props) {

    const { handlerSearch } = props

    const [search, setSearch] = useState('')

    const delaySearchTextTimeOut = useRef(null)
    const onChangeText = (e) => {
        const value = e.target.value

        setSearch(value)

        console.log(search)

        if (handlerSearch){

            //Nếu người dùng đang nhập thì mình clear cái giây đó
            if (delaySearchTextTimeOut.current){
                clearTimeout(delaySearchTextTimeOut.current)
            }
            
            delaySearchTextTimeOut.current = setTimeout(() => {
                handlerSearch(value)
            }, 500)

        }
    }
  return (
    <div className="col-md-12">
    <input 
        className="form-control form-control-lg search-bar" 
        type="text" 
        placeholder="Enter Search Here!"
        onChange={onChangeText}
        value={search} />
</div>
  )
}
