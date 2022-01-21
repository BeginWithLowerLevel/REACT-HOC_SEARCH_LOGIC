import React from "react";

function HOC(WrappedComponent, entity) {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        console.log(json);
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {
      let { data, term } = this.state;
      let filteredData = data.filter((data) => {
        if (entity === "users") {
          const { name } = data;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = data;
          return title.indexOf(term) >= 0;
        }
      });

      return (
        <div>
          <h2>{entity}</h2>
          <input
            type={"text"}
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
}

export default HOC;
