import { Component } from "react";
export default class ErrorBoundary extends Component {
    static GetDerivedStateFromError(err){

    }
    componentDidCatch(error,errorInfo){

    }

    render() {
        return(
            this.props.children
        );
    }
}