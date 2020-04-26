/* Local Storage */
/* ------------- */

/* 
  you can only access localStorage on the componentDidMount lifecycle hook. 
  Instead of calling localStorage on the constructor, you can define an empty 
  state, and update the state on componentDidMount when you can start to call 
  localStorage.
*/


// In a Class
// https://stackoverflow.com/questions/59540321/in-reactjs-and-nextjs-constructor-getting-reference-error-localstorage-is-not-d

constructor() { 
  super()
  this.state = {
    students: [],
    student: null,
    token: null,
    isLoggedIn: null
  };
}
componentDidMount() {
  this.setState({
    student:    localStorage.getItem('student') || {},
    token:      localStorage.getItem('token') || "",
    isLoggedIn: (localStorage.getItem('student' == null)) ? false : true
  });
}




/* In a Hook */

const [links, setLinks] = useState([]);

const getLinks = async () => {
  try {
    const res       = await wp.get('/menus/v1/menus/header');
    const linksData = await res.data;

    localStorage.setItem('myLinks', JSON.stringify(linksData.items));
    const myLinks = JSON.parse(localStorage.getItem('myLinks'));

    setLinks(myLinks);
  } 
  catch (error) {
    console.warn(error);
  }
}
useEffect(() => {
 getLinks();
}, [])



