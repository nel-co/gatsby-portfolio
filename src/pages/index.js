import React from 'react'
import Link from 'gatsby-link'

import PortfolioItems from '../components/PortfolioItems/PortfolioItems'
import HomeBlog from '../components/HomeBlog/HomeBlog'
import Greeting from '../components/Greeting/Greeting'
import Commits from '../components/Commits/Commits'

export default class IndexPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      commits: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.github.com/users/nel-co/events')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          commits: data.filter(d => d.type === 'PushEvent')
        })
      });
  }
  

  render() {
    return (
      <div className="main-container">
        <div className="hero-section">
          <h1>Hey I'm Nelson.</h1>
          <p>Code-Lover 💗, Pixel-Pusher 👾, Trouble-Shooter 🔫</p>
        </div>

        <div className="greeting">
          <Greeting />
        </div>
        <PortfolioItems />
        <HomeBlog data={this.props.data}/>
        {this.state.commits !== [] ? <Commits commits={this.state.commits} /> : null}
        
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;