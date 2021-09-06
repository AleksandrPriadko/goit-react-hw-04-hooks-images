import React, { Component, useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ApiGallery from "./components/APIGallery";
import ImageGallery from "./components/ImageGallery";

// export default function App(params) {
//   const [gallery, setGallery] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [isLoader, setIsLoader] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchGallery();
//   }, []);
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState.searchQuery !== this.state.searchQuery) {
//   //     this.fetchGallery();
//   //   }
//   // }

//   const FormSubmitHandler = (query) => setSearchQuery(query);

//   const fetchGallery = (event) => {
//     setIsLoader(!isLoader);

//     ApiGallery(searchQuery.name, page)
//       .then((hits) => {
//         setGallery((prevState) => [...prevState, hits]);
//         setPage((prevState) => prevState + 1);
//       })
//       .then(() => {
//         if (page > 1)
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: "smooth",
//           });
//       })
//       .catch((error) => setError(error))
//       .finally(() => setIsLoader(!isLoader));
//   };

//   return (
//     <>
//       <Searchbar onSubmit={FormSubmitHandler} />
//       <ImageGallery
//         gallery={gallery}
//         onFetchGallery={fetchGallery}
//         isLoader={isLoader}
//       />
//     </>
//   );
// }

class App extends Component {
  state = {
    gallery: [],
    searchQuery: "",
    page: 1,
    isLoader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  FormSubmitHandler = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      gallery: [],
      error: null,
    });
  };

  fetchGallery = (event) => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoader: true });

    ApiGallery(searchQuery.name, page)
      .then((hits) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .then(() => {
        if (page > 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };

  render() {
    const { gallery, isLoader } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.FormSubmitHandler} />
        <ImageGallery
          gallery={gallery}
          onFetchGallery={this.fetchGallery}
          isLoader={isLoader}
        />
      </>
    );
  }
}
export default App;
