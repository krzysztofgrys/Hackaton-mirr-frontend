import React from 'react';
import Loader from "../loader";
import Map from  '../map';

export default class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                address: {}
            },
        };
    }
    
    getTagsTable = (tags) => {
        if (!tags) return [];
        let tagsHTML = [];
        // Outer loop to create parent
        for (let i = 0; i < tags.length; i++) {
            //Inner loop to create children
           
            //Create the parent and add the children
            tagsHTML.push(<span className="badge badge-primary mb-3">{tags[i].name}</span>)
        }
        return tagsHTML
    };
    
    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const data = {
            api_token: user.api_token
        };
        const queryParamString = new URLSearchParams(data).toString();
        fetch(`${window.urlApi}posts/${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}?${queryParamString}`, {
            headers: new Headers({
                'Accept': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ post: data });
        });
    }
    
    render() {
        if (!this.state.post.id){
            return <Loader hide={this.state.post.id} />;
        }
        
        return <div className="w-100">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="mb-5">{this.state.post.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <svg className="bd-placeholder-img img-thumbnail w-100 mb-3" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                         aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200">
                        <title>A generic square placeholder image with a white border around it, making it resemble a
                            photograph taken with an old instant camera</title>
                        <rect width="100%" height="200px" fill="#868e96"></rect>
                        <text x="32%" y="50%" fill="#dee2e6" dy=".3em">Bezinteresowni</text>
                    </svg>
                    <p>Kontakt: <em>{this.state.post.name}</em></p>
                    <p><em>{this.state.post.phone_number}</em></p>
                    <p>Adres: <em>{this.state.post.address.city}, {this.state.post.address.street}</em></p>
                </div>
                <div className="col-sm-4">
                    {this.getTagsTable(this.state.post.tags)}
                    <p>{this.state.post.description}</p>
                    
                </div>
                <div className="col-sm-4">
                    <div className="bd-placeholder-img">
                        <Map/>
                    </div>
                </div>
            </div>
        </div>;
    }
}
