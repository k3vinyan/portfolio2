import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import Nav from './src/components/Nav'
import Home from './src/components/Home'
import About from './src/components/About'
import Work from './src/components/Work'
import Contact from './src/components/Contact'

import './src/stylesheets/style.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state= {
            navIsVisible: true,
            containers: [],
            currentContainer: null,
            willChangeColor: true,
            index: 0,

        }

        this.handleNavButton  = this.handleNavButton.bind(this)
        this.handleScrollTo = this.handleScrollTo.bind(this)
        this.handleScrolling = this.handleScrolling.bind(this)
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScrolling)

        const containers = document.querySelectorAll('.change-color')

        this.setState({
            containers: containers
        })


        this.setState({
            currentContainer: containers[this.state.index]
        })

      
    }

    handleNavButton() {
        const { navIsVisible } = this.state
   
        if(navIsVisible) {
            this.setState({
                navIsVisible: false
            })
        } else {
            this.setState({
                navIsVisible: true
            })
        }   
    }

    updateIndex() {
        this.setState({ index: this.state.index + 1})
    }

    updateCurrentContainer() {
        this.setState({
            currentContainer: this.state.currentContainer[this.state.index]
        })
    }

    changeBottomColor() {
        this.updateIndex()
        this.updateCurrentContainer()
    }

    handleScrolling() {
        const firstProject = document.querySelector('.project')
       
        if(firstProject.getBoundingClientRect().bottom <= window.innerHeight) {
            if(this.state.navIsVisible) {
                this.setState({
                    navIsVisible: false
                })
            }
        } else {
            this.setState({
                navIsVisible: true
            })
        }
    }

    updateCurrentContainer() {
        this.setState({ currentContainer: this.state.containers[this.state.index] })
    }

    handleScrollTo(el) {
        el.preventDefault()
        const element = document.querySelector(el.target.hash)
        
        this.setState({
            displayNav: false
        })

        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }


    render() {
        const { navIsVisible } = this.state

        return (
            <div>
                <Nav 
                    handleScrollTo={this.handleScrollTo}
                    handleNavButton={this.handleNavButton}
                    navIsVisible={navIsVisible}
                />
                <Home />
                <Work /> 
                <About />
                <Contact />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


